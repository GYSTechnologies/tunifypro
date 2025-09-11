import mongoose from 'mongoose';

const OfflineEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: String,
    required: true,
    trim: true
  },
  place: {
    type: String,
    required: false,
    trim: true
  },
  address: {
    type: String,
    required: false,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.models.OfflineEnquiry || mongoose.model('OfflineEnquiry', OfflineEnquirySchema);
