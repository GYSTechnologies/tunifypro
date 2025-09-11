'use client'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          {/* Left Side: Company Info */}
          <div className="text-center  ">
            <Image src="/tunifypro.png" className='rounded-2xl p-1 bg-white ' alt="Tunifypro" width={150} height={50} />
          </div>
          {/* Bottom Copyright */}
          <div className=" text-center text-sm opacity-75  ">
            &copy; {new Date().getFullYear()} Tunifypro. All rights reserved.
            {/* Right Side: Powered By */}
            <div className="text-center md:text-center">
                Powered by{' '}
                <Link
                  href="https://www.gystechnologies.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:border-b hover:font-semibold hover:text-orange-200 transition-colors duration-200"
                >
                  Gys Technologies
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
