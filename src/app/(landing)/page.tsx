"use client"
import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import { cn } from "@/lib/utils"
import AdBanner from "@/components/common/ad-banner"
import HomeGallery from "@/components/home/home-gallery"
import HomePage from "@/components/pages/home.page"
import { useEffect, useState } from "react"
import { getHomeArticles } from '@/graph/apollo';
// import HomeGallery from "@/components/home/home-gallery"
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {

    setLoading(true);
    const data = await getHomeArticles();
    setArticles(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const imageMainUrl = "https://ap-south-1.graphassets.com/clume5wz10c1507pi8xxhh972";

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


  const firstArticle = articles[0];

  console.log("firstArticle", firstArticle);

  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HomePage articles={articles} loading={loading} />
    </div>
  )
}