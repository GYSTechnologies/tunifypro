'use client'
import Image from 'next/image'
import { useState } from 'react'

const RexSound = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Rex Sound Premium 8 Channel',
      description: 'Premium pocket-style hearing aid with 8-channel processing for clear sound amplification and noise reduction.',
      features: [
        '8-channel sound processing',
        'Volume control wheel',
        'Noise reduction technology',
        'Long battery life (180+ hours)',
        'Comfortable earphone design',
        'Portable pocket size'
      ],
      image: '/rexsound/premium-8ch.jpg',
    },
    {
      id: 2,
      name: 'Rex Sound BTE D11',
  
      description: 'Small BTE hearing aid with 6-channel processing, designed for comfortable wear and reliable performance.',
      features: [
        '6-channel digital processing',
        'Small, lightweight design',
        'Easy volume adjustment',
        'Feedback cancellation',
        'Wind noise reduction',
        'Durable construction'
      ],
      image: '/rexsound/bte-d11.jpg',
    },
    {
      id: 3,
      name: 'Rex Sound Z-176 Pocket Model',
      description: 'Reliable pocket-style hearing aid with essential features for everyday hearing assistance at an affordable price.',
      features: [
        '2-channel sound processing',
        'Simple volume control',
        'Clear sound amplification',
        'Sturdy pocket design',
        'Easy-to-use controls',
        'Value for money'
      ],
      image: '/rexsound/z176.jpg',
    },
    {
      id: 4,
      name: 'Rex Sound Super Power Pocket',
      description: 'High-power pocket hearing aid with enhanced amplification for moderate to severe hearing loss.',
      features: [
        'Super power amplification',
        '3-pin connectivity',
        'Enhanced volume range',
        'Telephone button feature',
        'Robust construction',
        'Long-lasting performance'
      ],
      image: '/rexsound/super-power.jpg',
    },
    {
      id: 5,
      name: 'Rex Sound Mini BTE',
      description: 'Compact behind-the-ear hearing aid with essential features for comfortable daily use.',
      features: [
        'Compact BTE design',
        '4-channel processing',
        'Volume wheel control',
        'Lightweight construction',
        'Easy maintenance',
        'Good value proposition'
      ],
      image: '/rexsound/mini-bte.jpg',
    },
    {
      id: 6,
      name: 'Rex Sound Digital Pocket Pro',
      description: 'Advanced digital pocket hearing aid with smart noise reduction and automatic gain control.',
      features: [
        'Digital signal processing',
        'Automatic gain control',
        'Smart noise reduction',
        'Multiple program settings',
        'LED battery indicator',
        'Premium build quality'
      ],
      image: '/rexsound/digital-pro.jpg',
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'pocket', name: 'Pocket Style', count: products.filter(p => p.category === 'pocket').length },
    { id: 'bte', name: 'BTE Models', count: products.filter(p => p.category === 'bte').length }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const getLevelColor = (level) => {
    switch(level) {
      case 'Advanced': return 'text-blue-600 bg-blue-50'
      case 'Basic': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-[#f97316]">Rex Sound</span> Hearing Aids
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Affordable hearing solutions with reliable performance. 
                Quality hearing aids that make better hearing accessible to everyone.
              </p>
            </div>
          </div>
          
          {/* Brand Promise */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Affordable Hearing Solutions for Everyone</h2>
            <p className="text-lg opacity-90">
              {`Rex Sound believes that quality hearing aids should be accessible to all. 
              Our range of reliable, easy-to-use hearing aids offers essential features 
              at prices that won't break the bank.`}
            </p>
          </div>
        </div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m-7.072 0a5 5 0 010-7.072m7.072 0L12 12m3.536-3.536L12 12m0 0l-3.536 3.536M12 12l3.536-3.536" />
                    </svg>
                  </div>
                </div>
                
                {/* Level Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(product.level)}`}>
                  {product.level}
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-green-600 bg-green-50">
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-[#f97316] font-semibold">{product.type}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Propositions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Rex Sound?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Quality hearing aids starting from just ₹200, making better hearing accessible to everyone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Performance</h3>
              <p className="text-gray-600">Proven technology with long battery life and durable construction for everyday use</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple controls and user-friendly design make our hearing aids perfect for first-time users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RexSound
