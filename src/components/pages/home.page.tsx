import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import AdBanner from "@/components/common/ad-banner"
import HomeGallery from "@/components/home/home-gallery"
import Link from 'next/link'

const imageMainUrl = "https://ap-south-1.graphassets.com/clume5wz10c1507pi8xxhh972"

const HomePage = ({ articles, loading }: any) => {

  console.log("Articles", articles[0])

  {
    loading && <div>Loading...</div>
  }

  const firstArticle = articles[0];

  return (
    <div className="flex-1">
      <section className="relative">
        <div className="md:mt-10">
          <div className="mx-auto md:container">
            <div className="gap-6 md:flex md:flex-row-reverse">

              <div className="rtl mb-10 bg-okaogray-400 dark:bg-slate-900 dark:shadow-lg md:mb-0 md:flex md:w-4/6 md:rounded-lg">
                <div className="mb-6 flex-1 md:mb-0">
                  <Link
                    className="relative flex size-full"
                    href={`/article/${firstArticle?.node?.id}`}
                  >
                    <img
                      className="h-max-[300px] w-full object-cover md:rounded-r"
                      // src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/big_74zQEYO6aPgwsxypJT3OGgDnE.jpg"
                      alt=""
                      src={
                        `${imageMainUrl}/${firstArticle?.node?.newsContent?.mainImage?.handle}`
                      }
                    />
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


              <div className="flex flex-col space-y-4 bg-okaogray-500 bg-opacity-50 p-5 dark:bg-slate-900 dark:shadow-lg md:ml-3 md:w-2/6 md:rounded-lg">
                <a className="rtl" href="/single">
                  <div className="relative float-right mb-2 ml-6">
                    <img
                      className="float-right w-32 md:w-44"
                      src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/big_V5W9FoklVaory1whpLHk2SJmw.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <span className="ltr text-xs text-gray-500">
                        8 hours
                      </span>
                    </div>
                  </div>
                  <h2
                    className={cn(
                      "my-3 text-xl font-normal leading-loose",
                      mvAanamu.className
                    )}
                  >
                    އެހެން ކެނޑިޑޭޓުންނަށް ތާއީދު ކުރިޔަސް ރައީސްގެ ސުލޫކީ
                    މައްސަލައެއް ނެތް
                  </h2>
                  <p className={cn("mb-2 text-gray-500", mvRasmee.className)}>
                    ބައެއް ކަންކަން ނިންމުންތައް ހުންނާނެ. ނަމަވެސް
                    އަޅުގަނޑުމެން ގަބޫލެއް ނުކުރަން ރައީސުލްޖުމްހޫރިއްޔާ
                    އަސާސީ ގަވާއިދާ ހިލާފުވި ކަމަކަ ހީނާ ވިދާޅުވި އެވެ.
                  </p>
                </a>
                <hr className="border-okaoblue-300" />
                <a className="rtl" href="/single">
                  <div className="relative float-right mb-2 ml-6">
                    <img
                      className="float-right w-32 md:w-44"
                      src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/big_Mg0YvgIh3vPPrn7GWXGwPNW4t.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <span className="ltr text-xs text-gray-500">
                        8 hours
                      </span>
                    </div>
                  </div>
                  <h2
                    className={cn(
                      "my-3 text-xl font-normal leading-loose",
                      mvAanamu.className
                    )}
                  >
                    މަގޫދޫ އެއާޕޯޓުގެ މައްސަލައިގައި މަޖިލީހަށް ކުއްލި
                    މައްސަލައެއް
                  </h2>
                  <p className={cn("mb-2 text-gray-500", mvRasmee.className)}>
                    މައްސަލަ ހުށަހަޅުއްވަމުން އޭނާ ވިދާޅުވީ ނިލަންދޫގައި
                    އެއާޕޯޓެއް އަޅަން ސަރުކާރުން ނިންމީ ރައީސްގެ ކޮއްކޯފުޅު،
                    ފާތިމަތު ސައުދާ އެ ދާއިރާއަށް ވާދަކުރައްވާތީ ސިޔާސީ
                    މަންފާއެއް ހޯދުމުގެ ގޮތުން ކަމަށެވެ.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 md:container">
          <div
            id="homebreak"
            className="separator--dotted mx-auto mt-12"
          ></div>
        </div>

        <div className="">
          <div className="mx-auto mt-4 pt-0">
            <h2
              className={cn(
                "mb-8 mt-6 text-center text-3xl font-bold",
                mvWaheed.className
              )}
            >
              ފަހުގެ ހަބަރު
            </h2>
            <div className="rtl mx-auto px-4 md:container">
              <div className="grid-cols-1 gap-8 md:grid md:grid-cols-12">
                <div className="col-span-12 md:col-span-12 md:ml-2">
                  <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
                    <a
                      className="block rounded-lg bg-okaogray-500 p-4 dark:z-10 dark:border-gray-100 dark:bg-slate-900 dark:shadow-lg"
                      href="/single"
                    >
                      <div className="relative float-right mb-2 ml-6">
                        <img
                          className="float-right w-32 md:w-44"
                          src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_jLxVgfwwfQPqEnjMB0RsPHdMx.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <span className="ltr text-xs text-gray-500">
                            8 hours
                          </span>
                        </div>
                      </div>
                      <h2
                        className={cn(
                          "my-3 text-xl font-normal leading-loose",
                          mvAanamu.className
                        )}
                      >
                        ފެބްރުއަރީގައި މުދަލުގެ އަގު: އުފުލުނީ މޭވާ ދަށްވީ
                        ތަރުކާރީ
                      </h2>
                      <p
                        className={cn(
                          "mb-2 text-gray-500",
                          mvRasmee.className
                        )}
                      >
                        ސީޕީއައި ހިސާބު ކުރުމުގައި ބަލަނީ އާންމުކޮށް ގޭބީސީ
                        އަކަށް ގަންނަ މުދާ އެއް ބާސްކެޓަކަށް އެޅުމަށް ފަހު، އެ
                        ބާސްކެޓުގެ އަގަށް އެވްރެޖްކޮށް އަންނަ ބަދަލަށެވެ.
                      </p>
                    </a>

                    <a
                      className="block rounded-lg bg-okaogray-500 p-4 dark:z-10 dark:border-gray-100 dark:bg-slate-900 dark:shadow-lg"
                      href="/single"
                    >
                      <div className="relative float-right mb-2 ml-6">
                        <img
                          className="float-right w-32 md:w-44"
                          src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_ntBChuGVdBUdSDJl0zas2Eivx.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <span className="ltr text-xs text-gray-500">
                            11 hours
                          </span>
                        </div>
                      </div>
                      <h2
                        className={cn(
                          "my-3 text-xl font-normal leading-loose",
                          mvAanamu.className
                        )}
                      >
                        ދެ ނައިބުންނާ ލީޑާޝިޕް ނުކުމެ ޔާމީނަށް ރައްދު ދީފި
                      </h2>
                      <p
                        className={cn(
                          "mb-2 text-gray-500",
                          mvRasmee.className
                        )}
                      >
                        ޔާމީން ވިދާޅުވީ ޕީޕީއެމަށް ދިރުމެއް ދޭން
                        ރައީސުލްޖުމްހޫރިއްޔާ / ޕީއެންސީގެ ރައީސް ޑރ. މުއިއްޒު
                        ބޭނުންވެވަޑައިނުގަންނަވާ ކަމަށެވެ.
                      </p>
                    </a>

                    <a
                      className="block rounded-lg bg-okaogray-500 p-4 dark:z-10 dark:border-gray-100 dark:bg-slate-900 dark:shadow-lg"
                      href="/single"
                    >
                      <div className="relative float-right mb-2 ml-6">
                        <img
                          className="float-right w-32 md:w-44"
                          src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_b5Ft4ZqOf4j75YHwnnA23kHww.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <span className="ltr text-xs text-gray-500">
                            10 hours
                          </span>
                        </div>
                      </div>
                      <h2
                        className={cn(
                          "my-3 text-xl font-normal leading-loose",
                          mvAanamu.className
                        )}
                      >
                        ރައީސްކަން ކުރެއްވުމަކީ ދޮގު ހަދަން ލިބޭ ލައިސަންސެއް
                        ނޫން
                      </h2>
                      <p
                        className={cn(
                          "mb-2 text-gray-500",
                          mvRasmee.className
                        )}
                      >
                        ފަސް އަހަރު ރައީސްކަން ކުރެއްވުމަކީ ހިތަށް އަރާހައި
                        ގޮތަކަށް ދޮގު ހެއްދެވުމަށް ލިބިފައި އޮންނަ
                        ލައިސަންސެއް ނޫން ކަމަށް ވިދާޅުވެ ވާހަކަ އަމާޒު
                        ކުރެއްވީ ކުރީގެ ރައީސް ސޯލިހަށެވެ.
                      </p>
                    </a>

                    <a
                      className="block rounded-lg bg-okaogray-500 p-4 dark:z-10 dark:border-gray-100 dark:bg-slate-900 dark:shadow-lg"
                      href="/single"
                    >
                      <div className="relative float-right mb-2 ml-6">
                        <img
                          className="float-right w-32 md:w-44"
                          src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_3FtudEzLJRq9xb0Rb2Q07h71d.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <span className="ltr text-xs text-gray-500">
                            7 hours
                          </span>
                        </div>
                      </div>
                      <h2
                        className={cn(
                          "my-3 text-xl font-normal leading-loose",
                          mvAanamu.className
                        )}
                      >
                        ރިޒާވް ބައި ބިލިއަން ފަހަނަޅައި، 40 މިލިއަން ޑޮލަރުގެ
                        އިތުރުވުމެއް
                      </h2>
                      <p
                        className={cn(
                          "mb-2 text-gray-500",
                          mvRasmee.className
                        )}
                      >
                        އެމްއެމްއޭއިން ބުނެފައިވާ ގޮތުގައި ރާއްޖޭގެ ޔޫޒަބަލް
                        ރިޒާވް ހުންނާނެ ކަމަށް ބެލެވެނީ 100 މިލިއަން
                        ޑޮލަރަށްވުރެ މަތީގަ އެވެ.
                      </p>
                    </a>

                    <a
                      className="block rounded-lg bg-okaogray-500 p-4 dark:z-10 dark:border-gray-100 dark:bg-slate-900 dark:shadow-lg"
                      href="/single"
                    >
                      <div className="relative float-right mb-2 ml-6">
                        <img
                          className="float-right w-32 md:w-44"
                          src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_jLxVgfwwfQPqEnjMB0RsPHdMx.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <span className="ltr text-xs text-gray-500">
                            8 hours
                          </span>
                        </div>
                      </div>
                      <h2
                        className={cn(
                          "my-3 text-xl font-normal leading-loose",
                          mvAanamu.className
                        )}
                      >
                        ފެބްރުއަރީގައި މުދަލުގެ އަގު: އުފުލުނީ މޭވާ ދަށްވީ
                        ތަރުކާރީ
                      </h2>
                      <p
                        className={cn(
                          "mb-2 text-gray-500",
                          mvRasmee.className
                        )}
                      >
                        ސީޕީއައި ހިސާބު ކުރުމުގައި ބަލަނީ އާންމުކޮށް ގޭބީސީ
                        އަކަށް ގަންނަ މުދާ އެއް ބާސްކެޓަކަށް އެޅުމަށް ފަހު، އެ
                        ބާސްކެޓުގެ އަގަށް އެވްރެޖްކޮށް އަންނަ ބަދަލަށެވެ.
                      </p>
                    </a>

                    <a
                      className="block rounded-lg bg-okaogray-500 p-4 dark:z-10 dark:border-gray-100 dark:bg-slate-900 dark:shadow-lg"
                      href="/single"
                    >
                      <div className="relative float-right mb-2 ml-6">
                        <img
                          className="float-right w-32 md:w-44"
                          src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_ntBChuGVdBUdSDJl0zas2Eivx.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <span className="ltr text-xs text-gray-500">
                            11 hours
                          </span>
                        </div>
                      </div>
                      <h2
                        className={cn(
                          "my-3 text-xl font-normal leading-loose",
                          mvAanamu.className
                        )}
                      >
                        ދެ ނައިބުންނާ ލީޑާޝިޕް ނުކުމެ ޔާމީނަށް ރައްދު ދީފި
                      </h2>
                      <p
                        className={cn(
                          "mb-2 text-gray-500",
                          mvRasmee.className
                        )}
                      >
                        ޔާމީން ވިދާޅުވީ ޕީޕީއެމަށް ދިރުމެއް ދޭން
                        ރައީސުލްޖުމްހޫރިއްޔާ / ޕީއެންސީގެ ރައީސް ޑރ. މުއިއްޒު
                        ބޭނުންވެވަޑައިނުގަންނަވާ ކަމަށެވެ.
                      </p>
                    </a>
                  </div>

                  <div className="mt-5 flex items-center justify-center">
                    <button className="ltr relative z-10 flex size-8 items-center justify-center rounded-full border border-okaoblue-500 bg-okaogray-300 text-xl font-semibold text-okaoblue-600 hover:border-okaoblue-600 hover:bg-okaoblue-800 hover:text-white dark:border-slate-600 dark:bg-slate-500 dark:text-slate-600 dark:hover:bg-slate-600 dark:hover:text-white md:size-10">
                      <span>+</span>
                    </button>
                  </div>
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
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <AdBanner
            href={"https://www.mwsc.com.mv/"}
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/iauBm60Jix0j3BcWCxSxhXb2S.jpg"
            }
          />
        </div>

        <div className="mt-10 w-full md:mt-10">
          <div className="rtl mx-auto grid grid-cols-12 gap-8 md:container md:gap-10">
            <a href="/single" className="col-span-12 md:col-span-6 md:py-20">
              <div className="flex h-full flex-col">
                <img
                  className="relative mx-auto -mb-20 h-12 w-4/5 flex-1 object-cover"
                  src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/big_v3075bwaXrTCKNtXs1DAXBC5Z.jpeg"
                  alt=""
                />
                <div
                  className="mt-8 w-full bg-okaogray-500 pb-10 pt-20 text-center dark:bg-slate-900 dark:bg-opacity-50"
                  style={{ minHeight: "200px" }}
                >
                  <h2
                    className={cn(
                      "mx-auto w-2/3 text-3xl leading-loose md:w-auto",
                      mvAanamu.className
                    )}
                  >
                    ނުހެދިހުރި ރިސޯޓްތަކަށް ފަންޑު އުފައްދާ ކުންފުނި:
                    ހުސްތޮށިގަނޑެއް
                  </h2>
                </div>
              </div>
            </a>

            <a
              href="/single"
              className="col-span-12 h-full md:col-span-3 md:py-20"
            >
              <div className="flex h-full flex-col justify-between bg-okaogray-400 bg-opacity-50 dark:bg-slate-800">
                <div className="p-4">
                  <h2
                    className={cn(
                      "rtl mx-auto w-2/3 text-center text-2xl leading-loose md:text-3xl md:leading-loose",
                      mvAanamu.className
                    )}
                  >
                    ތާނައަށް ހުރުމަތް: ތާނައިން ދިވެހި ޖައްވަށް
                  </h2>
                  <p
                    className={cn(
                      "mt-4 text-center text-okaoblue-700",
                      mvWaheed.className
                    )}
                  >
                    އައިޝާ މުހައްމަދު
                  </p>
                  <div className="mx-auto mt-8 h-0.5 w-2/3 border-t border-okaoblue-300"></div>
                </div>

                <div className="p-8">
                  <p
                    className={cn(
                      "font-randhoo line-clamp-7 leading-relaxed",
                      mvRasmee.className
                    )}
                  >
                    ދިވެހި އަސްކަރިއްޔާގެ ވައިގެބާރުގެ ޑްރޯން އުޅަނދުތަކުގައި
                    ތާނައިން ޖަހައި ޖައްވުގައި އުފުލައިދޭން ފެށުމުމަކީ ދިވެހި
                    ދައުލަތުން ކުރި ބާރު ގަދަ އިއުލާނެކެވެ.
                  </p>
                </div>
              </div>
            </a>

            <a
              className="col-span-12 h-full md:col-span-3 md:py-20"
              href="/single"
            >
              <div className="flex h-full flex-col justify-between bg-okaogray-400 bg-opacity-50 dark:bg-slate-800">
                <div className="p-4">
                  <h2
                    className={cn(
                      "rtl mx-auto w-2/3 text-center text-2xl leading-loose md:text-3xl md:leading-loose",
                      mvAanamu.className
                    )}
                  >
                    ސިފައިންގެ ވައިގެބާރުގެ ޑްރޯންތައް: ހުށިޔާރު، ދުރުން
                    ދެނެގަންނާނެ
                  </h2>
                  <p
                    className={cn(
                      "mt-4 text-center text-okaoblue-700",
                      mvWaheed.className
                    )}
                  >
                    މުހައްމަދު އަފުރާހު
                  </p>
                  <div className="mx-auto mt-8 h-0.5 w-2/3 border-t border-okaoblue-300"></div>
                </div>
                <div className="p-8">
                  <p
                    className={cn(
                      "font-randhoo line-clamp-7 leading-relaxed",
                      mvRasmee.className
                    )}
                  >
                    ހަތް ޑްރޯން ރާއްޖެ ގެންނާނެ އެވެ. މި އުޅަނދުތައް ދުއްވަން
                    މިހާރު ވެސް 10 ސިފައިން ދަނީ ތަމްރީން ވަމުންނެވެ. މި
                    ސިފައިން ރާއްޖޭގެ ހަތަރު ބިތުގައި ތިބެގެން ރާއްޖޭގެ މަސް
                    ކަނޑުތައް އަމިއްލައަށް ބަލަހައްޓާނީ ފަހުރުވެރިކަމާއެކުގަ
                    އެވެ.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-10 w-full bg-black py-10 md:mt-0">
          <div className="rtl mx-auto md:container">
            <div className="flex items-center space-x-3 space-x-reverse px-4 md:px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 fill-current text-white "
                viewBox="0 0 100 100"
              >
                <path d="M50 33.9c-10.5 0-19 8.5-19 19s8.5 19 19 19 19-8.5 19-19c0-10.4-8.5-19-19-19zm0 34c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm33-38L68 30l-6.3-9.2c-.4-.5-1-.8-1.6-.8H39.9c-.6 0-1.2.3-1.6.8L32 30H17c-4.4 0-8 3.5-8 7.9V72c0 4.4 3.6 8 8 8h66c4.4 0 8-3.6 8-8V37c0-4.4-3.6-7.1-8-7.1zM87 72c0 2.2-1.8 4-4 4H17c-2.2 0-4-1.8-4-4V37.9c0-2.2 1.8-3.9 4-3.9h16c.6 0 1.2-.3 1.6-.8l6.3-9.2h18.2l6.3 9.2c.4.5 1 .8 1.6.8l16-.1c2.2 0 4 .9 4 3.1v35z"></path>
                <path
                  fill="currentColor"
                  d="M1364-650v1684H-420V-650h1784m8-8H-428v1700h1800V-658z"
                ></path>
              </svg>
              <h3
                className={cn(
                  "mt-3 flex items-center space-x-3 space-x-reverse pb-4 pt-2 text-center text-3xl text-white md:text-right",
                  mvAanamu.className
                )}
              >
                <span>ފޮޓޯ ގެލެރީ</span>
                <span className="size-3 bg-okaoblue-500"></span>
              </h3>
            </div>
            <div className="md:flex">
              <div className="md:w-1/2">
                <a className="relative block" href="/single">
                  <img
                    className="w-full object-cover"
                    src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/big_KtVG2DpFIXR1tkm2wMJJixvkb.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black px-10 py-6 text-right">
                    <h3 className="font-aammu text-3xl leading-loose text-white md:w-1/3 md:text-5xl md:leading-[5.5rem]">
                      ރޯދަމަހުގެ ފުރަތަމަ ހަފުތާ ބަންދު
                    </h3>
                  </div>
                </a>
              </div>
              <div className="md:w-1/2">
                <HomeGallery />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <AdBanner
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/kKJIC6cELvUxqmcp7ww3AO4AG.png"
            }
            href={"https://www.maldivesfinest.com/"}
          />
        </div>

        <div className="mt-10 md:mt-16">
          <div className="rtl mx-auto md:container">
            <h3
              className={cn(
                "mt-3 flex flex-row items-center space-x-3 space-x-reverse px-6 pb-4 text-center text-3xl md:px-0 md:text-right",
                mvAanamu.className
              )}
            >
              <div className="flex-none">ޕޮލިޓިކްސް</div>
              <div className="size-3 flex-none bg-okaoblue-500"></div>
              <div className="separator--dotted"></div>
            </h3>

            <div className="mt-6 grid grid-cols-5 gap-8">
              <div className="col-span-5 md:col-span-3">
                <a
                  className="relative clear-both block h-full border-b border-gray-200 md:border-b-0"
                  href="/single"
                >
                  <img
                    className="size-full object-cover md:rounded-lg"
                    src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/big_b5Ft4ZqOf4j75YHwnnA23kHww.jpeg"
                    alt=""
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black px-10 py-6 text-right">
                    <h3
                      className={cn(
                        "text-3xl leading-[3.5rem] text-white md:w-2/5 md:text-5xl md:leading-[5.5rem]",
                        mvAanamu.className
                      )}
                    >
                      ރައީސްކަން ކުރެއްވުމަކީ ދޮގު ހަދަން ލިބޭ ލައިސަންސެއް
                      ނޫން
                    </h3>
                  </div>
                </a>
              </div>
              <div className="col-span-5 space-y-7 bg-okaogray-400 p-4 dark:bg-slate-900 md:col-span-2 md:rounded-lg">
                <a className="flex md:border-b-2" href="/single">
                  <div className="flex-1">
                    <h2
                      className={cn(
                        "mb-3 text-xl font-normal leading-relaxed",
                        mvAanamu.className
                      )}
                    >
                      ކުޑަގޮޅި ދެކެ އެމްޑީޕީގެ ލީޑަޝިޕް ބިރެއް ނުގަންނާނެ:
                      ސޯލިހު
                    </h2>
                    <p
                      className={cn(
                        "mb-3 hidden text-gray-500 md:line-clamp-3",
                        mvRasmee.className
                      )}
                    >
                      އެމްޑީޕީގެ ޗެއާޕާސަން ފައްޔާޒު ފުލުހަށް ގެންދިޔައީ
                      އާރްޑީސީގެ ފައިސާ އެކުންފުނީގެ ވެރިންނާއި އެމީހުނާ
                      ގުޅުން އޮންނަ ފަރާތްތަކަށާއި ކުންފުނިތަކަށް ދޫކޮށް
                      އާރްޑީސީގެ ފައިސާއަށް ހިޔާނާތްވި މައްސަލައިގެ ތުހުމަތުގަ
                      އެވެ.
                    </p>
                  </div>
                  <div className="mb-4 mr-4 w-40 md:w-48">
                    <img
                      className=""
                      src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_yGMDlSWKiI8xQy11pVP9GwmBN.png"
                      alt=""
                    />
                  </div>
                </a>

                <a className="flex md:border-b-2" href="/single">
                  <div className="flex-1">
                    <h2
                      className={cn(
                        "mb-3 text-xl font-normal leading-relaxed",
                        mvAanamu.className
                      )}
                    >
                      ސިޔާސީ ލީޑަރުން ހައްޔަރު ކުރުމުގެ ތައްޔާރީތައް ފަށައިފި
                    </h2>
                    <p
                      className={cn(
                        "mb-3 hidden text-gray-500 md:line-clamp-3",
                        mvRasmee.className
                      )}
                    >
                      ސިޔާސީ ލީޑަރުން ހިފާ ހައްޔަރު ކުރަން ތައްޔާރުވަމުން
                      އެދަނީ. އަދި އެހިސާބަކުން ނުނިމޭ. ފަނޑިޔާރުންނާ ހިސާބަށް
                      ވެސް ދާނެ. ޕޮލިސް ކޮމިޝަނަރުން ވެސް ގެންގޮސް ހައްޔަރު
                      ކުރާނެ. މިނިވަން މުއައްސަސާތައް މުށުތެރެޔަށް ލާނެ،
                    </p>
                  </div>
                  <div className="mb-4 mr-4 w-40 md:w-48">
                    <img
                      className=""
                      src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_FczZcQtpN88D7F8XXQozzbrVL.jpeg"
                      alt=""
                    />
                  </div>
                </a>

                <a className="flex" href="/single">
                  <div className="flex-1">
                    <h2
                      className={cn(
                        "mb-3 text-xl font-normal leading-relaxed",
                        mvAanamu.className
                      )}
                    >
                      ހައްޔަރު ކުރެވިދާނެ ފަހަތަކަށް ނުޖެއްސޭނެ
                    </h2>
                    <p
                      className={cn(
                        "mb-3 hidden text-gray-500 md:line-clamp-3",
                        mvRasmee.className
                      )}
                    >
                      ހާޒިރު ކުރަނީ އާރްޑީސީއަށް ލިބޭ ފައިސާ އެ ކުންފުނީގެ
                      ވެރިންނާއި އާރްޑީސީއާއި ގުޅުން އޮންނަ ފަރާތްތަކަށާއި
                      ކުންފުނިތަކަށް ދޫކޮށް އާރްޑީސީގެ ފައިސާއަށް
                      ހިޔާނާތްތެރިވެފައިވާ މައްސަލައިގައިގަ އެވެ.
                    </p>
                  </div>
                  <div className="mb-4 mr-4 w-40 md:w-48">
                    <img
                      className=""
                      src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_SsPBCbB5qTwM7dY05t5JSsxWq.jpeg"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <AdBanner
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/2H8HgAVl6nqr3KxdWq0hMAo9M.jpeg"
            }
            href={"https://www.maldivesfinest.com/"}
          />
        </div>

      </section>
    </div>
  )
}

export default HomePage