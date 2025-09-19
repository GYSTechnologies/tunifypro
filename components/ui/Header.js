'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    // **Phone number for contact**
    const phoneNumber = '+919258201840'

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleBookNowClick = () => {
        // Check if we're already on the home page
        if (pathname === '/') {
            // If on home page, scroll to booking form
            const bookingForm = document.querySelector('#booking-form')
            if (bookingForm) {
                const headerHeight = 80
                const elementPosition = bookingForm.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerHeight

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        } else {
            // If on any other page, navigate to home page with booking form hash
            router.push('/#booking-form')
        }
        setIsMobileMenuOpen(false) // Close mobile menu
    }

    // **UPDATED: Handle contact us click for floating button**
    const handleContactUsClick = () => {
        window.open(`tel:${phoneNumber}`, '_self')
    }

    return (
        <>
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md border-b border-orange-100'
                        : 'bg-white shadow-sm'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl font-bold"
                        >
                            <div className="text-center">
                                <Image src="/tunifypro.png" className='p-1' alt="Tunifypro" width={150} height={50} />
                            </div>
                        </Link>

                        {/* **UPDATED: Desktop Navigation - Removed Contact Us button** */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button
                                onClick={handleBookNowClick}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* **UPDATED: Mobile Menu - Removed Contact Us button** */}
                        <div className="md:hidden flex items-center space-x-2">
                            <button
                                onClick={handleBookNowClick}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* **NEW: Floating Call Button - Bottom Right Corner** */}
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
                <a
                    href={`tel:${phoneNumber}`}
                    className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                    aria-label="Call us now"
                >
                    {/* **Call Icon** */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 md:h-7 md:w-7 text-white z-10 relative" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                        />
                    </svg>
                    
                    {/* **Pulse Animation Ring** */}
                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-25"></div>
                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-pulse opacity-20"></div>
                    
                    {/* **Tooltip (Desktop only)** */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none hidden md:block shadow-lg">
                        Call us now!
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                    </div>
                    
                    {/* **Mobile Tooltip (appears on tap)** */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-active:opacity-100 transition-opacity duration-200 md:hidden">
                        Call
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-900"></div>
                    </div>
                </a>
            </div>
        </>
    )
}
