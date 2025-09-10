// app/api/booking/status/route.js
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Booking from '../../../../models/Booking' // Adjust path to your models folder

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI

let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) return cachedDb
  const client = await mongoose.connect(MONGODB_URI)
  cachedDb = client
  return client
}

// PATCH /api/booking/status - Update booking status only
export async function PATCH(request) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { bookingId, status } = body

    // Validate required fields
    if (!bookingId || !status) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'bookingId and status are required' 
        },
        { status: 400 }
      )
    }

    // Validate bookingId format (MongoDB ObjectId)
    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid booking ID format' 
        },
        { status: 400 }
      )
    }

    // Validate status values (matching your schema)
    const allowedStatuses = ['pending', 'confirmed','booked', 'success', 'cancelled']
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
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { 
        status: status,
        updatedAt: new Date()
      },
      { 
        new: true, // Return updated document
        runValidators: true // Run schema validations
      }
    )

    // Check if booking exists
    if (!updatedBooking) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Booking not found' 
        },
        { status: 404 }
      )
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: `Booking status updated to ${status} successfully`,
      data: {
        id: updatedBooking._id,
        name: updatedBooking.name,
        email: updatedBooking.email,
        phone: updatedBooking.phone,
        city: updatedBooking.city,
        status: updatedBooking.status,
        updatedAt: updatedBooking.updatedAt
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
