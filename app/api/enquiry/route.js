// app/api/enquiry/route.js (Next.js API Route)
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Enquiry from '../../../models/Enquiry' // Adjust path

const MONGODB_URI = process.env.MONGODB_URI

let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) return cachedDb
  const client = await mongoose.connect(MONGODB_URI)
  cachedDb = client
  return client
}

// POST /api/enquiry
export async function POST(request) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { email, phone, pincode, brand, productType } = body

    // Basic validation
    if (!email || !phone || !pincode || !brand || !productType) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 })
    }

    const enquiry = new Enquiry({ email, phone, pincode, brand, productType })
    await enquiry.save()

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Enquiry submission error:', error)
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
// GET /api/enquiry - Fetch all enquiries
export async function GET(request) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit')) || 100
    const page = parseInt(searchParams.get('page')) || 1
    const skip = (page - 1) * limit

    // Fetch enquiries with pagination
    const enquiries = await Enquiry.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

    // Get total count for pagination
    const total = await Enquiry.countDocuments()

    return NextResponse.json({
      success: true,
      enquiries: enquiries.map(enquiry => ({
        id: enquiry._id.toString(),
        email: enquiry.email,
        phone: enquiry.phone,
        pincode: enquiry.pincode,
        brand: enquiry.brand,
        productType: enquiry.productType,
        createdAt: enquiry.createdAt
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Error fetching enquiries:', error)
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}