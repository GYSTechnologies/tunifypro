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

    return (
        <>
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md  border-b border-orange-100'
                    : 'bg-white shadow-sm'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl font-bold "
                        >
                            <div className="text-center  ">
                                <Image src="/tunifypro.png" className=' p-1  ' alt="Tunifypro" width={150} height={50} />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={handleBookNowClick}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
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
        </>
    )
}
