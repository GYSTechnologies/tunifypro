import BookingForm from './BookingForm'

export default function HeroSection() {
  return (
    <div>
      <main className=" bg-[#FBF9D1]">

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-orange-500 leading-tight mb-6">
                Rediscover the Joy of Hearing with Tunifypro
                </h2>
                
              </div>

              {/* Hearing Test Image */}
              <div className="relative">
                <img 
                  src="/home/hero1.jpg" 
                  alt="Hearing test consultation" 
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                  Book your free hearing test and find<br />
                  the right solution tailored for you.
                </p>
            </div>

            {/* Right Side - Booking Form */}
            <div className="flex justify-center lg:justify-end" id="booking-form">
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
