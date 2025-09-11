'use client'
import { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: "Is the hearing test really free?",
    answer: "Yes, absolutely! We provide comprehensive hearing tests at no cost. Our certified audiologists use advanced equipment to assess your hearing levels and identify any potential issues. The test takes about 30-45 minutes and includes a detailed consultation about your results and treatment options."
  },
  {
    id: 2,
    question: "Do I need a prescription to get a hearing aid?",
    answer: "No prescription is required for hearing aids in India. However, we strongly recommend getting a professional hearing assessment first. Our audiologists will evaluate your hearing loss degree and recommend the most suitable hearing aid based on your specific needs, lifestyle, and budget."
  },
  {
    id: 3,
    question: "Which brands do you provide?",
    answer: "We offer premium hearing aids from leading global brands including Signia, Widex, Phonak, ReSound, and Rex Sound. Each brand offers unique features and technologies. Our experts will help you choose the best brand and model based on your hearing loss pattern, lifestyle requirements, and personal preferences."
  },
  {
    id: 4,
    question: "How do I know which hearing aid is right for me?",
    answer: "Our audiologists consider several factors: your degree of hearing loss, lifestyle needs, dexterity, budget, and aesthetic preferences. We offer different styles like BTE (Behind-the-Ear), RIC (Receiver-in-Canal), ITE (In-the-Ear), and CIC (Completely-in-Canal). We provide trial periods so you can test the hearing aid in real-world situations before making a final decision."
  },
  {
    id: 5,
    question: "Are your hearing aids rechargeable?",
    answer: "Yes! We offer both rechargeable and battery-powered hearing aids. Rechargeable models are increasingly popular as they're environmentally friendly and convenient. Most rechargeable hearing aids provide 16-24 hours of use on a single charge and come with portable charging cases for on-the-go power."
  },
  {
    id: 6,
    question: "How long do hearing aids last?",
    answer: "Quality hearing aids typically last 4-7 years with proper care and maintenance. Factors affecting lifespan include daily usage, environmental conditions, and maintenance routine. We provide comprehensive aftercare services, regular cleaning, and software updates to maximize your hearing aid's lifespan."
  },
  {
    id: 7,
    question: "Do you provide warranty and after-sales service?",
    answer: "Yes, all our hearing aids come with manufacturer warranty (typically 1-3 years) covering repairs and replacements. We also provide lifetime technical support, regular maintenance, cleaning services, and software updates. Our service centers across India ensure you get support wherever you are."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
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
    <section className="bg-[#FBF9D1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-[#f97316]">Frequently</span> Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Get answers to common questions about hearing aids, tests, and our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/home/about5.png" // Replace with your actual image path
                alt="Professional audiologist conducting comprehensive hearing examination with patient"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Call to Action Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6 border-l-4 border-[#f97316]">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Still Have Questions?</h3>
              <p className="text-gray-600 mb-4">Our expert audiologists are here to help you make the right choice.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={handleBookNowClick} className="bg-[#f97316] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                  Book Free Consultation
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Call: +91-XXXXXXXXXX
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="order-1 lg:order-2 space-y-4">
            {faqData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-inset transition-colors hover:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
                      openItems[item.id] 
                        ? 'bg-[#f97316] text-white rotate-45' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div className={`transition-all duration-300 ease-in-out ${
                  openItems[item.id] 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
