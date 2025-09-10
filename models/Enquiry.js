// models/Enquiry.js (Mongoose Schema)
import mongoose from 'mongoose'

const EnquirySchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  pincode: { type: String, required: true, trim: true },
  brand: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed','booked',"delivered",'success', 'cancelled'],
    default: 'pending'
  },
  productType: { type: String, required: true }, // New field added
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema)
