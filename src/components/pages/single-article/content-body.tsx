"use client"
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { mvFaseyha, mvWaheed } from '@/config/fonts'
import Ad1 from '../../../../public/images/ads/article_section_coke.png'

//remove eslint-disable
// eslint-disable-next-line
const ContentBody = ({ article }: { article: any }) => {

  // console.log("Article", article?.articleContent?.[0]?.content?.raw?.children);

  return (
    <div>

      <div className='flex justify-center'>
        <Image
          src={Ad1}
          alt="Picture of the author"
          width={500}
          height={500}
          className="mb-8 w-full rounded-lg object-cover shadow-lg lg:w-[500px]"
        />
      </div>

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
            } else if(content?.__typename === "ArticleRichText") {
              return (
                <div key={index}
                  className={cn(
                    "rtl mb-4 flex flex-col text-wrap pl-0 text-lg font-thin",
                    mvFaseyha.className
                  )}
                  // dangerouslySetInnerHTML={{ __html: content?.content?.html }}
                >

                  {
                    content?.content?.raw?.children?.map((child: any, index: number) => {
                      // return (
                      //   <p key={index} className={cn(
                      //       "rtl mb-6 text-wrap pl-0 text-lg font-thin leading-8 tracking-widest",
                      //       mvFaseyha.className
                      //     )}>
                      //     {child?.children[0]?.text}
                      //   </p>
                      // )

                      // console.log("Child", child);

                      if(child && child?.type === "paragraph") {
                        return (
                          <p key={index} className={cn(
                            "rtl mb-6 text-wrap pl-0 text-lg font-thin leading-8 tracking-widest",
                            mvFaseyha.className
                          )}>
                            {child?.children[0]?.text}
                          </p>
                        )
                      }

                      if(child && child?.type === "bulleted-list"){
                        return (
                          <ul key={index} className={cn(
                            "rtl mb-6 list-disc text-wrap pl-0 text-lg font-thin",
                            mvFaseyha.className
                          )}>
                            <li>{child?.children[0]?.children[0]?.children[0]?.text}</li>
                          </ul>
                        )
                      }
                    })



                  }
                </div>
              )
            } else if(content?.__typename === "ArticleQuotes") {
              return (
                <div className="mb-8 w-full px-4 xl:px-0" key={index}>
                  <div className="flex flex-col items-center sm:flex-row-reverse sm:items-start">
                    <img
                      alt={content?.title}
                      className="mb-6 sm:ml-6"
                      src="https://cdn.mihaaru.com/assets/mhr/icons/icon-article-quote.svg"
                    />
                    <blockquote
                      className={cn("rtl max-w-lg break-words text-center  text-[28px]  leading-loose text-black dark:text-white sm:text-right", mvWaheed.className)}
                    >
                      {content?.quote}
                    </blockquote>
                  </div>
                </div>
              )
            } else if (content?.__typename === "ArticleImage") {

              return (
                <div
                  className="my-4 overflow-hidden rounded-xl lg:pr-6"
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
                <div key={index} className="my-4 flex overflow-hidden lg:pl-6">
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

                  </div>
                </div>
              )
            }
          })
        }
      </div>

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

      <div className="w-full">
        <div className="mb-20 text-right">
          {
            article?.articleTags?.value?.map((tag: any, index: number) => {
              return (
                <a key={index} href={`/tag?name=${tag}`}>
                  <span
                    className={cn("mb-2 ml-2 inline-block cursor-pointer rounded-full bg-gray-100 px-4 py-1 text-[17px] text-black transition duration-300 hover:bg-gray-200", mvWaheed.className)}>
                    {tag}
                  </span>
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ContentBody