
import { mvAanamu, mvRasmee, mvFaseyha } from '@/config/fonts'
import { cn } from '@/lib/utils'
import moment from 'moment'
import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AdBanner from '@/components/common/ad-banner'

export function Skeleton({ number, width, height }: { number: number, width?: string, height?: string }) {
  return (
    Array(number).fill(0).map((el, index) => (
        <div key={index}>
          {/* <div className='flex h-[300px] flex-row items-center gap-2 rounded border-r-4 bg-gray-300/30 p-2 opacity-90 shadow-lg sm:w-[400px] md:h-full lg:w-[860px]'>
              <div className='size-[4.5rem] animate-pulse rounded-full bg-gray-300'></div>
              <div className='flex w-9/12 flex-col gap-2'>
                <span className='h-2 w-11/12 animate-pulse rounded-full bg-gray-300'></span>
                <span className='h-2 w-9/12 animate-pulse rounded-full bg-gray-300'></span>
              </div>
          </div> */}
      </div>
      ))
  )
}

const MainSection = ({ articles, loading }: { articles: any, loading: boolean }) => {
  const firstArticle = articles[0];
  const mainOtherArticles = articles?.slice(1, 3);

  // console.log("Main Section", firstArticle);

  return (
    <>
      <div className="rtl mb-10 cursor-pointer justify-between bg-okaogray-400 dark:bg-slate-900 dark:shadow-lg md:mb-0 md:flex md:w-4/6 md:rounded-lg">
        <div className="flex-1 md:mb-0">
          <Link
            className="relative flex size-full"
            href={`/article/${firstArticle?.node?.id}`}
          >
            {
              <Image
                  src={
                    `${firstArticle?.node?.mainImage?.url}`
                  }
                  alt=""
                  width={400}
                  height={200}
                  className="h-[300px] w-full object-cover opacity-0 transition-opacity md:rounded-r lg:h-[450px]"
                  onLoadingComplete={(image) => { image.classList.remove('opacity-0') }}
                  quality={80}
                />
            }
          </Link>
        </div>

        <Link
          href={`/article/${firstArticle?.node?.id}`}
          className="rtl flex w-full flex-col px-2 dark:text-gray-300 md:w-[45%] md:px-0 md:py-6 lg:h-[400px]"
        >
          <div>
            <h2
              className={cn(
                "mb-4 text-center text-3xl leading-loose md:px-4 md:text-right",
                mvAanamu.className
              )}
            >
              {
                firstArticle?.node?.title
              }
            </h2>
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-4 px-4 pb-4 text-base font-thin tracking-wider text-gray-800 dark:text-gray-300 md:rounded-b-lg">
            <div className='py-4'>
              <div className="mb-4 flex flex-col flex-wrap items-center gap-4 gap-y-3 md:items-start">
                <p
                  className="ltr mt-2 flex flex-1 items-center justify-start leading-snug"
                >
                  {
                    firstArticle?.node?.publishedAt && moment(firstArticle?.node?.publishedAt).format('D MMMM Y H:m')
                  }
                </p>
              </div>
            </div>

            <div className='flex justify-center text-center md:text-right'>
              <p className={cn("pl-2", mvRasmee.className)}>
                {
                  firstArticle?.node?.subTitle
                }
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* <div className="m-10 md:mt-16 md:hidden lg:hidden">
        <AdBanner
          href={"https://www.facebook.com/wezipmv/"}
        />
      </div> */}

      <div className="flex flex-row space-x-4 bg-okaogray-500 p-5 opacity-90 dark:bg-slate-900 dark:shadow-lg md:ml-3 md:w-2/6 md:rounded-lg">
        {
          mainOtherArticles.map((article: any, index: number) => {

            // const showBorder = index !== mainOtherArticles.length - 1;

            return (
              <div key={index} className='flex-1'>
                <a
                  key={index}
                  className="rtl grid gap-x-4"
                  href={`/article/${article?.node?.id}`}>
                    {/* <div className="mb-2 border">
                      <img
                        className="size-full rounded-lg object-cover"
                        src={`${article?.node?.mainImage?.url}`}
                        alt=""
                      />
                    </div> */}
                    <div className="mb-2 h-[200px] border">
                      <img
                        className="z-10 size-full rounded-lg object-cover"
                        src={article?.node?.mainImage?.url}
                        alt=""
                      />
                    </div>
                    <div className="grid items-center space-x-reverse">
                      <div>
                        <h2
                        className={cn(
                          "my-3 text-wrap text-xl font-normal  leading-loose",
                          mvAanamu.className
                        )}
                      >
                        {
                          article?.node?.title
                        }
                      </h2>
                      </div>
                        <div className="flex items-center">
                          <span className="ltr text-xs text-gray-500">
                            {
                              // hours ago
                              moment(article?.node?.createdAt).fromNow()
                            }
                          </span>
                        </div>
                    </div>
                </a>
                {/* {
                  showBorder && <hr className="mt-2 border-okaogray-600" />
                } */}
              </div>


            )
          })
        }
      </div>
    </>
  )
}

export default MainSection;