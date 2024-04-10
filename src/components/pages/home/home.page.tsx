"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import AdBanner from "@/components/common/ad-banner"
import Link from 'next/link'
import Image from 'next/image'
import LatestNews from './latest-news'
import EditorialSection from './editorial-section'
import PoliticsSection from './politics-section'
import MaldivesSection from './maldives-section'
import WorldSection from './world-section'
import MainSection from './main-section'
import PeopleSection from './people-section'
import { useEffect, useState } from "react"
import { getHomeArticles, getMainArticles } from '@/graph/apollo';


const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [homeArticles, setHomeArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    setLoading(true);
    const data = await getMainArticles();
    setArticles(data);
    setLoading(false);
  };

  const fetchHomeArticles = async () => {
    setLoading(true);
    const homeData = await getHomeArticles();
    setHomeArticles(homeData);
    setLoading(false);
  }

  useEffect(() => {
    fetchArticles();
    fetchHomeArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex-1">
        <section className="relative">
          <div className="md:mt-10">
            <div className="mx-auto md:container">
              <div className="gap-6 p-4 md:flex md:flex-row-reverse">
                <div className="rtl mb-10 min-h-[400px] bg-okaogray-400 dark:bg-slate-900 dark:shadow-lg md:mb-0 md:flex md:w-4/6 md:rounded-lg">
                  <div className="mb-6 flex-1 md:mb-0">
                    <div className="size-full">
                      <div className="flex size-full flex-col justify-between gap-6 p-4 md:flex-row">
                        <div className="h-[150px] w-full animate-pulse bg-okaogray-600/50 md:h-full">

                        </div>
                        <div className="h-[150px] w-full animate-pulse bg-okaogray-600/50 md:h-full">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 bg-okaogray-400 p-5 opacity-50 dark:bg-slate-900 dark:shadow-lg md:ml-3 md:w-2/6 md:rounded-lg">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                    <div className="h-4 animate-pulse rounded bg-okaogray-600/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // console.log("Home Articles", homeArticles);

  return (
    <div className="flex-1">
      <section className="relative">


        <div className="md:mt-10">
          <div className="mx-auto md:container">
            <div className="gap-6 md:flex md:flex-row-reverse">
              <MainSection articles={articles} imageMainUrl={imageMainUrl} loading={loading} />
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
            <LatestNews homeArticles={homeArticles} loading={loading} />
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

        <EditorialSection article={articles} imageMainUrl={imageMainUrl} loading={loading} />


        <div className="mt-10 md:mt-16">
          <AdBanner
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/kKJIC6cELvUxqmcp7ww3AO4AG.png"
            }
            href={"https://www.maldivesfinest.com/"}
          />
        </div>

        {/*

        <MaldivesSection article={articles} imageMainUrl={imageMainUrl} loading={loading} />

        <WorldSection article={articles} imageMainUrl={imageMainUrl} loading={loading} />

        <div className="mt-8 md:mt-10">
          <AdBanner
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/2H8HgAVl6nqr3KxdWq0hMAo9M.jpeg"
            }
            href={"https://www.maldivesfinest.com/"}
          />
        </div>

        <div className="md:mt-10">
          <div className="mx-auto md:container">
            <div className="gap-6 md:flex md:flex-row-reverse">
              <PeopleSection articles={articles} imageMainUrl={imageMainUrl} loading={loading} />
            </div>
          </div>
        </div> */}

      </section>
    </div>
  )
}

export default HomePage