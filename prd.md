# Real Estate Company Website Specification

## Tech Stack
- [x] Next.js
- [x] JavaScript
- [x] TailwindCSS
- [ ] Server Actions
- [ ] MongoDB

## Authentication Pages
- [ ] Login
- [ ] Signup
- [ ] Forgot Password
- [ ] Reset Password
- [ ] Change Password
- [ ] Logout

## Public Pages
- [ ] Home
- [ ] About
- [ ] Contact
- [ ] Properties (Listing)
- [ ] View Property (Single Property)

## Protected Pages
### User Dashboard
- [ ] User Dashboard
- [ ] View My Properties
- [ ] Edit Profile

### Admin Dashboard
- [ ] Admin Dashboard
- [ ] Manage Properties
  - [ ] Add Property
  - [ ] Edit Property
  - [ ] Delete Property
  - [ ] View All Properties
- [ ] Manage Users

## User Roles & Permissions
1. Public User (Unauthenticated)
   - Can view public pages
   - Can search properties
   - Can contact agents

2. User (Authenticated)
   - All public user permissions
   - Can save favorite properties
   - Can submit inquiries
   - Can manage their profile

3. Admin
   - All user permissions
   - Can manage properties
   - Can manage user inquiries
   - Limited user management

4. Superadmin
   - All admin permissions
   - Full user management
   - System configuration
   - Role management

## Data Models

### User
- Name
- Email
- Password
- Role (user/admin/superadmin)
- Profile details

### Property
- Title
- Description
- Price
- Location
- Features
- Images
- Status (available/sold/rented)
- Created by
- Created at
- Updated at

## Implementation Notes
- Keep authentication simple and secure
- Use server actions for form submissions
- Implement responsive design
- Optimize images
- Implement proper error handling




