// app/api/auth/login/route.js
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import Admin from '../../../../models/Admin'

const MONGODB_URI = process.env.MONGODB_URI
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key'

let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) return cachedDb
  const client = await mongoose.connect(MONGODB_URI)
  cachedDb = client
  return client
}

export async function POST(request) {
  try {
    await connectToDatabase()

    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find admin user
    let admin = await Admin.findOne({ email: email.toLowerCase() })

    // If admin doesn't exist and this is the default admin, create it
    if (!admin && email.toLowerCase() === 'tunifypro@admin.com') {
      admin = new Admin({
        email: 'tunifypro@admin.com',
        password: 'Tunifypro@123',
        name: 'Tunifypro Admin'
      })
      await admin.save()
    }

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Check if account is active
    if (!admin.isActive) {
      return NextResponse.json(
        { success: false, message: 'Account is deactivated' },
        { status: 401 }
      )
    }

    // Compare password
    const isPasswordValid = await admin.comparePassword(password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Update last login
    admin.lastLogin = new Date()
    await admin.save()

    // Generate JWT token
    const token = jwt.sign(
      { 
        adminId: admin._id,
        email: admin.email,
        role: admin.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
