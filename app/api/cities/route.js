import { NextResponse } from 'next/server'

// GET /api/cities
export async function GET() {
  try {
    // Cities and areas in and around Dehradun
    const dehradunCities = [
      'Dehradun',
      'Rishikesh',
      'Haridwar',
      'Mussoorie',
      'Roorkee',
      'Saharanpur',
      'Herbertpur',
      'Vikasnagar',
      'Chakrata',
      'Rajpur',
      'Clement Town',
      'Patel Nagar',
      'Hathibarkala',
      'Selakui',
      'Doiwala',
      'ISBT Area',
      'Gandhi Road',
      'Paltan Bazaar',
      'Race Course',
      'Dalanwala',
      'Karanpur',
      'Jakhan',
      'Mothrowala',
      'Kaulagarh',
      'Majra'
    ]

    // Sort cities alphabetically
    const sortedCities = dehradunCities.sort()

    return NextResponse.json({
      success: true,
      cities: sortedCities,
      count: sortedCities.length
    })
  } catch (error) {
    console.error('Error fetching cities:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
