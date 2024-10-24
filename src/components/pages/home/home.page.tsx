"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import AdBanner from "@/components/common/ad-banner"
import Link from 'next/link'
import Image from 'next/image'
import LatestNews from './latest-news'
import ReportSection from './report-section'
import PoliticsSection from './politics-section'
import MaldivesSection from './maldives-section'
import WorldSection from './world-section'
import MainSection from './main-section'
import PeopleSection from './people-section'
import { useEffect, useState } from "react"
import {
  getHomeArticles,
  getMainArticles,
  getArticleWithTypeCount
} from '@/graph/apollo';
import AdMain from '../../../../public/images/ads/wellco_banner.jpeg'
import AdBannerTwo from '@/components/common/ad-banner-two'
import AdBannerThree from '@/components/common/ad-banner-three'
import dynamic from "next/dynamic";
const GoogleAdBanner = dynamic(() => import("@/lib/_AdsBanner"), {
 ssr: false,
});


const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [homeArticles, setHomeArticles] = useState([]);
  const [reportArticles, setReportArticles] = useState([]);
  const [maldivesArticles, setMaldivesArticles] = useState([]);
  const [worldArticles, setWorldArticles] = useState([]);
  const [peopleArticles, setPeopleArticles] = useState([]);
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

  const fetchReportArticles = async () => {
    setLoading(true);
    const reportData = await getArticleWithTypeCount("ރިޕޯޓް", 3);
    setReportArticles(reportData);
    setLoading(false);
  }

  const fetchMaldivesArticles = async () => {
    setLoading(true);
    const maldivesData = await getArticleWithTypeCount("ރާއްޖެ", 4);
    setMaldivesArticles(maldivesData);
    setLoading(false);
  }

  const fetchWorldArticles = async () => {
    setLoading(true);
    const worldData = await getArticleWithTypeCount("ދުނިޔެ", 4);
    setWorldArticles(worldData);
    setLoading(false);
  }

  const fetchPeopleArticles = async () => {
    setLoading(true);
    const peopleData = await getArticleWithTypeCount("މީހުން", 4);
    setPeopleArticles(peopleData);
    setLoading(false);
  }

  useEffect(() => {
    fetchArticles();
    fetchHomeArticles();
    fetchReportArticles();
    fetchMaldivesArticles();
    fetchWorldArticles();
    fetchPeopleArticles();
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
        <div className="md:mt-5">
          <AdBanner
            href={"https://2ly.link/20VeX"}
          />
        </div>
        <div className="md:mt-10">
          <div className="mx-auto md:container">
            <div className="gap-6 md:flex md:flex-row-reverse">
              <MainSection articles={articles} loading={loading} />
            </div>
          </div>
        </div>
        <div className="mx-4 md:container">
          <div
            id="homebreak"
            className="separator--dotted mx-auto mt-5"
          ></div>
        </div>
        {/* <div className="mt-5 hidden md:block">
          <AdBanner
            href={"https://www.coca-cola.com/mv/en"}
          />
        </div> */}
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

        <ReportSection articles={reportArticles} loading={loading} />


        <div className="mt-10 md:mt-16">
          <AdBannerTwo
            href={"https://www.maldivesfinest.com/"}
          />
        </div>



        <MaldivesSection articles={maldivesArticles} loading={loading} />

        <div className="mt-4 bg-gray-200 py-4 dark:bg-slate-900 md:mt-10">
          <div className="mx-auto">
            <div className="gap-6 md:flex md:flex-row-reverse">
              <PeopleSection articles={peopleArticles} loading={loading} />
            </div>
          </div>
        </div>


        <div className="mt-8 md:mt-10">
          <AdBannerThree
            href={"https://2ly.link/20VeX"}
          />
        </div>

        <WorldSection articles={worldArticles} loading={loading} />


      </section>
      <GoogleAdBanner
        data-ad-slot="6068850440"
        data-full-width-responsive="true"
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  )
}

export default HomePage