import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  images: [{
    type: String,
  }],
  propertyType: {
    type: String,
    required: true,
    enum: ['house', 'apartment', 'condo', 'land']
  },
  status: {
    type: String,
    required: true,
    enum: ['for-sale', 'for-rent', 'sold', 'rented']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
export default Property; 