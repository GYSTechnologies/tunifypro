'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-green-500 inline-block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="w-6 h-6 text-red-500 inline-block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

const features = [
  { name: "5 Global Hearing Aid Brands (Signia, Widex, Phonak, ReSound, Rexsound)", tuinfypro: true, other: false },
  { name: "Free Hearing Consultation", tuinfypro: true, other: false },
  { name: "Certified Audiologists", tuinfypro: true, other: false },
  { name: "Lifetime Support and Maintenance", tuinfypro: true, other: false },
  { name: "Home visits by the hearing experts", tuinfypro: true, other: false },
  { name: "Live interaction with hearing experts at any time", tuinfypro: true, other: false },
  { name: "Cutting-Edge Technology", tuinfypro: true, other: false },
  { name: "Wide Range of Styles & Technologies", tuinfypro: true, other: false },
  { name: "Personalized Recommendations", tuinfypro: true, other: false },
]

export default function BrandComparison() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setShowAll(true)
      } else {
        setShowAll(false)
      }
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  
  const displayedFeatures = (isMobile && !showAll) ? features.slice(0, 5) : features
  
  return (
    <section className="py-14 min-h-[70vh] bg-gray-50 flex justify-center items-start">
      <div className="w-full max-w-5xl mx-auto px-4">

        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-orange-500 mb-1">
          Tuinfypro <span className="text-gray-900">Vs Other Brands</span>
        </h2>
        <p className="text-center text-gray-600 mb-9 text-base">How we excel from other hearing care providers</p>

        <div className="relative rounded-2xl border-t-8 border-b-8 border-orange-500 shadow-lg bg-white overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-5 px-2 sm:px-3 text-base sm:text-lg font-bold text-gray-900 text-left rounded-tl-2xl">Features</th>
                <th className="py-1 px-2 sm:px-3 text-center font-bold text-lg relative">
                  <div className="flex flex-col bg-white rounded-t-lg rounded-b-lg px-2 mb-3 border-y-4 border-gray-700 items-center">
                    <span className="font-extrabold text-orange-500 text-xl pb-1">Tuinfypro</span>
                  </div>
                </th>
                <th className="py-5 px-2 sm:px-3 font-bold text-lg text-center rounded-tr-2xl">Other Brands</th>
              </tr>
            </thead>
            <tbody>
              {displayedFeatures.map((row, i) => (
                <tr
                  key={row.name}
                  className={`${
                    i % 2 ? "bg-gray-50" : "bg-white"
                  } transition-all duration-300`}
                >
                  <td className="py-3 px-2 sm:px-3 text-gray-800 text-sm sm:text-base font-medium min-w-[150px]">
                    {row.name}
                  </td>
                  <td className="py-3 px-2 sm:px-3 bg-orange-100 text-center">
                    {row.tuinfypro ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="py-3 px-2 sm:px-3 text-center">
                    {row.other ? <CheckIcon /> : <CrossIcon />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {isMobile && (
            <div className="bg-white border-t border-gray-200 px-4 py-4 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                {showAll ? (
                  <>
                    <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    View All Features ({features.length - 5} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
