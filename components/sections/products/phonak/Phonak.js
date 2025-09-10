'use client'
import Image from 'next/image'
import { useState } from 'react'

const Phonak = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Audéo Sphere Infinio',
      description: 'Pediatric hearing aids designed specifically for children with advanced features and colorful designs.',
      features: [
        'Compatible with Phonak Audéo™ R Infinio',
        'Universal connectivity, allowing seamless integration with Bluetooth® devices',
        'New powerful ERA, our ultra-responsive chip, providing uninterrupted handsfree calls'
      ],
      image: '/home/phonak/ph1.avif',
    },
    {
      id: 2,
      name: 'Audéo R Infinio',

      description: 'AI-powered hearing aids with SmartSpeech Technology for enhanced speech understanding in challenging environments.',
      features: [
        'Brand new ultra-responsive ERA chip brings a new level of digital signal processing for exceptional sound quality',
        'Better speech understanding and reduced listening effort, resulting in feeling less tired at the end of the day', ' Market-leading universal connectivity',
        'Compatible with CROS for unilateral hearing loss'
      ],
      image: '/home/phonak/ph2.avif',
    },
    {
      id: 3,
      name: 'Virto I-10 NW O',
      description: 'World\'s first waterproof rechargeable hearing aid with IP68 rating for active lifestyles.',
      features: [
        '   No one-size-fits all. Customized for you',
        'Feel less fatigued at the end of the day',
        'The preferred first fit for consumers',
        'Waterproof IP68 rating'
      ],
      image: '/home/phonak/ph3.avif',
    },
    {
      id: 4,
      name: 'Audéo Life Lumity',
      description: 'Most powerful hearing aids for severe to profound hearing loss with robust design and advanced connectivity.',
      features: [
        ' Compatible with Phonak Audéo™ R Infinio',
        'Universal connectivity, allowing seamless integration with Bluetooth® devices',
        'New powerful ERA, our ultra-responsive chip, providing uninterrupted handsfree calls'
      ],
      image: '/home/phonak/ph4.avif',
    },
    {
      id: 5,
      name: 'Naída Lumity',
      description: 'Custom-fitted in-the-ear hearing aids with invisible design and premium sound quality.',
      features: [
        '    Priority in speech understanding with SmartSpeech Technology',
        'Featuring universal connectivity with Bluetooth® enabled devices, such as smartphones, TVs, tablets and laptops',
        'A personalized listening experience with myPhonak, empowering you to take control of your hearing aids'
      ],
      image: '/home/phonak/ph5.avif',
    },
    {
      id: 6,
      name: 'Naída Lumity',
      description: 'Phonak Naída Lumity is our most powerful hearing device, robust and reliable, allowing you to embrace all opportunities and navigate conversations with confidence.',
      features: [
        '    Priority in speech understanding with SmartSpeech Technology',
        'Featuring universal connectivity with Bluetooth® enabled devices, such as smartphones, TVs, tablets and laptops',
        'A personalized listening experience with myPhonak, empowering you to take control of your hearing aids'
      ],
      image: '/home/phonak/ph6.avif',
    },
    {
      id: 8,
      name: 'Sky Lumity',
      description: 'Phonak Sky Lumity gives children a hearing solution for every step of their journey. Incorporating our state-of-the-art Phonak SmartSpeech™ Technology, Sky prioritizes speech understanding. Feel confident that your child has the hearing solution that allows them to thrive and achieve their full',
      features: [
        '   Prioritizes speech understanding in quiet, in noise, at a distance and on the go',
        'Universal connectivity with Bluetooth® ',
        'Compatibility with Roger™ microphones'],
      image: '/home/phonak/ph10.avif',
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'ric', name: 'RIC Models', count: products.filter(p => p.category === 'ric').length },
    { id: 'bte', name: 'BTE Models', count: products.filter(p => p.category === 'bte').length },
    { id: 'ite', name: 'ITE Models', count: products.filter(p => p.category === 'ite').length },
    { id: 'iic', name: 'Invisible Models', count: products.filter(p => p.category === 'iic').length },
    { id: 'pediatric', name: 'Pediatric', count: products.filter(p => p.category === 'pediatric').length }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const getLevelColor = (level) => {
    switch (level) {
      case 'Flagship': return 'text-purple-600 bg-purple-50'
      case 'Advanced': return 'text-blue-600 bg-blue-50'
      case 'Essential': return 'text-green-600 bg-green-50'
      case 'Specialty': return 'text-orange-600 bg-orange-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

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
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-[#f97316]">Phonak</span> Hearing Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                {`  Experience life without limits with Phonak's innovative hearing aids. 
                Advanced technology for superior speech understanding in any environment.`}
              </p>
            </div>
          </div>

          {/* Brand Promise */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{`Life is on. We're here to help you hear it.`}</h2>
            <p className="text-lg opacity-90">
              {`Since 1947, Phonak has been passionate about creating hearing solutions that change people's lives 
              to thrive socially and emotionally. We offer the broadest portfolio for every hearing loss, 
              lifestyle and budget.`}
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
                  <p className="text-sm text-[#f97316] font-semibold">{product.type}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Phonak Innovation Excellence</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Technology</h3>
              <p className="text-gray-600">DEEPSONIC chip with real-time AI processing for superior speech understanding</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SmartSpeech Technology</h3>
              <p className="text-gray-600">Advanced algorithms for enhanced speech clarity in challenging environments</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Universal Connectivity</h3>
              <p className="text-gray-600">Seamless connection to smartphones, TVs, and other Bluetooth devices</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Phonak
