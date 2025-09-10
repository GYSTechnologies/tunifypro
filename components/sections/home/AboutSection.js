'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.2 })
    if (aboutRef.current) io.observe(aboutRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={aboutRef} className="py-16 sm:py-18 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4    ">
        <div className="text-center max-w-7xl mx-auto">

          {/* Section Heading */}
          <div
            className={`transition-all duration-700 ease-out mb-6 sm:mb-10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-orange-500">Tunifypro</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              At Tunifypro, we combine expert consultation with world-class hearing solutions. Our mission is to make better hearing accessible and affordable for everyone through professional care and advanced technology.
            </p>
          </div>

          {/* Exact Images Layout */}
          <div
            className={`relative transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex justify-center items-end gap-2 lg:gap-6">

              {/* Image 1 (far left, short) */}
              <div className="relative w-24 sm:w-28 md:w-32 h-32 sm:h-40 md:h-56 mb-4 lg:mb-18  overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/home/about1.png"
                  alt="Consultation"
                  fill
                  sizes="(max-width:768px) 90vw, (max-width:1200px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Image 2 (left center, taller) */}
              <div className="relative w-24 sm:w-28 md:w-32 h-40 sm:h-48 md:h-56 mb-4 lg:mb-8 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/home/about2.png"
                  alt="Hearing aid technology"
                  fill
                  sizes="(max-width:768px) 90vw, (max-width:1200px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Image 3 (center, biggest) */}
              <div className="relative w-24 sm:w-28 md:w-32 h-48 sm:h-60 md:h-56  overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/home/about3.png"
                  alt="Happy patient"
                  fill
                  sizes="(max-width:768px) 90vw, (max-width:1200px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>

              {/* Image 4 (right center, taller) */}
              <div className="relative w-24 sm:w-28 md:w-32 h-40 sm:h-48 md:h-56 mb-4 lg:mb-8   overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/home/about4.png"
                  alt="Hearing solution"
                  fill
                  sizes="(max-width:768px) 90vw, (max-width:1200px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Image 5 (far right, short) */}
              <div className="relative w-24 sm:w-28 md:w-32 h-32 sm:h-40 md:h-56 mb-4 lg:mb-18 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/home/about5.png"
                  alt="Audiologist"
                  fill
                  sizes="(max-width:768px) 90vw, (max-width:1200px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
