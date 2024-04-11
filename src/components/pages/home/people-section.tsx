
import { mvAanamu, mvRasmee, mvFaseyha, mvWaheed } from '@/config/fonts'
import { cn } from '@/lib/utils'
import moment from 'moment'
import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

const PeopleSection = ({ articles, loading }: { articles: any, loading: boolean }) => {
  const firstArticle = articles?.edges && articles.edges[0].node || null;
  const otherTwoArticles = articles?.edges && articles.edges.slice(1, 3) || [];

  return (
    <div className='w-full flex-col'>
      <div className=''>
        <h2
          className={cn(
            "mb-8 mt-6 text-center text-3xl font-bold",
            mvWaheed.className
          )}
        >
          މީހުންގެ ވާހަކަ
        </h2>
      </div>

      <div className="mt-10 w-full md:mt-10">
        <div className="rtl mx-auto grid grid-cols-12 gap-8 md:container md:gap-10">
          <a href={`/article/${firstArticle?.id}`} className="col-span-12 md:col-span-6 md:py-20">
            <div className="flex h-full flex-col">
              <img
                className="relative mx-auto -mb-20 h-12 w-4/5 flex-1 object-cover"
                src={firstArticle?.mainImage?.url}
                alt=""
              />
              <div
                className="mt-8 w-full bg-okaogray-500 pb-10 pt-20 text-center dark:bg-slate-900 dark:bg-opacity-50"
                style={{ minHeight: "200px" }}
              >
                <h2
                  className={cn(
                    "mx-auto w-2/3 text-3xl leading-loose md:w-auto",
                    mvAanamu.className
                  )}
                >
                  {firstArticle?.title}
                </h2>
              </div>
            </div>
          </a>

          {
            otherTwoArticles?.map((article: any, index: number) => {
              return (
                <a
                  href={`/article/${article?.node?.id}`}
                  className="col-span-12 h-full md:col-span-3 md:py-20"
                  key={index}
                >
                  <div className="flex h-full flex-col justify-between bg-okaogray-400 bg-opacity-50 dark:bg-slate-800">
                    <div className="p-4">
                      <h2
                        className={cn(
                          "rtl mx-auto w-2/3 text-center text-2xl leading-loose md:text-3xl md:leading-loose",
                          mvAanamu.className
                        )}
                      >
                        {article?.node?.title}
                      </h2>
                      {/* <p
                        className={cn(
                          "mt-4 text-center text-okaoblue-700",
                          mvWaheed.className
                        )}
                      >
                        އައިޝާ މުހައްމަދު
                      </p> */}
                      <div className="mx-auto mt-8 h-0.5 w-2/3 border-t border-okaoblue-300"></div>
                    </div>

                    <div className="p-8">
                      <p
                        className={cn(
                          "font-randhoo line-clamp-7 leading-relaxed",
                          mvRasmee.className
                        )}
                      >
                        {article?.node?.subTitle}
                      </p>
                    </div>
                  </div>
                </a>
              )
              // console.log("ReportSection -> OtherTwoArticles", article);
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PeopleSection;