'use client'
import { useState } from 'react'
import Image from 'next/image'

const Signia = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Styletto IX',
      category: 'ric',
      type: 'Receiver-In-Canal (RIC)',
      description: 'Keep the conversation flowing without compromising on style.',
      features: [
        'Slim and unique in seven different colors',
        'Natural, effortless conversations',
        'Instant comfort and clarity',
        'Rechargeable and with a wireless charging case',
        'Future-proof connectivity',
        'Personalized control via app'
      ],
      suitableFor: 'Mild to severe hearing loss',
      connectivity: 'iOS & Android streaming',
      battery: 'Rechargeable Lithium-ion',
      colors: ['Deep Black', 'Sandy Brown', 'Silver Grey'],
      price: 'Premium',
      image: '/home/signia/signiaImage1.webp'
    },
    {
      id: 2,
      name: 'Pure Charge&Go IX',
      category: 'ric',
      type: 'Receiver-In-Canal (RIC)',
      description: 'Augmented Xperience with split processing for outstanding speech clarity and immersive soundscape in any situation.',
      features: [
        'Natural, effortless conversations',
        'Instant comfort and clarity',
        'Rechargeable and with a wireless charging case',
        'Future-proof connectivity',
        'Personalized control via app',
        'Optional T-coil'
      ],
      suitableFor: 'Mild to severe hearing loss',
      connectivity: 'MFi & ASHA streaming',
      battery: 'Rechargeable with fast charging',
      colors: ['Deep Black', 'Sandy Brown', 'Silver Grey', 'Rose Gold'],
      price: 'Premium',
      image: '/home/signia/signiaImage2.webp'
    },
    {
      id: 3,
      name: 'Silk Charge&Go IX',
      category: 'ric',
      type: 'Receiver-In-Canal (RIC)',
      description: "The world's only instant fit CIC with Binaural OneMic Directionality 2.0, is now rechargeable",
      features: [
        'Immediate comfort and enhancement',
        'Ultra discreet',
        'Power to last',
        'Advanced technology ensures crisp, clear focus in noise',
        'Control on your terms'
      ],
      suitableFor: 'Mild to moderate hearing loss',
      connectivity: 'Bluetooth streaming',
      battery: 'Rechargeable',
      colors: ['Cosmic Copper', 'Silver', 'Rose Gold'],
      price: 'Premium',
      image: '/home/signia/signiaImage3.webp'
    },

    {
      id: 5,
      name: 'Active Pro IX',
      category: 'earbud',
      type: 'Earbud Style',
      description: 'An earbud like any other. With high-performance hearing technology like no other.',
      features: [
        'Comfortable earbud fit',
        'Natural, effortless conversations',
        'Instant comfort and clarity',
        'Rechargeable and with a wireless charging case',
        'Enhanced connectivity',
        'Personalized control via app'
      ],
      suitableFor: 'Mild to severe hearing loss',
      connectivity: 'MFi streaming',
      battery: 'Rechargeable with portable case',
      colors: ['Deep Black', 'Snow White'],

      image: '/home/signia/signiaImage10.webp'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'ric', name: 'RIC Hearing Aids', count: products.filter(p => p.category === 'ric').length },
    { id: 'bte', name: 'BTE Hearing Aids', count: products.filter(p => p.category === 'bte').length },
    { id: 'ite', name: 'ITE Hearing Aids', count: products.filter(p => p.category === 'ite').length },
    { id: 'earbud', name: 'Earbud Style', count: products.filter(p => p.category === 'earbud').length },
    { id: 'cic', name: 'CIC Hearing Aids', count: products.filter(p => p.category === 'cic').length }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const getPriceColor = (price) => {
    switch (price) {
      case 'Premium': return 'text-red-600 bg-red-50'
      case 'Mid to Premium': return 'text-orange-600 bg-orange-50'
      case 'Mid-range': return 'text-blue-600 bg-blue-50'
      case 'Entry to Mid-range': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#f97316]">Signia</span> Hearing Aids Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {` Discover Signia's innovative hearing aid technology designed to help you Be Brilliant™ 
            in every conversation and situation.`}
          </p>

          {/* Brand Promise */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">What does it take to Be Brilliant™?</h2>
            <p className="text-lg opacity-90">
              At Signia, our passion lies in creating life-enhancing technologies. With Integrated Xperience,
              we empower you to contribute, be heard, and thrive in even the toughest real-life conversations.
            </p>
          </div>
        </div>

    

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

              <div className="   ">
                <Image src={product.image} alt="alt" className='w-full object-cover' width={250} height={80} />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  {/* <p className="text-sm text-[#f97316] font-semibold">{product.type}</p> */}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
               
                  </div>
                </div>

            

                {/* Action Button
                <button className="w-full bg-[#f97316] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Signia Technology Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Augmented Xperience</h3>
              <p className="text-gray-600">Split processing for outstanding speech clarity with immersive soundscape</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RealTime Conversation Enhancement</h3>
              <p className="text-gray-600">Advanced technology for better group conversation understanding</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Signia App</h3>
              <p className="text-gray-600">Complete control and AI-powered assistance for optimal hearing experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signia

