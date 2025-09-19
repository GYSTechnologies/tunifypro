import { NextResponse } from 'next/server'

// GET /api/cities
export async function GET() {
  try {
    // Cities and areas in and around Dehradun
    const dehradunCities = [
      'Dehradun',
      'Haridwar',
      'Chamoli',
      'Rudraprayag',
      'Tehri Garhwal',
      'Uttarkashi',
      'Pauri Garhwal',
      'Nainital',
      'Almora',
      'Udham Singh Nagar',
      'Pithoragarh',
      'Bageshwar',
      'Champawat'
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
