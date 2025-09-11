import { NextRequest, NextResponse } from 'next/server';

import OfflineEnquiry from '@/models/OfflineEnquiry';
import dbConnect from '@/libs/dbConnect';

export async function POST(request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, phone, pincode, place, address } = body;

    // Validation
    if (!name || !phone || !pincode) {
      return NextResponse.json(
        { error: 'Name, phone, and pincode are required fields.' },
        { status: 422 }
      );
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Phone number must be exactly 10 digits.' },
        { status: 422 }
      );
    }

    // Validate pincode (6 digits)
    if (!/^\d{6}$/.test(pincode)) {
      return NextResponse.json(
        { error: 'Pincode must be exactly 6 digits.' },
        { status: 422 }
      );
    }

    // Validate email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 422 }
      );
    }

    // Create new enquiry
    const enquiry = new OfflineEnquiry({
      name,
      email: email || undefined,
      phone,
      pincode,
      place: place || undefined,
      address: address || undefined
    });

    await enquiry.save();

    return NextResponse.json(
      { 
        message: 'Enquiry submitted successfully!',
        enquiryId: enquiry._id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating enquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const enquiries = await OfflineEnquiry.find().sort({ createdAt: -1 });
    return NextResponse.json({ enquiries });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch enquiries.' },
      { status: 500 }
    );
  }
}
