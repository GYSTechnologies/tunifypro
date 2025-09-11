import React from 'react'
import Signia from '@/components/sections/products/signia/Signia'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

// Metadata for SEO optimization
export const metadata = {
  title: 'Signia Hearing Aids - Be Brilliant Technology | TunifyPro',
  description: 'Discover Signia\'s innovative hearing aids at TunifyPro. Experience life-enhancing technology with Integrated Xperience, Pure Charge&Go, and advanced AI features. Be Brilliant with premium hearing solutions.',
  keywords: [
    'Signia hearing aids',
    'Be Brilliant hearing aids',
    'Integrated Xperience',
    'Signia Pure Charge&Go',
    'Signia Styletto',
    'AI hearing technology',
    'rechargeable hearing aids',
    'Bluetooth hearing aids',
    'TunifyPro',
    'premium hearing solutions',
    'natural sound hearing aids',
    'wireless hearing aids'
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
    canonical: '/products/signia',
    languages: {
      'en-US': '/products/signia',
    },
  },
  openGraph: {
    title: 'Signia Hearing Aids - Be Brilliant Technology | TunifyPro',
    description: 'Discover Signia\'s innovative hearing aids at TunifyPro. Experience life-enhancing technology with Integrated Xperience, Pure Charge&Go, and advanced AI features.',
    url: 'https://yourdomain.com/products/signia',
    siteName: 'TunifyPro',
    images: [
      {
        url: 'https://yourdomain.com/images/signia-hearing-aids-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Signia Hearing Aids Collection - Be Brilliant Technology at TunifyPro',
      },
      {
        url: 'https://yourdomain.com/images/signia-hearing-aids-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Signia Pure Charge&Go and Integrated Xperience Models',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signia Hearing Aids - Be Brilliant Technology | TunifyPro',
    description: 'Discover Signia\'s innovative hearing aids with Integrated Xperience and AI technology at TunifyPro.',
    creator: '@TunifyPro',
    images: ['https://yourdomain.com/images/signia-hearing-aids-twitter.jpg'],
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
    name: 'Signia Hearing Aids - Be Brilliant Technology',
    description: 'Discover Signia\'s innovative hearing aids at TunifyPro. Experience life-enhancing technology with Integrated Xperience, Pure Charge&Go, and advanced AI features.',
    url: 'https://yourdomain.com/products/signia',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Signia Hearing Aids Collection',
      description: 'Premium hearing aids featuring Integrated Xperience, Be Brilliant technology, and advanced AI processing',
      numberOfItems: 8,
      itemListElement: [
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/signia/pure-charge-go-ix',
          name: 'Signia Pure Charge&Go IX',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Signia'
          },
          description: 'Groundbreaking Integrated Xperience with RealTime Conversation Enhancement technology',
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
          '@id': 'https://yourdomain.com/products/signia/styletto-ax',
          name: 'Signia Styletto AX',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Signia'
          },
          description: 'Elegant, slim design with Augmented Xperience technology'
        },
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/signia/active-pro',
          name: 'Signia Active Pro',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Signia'
          },
          description: 'Revolutionary earbud-style hearing aids that look like premium wireless earbuds'
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
          name: 'Signia',
          item: 'https://yourdomain.com/products/signia'
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
                <Signia />
                <Footer />
            </div>
        </>
    )
}
