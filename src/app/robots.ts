import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: [
        '*',
        'facebookexternalhit/1.1',
        'Twitterbot',
        'LinkedInBot',
        'WhatsApp',
        'Googlebot',
      ],
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: 'https://breakingmv.com/sitemap.xml',
  }
}