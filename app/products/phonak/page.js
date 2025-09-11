import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Phonak from '@/components/sections/products/phonak/Phonak'

// Metadata for SEO optimization
export const metadata = {
  title: 'Phonak Hearing Aids - Latest Models & Prices | TunifyPro',
  description: 'Explore Phonak\'s premium hearing aids collection at TunifyPro. Discover advanced hearing solutions with AI technology, Bluetooth connectivity, and superior sound quality. Free consultation available.',
  keywords: [
    'Phonak hearing aids',
    'hearing aids online',
    'advanced hearing technology',
    'Bluetooth hearing aids',
    'rechargeable hearing aids',
    'TunifyPro',
    'hearing solutions',
    'audiologist approved',
    'Phonak Audeo',
    'Phonak Naida',
    'Phonak Virto'
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
    canonical: '/products/phonak',
    languages: {
      'en-US': '/products/phonak',
    },
  },
  openGraph: {
    title: 'Phonak Hearing Aids - Latest Models & Prices | TunifyPro',
    description: 'Explore Phonak\'s premium hearing aids collection at TunifyPro. Advanced hearing solutions with AI technology and superior sound quality.',
    url: 'https://yourdomain.com/products/phonak',
    siteName: 'TunifyPro',
    images: [
      {
        url: 'https://yourdomain.com/images/phonak-hearing-aids-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Phonak Hearing Aids Collection - TunifyPro',
      },
      {
        url: 'https://yourdomain.com/images/phonak-hearing-aids-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Phonak Hearing Aids - Premium Models',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phonak Hearing Aids - Latest Models & Prices | TunifyPro',
    description: 'Explore Phonak\'s premium hearing aids collection at TunifyPro. Advanced hearing solutions with AI technology.',
    creator: '@TunifyPro',
    images: ['https://yourdomain.com/images/phonak-hearing-aids-twitter.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
    name: 'Phonak Hearing Aids - Latest Models & Prices',
    description: 'Explore Phonak\'s premium hearing aids collection at TunifyPro. Advanced hearing solutions with AI technology and superior sound quality.',
    url: 'https://yourdomain.com/products/phonak',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Phonak Hearing Aids Collection',
      description: 'Complete range of Phonak hearing aids including RIC, BTE, ITE, and invisible models',
      numberOfItems: 8,
      itemListElement: [
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/phonak/audeo-sphere-infinio',
          name: 'Phonak Audéo Sphere Infinio',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Phonak'
          },
          description: 'World\'s first hearing aid powered by a dedicated real-time AI chip',
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
          '@id': 'https://yourdomain.com/products/phonak/audeo-lumity',
          name: 'Phonak Audéo Lumity',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Phonak'
          },
          description: 'AI-powered hearing aids with SmartSpeech Technology'
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
          name: 'Phonak',
          item: 'https://yourdomain.com/products/phonak'
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
        contactType: 'customer service'
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
                <Phonak />
                <Footer />
            </div>
        </>
    )
}
