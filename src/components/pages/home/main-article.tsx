import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee } from '@/config/fonts'

const MainArticle = ({firstArticle, imageMainUrl, loading} : {firstArticle: any, imageMainUrl: string, loading: boolean}) => {
  return (
    <div className="rtl mb-10 bg-okaogray-400 dark:bg-slate-900 dark:shadow-lg md:mb-0 md:flex md:w-4/6 md:rounded-lg">
      <div className="mb-6 flex-1 md:mb-0">
        <Link
          className="relative flex size-full"
          href={`/article/${firstArticle?.node?.id}`}
        >
          {
            !loading && (
              <Image
                src={
                  `${imageMainUrl}/${firstArticle?.node?.mainImage?.handle}`
                }
                alt=""
                width={600}
                height={400}
                className="duration-[2s] w-full object-cover opacity-0 transition-opacity md:rounded-r"
                onLoadingComplete={(image) => { image.classList.remove('opacity-0') }}
                loading="lazy"
                quality={80}
              />
            )
          }
        </Link>
      </div>

      <Link
        href={`/article/${firstArticle?.node?.id}`}
        className="rtl flex w-full flex-col dark:text-gray-300 md:w-[45%] md:px-0 md:py-6"
      >
        <div>
          <h2
            className={cn(
              "mb-4 px-2 text-center text-3xl leading-loose",
              mvAanamu.className
            )}
          >
            {
              firstArticle?.node?.title
            }
          </h2>
        </div>

        <div className="flex flex-1 flex-col justify-end space-y-4 px-4 pb-4 text-base font-thin tracking-wider text-gray-800 opacity-[56%] dark:text-gray-300 md:rounded-b-lg">
          <div>
            <div className="flex items-center">
              <span className="ltr text-xs text-gray-800">
                19 hours
              </span>
            </div>
          </div>

          <div>
            <p className={cn("pl-2", mvRasmee.className)}>
              {
                firstArticle?.node?.subTitle
              }
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MainArticle