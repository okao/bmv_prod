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

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://breaking.oala.dev",
    images: [
      {
        url: "https://breaking.oala.dev/_next/static/media/logo.b4bbb8bf.svg",
        width: 600,
        height: 315,
        alt: "މި ބަދަލާއެކު ފްރީލާންސް މީހުން ބޭރުން އަންނަ ފައިސާ ރާއްޖޭގެ އެކައުންޓުން ނެގޭނެ އެވެ. މި ބަދަލަކީ ރައީސްގެ ރިޔާސީ ވައުދެކެވެ.",
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://breaking.oala.dev/_next/static/media/logo.b4bbb8bf.svg",
        width: 600,
        height: 315,
        alt: "މި ބަދަލާއެކު ފްރީލާންސް މީހުން ބޭރުން އަންނަ ފައިސާ ރާއްޖޭގެ އެކައުންޓުން ނެގޭނެ އެވެ. މި ބަދަލަކީ ރައީސްގެ ރިޔާސީ ވައުދެކެވެ.",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
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
              <TailwindIndicator />
            </ThemeProvider>
          </SmoothScrollProvider>
        </ScrollLayout>
      </body>
    </html>
  );
}
