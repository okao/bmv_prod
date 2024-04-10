import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import { cn } from "@/lib/utils"
import AdBanner from "@/components/common/ad-banner"
import HomeGallery from "@/components/home/home-gallery"
import HomePage from "@/components/pages/home/home.page"
import { getHomeArticles, getMainArticles } from '@/graph/apollo';
// import HomeGallery from "@/components/home/home-gallery"
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      {/* <HomePage articles={articles} loading={loading} /> */}
      <HomePage />
    </div>
  )
}