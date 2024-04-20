import React from 'react'
import { cn } from '@/lib/utils'
import { mvRasmee, mvWaheed } from '@/config/fonts'
import ShareButtons from "@/components/common/share-buttons"
import Image from "next/image"
import ShareNewButton from '@/components/common/share-new-button'
import moment from 'moment'
// import 'moment/locale/dv'


const imageMainUrl = "https://ap-south-1.graphassets.com/clume5wz10c1507pi8xxhh972"

const ImageBanner = async ({article}: any) => {
  // const getArticle = await myAction(params?.id) || {};
  // const xarticle = getArticle[0];

  const articleTags = article?.tags;
  // const url = "http://localhost:3000" + "/article/" + article?.id;
  const url = "https://breakingmv.com" + "/article/" + article?.id;

  // console.log("Article URL", url);

  return (
    <div className="col-span-12 lg:order-1 lg:col-span-9">
      <div className="lg:pb-8">
        <div className="relative flex flex-col items-center lg:mb-8">
          <div className="relative aspect-square size-full overflow-hidden bg-okaogray-400 p-4 shadow-xl dark:bg-slate-900 lg:aspect-[704/433] lg:rounded-[20px]">
            <img
              loading="lazy"
              decoding="async"
              sizes="75vw"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
                padding: "6px",
              }}
              className="rounded-[20px] object-cover transition-all"
              src={`${article?.mainImage?.url}`}
              alt=""
            />
          </div>
          <div className="animate-up relative mx-auto -mt-[25%] mb-3 flex flex-col rounded-[20px] transition  lg:absolute lg:-bottom-12 lg:mt-0">
            <span className="absolute size-full overflow-hidden">
              <span className="absolute size-full rounded-[20px] border border-[#00000014] bg-[#ffffff75] backdrop-blur-[11.2px] dark:bg-[#00000075]"></span>
            </span>
            <div className="relative mx-auto -mt-7 inline-block self-start rounded-full p-4 lg:ms-14">
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.14 19.5a9.964 9.964 0 0 0 2.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 21.5a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76ZM15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span> */}
            </div>
            <div className="rtl relative px-8 py-6 pt-4 lg:px-14">
              <h1
                className={cn(
                  "mb-4 line-clamp-5 text-center text-[32px] font-bold transition-all dark:text-white md:text-right lg:me-12",
                  mvWaheed.className
                )}
              >
                {article?.title}
              </h1>
              <div className="mb-4 flex flex-col flex-wrap items-center gap-4 gap-y-3">
                <a
                  className="group relative my-4 flex flex-col items-center gap-2 md:my-0 md:flex-row"
                  href="#"
                >
                  <span className="relative mb-1 aspect-square w-20 overflow-hidden rounded-full bg-gray-800 text-white dark:bg-gray-200 md:w-10">
                    <img src={
                      article?.articleAuthor?.image?.url || article?.publishedBy?.picture
                    } alt="" />
                  </span>
                  <p
                    className={cn(
                      "text-2xl font-black text-black dark:text-white md:text-lg",
                      mvRasmee.className
                    )}
                  >
                    {
                      article?.articleAuthor?.name ? article?.articleAuthor?.name : article?.publishedBy?.name
                    }
                  </p>
                </a>
                {/* <span className="absolute -top-5 right-2 size-6 overflow-hidden rounded-full">
                  <img
                    alt="logo"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    sizes="100vw"
                    src="https://www.al-monitor.com/sites/default/files/styles/article_header/public/2023-10/49f608a6bf2fa038d6c6388bc5686b2867ea4d5f.jpg?h=69f2b9d0&itok=p0Ar_W7D"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </span> */}
                <p
                  className="ltr mt-2 flex flex-1 items-center justify-start leading-snug"
                >
                  {/* <svg
                    className="mb-2 mr-1 inline h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg> */}
                  {/* 29/03/2024, 14:03:50 */}

                  {/* {
                    article?.publishedAt && new Date(article?.publishedAt).toLocaleString()
                  } */}

                  {
                    article?.publishedAt && moment(article?.publishedAt).format('D MMMM Y H:m')
                  }
                </p>

                {/* <ShareButtons
                  title={article?.title}
                  url={`${url}`}
                  summary={article?.subTitle}
                /> */}
              </div>
              <div className="">
                {
                  articleTags && articleTags?.value?.map((tag: string, index: number) => {
                    return (
                      <a
                        className="mb-3 me-3 inline-block gap-x-2 rounded-lg bg-gray-300/20 p-2 text-sm text-gray-800 transition-all hover:bg-red-600 hover:text-white dark:text-white dark:hover:bg-red-600 dark:hover:text-white"
                        href={`dv/search?tag=${tag}`}
                        key={index}
                      >
                        {tag}
                      </a>
                    )
                  })
                }
              </div>
              <div className='flex w-full justify-center'>
                  <ShareNewButton
                    title={article?.title}
                    text={article?.subTitle}
                    url={url}
                    image_url={`${article?.mainImage?.url}`}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className={cn(
          "rtl mx-5 my-4 text-center text-xl opacity-75 dark:text-white lg:mx-14",
          mvWaheed.className
        )}
      >
        {article?.subTitle}
      </p>
    </div>
  )
}

export default ImageBanner