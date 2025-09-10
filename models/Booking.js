// models/Booking.js - Mongoose Schema Model
import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name must be at most 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[0-9]{10}$/, 'Phone number must be 10 digits']
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  agreeToPrivacy: {
    type: Boolean,
    required: [true, 'You must agree to the privacy policy']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed',"booked",'success', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// Update timestamp on save
BookingSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
})

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
