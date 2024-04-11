import React from 'react'
import { mvWaheed } from '@/config/fonts'
import { cn } from '@/lib/utils'

const ArticleTags = ({ tags, menus }: {tags: string[], menus: string[]}) => {
  return (
    <div className="rtl container flex flex-col items-center gap-y-4 px-6 md:flex-row md:justify-between md:px-10">
      <div>
        {
          menus?.map((menu: any, index: number) => {
            return (
              <div
                key={index}
              >
                <a

                className={cn(
                  "w-[180px] bg-gray-200 px-4 text-center font-normal text-black hover:text-mired-900 md:text-lg",
                  mvWaheed.className
                )}
                href={`/menus?menu=${menu}`}
              >
                <span>{menu}</span>
                {/* &nbsp; */}
                {/* if not last */}
                {index < menus?.length - 1 && (
                  <>
                    <span className="text-gray-400 dark:text-gray-100">|</span>
                    &nbsp;
                  </>
                )}
              </a>
              </div>
            )
          })
        }
      </div>

      <div>
        {
          tags?.map((tag: any, index: number) => {
            return (
              <a
                key={index}
                className={cn(
                  "w-[180px] bg-gray-200 px-4 text-center font-normal text-mired-500 hover:text-mired-900 md:text-lg",
                  mvWaheed.className
                )}
                href={`/tags?tag=${tag}`}
              >
                <span>{tag}</span>
                {/* &nbsp; */}
                {/* if not last */}
                {index < tags?.length - 1 && (
                  <>
                    <span className="text-gray-400 dark:text-gray-100">|</span>
                    &nbsp;
                  </>
                )}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default ArticleTags