// app/api/enquiry/status/route.js
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Enquiry from '../../../../models/Enquiry' // Adjust path

const MONGODB_URI = process.env.MONGODB_URI

let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) return cachedDb
  const client = await mongoose.connect(MONGODB_URI)
  cachedDb = client
  return client
}

// PATCH /api/enquiry/status - Update enquiry status only
export async function PATCH(request) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { enquiryId, status } = body

    // Validate required fields
    if (!enquiryId || !status) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'enquiryId and status are required' 
        },
        { status: 400 }
      )
    }

    // Validate enquiryId format (MongoDB ObjectId)
    if (!mongoose.Types.ObjectId.isValid(enquiryId)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid enquiry ID format' 
        },
        { status: 400 }
      )
    }

    // Validate status values (matching your schema)
    const allowedStatuses = ['pending', 'confirmed', 'booked', 'delivered', 'success', 'cancelled']
    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Invalid status. Allowed values: ${allowedStatuses.join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Find and update only the status field
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      enquiryId,
      { 
        status: status,
        updatedAt: new Date()
      },
      { 
        new: true, // Return updated document
        runValidators: true // Run schema validations
      }
    )

    // Check if enquiry exists
    if (!updatedEnquiry) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Enquiry not found' 
        },
        { status: 404 }
      )
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: `Enquiry status updated to ${status} successfully`,
      data: {
        id: updatedEnquiry._id,
        email: updatedEnquiry.email,
        phone: updatedEnquiry.phone,
        pincode: updatedEnquiry.pincode,
        brand: updatedEnquiry.brand,
        productType: updatedEnquiry.productType,
        status: updatedEnquiry.status,
        createdAt: updatedEnquiry.createdAt
      }
    })

  } catch (error) {
    console.error('Status update error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong while updating status. Please try again.' 
      },
      { status: 500 }
    )
  }
}
