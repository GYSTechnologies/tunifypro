import Home from "@/components/sections/home/Home";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Metadata } from 'next';

export const metadata = {
  title: 'Tunifypro - Best Hearing Aids & Audiologist Services in Dehradun',
  description: 'Leading hearing aid center in Dehradun offering premium hearing solutions from Signia, Widex, Phonak, ReSound.',
  icons:{
    icon:'/tunifyprologo.png',
  },
  keywords: [
    'hearing aids Dehradun',
    'audiologist Dehradun', 
    'hearing test Dehradun',
    'Signia hearing aids',
    'Widex hearing aids',
    'Phonak hearing aids',
    'ReSound hearing aids',
    'hearing aid consultation',
    'hearing loss treatment',
    'digital hearing aids',
    'invisible hearing aids',
    'hearing aid repair',
    'hearing aid price',
    'best hearing aids India',
    'Tunifypro'
  ],
  
  authors: [{ name: 'Tunifypro Hearing Solutions' }],
  creator: 'Tunifypro',
  publisher: 'Tunifypro Hearing Solutions',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tunifypro.com',
    title: 'Tunifypro - Premium Hearing Aids & Audiologist Services in Dehradun',
    description: 'Transform your hearing experience with premium hearing aids from world-renowned brands. Expert consultation, personalized fitting, and comprehensive hearing care services in Dehradun.',
    siteName: 'Tunifypro Hearing Solutions',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Tunifypro - Leading Hearing Aid Center in Dehradun',
      },
      {
        url: '/og-image-square.jpg', 
        width: 600,
        height: 600,
        alt: 'Tunifypro Hearing Solutions',
      }
    ],
  },
  
  verification: {
    google: 'your-google-verification-code',
    bing: 'your-bing-verification-code',
  },
  
  category: 'Healthcare',
  classification: 'Medical Equipment & Hearing Healthcare',
  
  alternates: {
    canonical: 'https://tunifypro.com',
    languages: {
      'en-IN': 'https://tunifypro.com',
    }
  },
  
  appleWebApp: {
    capable: true,
    title: 'Tunifypro',
    statusBarStyle: 'default',
  },
  
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  referrer: 'origin-when-cross-origin',
  
  other: {
    'theme-color': '#7C3AED', // Your brand color
    'color-scheme': 'light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-TileColor': '#7C3AED',
    'msapplication-config': '/browserconfig.xml',
    
    'geo.region': 'IN-UT',
    'geo.placename': 'Dehradun',
    'geo.position': '30.3165;78.0322', // Dehradun coordinates
    'ICBM': '30.3165, 78.0322',
    
    'contact': 'info@tunifypro.com',
    'reply-to': 'info@tunifypro.com',
    
    'rating': 'General',
    'distribution': 'Global',
  }
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://tunifypro.com/#organization",
                "name": "Tunifypro Hearing Solutions",
                "alternateName": "Tunifypro",
                "url": "https://tunifypro.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://tunifypro.com/logo.png",
                  "width": 200,
                  "height": 60
                },
                "description": "Leading hearing aid center in Dehradun offering premium hearing solutions and audiologist services.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Your Address Here",
                  "addressLocality": "Dehradun",
                  "addressRegion": "Uttarakhand",
                  "postalCode": "248001",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-XXXXXXXXXX",
                  "contactType": "Customer Service",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://facebook.com/tunifypro",
                  "https://instagram.com/tunifypro",
                  "https://twitter.com/tunifypro"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://tunifypro.com/#website",
                "url": "https://tunifypro.com",
                "name": "Tunifypro Hearing Solutions",
                "publisher": {
                  "@id": "https://tunifypro.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://tunifypro.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "MedicalBusiness",
                "@id": "https://tunifypro.com/#medicalbusiness",
                "name": "Tunifypro Hearing Solutions",
                "image": "https://tunifypro.com/business-image.jpg",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Your Address Here",
                  "addressLocality": "Dehradun",
                  "addressRegion": "Uttarakhand",
                  "postalCode": "248001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 30.3165,
                  "longitude": 78.0322
                },
                "telephone": "+91-XXXXXXXXXX",
                "medicalSpecialty": "Audiology",
                "availableService": [
                  {
                    "@type": "MedicalProcedure",
                    "name": "Hearing Test"
                  },
                  {
                    "@type": "MedicalProcedure", 
                    "name": "Hearing Aid Fitting"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Hearing Aid Consultation"
                  }
                ]
              },
              {
                "@type": "Product",
                "name": "Premium Hearing Aids",
                "description": "High-quality hearing aids from leading brands like Signia, Widex, Phonak, and ReSound.",
                "brand": [
                  {
                    "@type": "Brand",
                    "name": "Signia"
                  },
                  {
                    "@type": "Brand", 
                    "name": "Widex"
                  },
                  {
                    "@type": "Brand",
                    "name": "Phonak"
                  },
                  {
                    "@type": "Brand",
                    "name": "ReSound"
                  }
                ],
                "category": "Medical Equipment",
                "offers": {
                  "@type": "AggregateOffer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR",
                  "seller": {
                    "@id": "https://tunifypro.com/#organization"
                  }
                }
              }
            ]
          })
        }}
      />
      
      <div className="">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </>
  );
}
