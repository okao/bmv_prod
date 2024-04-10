"use client"
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { mvFaseyha } from '@/config/fonts'
import { Tweet } from "react-tweet"; // first import


//remove eslint-disable
// eslint-disable-next-line
const ContentBody = ({ article }: { article: any }) => {
  console.log("Article", article);
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
                className="float-start my-4 overflow-hidden rounded-xl lg:pr-6"
                // href={`#`}
                key={index}
              >

                {
                  content?.image?.mimeType === "video/mp4" ? (
                    <video
                      src={`${content?.image?.url}`}
                      controls
                      className="z-10 mb-8 w-full rounded-lg object-cover shadow-lg lg:w-[500px]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={`${content?.image?.url}`} type={content?.image?.mimetype} />
                    </video>

                  ) : (
                    <Image
                      src={`${content?.image?.url}`}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className="mb-8 w-full rounded-lg object-cover shadow-lg lg:w-[500px]"
                    />
                  )
                }
              </div>
            )
          } else if (content?.__typename === "ExternalLinks") {
            return (
              <div key={index} className="float-end my-4 flex overflow-hidden lg:pl-6">
                <div className="mb-8 flex w-full max-w-lg flex-col">
                  <a href={`${content?.link}`} target="_blank" className="flex w-full px-4 lg:px-0">
                    <div className="flex w-2/3 flex-col justify-between border border-r-0 border-gray-200  bg-white p-4 ">
                      <div>
                        <p className="mb-2 text-lg text-gray-700">{ content?.title }</p>
                      </div>
                    </div>
                    <div className="w-1/3 border border-gray-700">
                      <img
                        className="size-full shrink-0 bg-cover bg-center"
                        // style="background-image: url(https://cdn.mihaaru.com/externalimages/2024/04/08/CDxFff1hpWIqGwJi.png);"
                        style={{backgroundImage: `url(${content?.image?.url})`}}
                        src={`${content?.image?.url}`}
                        alt={content?.title}
                      />
                    </div>
                  </a>
                </div>
              </div>
            )
          } else if (content?.__typename === "ArticleTwitterLink") {
            return (
              <div key={index} className="float-end my-4 flex overflow-hidden lg:pl-6">
                <div className="mb-8 flex w-full max-w-lg flex-col">
                  <Tweet
                    id={content?.twitterLink?.match(
                          /\/status\/(\d+)/
                        )?.[1] as string}
                    // id={"1777209884402151779"}
                  />
                </div>
              </div>
            )
          }
        })
      }

      {/* <div className="flex w-full flex-col items-end">
        <div className="mb-8 flex w-full max-w-lg flex-col">
          <a href="https://mihaaru.com/news/132780" target="_blank" className="flex w-full px-4 lg:px-0">
                  <div className="border-cloudy-blue w-1/3 border">
              <img
                className="size-full shrink-0 bg-cover bg-center"
                // style="background-image: url(https://cdn.mihaaru.com/externalimages/2024/04/08/CDxFff1hpWIqGwJi.png);"
                style={{backgroundImage: `url('https://cdn.mihaaru.com/externalimages/2024/04/08/CDxFff1hpWIqGwJi.png')`}}
                src="https://cdn.mihaaru.com/assets/mhr/images/transparent.png"
                alt="Rasdhoo gai miskithehge thereygai kuda kujjakah aniyaa kuri massala balanee"
              />
            </div>
            <div className="bg-whiteish border-cloudy-blue flex w-2/3 flex-col justify-between border  border-l-0 p-4 ">
              <div>
                <p className="text-black-three mb-2 text-lg">Rasdhoo gai miskithehge thereygai kuda kujjakah aniyaa kuri massala balanee</p>
                <p className="text-warm-gray-two text-xs">The most trusted news source in the Maldives</p>
              </div>
              <p className="text-greyish-brown mt-2 text-xs">Mihaaru</p>
            </div>
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default ContentBody