import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import AdBanner from "@/components/common/ad-banner"
import Link from 'next/link'
import Image from 'next/image'
import MainArticle from './main-article'
import MainOtherArticle from './main-other-article'
import LatestNews from './latest-news'
import EditorialSection from './editorial-section'
import PoliticsSection from './politics-section'

const imageMainUrl = "https://ap-south-1.graphassets.com/clume5wz10c1507pi8xxhh972"

const HomePage = ({ articles, loading }: any) => {


  const firstArticle = articles[0];



  return (
    <div className="flex-1">
      <section className="relative">
        <div className="md:mt-10">
          <div className="mx-auto md:container">
            <div className="gap-6 md:flex md:flex-row-reverse">
              <MainArticle loading={loading} firstArticle={firstArticle} imageMainUrl={imageMainUrl} />

              <MainOtherArticle articles={articles} imageMainUrl={imageMainUrl} loading={loading} />
            </div>
          </div>
        </div>

        <div className="mx-4 md:container">
          <div
            id="homebreak"
            className="separator--dotted mx-auto mt-12"
          ></div>
        </div>

        <div className="">
          <div className="mx-auto mt-4 pt-0">
            <h2
              className={cn(
                "mb-8 mt-6 text-center text-3xl font-bold",
                mvWaheed.className
              )}
            >
              ފަހުގެ ހަބަރު
            </h2>
            <LatestNews articles={articles} imageMainUrl={imageMainUrl} loading={loading} />
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <AdBanner
            href={"https://www.mwsc.com.mv/"}
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/iauBm60Jix0j3BcWCxSxhXb2S.jpg"
            }
          />
        </div>

        <EditorialSection article={firstArticle} imageMainUrl={imageMainUrl} loading={loading} />

        <div className="mt-10 md:mt-16">
          <AdBanner
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/kKJIC6cELvUxqmcp7ww3AO4AG.png"
            }
            href={"https://www.maldivesfinest.com/"}
          />
        </div>

        <PoliticsSection article={firstArticle} imageMainUrl={imageMainUrl} loading={loading} />

        <div className="mt-8 md:mt-10">
          <AdBanner
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/2H8HgAVl6nqr3KxdWq0hMAo9M.jpeg"
            }
            href={"https://www.maldivesfinest.com/"}
          />
        </div>

      </section>
    </div>
  )
}

export default HomePage