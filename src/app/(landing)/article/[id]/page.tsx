import React from "react"
import { type Metadata } from "next"
import Head from "next/head"
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share"
import { mvAanamu, mvFaseyha, mvRasmee, mvWaheed } from "@/config/fonts"
import { cn } from "@/lib/utils"
import AdBanner from "@/components/common/ad-banner"
import ContentBody from "@/components/pages/single-article/content-body"
import RelatedArticles from "@/components/pages/single-article/related-articles"
import RelatedArticlesMobile from "@/components/pages/single-article/related-articles-mobile"
import ImageBanner from "@/components/pages/single-article/image-banner"
import SingleMainAd from "@/components/pages/single-article/single-main-ad"
import ArticleTags from "@/components/pages/single-article/article-tags"
import { SingleMetas } from "@/components/pages/single-article/single-metas"

async function myAction(id: string) {
    'use server'
  const { getArticleById } = await import('@/graph/apollo');
  // console.log("ID", id);
  const data = await getArticleById(id);

  return data;
}

export async function generateMetadata({ params } : { params: { id: string } }) {
  const getArticle = await myAction(params?.id) || {};
  const article = getArticle[0];
  return SingleMetas(article);
}

const Single = async ({ params }: any) => {

  const getArticle = await myAction(params?.id) || {};
  const article = getArticle[0];


  return (
    <div>
      <div className="container grid grid-cols-12 px-0 lg:gap-x-8 lg:gap-y-4 lg:p-4">
        {/* Single Article Image Banner Title and SubTitle */}
        <ImageBanner article={article} />

        {/* Single Article Main Ad */}
        <SingleMainAd />
      </div>

      <ArticleTags article={article} />

      <div className="container">
        <div
          id="homebreak"
          className="separator--dotted mx-auto mt-8 md:container"
        ></div>
        <div className="mt-10 flex">
          <div className="mb-6 hidden w-full overflow-hidden rounded-[10px] bg-okaogray-500 p-4 pb-8 dark:bg-slate-800 md:block">
            <RelatedArticles article={article} />
          </div>
          <div className="mt-6 max-w-3xl text-justify md:mt-0 lg:pl-6">
            {/* <ContentBody article={article} /> */}
          </div>
        </div>
        <RelatedArticlesMobile article={article} />
      </div>

      <div className="mt-10 md:mt-16">
        <AdBanner
          src={
            "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/kKJIC6cELvUxqmcp7ww3AO4AG.png"
          }
          href={"https://www.maldivesfinest.com/"}
        />
      </div>
    </div>
  )
}

export default Single
