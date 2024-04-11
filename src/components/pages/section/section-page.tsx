'use client'

import { cn } from '@/lib/utils'
import { mvWaheed } from '@/config/fonts'
import React, {useState, useEffect} from 'react'
import { getArticleWithTypeCount } from '@/graph/apollo';
import moment from 'moment';

const SectionPage = ({ articles }: { articles: any }) => {

  console.log("Section Articles", articles)

  return (
    <div>
      <div className='mt-4 overflow-hidden md:container md:mx-auto'>
        <div className='-my-4 flex flex-row-reverse flex-wrap text-center sm:-mx-4 xl:mx-0'>
          {
            articles?.map((article: any, index: number) => (

              <div className='group flex w-full flex-row-reverse border-l  border-t  border-dashed border-gray-300 p-4 transition
 duration-300  ease-in-out  sm:w-1/3  sm:flex-col lg:w-1/4' key={index}>

                <div className='size-[116px] shrink-0 sm:h-[174px] sm:w-full'>
                  <a
                    href={`/article/${article?.node?.id}`}
                    title={article?.node?.title}
                  >
                    <div className='relative size-full overflow-hidden bg-[#cfb9af]'>
                      <img
                        src={article?.node?.mainImage?.url}
                        alt=""
                      />
                    </div>
                  </a>
                </div>

                <a
                  href={`/article/${article?.node?.id}`}
                  title={article?.node?.title}
                  className='mr-6 flex w-full flex-col justify-between text-right sm:mr-0 md:justify-start md:text-right'
                >
                  <p className={cn("text-xl leading-10 text-gray-700", mvWaheed.className)}>
                   {article?.node?.title}
                  </p>
                  <div className='mr-6 flex justify-end space-x-2 text-[13px] text-gray-400 md:mr-0'>
                    <div className='flex items-center'>
                      <img
                        width={16}
                        alt='time icon'
                        src='https://cdn.mihaaru.com/assets/mhr/icons/icon-listing-time.svg?v=2'
                      />
                      <span className="ml-1 w-full">
                        {moment(article?.node?.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </a>

              </div>

            ))

          }
        </div>
      </div>
    </div>
  )
}

export default SectionPage