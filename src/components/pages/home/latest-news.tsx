import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvFaseyha, mvRasmee } from '@/config/fonts'
import { BsBlockquoteLeft } from "react-icons/bs";
import moment from 'moment'

const LatestNews = ({ homeArticles, loading }: { homeArticles: any, loading: boolean }) => {

  return (
    <div className="rtl mx-auto px-4 md:container">
      <div className="grid-cols-1 gap-8 md:grid md:grid-cols-12">
        <div className="col-span-12 md:col-span-12 md:ml-2">
          <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">

            {
              homeArticles?.edges?.map((article: any, index: number) => {
                return (
                  <a
                    key={index}
                    className="grid gap-x-2 rounded-lg bg-okaogray-500 p-4 dark:z-10 dark:border-gray-100 dark:bg-slate-900 dark:shadow-lg"
                    href={`/article/${article?.node?.id}`}
                  >
                    <div className="">
                      <img
                        className="z-10 size-full rounded-lg object-cover"
                        src={article?.node?.mainImage?.url}
                        alt=""
                      />
                    </div>
                    <div className="grid items-center">
                      <div>
                        <h2
                          className={cn(
                            "my-3 text-xl font-normal leading-loose",
                            mvAanamu.className
                          )}
                        >
                          {
                            article?.node?.title
                          }
                        </h2>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <span className="ltr text-xs text-gray-500">
                          {
                            moment(article?.node?.createdAt).fromNow()
                          }
                        </span>
                      </div>
                    </div>

                    {/* <p
                      className={cn(
                        "mb-2 line-clamp-2 text-gray-500",
                        mvRasmee.className
                      )}
                    >
                      {
                        article?.node?.subTitle
                      }
                    </p> */}
                  </a>
                )
              })
            }
          </div>

          {/* <div className='flex justify-center'>
            <a href="" className="z-20 flex items-center gap-2 rounded-3xl border bg-gray-200 p-2 text-center text-gray-600 shadow-lg dark:bg-slate-800 dark:text-slate-300 dark:shadow-lg">
                <span className={cn('rtl text-xs', mvRasmee.className)}>
                    އިތުރު ހަބަރު
                </span>
                <BsBlockquoteLeft size={14} />
            </a>
          </div> */}
        </div>

        {/* <div className="col-span-12 mt-8 md:col-span-3 md:mt-0">
          <div className="rtl border-okaoblue-300 mb-10 flex flex-col items-center border-b pb-8 md:items-start">
            <h2
              className={cn(
                "text-2xl font-normal text-gray-900",
                mvAanamu.className
              )}
            >
              ހޮނިހިރު
            </h2>
            <h2
              className={cn(
                "mt-2 text-lg font-normal text-gray-700",
                mvAanamu.className
              )}
            >
              30 މާރިޗު 2024{" "}
            </h2>
            <div className="ltr">
              <div className="react-datepicker-wrapper">
                <div className="react-datepicker__input-container"></div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="ltr flex space-x-2">
                <a
                  href="https://www.instagram.com/minoos.mv/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="size-7"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(-5 -5)"
                      fill="#000"
                      fillRule="nonzero"
                    >
                      <path d="M23.903 11.778a2.932 2.932 0 0 0-1.683-1.68 4.898 4.898 0 0 0-1.643-.305C19.644 9.75 19.364 9.74 17 9.74s-2.644.01-3.577.053a4.898 4.898 0 0 0-1.645.304 2.932 2.932 0 0 0-1.68 1.683 4.898 4.898 0 0 0-.305 1.643c-.043.933-.053 1.213-.053 3.577s.01 2.644.053 3.577c.006.562.11 1.118.304 1.645.299.773.91 1.383 1.683 1.68a4.898 4.898 0 0 0 1.643.305c.933.043 1.213.053 3.577.053s2.644-.01 3.577-.053a4.898 4.898 0 0 0 1.645-.304 2.932 2.932 0 0 0 1.68-1.683 4.898 4.898 0 0 0 .305-1.643c.043-.933.053-1.213.053-3.577s-.01-2.644-.053-3.577a4.898 4.898 0 0 0-.304-1.645ZM17 21.548a4.547 4.547 0 1 1 0-9.095 4.547 4.547 0 0 1 0 9.095Zm4.726-8.212a1.062 1.062 0 1 1 0-2.125 1.062 1.062 0 0 1 0 2.125Z"></path>
                      <circle cx="17" cy="17" r="2.952"></circle>
                      <path d="M17 0C7.611 0 0 7.611 0 17s7.611 17 17 17 17-7.611 17-17A17 17 0 0 0 17 0Zm8.801 20.651a6.499 6.499 0 0 1-.413 2.148 4.526 4.526 0 0 1-2.589 2.59 6.499 6.499 0 0 1-2.148.412c-.945.043-1.246.053-3.651.053s-2.706-.01-3.651-.053a6.499 6.499 0 0 1-2.148-.413A4.526 4.526 0 0 1 8.61 22.8a6.499 6.499 0 0 1-.412-2.148c-.043-.945-.053-1.246-.053-3.651s.01-2.706.053-3.651c.015-.735.155-1.46.413-2.148.46-1.19 1.4-2.13 2.589-2.59a6.499 6.499 0 0 1 2.148-.412c.945-.043 1.246-.053 3.651-.053s2.706.01 3.651.053c.735.015 1.46.155 2.148.413 1.19.46 2.13 1.4 2.59 2.589.257.687.397 1.413.412 2.148.043.945.053 1.246.053 3.651s-.01 2.706-.053 3.651Z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/minoosmv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/minoosmv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0v24h24V0H0zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765A9.286 9.286 0 0 1 4.5 17.527a6.605 6.605 0 0 0 4.86-1.359 3.285 3.285 0 0 1-3.066-2.28 3.3 3.3 0 0 0 1.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 3.289 0 0 1 5.613 6.6a9.32 9.32 0 0 0 6.766 3.43 3.285 3.285 0 0 1 5.594-2.993 6.568 6.568 0 0 0 2.085-.796 3.292 3.292 0 0 1-1.443 1.816A6.578 6.578 0 0 0 20.5 7.54a6.707 6.707 0 0 1-1.638 1.697z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="ltr">
            <a
              className="mx-auto block w-3/5 md:sticky md:top-10 md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/WrKCVFNARTdIHLrDtlXGcX4D7.jpg"
                className="w-full"
                alt=""
              />
              <span className="ml-auto px-2 text-xs font-normal tracking-widest opacity-30 md:px-0 md:text-sm">
                ADVERTISEMENT
              </span>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default LatestNews