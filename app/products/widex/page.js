import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Widex from '@/components/sections/products/widex/Widex'

// Metadata for SEO optimization
export const metadata = {
  title: 'Widex Hearing Aids - Pure Natural Sound Technology | Tunifypro',
  description: 'Discover Widex hearing aids at Tunifypro featuring PureSound technology, SoundSense Learn AI, and natural hearing experiences. Explore Moment, SmartRIC, and Allure collections with innovative Danish design.',
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
    'Tunifypro',
    'rechargeable hearing aids',
    'wireless hearing aids',
    'custom hearing aids',
    'invisible hearing aids'
  ],
  authors: [{ name: 'Tunifypro' }],
  creator: 'Tunifypro',
  publisher: 'Tunifypro',
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
    title: 'Widex Hearing Aids - Pure Natural Sound Technology | Tunifypro',
    description: 'Discover Widex hearing aids at Tunifypro featuring PureSound technology, SoundSense Learn AI, and natural hearing experiences. Explore innovative Danish design.',
    url: 'https://yourdomain.com/products/widex',
    siteName: 'Tunifypro',
    images: [
      {
        url: 'https://yourdomain.com/images/widex-hearing-aids-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Widex Hearing Aids Collection - Pure Natural Sound at Tunifypro',
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
    title: 'Widex Hearing Aids - Pure Natural Sound Technology | Tunifypro',
    description: 'Discover Widex hearing aids with PureSound technology and SoundSense Learn AI at Tunifypro.',
    creator: '@Tunifypro',
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
    description: 'Discover Widex hearing aids at Tunifypro featuring PureSound technology, SoundSense Learn AI, and natural hearing experiences.',
    url: 'https://tunifypro.com/products/widex',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Widex Hearing Aids Collection',
      description: 'Premium Danish hearing aids featuring PureSound technology, zero-delay processing, and natural sound experiences',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://tunifypro.com'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Widex',
          item: 'https://tunifypro.com/products/widex'
        }
      ]
    },
    provider: {
      '@type': 'Organization',
      '@id': 'https://tunifypro.com/about',
      name: 'Tunifypro',
      url: 'https://tunifypro.com',
      logo: 'https://tunifypro.com/logo.png',
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
