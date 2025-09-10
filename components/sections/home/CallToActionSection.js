'use client'

export default function CallToActionSection() {
    const handleBookNowClick = () => {
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
    }
    return (
        <section className="bg-orange-500 py-8 sm:py-12 my-4 lg:py-16 mx-4 sm:mx-6 lg:mx-8 rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column - Text Content */}
                    <div className="text-white text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                           {` Don't Let Hearing Hold You Back`}
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 opacity-95">
                            With Tunifypro, you get expert guidance, free consultations, and access to 5 world-class brands—all in one place.
                        </p>

                        <button onClick={handleBookNowClick} className="inline-flex items-center justify-center bg-white text-[#f97316] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M12 1v6m0 6v6"></path>
                                <path d="m21 12-6-6m-6 6-6-6"></path>
                            </svg>
                            Start Your Journey Today
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative order-first lg:order-last">
                        <div className="relative overflow-hidden">
                            {/* Main Image Container */}
                            <div className="relative rounded-tl-[80px] sm:rounded-tl-[120px] lg:rounded-tl-[150px] rounded-tr-[20px] sm:rounded-tr-[30px] rounded-bl-[20px] sm:rounded-bl-[30px] rounded-br-[80px] sm:rounded-br-[120px] lg:rounded-br-[150px] overflow-hidden ">
                                <img
                                    src="/home/image.jpg" // Replace with your actual image path
                                    alt="Professional audiologist providing consultation to patient"
                                    className="w-full h-[280px] sm:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
