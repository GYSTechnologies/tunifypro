import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import ReSound from '@/components/sections/products/resound/ReSound'

// Metadata for SEO optimization
export const metadata = {
  title: 'ReSound Hearing Aids - Smart Technology & Connectivity | TunifyPro',
  description: 'Discover ReSound\'s innovative hearing aids collection at TunifyPro. Experience smart hearing technology with M&RIE, Bluetooth LE Audio, and AI-powered sound processing. Free consultation available.',
  icons: {
    icon: '/tunifyprologo.png',
  },
  keywords: [
    'ReSound hearing aids',
    'smart hearing aids',
    'M&RIE technology',
    'Bluetooth LE Audio',
    'Auracast hearing aids',
    'ReSound OMNIA',
    'ReSound Nexia',
    'ReSound ONE',
    'TunifyPro',
    'hearing solutions',
    'wireless hearing aids',
    'AI hearing technology'
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
    canonical: '/products/resound',
    languages: {
      'en-US': '/products/resound',
    },
  },
  openGraph: {
    title: 'ReSound Hearing Aids - Smart Technology & Connectivity | TunifyPro',
    description: 'Discover ReSound\'s innovative hearing aids collection at TunifyPro. Experience smart hearing technology with M&RIE, Bluetooth LE Audio, and AI-powered sound processing.',
    url: 'https://yourdomain.com/products/resound',
    siteName: 'TunifyPro',
    images: [
      {
        url: 'https://yourdomain.com/images/resound-hearing-aids-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ReSound Hearing Aids Collection - TunifyPro',
      },
      {
        url: 'https://yourdomain.com/images/resound-hearing-aids-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'ReSound Smart Hearing Aids - M&RIE Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReSound Hearing Aids - Smart Technology & Connectivity | TunifyPro',
    description: 'Discover ReSound\'s innovative hearing aids with M&RIE technology and Bluetooth LE Audio at TunifyPro.',
    creator: '@TunifyPro',
    images: ['https://yourdomain.com/images/resound-hearing-aids-twitter.jpg'],
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
    name: 'ReSound Hearing Aids - Smart Technology & Connectivity',
    description: 'Discover ReSound\'s innovative hearing aids collection at TunifyPro. Experience smart hearing technology with M&RIE, Bluetooth LE Audio, and AI-powered sound processing.',
    url: 'https://yourdomain.com/products/resound',
    mainEntity: {
      '@type': 'ItemList',
      name: 'ReSound Hearing Aids Collection',
      description: 'Complete range of ReSound hearing aids featuring M&RIE technology, Bluetooth LE Audio, and smart connectivity',
      numberOfItems: 8,
      itemListElement: [
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/resound/vivia',
          name: 'ReSound Vivia',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'ReSound'
          },
          description: 'Latest flagship with dual-chip architecture featuring AI-powered speech processing',
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
          '@id': 'https://yourdomain.com/products/resound/nexia',
          name: 'ReSound Nexia',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'ReSound'
          },
          description: 'Next-era hearing with Bluetooth LE Audio and Auracast technology'
        },
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/resound/one',
          name: 'ReSound ONE',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'ReSound'
          },
          description: 'Revolutionary M&RIE technology with natural sound collection'
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
          name: 'ReSound',
          item: 'https://yourdomain.com/products/resound'
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
        'https://linkedin.com/company/tunifypro',
        'https://instagram.com/tunifypro'
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
        <ReSound />
        <Footer />
      </div>
    </>
  )
}
