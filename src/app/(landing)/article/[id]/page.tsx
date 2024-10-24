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
import { title } from "process"

async function myAction(id: string) {
    'use server'
  const { getArticleById } = await import('@/graph/apollo');
  // console.log("ID", id);
  const data = await getArticleById(id);

  return data;
}


export async function generateMetadata({ params } : { params: { id: string } }): Promise<Metadata> {
  const getArticle = await myAction(params?.id) || {};
  const article = getArticle[0];

  const baseUrl = "https://breakingmv.com/article"

  const Metas = {
    title: article?.latinTitle ? article?.latinTitle : article?.title,
    description: article?.latinSubTitle ? article?.latinSubTitle : article?.subTitle,
    type: "article",
    other: {
      ["fb:app_id"]: "61556479060350",
    },
    openGraph: {
      locale: "en_US",
      type: "article",
      title: article?.latinTitle ? article?.latinTitle : article?.title,
      description: article?.latinSubTitle ? article?.latinSubTitle : article?.subTitle,
      url: `${baseUrl}/${article?.id}`,
      siteName: "Breaking MV",
      publishedTime: article?.publishedAt,
      modifiedTime: article?.updatedAt,
      // title: "Open Graph Meta Tags: Everything You Need to Know",
      // description: "Open Graph tags can significantly improve your click-through rate on social media. Learn how to successfully implement them on your website.",
      images: [
        {
          url: `${article?.mainImage?.url}`,
          width: 600,
          height: 315,
          alt: article?.latinTitle ? article?.latinTitle : article?.title,
        }
      ]
    },
    twitter: {
      site: "@okmvok",
      creator: "@okmvok",
      card: "summary_large_image",
      title: article?.latinTitle ? article?.latinTitle : article?.latinTitle,
      description: article?.latinSubTitle ? article?.latinSubTitle : article?.subTitle,
      image: [
        {
          url: `${article?.mainImage?.url}`,
          width: 600,
          height: 315,
          alt: article?.latinTitle ? article?.latinTitle : article?.title,
        },
      ],
    },
  }

  return Metas;
}

const Single = async ({ params }: any) => {

  const getArticle = await myAction(params?.id) || {};

  const article = getArticle[0];

  // console.log("Article", article?.articleContent?.[0]?.content?.raw?.children[0]);

  const menus = [] as string[];
  article?.articleMenus?.map((menu: any, index: number) => {
    menus.push(menu?.name);
  });

  return (
    <div>
      <div className="container grid grid-cols-12 px-0 lg:gap-x-8 lg:gap-y-4 lg:p-4">
        {/* Single Article Image Banner Title and SubTitle */}
        <ImageBanner article={article} />

        {/* Single Article Main Ad */}
        {/* <SingleMainAd /> */}
      </div>

      {/* <ArticleTags tags={article?.articleTags?.value} /> */}

      <div className="container">
        <div
          id="homebreak"
          className="separator--dotted mx-auto md:container"
        ></div>
        <div className="mt-10 flex justify-end">
          {/* <div className="mb-6 hidden h-[250px] w-full overflow-hidden rounded-[10px] bg-okaogray-500 p-4 pb-6 dark:bg-slate-800 md:block">

            <p
              className="text-left text-sm text-gray-800 dark:text-gray-300 md:rounded-b-lg md:px-4 md:pb-4 md:text-base md:font-thin md:leading-6 md:tracking-wider"
            >
              For Advertisement and Sponsored Content, please contact us at{" "}
              <a href="mailto:admin@breakingmv.com"> admin@breakingmv.com</a>
            </p>
            <p
              className={cn("rtl text-right text-sm text-gray-800 dark:text-gray-300 md:rounded-b-lg md:px-4 md:pb-10 md:text-base md:font-thin md:leading-6 md:tracking-wider", mvFaseyha.className)}
            >
              {""} އިޝްތިހާރާއި ޖެހުމަށް އަޅުގަދުމެންނަށް އީމެލްކޮށްލައްވާ
              <a href="mailto:admin@breakingmv.com"> admin@breakingmv.com</a>
            </p>
          </div> */}
          <div className="mt-6  max-w-4xl content-center text-right md:mt-0 lg:pl-6">
            <ContentBody article={article} />
          </div>
        </div>
        <RelatedArticlesMobile article={article} />
      </div>

      {/* <div className="mt-10 md:mt-16">
        <AdBanner
          src={
            "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/kKJIC6cELvUxqmcp7ww3AO4AG.png"
          }
          href={"https://www.maldivesfinest.com/"}
        />
      </div> */}
    </div>
  )
}

export default Single
