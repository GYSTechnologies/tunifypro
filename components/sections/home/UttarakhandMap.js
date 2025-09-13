'use client'
import Image from 'next/image'
import React from 'react'

const UttarakhandMap = () => {
  // Service information for different districts
  const garhwalServices = [
    { district: 'Dehradun', services: ['Main Service Center', 'All Premium Brands', 'Free Hearing Tests', '24/7 Support'] },
    { district: 'Haridwar', services: ['Service Center', 'Hearing Aid Repairs', 'Home Visits', 'Consultation'] },
    { district: 'Chamoli', services: ['Mobile Service Unit', 'Emergency Support', 'Scheduled Visits'] },
    { district: 'Rudraprayag', services: ['Partner Clinic', 'Telehealth Support', 'Monthly Camps'] },
    { district: 'Tehri Garhwal', services: ['Service Point', 'Follow-up Care', 'Battery Supply'] },
    { district: 'Uttarkashi', services: ['Seasonal Camps', 'Remote Support', 'Basic Repairs'] },
    { district: 'Pauri Garhwal', services: ['Service Center', 'Home Delivery', 'Free Tests'] }
  ]
  
  const kumaonServices = [
    { district: 'Nainital', services: ['Full Service Center', 'Tourist Support', 'All Brands Available'] },
    { district: 'Almora', services: ['Regional Center', 'Training Hub', 'Advanced Fittings'] },
    { district: 'Udham Singh Nagar', services: ['Major Hub', 'Corporate Packages', 'Industrial Support'] },
    { district: 'Pithoragarh', services: ['Border Support', 'Emergency Care', 'Basic Services'] },
    { district: 'Bageshwar', services: ['Weekly Visits', 'Consultation', 'Maintenance'] },
    { district: 'Champawat', services: ['Monthly Camps', 'Basic Care', 'Referrals'] }
  ]

  const serviceStats = [
    { label: 'Service Centers', value: '15+' },
    { label: 'Premium Brands', value: '5' },
    { label: 'Districts Covered', value: '13' },
    { label: 'Years Experience', value: '10+' }
  ]

  const availableBrands = ['Signia', 'Widex', 'Phonak', 'ReSound', 'REX Sound']

  return (
    <section className=" bg-[#FBF9D1]  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Services Across <span className="text-[#f97316]">Uttarakhand</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            TunifyPro brings world-class hearing solutions directly to your doorstep. 
            Explore our comprehensive services available in every district of Uttarakhand.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-12">
          
          {/* Map Image */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
              <Image 
                src="/home/map.png"
                width={400}
                height={250}
                alt="TunifyPro service coverage map across Uttarakhand districts"
                className=" h-[250px] object-fit rounded-xl shadow-md"
              />
              
              {/* Map Caption */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  TunifyPro Service Network - Covering All 13 Districts
                </p>
              </div>
            </div>
          </div>

          {/* Service Information Panel */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Hearing Care</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                From the bustling streets of Dehradun to the serene valleys of Uttarkashi, 
                TunifyPro ensures quality hearing care reaches every corner of Uttarakhand.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our network includes permanent centers, mobile units, and partner clinics 
                to provide uninterrupted service across diverse terrains and communities.
              </p>
            </div>

            {/* Service Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceStats.map((stat, index) => (
                <div key={index} className="bg-orange-300/10 rounded-lg p-4 border-2 border-orange-400/30">
                  <div className="text-2xl font-bold text-center text-[#f97316]">{stat.value}</div>
                  <div className="text-sm text-center font-semibold text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Available Brands */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Premium Brands Available</h4>
              <div className="flex flex-wrap gap-2">
                {availableBrands.map((brand, index) => (
                  <span key={index} className="bg-[#f97316] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* District Services Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Garhwal Division Services */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-bold text-gray-900">Garhwal Division Services</h4>
            </div>
            <div className="space-y-4">
              {garhwalServices.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">{item.district}</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kumaon Division Services */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h4 className="text-xl font-bold text-gray-900">Kumaon Division Services</h4>
            </div>
            <div className="space-y-4">
              {kumaonServices.map((item, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-gray-900 mb-2">{item.district}</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="bg-gradient-to-r from-[#f97316] to-orange-400 rounded-2xl p-8 text-white mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">What We Offer Across All Districts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Hearing Tests</h4>
                <p className="text-sm opacity-90">Comprehensive audiological assessments at your doorstep</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Expert Fitting</h4>
                <p className="text-sm opacity-90">Professional customization and adjustment services</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Ongoing Support</h4>
                <p className="text-sm opacity-90">Maintenance, repairs, and follow-up care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UttarakhandMap
