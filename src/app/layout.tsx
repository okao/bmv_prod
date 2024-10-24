import "@/styles/globals.css"
import { Inter } from 'next/font/google';
import * as React from "react"
import type { Metadata, Viewport } from "next"
import { env } from "@/env.mjs"
import { ThemeProvider } from "@/providers/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import ScrollLayout from "@/components/layout/scroll-layout"
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider"
import { siteConfig } from "@/config/site";
import NextTopLoader from 'nextjs-toploader';
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
// import IconFav from "../../public/favicon.ico"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

import GoogleAdsense from "@/lib/GoogleAdsense"
export const metadata: Metadata = {
  metadataBase: new URL("https://breakingmv.com"),
  title: "Breaking Mv",
  description: "Independent news from the Maldives",
  keywords: [
    "Breaking Mv", "Maldives", "News", "Breaking News", "Maldives News", "Maldives Breaking News",
    "MV Breaking News", "MV News",
    "Independent news from the Maldives"
  ],
  openGraph: {
    title: {
      default: "Breaking Mv",
      template: "%s",
    },
    description: "Independent news from the Maldives",
    url: "https://breakingmv.com",
    images: [
      {
        url: "https://breakingmv.com/_next/static/media/logo.b4bbb8bf.svg",
        width: 600,
        height: 315,
        alt: "Independent news from the Maldives",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Breaking Mv",
  },
  twitter: {
    site: "@okmvok",
    creator: "@okmvok",
    card: "summary_large_image",
    title: "Breaking Mv",
    description: "Independent news from the Maldives",
    images: [
      {
        url: "https://breaking.oala.dev/_next/static/media/logo.b4bbb8bf.svg",
        width: 600,
        height: 315,
        alt: "Independent news from the Maldives",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="dv">
      <head>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8C1V51V612"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8C1V51V612');
          `}
        </Script>
        <meta name="google-adsense-account" content="ca-pub-3231959529193850" />
        {/* <GoogleAdsense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || "3231959529193850"} /> */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3231959529193850"
        /> */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID || "ca-pub-3231959529193850"}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body>
        <NextTopLoader
            color="#2286dd"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={400}
            shadow="0 0 10px #3fbef5,0 0 5px #1d76c4"
        />
        <ScrollLayout>
          <SmoothScrollProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="white"
                enableSystem
                disableTransitionOnChange
            >
              <div className={inter.className}>{children}</div>
              <Toaster />
              <ScrollToTopButton />
              {/* <TailwindIndicator /> */}
            </ThemeProvider>
          </SmoothScrollProvider>
        </ScrollLayout>
      </body>
    </html>
  );
}
