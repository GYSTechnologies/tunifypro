import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import RexSound from '@/components/sections/products/rexsound/RexSound'

// Metadata for SEO optimization
export const metadata = {
  title: 'Rex Sound Hearing Aids - Affordable & Reliable Solutions | TunifyPro',
  description: 'Discover Rex Sound hearing aids at TunifyPro - affordable, reliable hearing solutions starting from ₹200. Perfect for budget-conscious users seeking quality hearing assistance with easy-to-use features.',
  icons:{
    icon:'/tunifyprologo.png',
  },
  keywords: [
    'Rex Sound hearing aids',
    'affordable hearing aids',
    'budget hearing aids',
    'cheap hearing aids India',
    'pocket hearing aids',
    'BTE hearing aids',
    'hearing aids under 1000',
    'TunifyPro',
    'reliable hearing solutions',
    'entry level hearing aids',
    'hearing aid machine',
    'digital hearing aids'
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
    canonical: '/products/rex-sound',
    languages: {
      'en-US': '/products/rex-sound',
    },
  },
  openGraph: {
    title: 'Rex Sound Hearing Aids - Affordable & Reliable Solutions | TunifyPro',
    description: 'Discover Rex Sound hearing aids at TunifyPro - affordable, reliable hearing solutions starting from ₹200. Perfect for budget-conscious users seeking quality hearing assistance.',
    url: 'https://yourdomain.com/products/rex-sound',
    siteName: 'TunifyPro',
    images: [
      {
        url: 'https://yourdomain.com/images/rex-sound-hearing-aids-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rex Sound Hearing Aids - Affordable Solutions at TunifyPro',
      },
      {
        url: 'https://yourdomain.com/images/rex-sound-hearing-aids-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Rex Sound Pocket & BTE Hearing Aids',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rex Sound Hearing Aids - Affordable & Reliable Solutions | TunifyPro',
    description: 'Discover Rex Sound hearing aids at TunifyPro - affordable, reliable hearing solutions starting from ₹200.',
    creator: '@TunifyPro',
    images: ['https://yourdomain.com/images/rex-sound-hearing-aids-twitter.jpg'],
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
    name: 'Rex Sound Hearing Aids - Affordable & Reliable Solutions',
    description: 'Discover Rex Sound hearing aids at TunifyPro - affordable, reliable hearing solutions starting from ₹200. Perfect for budget-conscious users seeking quality hearing assistance.',
    url: 'https://yourdomain.com/products/rex-sound',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Rex Sound Hearing Aids Collection',
      description: 'Affordable hearing aids collection featuring pocket-style and BTE models with reliable performance',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/rex-sound/premium-8-channel',
          name: 'Rex Sound Premium 8 Channel',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Rex Sound'
          },
          description: 'Premium pocket-style hearing aid with 8-channel processing',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '800',
            priceCurrency: 'INR',
            priceRange: '₹800-₹1,200',
            seller: {
              '@type': 'Organization',
              name: 'TunifyPro'
            }
          }
        },
        {
          '@type': 'Product',
          '@id': 'https://yourdomain.com/products/rex-sound/z-176-pocket',
          name: 'Rex Sound Z-176 Pocket Model',
          category: 'Hearing Aids',
          brand: {
            '@type': 'Brand',
            name: 'Rex Sound'
          },
          description: 'Budget-friendly pocket-style hearing aid with essential features',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '300',
            priceCurrency: 'INR',
            priceRange: '₹200-₹400',
            seller: {
              '@type': 'Organization',
              name: 'TunifyPro'
            }
          }
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
          name: 'Rex Sound',
          item: 'https://yourdomain.com/products/rex-sound'
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
                <RexSound />
                <Footer />
            </div>
        </>
    )
}
