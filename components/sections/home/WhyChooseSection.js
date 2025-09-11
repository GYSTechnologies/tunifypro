'use client'

export default function WhyChooseSection() {
    return (
        <section className="bg-[#FBF9D1] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Features */}
                    <div className="space-y-8">
                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                            Why Choose <span className="text-[#f97316]">Tunifypro?</span>
                        </h2>

                        {/* Features List */}
                        <div className="space-y-4 max-w-lg mx-auto lg:mx-0">

                            {/* Feature 1 - Certified Audiologists */}
                            <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Certified Audiologists</h3>
                                    <p className="text-gray-600 text-sm">Get tested by trusted professionals.</p>
                                </div>
                            </div>

                            {/* Feature 2 - Latest Hearing Technology */}
                            <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m-7.072 0a5 5 0 010-7.072m7.072 0L12 12m3.536-3.536L12 12m0 0l-3.536 3.536M12 12l3.536-3.536" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Latest Hearing Technology</h3>
                                    <p className="text-gray-600 text-sm">Cutting-edge solutions for every need.</p>
                                </div>
                            </div>

                            {/* Feature 3 - Nationwide Support */}
                            <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-pink-600 shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Nationwide Support</h3>
                                    <p className="text-gray-600 text-sm">Clinics and services across India.</p>
                                </div>
                            </div>

                            {/* Feature 4 - Personalized Care */}
                            <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-gray-100">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-600 shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Personalized Care</h3>
                                    <p className="text-gray-600 text-sm">Solutions tailored to your lifestyle.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="relative order-first lg:order-last">
                        <div className="relative     max-w-md mx-auto lg:max-w-none">
                            <img
                                src="/home/whychoose.jpg"
                                alt="Professional audiologist conducting hearing examination"
                                className="w-full rounded-tl-[5rem] border-r-10 border-t-10 border-orange-500 shadow-2xl rounded-br-[5rem] h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                            />
                            {/* <div className="absolute inset-0 rounded-[2rem] border-4 border-[#f97316]"></div> */}
                        </div>

                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f97316] rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-15 blur-xl"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
