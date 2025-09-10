'use client'
import { useState, useEffect } from 'react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    agreeToPrivacy: false
  })
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  // Fetch cities on component mount
  useEffect(() => {
    fetchCities()
  }, [])

  const fetchCities = async () => {
    try {
      const response = await fetch('/api/cities')
      const data = await response.json()
      setCities(data.cities)
    } catch (error) {
      console.error('Error fetching cities:', error)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    if (!formData.city) {
      newErrors.city = 'Please select your city'
    }
    
    if (!formData.agreeToPrivacy) {
      newErrors.privacy = 'Please accept the privacy policy'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          agreeToPrivacy: false
        })
      } else {
        throw new Error(result.message || 'Booking failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'There was an error submitting your booking. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl shadow-professional p-4 sm:p-6 w-full animate-scale-in">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600 mb-6">{`We'll contact you within 24 hours to schedule your free hearing consultation.`}</p>
          <button 
            onClick={() => setSuccess(false)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
          >
            Book Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white  rounded-2xl shadow-amber-500 shadow-md  hover:shadow-professional-hover p-6 sm:p-8 w-full transition-all duration-300 animate-fade-in-left">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
      Book a Hearing Screening with Certified Audiologists
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error Message */}
        {errors.submit && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {errors.submit}
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className={`w-full px-4 py-2 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-orange-500'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border border-orange-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent  outline-none transition-all text-sm sm:text-base ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-orange-500'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="flex">
            <div className="flex items-center px-4 py-2 bg-orange-100  border border-r-0 border-orange-300 rounded-l-xl">
              <span className="text-gray-800 text-sm sm:text-base">+91</span>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter 10-digit number"
              maxLength="10"
              className={`flex-1 px-4 py-2 border hover:border-orange-500 border-orange-300 rounded-r-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                errors.phone ? 'border-red-300 bg-red-50' : 'border-orange-300 hover:border-orange-300'
              }`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* City Field */}
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
            Your City *
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-xl hover:border-orange-500 border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base ${
              errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-orange-300'
            }`}
          >
            <option value="">Select your city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="agreeToPrivacy"
            name="agreeToPrivacy"
            checked={formData.agreeToPrivacy}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-orange-600 border-orange-300  rounded focus:ring-orange-500 transition-colors"
          />
          <label htmlFor="agreeToPrivacy" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            I agree to the <span className="text-orange-600 hover:underline cursor-pointer font-medium">Privacy Policy</span> and would like to receive service updates and offers.
          </label>
        </div>
        {errors.privacy && <p className="text-red-500 text-xs">{errors.privacy}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Booking...</span>
            </div>
          ) : (
            'Book Your Screening'
          )}
        </button>
      </form>
    </div>
  )
}
