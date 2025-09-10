// app/api/auth/verify/route.js
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import Admin from '../../../../models/Admin'

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key'
const MONGODB_URI = process.env.MONGODB_URI

let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) return cachedDb
  const client = await mongoose.connect(MONGODB_URI)
  cachedDb = client
  return client
}

export async function POST(request) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token required' },
        { status: 400 }
      )
    }

    // Verify JWT token
    const decoded = jwt.verify(token, JWT_SECRET)
    
    await connectToDatabase()
    
    // Find admin to ensure they still exist and are active
    const admin = await Admin.findById(decoded.adminId).select('-password')
    
    if (!admin || !admin.isActive) {
      return NextResponse.json(
        { success: false, message: 'Invalid token' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid token' },
      { status: 401 }
    )
  }
}
