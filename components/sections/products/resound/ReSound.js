'use client'
import Image from 'next/image'
import { useState } from 'react'

const ReSound = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: 'ReSound Nexia',
      description: 'Enjoying conversations can be difficult when everyday life is filled with noise. ReSound Nexia™ starts a new era for hearing technology, combining proven performance with cutting-edge features that revolutionise the way we experience sound.',
      features: [
        'Dual-chip AI processing',
        'Bluetooth LE Audio with Auracast',
        '30 hours battery life',
        'Intelligent Focus technology',
        'Natural sound experience',
        '10-minute quick charge (2.5 hours use)'
      ],
      image: '/home/resound/resound4.jpg',
    },
    {
      id: 2,
      name: 'ReSound OMNIA',
      description: 'You can hear all the details you couldn’t before in noisy situations. Automatically tune in to what’s happening around you, from any direction. You can also choose custom-made ReSound OMNIA™ hearing aids. Select our smallest style yet that hides in your ears or rechargeable designs that look like earbuds.',
      features: [
        'Bluetooth LE Audio',
        'Auracast broadcast technology',
        'Spatial Sense technology',
        'Binaural Directionality III',
        'Front Focus feature',
        'ReSound Smart 3D app'
      ],
      image: '/home/resound/reseundimg1.jpg',
    },
    {
      id: 3,
      name: 'ReSound ENZO Q',
      description: 'So much more than just powerful, our complete solution for severe-to-profound hearing loss offers crystal clear, comfortable, high-quality sound; even greater connectivity, direct streaming, and personalisation; and online, real-time support.So much more than just powerful, our complete solution for severe-to-profound hearing loss offers crystal clear, comfortable, high-quality sound; even greater connectivity, direct streaming, and personalisation; and online, real-time support.',
      features: [
        'Improved speech understanding',
        'Organic Hearing technology',
        'Check My Fit feature',
        'All Access Directionality',
        'Ultra Focus activation',
        'Direct streaming capability'
      ],
            image: '/home/resound/resoundimg2.jpg',

    },
    {
      id: 4,
      name: 'ReSound Key',
      description: 'Welcome to great hearing. Meet your everyday hearing essentials – hearing aids designed to work comfortably and reliably with your own ears. They give you the confidence and guidance to grow with your experiences and hear your best every day.',
      features: [
        'M&RIE (Microphone & Receiver-In-Ear)',
        'Natural sound collection',
        'Improved wind noise handling',
        'Enhanced localization',
        'Ultra Focus technology',
        '30 hours battery life'
      ],
     image: '/home/resound/rsoundimg3.jpg',

    },
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'ric', name: 'RIC Models', count: products.filter(p => p.category === 'ric').length },
    { id: 'bte', name: 'BTE Models', count: products.filter(p => p.category === 'bte').length },
    { id: 'ite', name: 'ITE Models', count: products.filter(p => p.category === 'ite').length }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const getLevelColor = (level) => {
    switch (level) {
      case 'Flagship': return 'text-purple-600 bg-purple-50'
      case 'Advanced': return 'text-blue-600 bg-blue-50'
      case 'Essential': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getPriceColor = (price) => {
    switch (price) {
      case 'Premium': return 'text-red-600 bg-red-50'
      case 'Mid to Premium': return 'text-orange-600 bg-orange-50'
      case 'Mid-range': return 'text-blue-600 bg-blue-50'
      case 'Entry to Mid-range': return 'text-green-600 bg-green-50'
      case 'Entry-level': return 'text-teal-600 bg-teal-50'
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
                <span className="text-[#f97316]">ReSound</span> Hearing Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Smart hearing aids and wireless accessories that make it easier and more comfortable
                than ever to access personalized, natural sound.
              </p>
            </div>
          </div>

          {/* Brand Promise */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Rediscover Your World</h2>
            <p className="text-lg opacity-90">
              ReSound has been a pioneer in building innovative hearing solutions. With advanced AI technology,
              Bluetooth LE Audio, and natural sound processing, we help you hear more, do more, and be more.
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

        {/* Technology Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">ReSound Innovation Leaders</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">M&RIE Technology</h3>
              <p className="text-gray-600">Revolutionary Microphone & Receiver-In-Ear design for natural sound collection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bluetooth LE Audio</h3>
              <p className="text-gray-600">Industry-first connectivity with Auracast broadcast audio technology</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart 3D App</h3>
              <p className="text-gray-600">Complete control and remote adjustments with professional support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReSound
