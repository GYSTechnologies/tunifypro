'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

/*— brand meta —*/
const brands = [
    {
        name: 'Signia',
        slug: 'signia',
        logo: '/home/signia/signia.png',
        description: "Signia offers cutting-edge hearing aids designed for natural sound experiences. With advanced technology, these devices provide connectivity and comfort for daily use.",
        images: [
            '/home/signia/signiaImage1.webp',
            '/home/signia/signiaImage2.webp',
            '/home/signia/signiaImage3.webp',
            '/home/signia/signiaImage4.webp',
            '/home/signia/signiaImage5.webp',
            '/home/signia/signiaImage6.webp',
            '/home/signia/signiaImage7.webp',
            '/home/signia/signiaImage8.webp',
            '/home/signia/signiaImage9.webp'
        ],
        products: ['RIC', 'BTE', 'ITE', 'CIC'],
    },
    {
        name: 'Widex',
        slug: 'widex',
        logo: 'https://azurecdn.widex.com/-/media/widex/global/images/logos/widex---light-sand---rgb.svg?rev=99b5329b6cfd43e1b12e2d4ebf05031e&extension=webp&hash=C588D464F31C16B9923070E987F0B788',
        description: "Widex hearing aids prioritize pure, natural sound quality. Their innovative designs ensure clarity in various environments, making them ideal for active lifestyles.",
        images: [
            '/home/widex/widexImage1.jpg',
            '/home/widex/wideximage2.webp',
            '/home/widex/widexImage3.webp',
            '/home/widex/widexImage4.jpg',
            '/home/widex/widexImage5.webp',
            '/home/widex/widexImage6.webp'
        ],
        products: ['RIC', 'BTE', 'ITE', 'CIC', 'Invisible'],
    },
    {
        name: 'Phonak',
        slug: 'phonak',
        logo: 'https://www.phonak.com/content/dam/phonak/en/badges/phonak-logo.svg',
        description: "Phonak provides robust hearing solutions with superior speech understanding. Their products feature auto-adapting technology for optimal performance in any situation.",
        images: [
            '/home/phonak/ph1.avif',
            '/home/phonak/ph2.avif','/home/phonak/ph4.avif','/home/phonak/ph6.avif','/home/phonak/ph8.avif','/home/phonak/ph3.avif','/home/phonak/ph5.avif','/home/phonak/ph7.avif','/home/phonak/ph9.avif','/home/phonak/ph10.avif','/home/phonak/ph12.avif','/home/phonak/ph13.avif','/home/phonak/ph14.avif',
        ],
        products: ['RIC', 'BTE', 'ITE', 'CIC'],
    },
    {
        name: 'ReSound',
        slug: 'resound',
        logo: 'https://www.resound.com/-/media/resound/resound-international/settings/logo/resound-logo-colored.svg',
        description: "ReSound hearing aids deliver smart, connected hearing experiences. With focus on natural sound and seamless integration with devices, they enhance everyday communication.",
        images: [
            '/home/resound/re1.png',
            '/home/resound/re2.jpg',
            '/home/resound/re3.jpg',
            '/home/resound/re4.png',
            '/home/resound/re5.jpg',
            '/home/resound/re6.png'
        ],
        products: ['RIC', 'BTE', 'ITE'],
    },
    {
        name: 'Rex Sound',
        slug: 'rex-sound',
        logo: '',
        description: "Rex Sound offers reliable hearing aids with essential features for clear sound. Their products are designed for affordability and ease of use in various listening environments.",
        images: [
            '/home/widex/widexImage1.jpg',
            '/home/widex/wideximage2.webp',
            '/home/widex/widexImage3.webp',
            '/home/widex/widexImage4.jpg',
            '/home/widex/widexImage5.webp',
            '/home/widex/widexImage6.webp'
        ],
        products: ['RIC', 'BTE', 'ITE'],
    },
]

/*— Success Popup Component —*/
function SuccessPopup({ isVisible, countdown, onClose }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                <div className="text-center">
                    {/* Success Icon */}
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    
                    {/* Success Message */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enquiry Submitted Successfully!</h3>
                    <p className="text-gray-600 mb-4">Thank you for your interest. We will contact you within 24 hours.</p>
                    
                    {/* Countdown */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                            <span className="text-sm font-semibold text-orange-600">{countdown}</span>
                        </div>
                        <span className="text-sm text-gray-500">This will close automatically</span>
                    </div>
                    
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                        Close Now
                    </button>
                </div>
            </div>
        </div>
    );
}

/*— modal —*/
function InquiryModal({ onClose, onSubmit, selectedBrand }) {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [pincode, setPincode] = useState('')
    const [productType, setProductType] = useState('')
    const [err, setErr] = useState({})
    const [loading, setLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [countdown, setCountdown] = useState(7)

    // Get products for selected brand
    const selectedBrandData = brands.find(b => b.name === selectedBrand)
    const availableProducts = selectedBrandData ? selectedBrandData.products : []

    // Success popup auto-close timer
    useEffect(() => {
        let timer;
        if (showSuccess && countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000);
        } else if (showSuccess && countdown === 0) {
            handleSuccessClose();
        }
        return () => clearTimeout(timer);
    }, [showSuccess, countdown]);

    const validate = () => {
        const e = {}
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email'
        if (!/^\d{10}$/.test(phone)) e.phone = '10-digit phone required'
        if (!/^\d{6}$/.test(pincode)) e.pincode = '6-digit pincode required'
        if (!productType) e.productType = 'Please select a product type'
        setErr(e)
        return !Object.keys(e).length
    }

    const handleSuccessClose = () => {
        setShowSuccess(false)
        setCountdown(7)
        onClose()
        // Reset form
        setEmail('')
        setPhone('')
        setPincode('')
        setProductType('')
        setErr({})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setLoading(true)
        try {
            await onSubmit({ email, phone, pincode, productType })
            setShowSuccess(true)
        } catch (error) {
            console.error('Submission error:', error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-orange-700">Contact Information</h3>
                            <p className="text-sm text-gray-600 mt-1">{`We'll get back to you within 24 hours`}</p>
                            <p className="text-sm text-orange-600 mt-1 font-medium">Brand: {selectedBrand}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                            <select
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                value={productType}
                                onChange={(e) => setProductType(e.target.value)}
                            >
                                <option value="">Select product type</option>
                                {availableProducts.map((product) => (
                                    <option key={product} value={product}>
                                        {product} - {product === 'RIC' ? 'Receiver-in-Canal' :
                                            product === 'BTE' ? 'Behind-the-Ear' :
                                                product === 'ITE' ? 'In-the-Ear' :
                                                    product === 'CIC' ? 'Completely-in-Canal' :
                                                        product === 'Invisible' ? 'Invisible-in-Canal' : product}
                                    </option>
                                ))}
                            </select>
                            {err.productType && <p className="text-xs text-red-600 mt-1">{err.productType}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your email"
                            />
                            {err.email && <p className="text-xs text-red-600 mt-1">{err.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                value={phone}
                                maxLength={10}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                placeholder="Enter 10-digit phone number"
                            />
                            {err.phone && <p className="text-xs text-red-600 mt-1">{err.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                value={pincode}
                                maxLength={6}
                                onChange={(e) => setPincode(e.target.value)}
                                type="text"
                                placeholder="Enter your pincode"
                            />
                            {err.pincode && <p className="text-xs text-red-600 mt-1">{err.pincode}</p>}
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 rounded-lg bg-orange-600 py-3 font-semibold text-white hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Popup */}
            <SuccessPopup 
                isVisible={showSuccess} 
                countdown={countdown} 
                onClose={handleSuccessClose} 
            />
        </>
    )
}

/*— main component —*/
export default function BrandsSection() {
    const [modal, setModal] = useState(false)
    const [brandSelected, setBrandSelected] = useState(null)
    const [imageIndex, setImageIndex] = useState(brands.map(() => 0))
    const router = useRouter()

    const submitEnquiry = async (payload) => {
        const body = { ...payload, brand: brandSelected }
        try {
            const res = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })

            if (!res.ok) {
                throw new Error('Server error')
            }

            // Success is handled by the modal component now
            return res;
        } catch (error) {
            alert('Network error, please try again.')
            throw error;
        }
    }

    const changeImage = (brandIdx, direction) => {
        setImageIndex((prev) => {
            const newIndices = [...prev]
            const max = brands[brandIdx].images.length - 1
            newIndices[brandIdx] = (newIndices[brandIdx] + direction + max + 1) % (max + 1)
            return newIndices
        })
    }

    const handleViewProducts = (brandSlug) => {
        router.push(`/products/${brandSlug}`)
    }

    return (
        <section className="bg-[#FBF9D1] py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-orange-500">Trusted Brands</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover premium hearing aid solutions from world-renowned manufacturers
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {brands.map((b, brandIdx) => (
                        <div key={b.name} className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">

                            {/* Product Image Carousel */}
                            <div className="relative mb-2 h-48 rounded-xl border-2 border-gray-200 overflow-hidden">
                                {b.images.length > 0 && (
                                    <>
                                        <Image
                                            src={b.images[imageIndex[brandIdx]]}
                                            alt={`${b.name} product ${imageIndex[brandIdx] + 1}`}
                                            fill
                                            className="object-contain "
                                        />
                                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                            {b.images.map((img, ind) => (
                                                <button
                                                    key={ind}
                                                    onClick={() => setImageIndex((prev) => {
                                                        const newIndices = [...prev]
                                                        newIndices[brandIdx] = ind
                                                        return newIndices
                                                    })}
                                                    className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${imageIndex[brandIdx] === ind
                                                            ? 'bg-orange-800 w-4'
                                                            : 'bg-white/80 hover:bg-white/80'
                                                        }`}
                                                    aria-label={`Go to image ${ind + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => changeImage(brandIdx, -1)}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                        >
                                            <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => changeImage(brandIdx, 1)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                        >
                                            <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Brand Logo/Name */}
                            <div className="text-center flex justify-between items-center mb-2 h-14">
                                {b.logo ? (
                                    <div className="flex items-center  justify-center">
                                        <Image
                                            src={b.logo}
                                            alt={`${b.name} logo`}
                                            width={150}
                                            height={40}
                                            className="object-contain  "
                                        />
                                    </div>
                                    
                                ) : (
                                    <h3 className="text-2xl font-bold  text-red-600">{b.name}</h3>
                                )}

                                <div className='mb-2'>
                                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full border border-green-200">
                                          Exchange Available
                                      </span>
                                  </div>
                            </div>

                            {/* Description */}
                            <div className="mb-2">
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    {b.description}
                                </p>
                            </div>

                            {/* Product Types & Exchange Tag */}
                            <div className="mb-4">
                                <h4 className="text-xs font-semibold text-gray-800 mb-3">Available Types</h4>
                                <div className="flex flex-wrap gap-2">
                                    {b.products.map((p) => (
                                        <span key={p} className="px-3 py-0.5 bg-gray-100/70 text-gray-800 text-xs font-medium rounded-full">
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                          
                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                {/* Get Quote Button */}
                                <button
                                    onClick={() => {
                                        setBrandSelected(b.name)
                                        setModal(true)
                                    }}
                                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 group-hover:shadow-lg text-sm"
                                >
                                    Get Quote
                                </button>
                                
                                {/* View Products Button */}
                                <button
                                    onClick={() => handleViewProducts(b.slug)}
                                    className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 group-hover:shadow-lg text-sm"
                                >
                                    View Products
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modal && (
                <InquiryModal
                    onClose={() => setModal(false)}
                    onSubmit={submitEnquiry}
                    selectedBrand={brandSelected}
                />
            )}
        </section>
    )
}
