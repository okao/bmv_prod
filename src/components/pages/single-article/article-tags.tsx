import React from 'react'
import { mvWaheed } from '@/config/fonts'
import { cn } from '@/lib/utils'

const ArticleTags = ({ article }: {article: any}) => {
  return (
    <div className="container grid grid-cols-12 px-0">
      <div className="order-1 col-span-12">
        <div className="flex items-center justify-center pb-4 pt-8 lg:justify-end lg:px-8 lg:pt-2">
          <a
            className={cn(
              "font-normal text-black hover:text-mired-900 md:text-lg",
              mvWaheed.className
            )}
            href="/category/report"
          >
            <span className="text-gray-700 dark:text-gray-100">ރިޕޯޓް</span>
            &nbsp;
            <span className="text-gray-400 dark:text-gray-100">|</span>&nbsp;
          </a>
          <a
            className={cn(
              "font-normal text-mired-500 hover:text-mired-900 md:text-lg",
              mvWaheed.className
            )}
            href="/tags/bank-of-maldives"
          >
            {
              article?.menus?.map((menu: any, index: number) => {
                return (
                  <span key={index}>
                    {menu?.name} {index < article?.menus?.length - 1 && " | "}
                  </span>
                )
              })
            }
          </a>
        </div>
      </div>
    </div>
  )
}

export default ArticleTags