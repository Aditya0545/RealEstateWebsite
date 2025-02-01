'use server'

import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function registerUser(formData) {
  try {
    await connectDB();
    
    const { name, email, password } = Object.fromEntries(formData);
    
    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'user'
    });

    // Set session cookie
    cookies().set('user', JSON.stringify({
      id: user._id,
      email: user.email,
      role: user.role
    }), {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}

export async function loginUser(formData) {
  try {
    await connectDB();
    
    const { email, password } = Object.fromEntries(formData);
    
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    cookies().set('user', JSON.stringify({
      id: user._id,
      email: user.email,
      role: user.role
    }), {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
    });

    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}

export async function logoutUser() {
  try {
    cookies().delete('user');
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
} 