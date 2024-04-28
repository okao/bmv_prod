import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee, mvWaheed } from '@/config/fonts'
import moment from 'moment';


const MaldivesSection = ({ articles, loading }: { articles: any, loading: boolean }) => {

  // console.log("MaldivesSection -> articles", articles);
  const firstArticle = articles?.edges && articles?.edges[0]?.node || null;
  const otherArticles = articles?.edges && articles?.edges?.slice(1, 4) || [];

  // console.log("MaldivesSection -> firstArticle", firstArticle)
  // console.log("MaldivesSection -> otherArticles", otherArticles)


  return (
    <div className="mt-10 md:mt-16">
      <div className="rtl mx-auto md:container">
        <h3
          className={cn(
            "mt-3 flex flex-row items-center space-x-3 space-x-reverse px-6 pb-4 text-center text-3xl md:px-0 md:text-right",
            mvAanamu.className
          )}
        >
          <div className="flex-none">ރާއްޖެ</div>
          <div className="size-3 flex-none bg-okaoblue-500"></div>
          <div className="separator--dotted"></div>
        </h3>

        <div className="mt-6 grid grid-cols-5 gap-8">
          <div className="col-span-5 md:col-span-3">
            <a
              className="relative clear-both block h-full border-b border-gray-200 md:border-b-0"
              href={`/article/${firstArticle?.id}`}
            >
              <img
                className="size-full object-cover md:rounded-lg"
                src={firstArticle?.mainImage?.url}
                alt=""
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black px-10 py-6 text-right">
                <h3
                  className={cn(
                    "text-3xl leading-[3.5rem] text-white md:w-2/5 md:text-5xl md:leading-[5.5rem]",
                    mvAanamu.className
                  )}
                >
                  {firstArticle?.title}
                </h3>
              </div>
            </a>
          </div>
          <div className="col-span-5 space-y-7 bg-okaogray-400 p-4 dark:bg-slate-900 md:col-span-2 md:rounded-lg">

            {
              otherArticles?.map((article: any, index: number) => {
                return (
                  <a
                    className="flex"
                    href={`/article/${article?.node?.id}`}
                    key={index}
                  >
                    <div className="flex-1">
                      <div className='flex flex-col justify-between'>
                        <h2
                          className={cn(
                            "mb-3 text-xl font-normal leading-relaxed",
                            mvAanamu.className
                          )}
                        >
                          {article?.node?.title}
                        </h2>
                        {/* <p
                          className={cn(
                            "mb-3 hidden text-gray-500 md:line-clamp-3",
                            mvRasmee.className
                          )}
                        >
                          {article?.node?.subTitle}
                        </p> */}
                        <div
                          className='flex'
                        >
                          <p
                            className={cn(
                              "ltr text-gray-500",
                              mvRasmee.className
                            )}
                          >
                            {/* {article?.node?.subTitle} */}

                            {
                              moment(article?.node?.createdAt).fromNow()
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 mr-4 w-40 md:w-48">
                      <img
                        className="size-full rounded-lg object-cover"
                        src={article?.node?.mainImage?.url}
                        alt=""
                      />
                    </div>
                  </a>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default MaldivesSection