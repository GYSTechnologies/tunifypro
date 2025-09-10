'use client'
export default function CtaSection() {
  return (
    <section className="flex justify-center px-4 sm:px-0 items-center bg-gray-50 pb-12 sm:pb-16">
      <div className="relative bg-gradient-to-br from-orange-700 to-orange-600 rounded-2xl sm:rounded-3xl w-full max-w-4xl mx-auto px-6 sm:px-12 py-12 sm:py-16 flex flex-col items-center overflow-hidden">
        {/* Subtle decorative circles */}
        <span className="pointer-events-none absolute top-0 left-0 w-40 sm:w-60 h-40 sm:h-60 bg-orange-900 opacity-40 rounded-full -translate-x-1/3 -translate-y-1/3"></span>
        <span className="pointer-events-none absolute bottom-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-orange-900 opacity-40 rounded-full translate-x-1/4 translate-y-1/4"></span>
        <span className="pointer-events-none absolute inset-0 m-auto w-[90%] h-[90%] rounded-full border-[1.5px] opacity-20 border-white border-dashed"></span>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 sm:mb-6 leading-tight">
            Take the First Step Towards Better Hearing
          </h2>
          <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-center opacity-90">
            Book a Free Hearing Assessment Today
          </div>
          <a
            href="#booking-form"
            className="inline-flex items-center bg-white text-orange-700 hover:text-orange-800 font-semibold text-sm sm:text-lg rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg ring-1 ring-white/30 hover:scale-105 transition-transform duration-200"
          >
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 mr-2 sm:mr-3"
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z" stroke="currentColor" strokeWidth="2" />
            </svg>
            Book Your Free Hearing Screening
          </a>
        </div>
      </div>
    </section>
  )
}
