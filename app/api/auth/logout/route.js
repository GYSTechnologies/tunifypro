// app/api/auth/logout/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
  // In a stateless JWT setup, logout is handled client-side
  // You could maintain a blacklist of tokens if needed
  
  return NextResponse.json({
    success: true,
    message: 'Logged out successfully'
  })
}
