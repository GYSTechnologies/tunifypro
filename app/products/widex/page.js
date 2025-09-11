import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Widex from '@/components/sections/products/widex/Widex'

// Metadata for SEO optimization
export const metadata = {
  title: 'Widex Hearing Aids - Pure Natural Sound Technology | TunifyPro',
  description: 'Discover Widex hearing aids at TunifyPro featuring PureSound technology, SoundSense Learn AI, and natural hearing experiences. Explore Moment, SmartRIC, and Allure collections with innovative Danish design.',
  icons:{
    icon:'/tunifyprologo.png',
  },

  keywords: [
    'Widex hearing aids',
    'PureSound technology',
    'natural sound hearing aids',
    'Widex Moment',
    'Widex SmartRIC',
    'Widex Allure',
    'SoundSense Learn AI',
    'ZeroDelay processing',
    'Danish hearing technology',
    'TunifyPro',
    'rechargeable hearing aids',
    'wireless hearing aids',
    'custom hearing aids',
    'invisible hearing aids'
  ],
  authors: [{ name: 'TunifyPro' }],
  creator: 'TunifyPro',
  publisher: 'TunifyPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/products/widex',
    languages: {
      'en-US': '/products/widex',
    },
  },
  openGraph: {
    title: 'Widex Hearing Aids - Pure Natural Sound Technology | TunifyPro',
    description: 'Discover Widex hearing aids at TunifyPro featuring PureSound technology, SoundSense Learn AI, and natural hearing experiences. Explore innovative Danish design.',
    url: 'https://yourdomain.com/products/widex',
    siteName: 'TunifyPro',
    images: [
      {
        url: 'https://yourdomain.com/images/widex-hearing-aids-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Widex Hearing Aids Collection - Pure Natural Sound at TunifyPro',
      },
      {
        url: 'https://yourdomain.com/images/widex-hearing-aids-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Widex Moment and SmartRIC Hearing Aids',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Widex Hearing Aids - Pure Natural Sound Technology | TunifyPro',
    description: 'Discover Widex hearing aids with PureSound technology and SoundSense Learn AI at TunifyPro.',
    creator: '@TunifyPro',
    images: ['https://yourdomain.com/images/widex-hearing-aids-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#f97316',
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
  },
}

// Structured Data for Rich Snippets
export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Widex Hearing Aids - Pure Natural Sound Technology',
    description: 'Discover Widex hearing aids at TunifyPro featuring PureSound technology, SoundSense Learn AI, and natural hearing experiences.',
    url: 'https://yourdomain.com/products/widex',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Widex Hearing Aids Collection',
      description: 'Premium Danish hearing aids featuring PureSound technology, zero-delay processing, and natural sound experiences',
      numberOfItems: 8,
      itemListElement: [
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/widex/allure-ric-rd',
          name: 'Widex Allure RIC RD',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Widex'
          },
          description: 'Newest flagship hearing aid with ultra-low delay processing and AI-powered personalization',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'INR',
            seller: {
              '@type': 'Organization',
              name: 'TunifyPro'
            }
          }
        },
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/widex/smartric',
          name: 'Widex SmartRIC',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Widex'
          },
          description: 'Revolutionary L-shaped design with 37 hours battery life and enhanced sound pickup'
        },
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/widex/moment-sheer',
          name: 'Widex Moment Sheer RIC',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Widex'
          },
          description: 'Sophisticated RIC device with PureSound technology for natural, distortion-free sound'
        }
      ]
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://yourdomain.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://yourdomain.com/products'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Widex',
          item: 'https://yourdomain.com/products/widex'
        }
      ]
    },
    provider: {
      '@type': 'Organization',
      '@id': 'https://yourdomain.com/about',
      name: 'TunifyPro',
      url: 'https://yourdomain.com',
      logo: 'https://yourdomain.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'customer service',
        availableLanguage: ['en', 'hi']
      },
      sameAs: [
        'https://facebook.com/tunifypro',
        'https://twitter.com/tunifypro',
        'https://linkedin.com/company/tunifypro'
      ]
    }
  }
}

export default function Page() {
    const jsonLd = generateJsonLd()

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div>
                <Header />
                <Widex />
                <Footer />
            </div>
        </>
    )
}
