'use client'
import Image from 'next/image'
import { useState } from 'react'

const Widex = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Widex Sound Assist™',

      description: 'Widex Sound Assist™ connects to your hearing aids to help you hear your life better.',
      features: [
        'Battery runtime: 10 hrs (mixed use)',
        'Full charge: 3 hrs',
        'Bluetooth protocol: version 4.2',
        'Li-ion battery',
        'Micro USB power supply',
        'Small size: 43x43x16 mm',
        'Lightweight: 32 grams '
      ],
      suitableFor: 'Mild to severe hearing loss',
      connectivity: 'Bluetooth Classic & LE Audio',
      battery: 'Rechargeable Lithium-ion',
      colors: ['Charcoal Grey', 'Silver Grey', 'Champagne', 'Dark Cherry'],
      price: 'Premium',
      image: '/home/widex/widexImage1.jpg',
      highlights: ['Latest Technology', 'AI Features', 'Premium Sound']
    },

  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'ric', name: 'RIC Models', count: products.filter(p => p.category === 'ric').length },
    { id: 'bte', name: 'BTE Models', count: products.filter(p => p.category === 'bte').length },
    { id: 'ite', name: 'ITE Models', count: products.filter(p => p.category === 'ite').length },
    { id: 'cic', name: 'CIC Models', count: products.filter(p => p.category === 'cic').length }
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
      case 'Entry-level': return 'text-green-600 bg-green-50'
      case 'Entry to Mid-range': return 'text-teal-600 bg-teal-50'
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
                <span className="text-[#f97316]">Widex</span> Hearing Aids
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                {`   Experience pure, natural sound with Widex's innovative hearing technology. 
                Designed for clarity in every environment and exceptional comfort for daily use.`}
              </p>
            </div>
          </div>

          {/* Brand Promise */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Pure Sound. Natural Hearing.</h2>
            <p className="text-lg opacity-90">
              Widex hearing aids prioritize pure, natural sound quality with innovative PureSound technology
              and zero-delay processing for the most natural hearing experience possible.
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

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.highlights.map((highlight, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
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

 
      </div>

    </section>
  )
}

export default Widex
