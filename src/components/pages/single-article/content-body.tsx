import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { mvFaseyha } from '@/config/fonts'
const imageMainUrl = "https://ap-south-1.graphassets.com/clume5wz10c1507pi8xxhh972"

//remove eslint-disable
// eslint-disable-next-line
const ContentBody = ({ article }:  {article: any}) => {
  return (
    <div>
      {

        article?.articleContent?.map((content: any, index: number) => {
          if(content?.__typename === "ArticleBody") {
            return (
              <p key={index} className={cn(
                  "rtl mb-6 text-wrap pl-0 text-lg font-thin leading-8 tracking-widest",
                  mvFaseyha.className
                )}>
                {content?.content}
              </p>
            )
          } else if (content?.__typename === "ArticleImage") {
            return (
              <div
                className="float-start my-4 overflow-hidden rounded-xl dark:bg-gray-800 lg:pr-6"
                // href={`#`}
                key={index}
              >

                {
                  content?.image?.mimeType === "video/mp4" ? (
                    <video
                      src={`${imageMainUrl}/${content?.image?.handle}`}
                      controls
                      className="z-10 mb-8 w-full rounded-lg object-cover shadow-lg lg:w-[500px]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={`${imageMainUrl}/${content?.image?.handle}`} type={content?.image?.mimetype} />
                    </video>

                  ) : (
                    <Image
                      src={`${imageMainUrl}/${content?.image?.handle}`}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className="mb-8 w-full rounded-lg object-cover shadow-lg lg:w-[500px]"
                    />
                  )
                }
              </div>
            )
          }
        })


      }
    </div>
  )
}

export default ContentBody