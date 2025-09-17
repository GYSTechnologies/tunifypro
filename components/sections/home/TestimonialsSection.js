'use client'
import { useState } from 'react'

const testimonials = [
  {
    review: "The staff at Tunifypro are very professional and helpful. Highly recommended!",
    name: "Aditi Sharma",
    rating: 5
  },
  {
    review: "Excellent service and quick response. My hearing has improved a lot.",
    name: "Rohit Singh",
    rating: 5
  },
  {
    review: "Very friendly staff and great after care. Would definitely recommend.",
    name: "Neha Gupta",
    rating: 5
  },
  {
    review: "Reliable and affordable hearing solutions. Very pleased with the service.",
    name: "Vikram Patel",
    rating: 4.5
  },
  {
    review: "The Tunifypro, hearing aids solutions is easy to locate. The audiologist is very cooperative and treats the patients well. Home service is also available for senior citizens for a fee.",
    name: "S Kumar",
    rating: 5
  }
]

function StarRating({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <span className="flex items-center">
      {[...Array(full)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.456a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.383-2.456a1 1 0 00-1.175 0l-3.383 2.456c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.951-.69L9.049 2.927z" />
        </svg>
      ))}
      {half && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.456a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.383-2.456a1 1 0 00-1.175 0l-3.383 2.456c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.951-.69L9.049 2.927z"
            fill="url(#half-grad)" />
        </svg>
      )}
    </span>
  )
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]

  const goTo = i => setIndex(i)
  const prev = () => setIndex(index === 0 ? testimonials.length - 1 : index - 1)
  const next = () => setIndex((index + 1) % testimonials.length)

  return (
    <section className="bg-[#FBF9D1] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-7">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            What Are <span className="text-orange-500">People</span> Saying on Google
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="flex items-center justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.456a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.383-2.456a1 1 0 00-1.175 0l-3.383 2.456c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.951-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span className="text-orange-400 font-bold text-base ml-2">4.9/5 Rating on Google</span>
          </div>
          <div className="text-gray-500 text-sm mt-2">
           {` Don't take our word for it. Trust our customers`}
          </div>
        </div>

        {/* Testimonial card */}
        <div className="flex flex-col items-center ">
          <div className="bg-white rounded-2xl border-x-4 shadow-lg px-6 py-8 w-full max-w-2xl min-h-[200px] flex flex-col justify-between">
            <div>
              <svg className="w-8 h-8 text-orange-300 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  d="M9 10H7a4 4 0 0 0 4 4h0V6h-2v8zm7 0h-2a4 4 0 0 0 4 4h0V6h-2v8z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-gray-700 text-lg">{testimonial.review}</p>
            </div>
            <div className="mt-6 flex flex-col">
              <div className="font-bold text-gray-800">{testimonial.name}</div>
              <div className="mt-1">
                <StarRating value={testimonial.rating} />
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-8 gap-2">
            <button onClick={prev} className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-orange-100 text-xl text-orange-600">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {testimonials.map((_, i) => (
              <span
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === i ? 'bg-orange-500' : 'bg-orange-200'}`}
              />
            ))}
            <button onClick={next} className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-orange-100 text-xl text-orange-600">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
