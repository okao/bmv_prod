import React from 'react'
import { mvWaheed } from '@/config/fonts'
import { cn } from '@/lib/utils'

const ArticleTags = ({ tags }: {tags: string[]}) => {
  return (
    <div className="container flex flex-row justify-center">
      <div>
        {
          tags?.map((tag: any, index: number) => {
            return (
              <a
                key={index}
                className={cn(
                  "text-center font-normal text-mired-500 hover:text-mired-900 md:text-lg",
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