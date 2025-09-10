// app/api/booking/route.js
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
import Booking from '../../../models/Booking' // Adjust path to your models folder

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in your environment variables')
}

let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) return cachedDb
  const client = await mongoose.connect(MONGODB_URI)
  cachedDb = client
  return client
}

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

// POST /api/booking
export async function POST(request) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { name, email, phone, city, agreeToPrivacy } = body

    // Validate required fields
    if (!name || !email || !phone || !city || !agreeToPrivacy) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'All fields are required and privacy policy must be accepted' 
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email format' 
        },
        { status: 400 }
      )
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Phone number must be 10 digits' 
        },
        { status: 400 }
      )
    }

    // Validate city is from Dehradun area
    const allowedCities = [
      'Dehradun', 'Rishikesh', 'Haridwar', 'Mussoorie', 'Roorkee', 
      'Saharanpur', 'Herbertpur', 'Vikasnagar', 'Chakrata', 'Rajpur',
      'Clement Town', 'Patel Nagar', 'Hathibarkala', 'Selakui', 'Doiwala',
      'ISBT Area', 'Gandhi Road', 'Paltan Bazaar', 'Race Course', 'Dalanwala',
      'Karanpur', 'Jakhan', 'Mothrowala', 'Kaulagarh', 'Majra'
    ]

    if (!allowedCities.includes(city)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Service is currently available only in Dehradun and nearby areas' 
        },
        { status: 400 }
      )
    }

    // Create and save booking
    const booking = new Booking({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      city: city.trim(),
      agreeToPrivacy
    })

    await booking.save()

    // Send confirmation email to user
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Booking Confirmation - Audicorn',
      text: `Dear ${name},\n\nThank you for your booking. We will connect with you within 24 hours.\n\nBest regards,\nAudicorn Team`,
      html: `<p>Dear ${name},</p><p>Thank you for your booking. We will connect with you within 24 hours.</p><p>Best regards,<br>Audicorn Team</p>`
    }

    await transporter.sendMail(mailOptions)

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Booking submitted successfully! We will contact you within 24 hours.',
      bookingId: booking._id,
      data: {
        name: booking.name,
        email: booking.email,
        city: booking.city,
        status: booking.status
      }
    })

  } catch (error) {
    console.error('Booking submission error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// GET /api/booking (for admin to fetch bookings)
export async function GET(request) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit')) || 10

    const query = status ? { status } : {}
    const bookings = await Booking.find(query).limit(limit).sort({ createdAt: -1 })

    return NextResponse.json({
      success: true,
      bookings: bookings.map(booking => ({
        id: booking._id,
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        city: booking.city,
        status: booking.status,
        createdAt: booking.createdAt
      })),
      filters: { status, limit }
    })

  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
