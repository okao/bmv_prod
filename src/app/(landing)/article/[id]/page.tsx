import React from "react"
import { type Metadata } from "next"
import Head from "next/head"
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share"
import { mvAanamu, mvFaseyha, mvRasmee, mvWaheed } from "@/config/fonts"
import { cn } from "@/lib/utils"
import AdBanner from "@/components/common/ad-banner"
import ShareButtons from "@/components/common/share-buttons"
import Image from "next/image"

async function myAction(id: string) {
    'use server'
  const { getArticleById } = await import('@/graph/apollo');
  // console.log("ID", id);
  const data = await getArticleById(id);

  return data;
}

// export const metadata: Metadata = {

//   title: "ބޭންކުން މިގެނައި ބަދަލުން ވީ ގޮތެއް އެނގޭތަ؟",
//   description:
//     "މި ބަދަލާއެކު ފްރީލާންސް މީހުން ބޭރުން އަންނަ ފައިސާ ރާއްޖޭގެ އެކައުންޓުން ނެގޭނެ އެވެ. މި ބަދަލަކީ ރައީސްގެ ރިޔާސީ ވައުދެކެވެ.",
//   openGraph: {
//     title: "ބޭންކުން މިގެނައި ބަދަލުން ވީ ގޮތެއް އެނގޭތަ؟",
//     description:
//       "މި ބަދަލާއެކު ފްރީލާންސް މީހުން ބޭރުން އަންނަ ފައިސާ ރާއްޖޭގެ އެކައުންޓުން ނެގޭނެ އެވެ. މި ބަދަލަކީ ރައީސްގެ ރިޔާސީ ވައުދެކެވެ.",
//     url: "https://breaking.oala.dev/single",
//     images: [
//       {
//         url: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg",
//         width: 600,
//         height: 315,
//         alt: "މި ބަދަލާއެކު ފްރީލާންސް މީހުން ބޭރުން އަންނަ ފައިސާ ރާއްޖޭގެ އެކައުންޓުން ނެގޭނެ އެވެ. މި ބަދަލަކީ ރައީސްގެ ރިޔާސީ ވައުދެކެވެ.",
//       },
//     ],
//     type: "article",
//     locale: "en_US",
//     siteName: "Breaking Mv",
//   },
//   twitter: {
//     site: "@okmvok",
//     creator: "@okmvok",
//     card: "summary_large_image",
//     title: "ބޭންކުން މިގެނައި ބަދަލުން ވީ ގޮތެއް އެނގޭތަ؟",
//     description:
//       "މި ބަދަލާއެކު ފްރީލާންސް މީހުން ބޭރުން އަންނަ ފައިސާ ރާއްޖޭގެ އެކައުންޓުން ނެގޭނެ އެވެ. މި ބަދަލަކީ ރައީސްގެ ރިޔާސީ ވައުދެކެވެ.",
//     images: [
//       {
//         url: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg",
//         width: 600,
//         height: 315,
//         alt: "މި ބަދަލާއެކު ފްރީލާންސް މީހުން ބޭރުން އަންނަ ފައިސާ ރާއްޖޭގެ އެކައުންޓުން ނެގޭނެ އެވެ. މި ބަދަލަކީ ރައީސްގެ ރިޔާސީ ވައުދެކެވެ.",
//       },
//     ],
//   },
// }

export async function generateMetadata({ params } : { params: { id: string } }) {

  const getArticle = await myAction(params?.id) || {};
  const article = getArticle[0];

  // console.log("Article", article['articleContent']);

  return {
    title: article?.title,
    description: article?.subTitle,
    openGraph: {
      title: article?.title,
      description: article?.subTitle,
      url: `https://breaking.oala.dev/article/${article?.id}`,
      images: [
        {
          url: `${imageMainUrl}/${article?.newsContent?.mainImage?.handle}`,
          width: 600,
          height: 315,
          alt: article?.subTitle,
        },
      ],
      type: "article",
      locale: "en_US",
      siteName: "Breaking Mv",
    },
    twitter: {
      site: "@okmvok",
      creator: "@okmvok",
      card: "summary_large_image",
      title: article?.title,
      description:
        article?.subTitle,
      images: [
        {
          url: `${imageMainUrl}/${article?.newsContent?.mainImage?.handle}`,
          width: 600,
          height: 315,
          alt: article?.subTitle,
        },
      ],
    },
  }
}

const imageMainUrl = "https://ap-south-1.graphassets.com/clume5wz10c1507pi8xxhh972"

const Single = async ({ params } : any ) => {
  // console.log("Params", { params });
  const getArticle = await myAction(params?.id) || {};
  const article = getArticle[0];
  // console.log("Article", `${imageMainUrl}/${article?.newsContent?.mainImage?.handle}`);
  console.log("Article", article?.articleContent);

  const articleTags = article?.articleTags;

  // console.log("Article Tags", articleTags);


  return (
    <div>
      <div className="container grid grid-cols-12 px-0 lg:gap-x-8 lg:gap-y-4 lg:p-4">
        {/* Single Article Image Banner Title and SubTitle */}
        <div className="col-span-12 lg:order-1 lg:col-span-9">
          <div className="lg:pb-8">
            <div className="relative flex flex-col items-end lg:mb-8">
              <div className="relative aspect-square size-full overflow-hidden bg-okaogray-400 p-4 dark:bg-slate-900 lg:aspect-[704/433] lg:rounded-[20px]">
                <img
                  loading="lazy"
                  decoding="async"
                  sizes="75vw"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                  className="object-cover"
                  src={`${imageMainUrl}/${article?.mainImage?.handle}`}
                  alt=""
                />
              </div>
              <div className="relative mx-4 -mt-[25%] mb-3 flex flex-col rounded-[20px] lg:absolute lg:-bottom-12 lg:mt-0">
                <span className="absolute size-full overflow-hidden">
                  <span className="absolute size-full rounded-[20px] border border-[#00000014] bg-[#FFFFFF75] backdrop-blur-[11.2px] dark:bg-[#00000075]"></span>
                </span>
                <div className="relative mx-auto -mt-7 inline-block self-start rounded-full p-4 lg:ms-14">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.14 19.5a9.964 9.964 0 0 0 2.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 21.5a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76ZM15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="rtl relative max-w-3xl px-8 py-6 pt-4 lg:px-14">
                  <h1
                    className={cn(
                      "mb-4 line-clamp-5 text-[32px] font-bold leading-snug transition-all dark:text-white lg:me-12",
                      mvWaheed.className
                    )}
                  >
                    {article?.title}
                  </h1>
                  <div className="mb-4 flex flex-wrap items-center gap-4 gap-y-3">
                    <a
                      className="group relative flex items-center gap-2"
                      href="#"
                    >
                      <span className="relative mb-1 aspect-square w-10 overflow-hidden rounded-full bg-gray-800 text-white dark:bg-gray-200">
                        <img src={article?.publishedBy?.picture} alt="" />
                      </span>
                      <p
                        className={cn(
                          "text-lg font-bold text-black dark:text-white",
                          mvRasmee.className
                        )}
                      >
                       {
                         article?.publishedBy?.name
                       }
                      </p>
                    </a>
                    <span className="absolute -top-5 right-2 size-6 overflow-hidden rounded-full">
                      <img
                        alt="logo"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="100vw"
                        src="https://www.al-monitor.com/sites/default/files/styles/article_header/public/2023-10/49f608a6bf2fa038d6c6388bc5686b2867ea4d5f.jpg?h=69f2b9d0&itok=p0Ar_W7D"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </span>
                    <p
                      dir="ltr"
                      className="text-web-accent dark:text-web-accent-des-dark mt-2 flex flex-1 items-center justify-start leading-snug"
                    >
                      <svg
                        className="mb-2 mr-1 inline h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      {/* 29/03/2024, 14:03:50 */}

                      {
                        article?.publishedAt && new Date(article?.publishedAt).toLocaleString()
                      }
                    </p>
                    {/* <div
                      className="flex flex-1 items-center justify-center gap-3 lg:flex-none"
                      dir="ltr"
                    >
                      <button
                        title="އިސްރާއީލުން ސީރިއާއަށް ދިން ހަމަލާތަކުގައި 40 އަށްވުރެ ގިނަ މީހުން ޝަހީދުވެއްޖެ"
                        className="react-share__ShareButton"
                        // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14 9.3v2.9h2.6c.2 0 .3.2.3.4l-.4 1.9c0 .1-.2.2-.3.2H14V22h-3v-7.2H9.3c-.2 0-.3-.1-.3-.3v-1.9c0-.2.1-.3.3-.3H11V9c0-1.7 1.3-3 3-3h2.7c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.4c-.2 0-.3.1-.3.3Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className="react-share__ShareButton"
                        // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          role="img"
                          viewBox="0 0 24 24"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"></path>
                        </svg>
                      </button>
                      <button
                        className="react-share__ShareButton"
                        // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 30 30"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"></path>
                        </svg>
                      </button>
                      <button
                        className="react-share__ShareButton"
                        // style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0px",
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="22"
                          width="22"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                        </svg>
                      </button>
                    </div> */}
                    <ShareButtons
                      title={article?.title}
                      url={`https://breaking.oala.dev/article/${article?.id}`}
                      summary={article?.subTitle}
                    />
                  </div>
                  {
                    articleTags && articleTags?.value?.map((tag: string, index: number) => {
                      return (
                        <a
                          className="text-web-secondary mb-3 me-3 inline-block text-sm dark:text-white"
                          href={`dv/search?tag=${tag}`}
                          key={index}
                        >
                          # {tag}
                        </a>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <p
            className={cn(
              "rtl mx-5 text-xl font-bold opacity-75",
              mvRasmee.className
            )}
          >
            {article?.subTitle}
          </p>
        </div>

        {/* Single Article Main Ad */}
        <div className="col-span-12 hidden px-4 lg:col-span-3 lg:row-span-2 lg:block lg:px-0">
          <div className="sticky top-28 grid gap-6 pb-8 lg:gap-8">
            <a
              href="/"
              className="relative aspect-[300/600] w-full overflow-hidden rounded-xl bg-secondary lg:block"
            >
              <img
                alt="މޯލްޑިވްސް ގޭސް"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="size-full object-cover"
                sizes="75vw"
                srcSet="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=640&amp;q=75 640w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=750&amp;q=75 750w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=828&amp;q=75 828w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=1080&amp;q=75 1080w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=1200&amp;q=75 1200w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=1920&amp;q=75 1920w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=2048&amp;q=75 2048w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=3840&amp;q=75 3840w"
                src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F1%2Fmaldives%20gas.gif&amp;w=3840&amp;q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </a>
          </div>
        </div>
      </div>

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

      <div className="container">
        <div
          id="homebreak"
          className="separator--dotted mx-auto mt-8 md:container"
        ></div>
        <div className="mt-10 flex">
          <div className="mb-6 hidden w-full overflow-hidden rounded-[10px] bg-okaogray-500 p-4 pb-8 dark:bg-slate-800 md:block">
            <h6
              className={cn(
                "rtl mb-4 border-b border-gray-400 pb-4 text-xl font-bold dark:border-slate-500 dark:text-white",
                mvWaheed.className
              )}
            >
              ލިޔުމާ ގުޅޭ ފަހުގެ ހަބަރު
            </h6>

            <div className="relative grid gap-y-6 overflow-x-auto">
              <a
                className="group relative grid min-w-[70vw] rounded-lg bg-okaogray-600 p-4 dark:bg-slate-900 md:min-w-[unset] md:grid-cols-5 md:gap-4"
                href="/dv/143700"
              >
                <div className="dark:bg-web-accent-wall bg-web-accent-wall-dark relative col-span-2 mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                  <img
                    alt="މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all group-hover:scale-110"
                    sizes="75vw"
                    srcSet="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=640&amp;q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=750&amp;q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=828&amp;q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1080&amp;q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1200&amp;q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1920&amp;q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=2048&amp;q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75 3840w"
                    src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75"
                    // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="rtl col-span-3 my-2 hidden lg:block">
                  <h3
                    className={cn(
                      "group-hover:text-web-primary line-clamp-4 text-lg font-bold leading-loose opacity-75 transition-all",
                      mvRasmee.className
                    )}
                  >
                    މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް -
                    ރައީސް
                  </h3>
                </div>
              </a>

              <a
                className="group relative grid min-w-[70vw] rounded-lg bg-okaogray-600 p-4 dark:bg-slate-900 md:min-w-[unset] md:grid-cols-5 md:gap-4"
                href="/dv/143700"
              >
                <div className="dark:bg-web-accent-wall bg-web-accent-wall-dark relative col-span-2 mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                  <img
                    alt="މާލޭގެ ރައްޔިތުންނަށް ކުރީ ސަރުކާރުން އިސްކަން ނުދިން - ރައީސް"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all group-hover:scale-110"
                    sizes="75vw"
                    srcSet="
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75 3840w"
                    src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGSEM8a4AI0F1Q.jpeg&w=2048&q=75"
                    // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="rtl col-span-3 my-2 hidden lg:block">
                  <h3
                    className={cn(
                      "group-hover:text-web-primary line-clamp-4 text-lg font-bold leading-loose opacity-75 transition-all",
                      mvRasmee.className
                    )}
                  >
                    މާލޭގެ ރައްޔިތުންނަށް ކުރީ ސަރުކާރުން އިސްކަން ނުދިން -
                    ރައީސް
                  </h3>
                </div>
              </a>

              <a
                className="group relative grid min-w-[70vw] rounded-lg bg-okaogray-600 p-4 dark:bg-slate-900 md:min-w-[unset] md:grid-cols-5 md:gap-4"
                href="/dv/143700"
              >
                <div className="dark:bg-web-accent-wall bg-web-accent-wall-dark relative col-span-2 mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                  <img
                    alt="އަތޮޅު އިހްޔާ ފޯރަމް އަންގާރަ ދުވަހުގެ ރޭ މަހިބަދޫގައި!"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all group-hover:scale-110"
                    sizes="75vw"
                    srcSet="
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75 3840w"
                    src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2FWhatsApp%20Image%202024-04-01%20at%2000.05.46%20(1).jpeg&w=2048&q=75"
                    // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="rtl col-span-3 my-2 hidden lg:block">
                  <h3
                    className={cn(
                      "group-hover:text-web-primary line-clamp-4 text-lg font-bold leading-loose opacity-75 transition-all",
                      mvRasmee.className
                    )}
                  >
                    އަތޮޅު އިހްޔާ ފޯރަމް އަންގާރަ ދުވަހުގެ ރޭ މަހިބަދޫގައި!
                  </h3>
                </div>
              </a>

              <a
                className="group relative grid min-w-[70vw] rounded-lg bg-okaogray-600 p-4 dark:bg-slate-900 md:min-w-[unset] md:grid-cols-5 md:gap-4"
                href="/dv/143700"
              >
                <div className="dark:bg-web-accent-wall bg-web-accent-wall-dark relative col-span-2 mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                  <img
                    alt="އިސްރާއީލުގައި އަލްޖަޒީރާ ބްރޯޑްކާސްޓުކުރުން ހުއްޓުވާލަނީ"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover transition-all group-hover:scale-110"
                    sizes="75vw"
                    srcSet="
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75 3840w"
                    src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2Fthumbs_b_c_dfba3b218bb9e9bd608bde97955b744b.webp&w=2048&q=75"
                    // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <div className="rtl col-span-3 my-2 hidden lg:block">
                  <h3
                    className={cn(
                      "group-hover:text-web-primary line-clamp-4 text-lg font-bold leading-loose opacity-75 transition-all",
                      mvRasmee.className
                    )}
                  >
                    އިސްރާއީލުގައި އަލްޖަޒީރާ ބްރޯޑްކާސްޓުކުރުން ހުއްޓުވާލަނީ
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-6 max-w-3xl text-justify md:mt-0 lg:pl-6">
            {/* <a
              className="relative mb-6 block aspect-[300/300] w-full overflow-hidden rounded-xl bg-secondary lg:float-left lg:mr-4 lg:max-w-[304px]"
              href="https://www.facebook.com/thinadhoo.dhekunu"
            >
              <img
                alt="އަބުޅޯ"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="size-full object-cover transition-all group-hover:scale-110"
                sizes="75vw"
                srcSet="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=640&amp;q=75 640w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=750&amp;q=75 750w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=828&amp;q=75 828w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=1080&amp;q=75 1080w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=1200&amp;q=75 1200w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=1920&amp;q=75 1920w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=2048&amp;q=75 2048w, https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=3840&amp;q=75 3840w"
                src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F3%2Fphoto_2024-03-31_15-41-46.jpg&amp;w=3840&amp;q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </a> */}
            <div className="">
              {/* {
                article?.newsContent?.articleBody
              } */}

              {
                // article?.newsContent?.articleBody?.map((body: any, index: number) => {
                //   return (
                //     <p key={index}>
                //       {body?.content}
                //     </p>
                //   )
                // })

                article?.articleContent?.map((content: any, index: number) => {
                  if(content?.__typename === "ArticleBody") {
                    return (
                      <p key={index} className={cn(
                          "rtl mb-6 pl-0 text-lg font-thin leading-8 tracking-widest",
                          mvFaseyha.className
                        )}>
                        {content?.content}
                      </p>
                    )
                  } else if (content?.__typename === "ArticleImage") {
                    return (
                      <a
                        className="my-4 size-[200px] w-full rounded-xl bg-gray-200 dark:bg-gray-800"
                        href={`/article/${article?.id}`}
                        key={index}
                      >

                        {
                          content?.image?.mimeType === "video/mp4" ? (
                            <video
                              src={`${imageMainUrl}/${content?.image?.handle}`}
                              width="100%"
                              height="100%"
                              controls
                              className="mb-8 rounded-xl object-cover "
                            />
                          ) : (
                            <Image
                              src={`${imageMainUrl}/${content?.image?.handle}`}
                              alt="Picture of the author"
                              width={500}
                              height={500}
                              layout="responsive"
                              className="mb-8 rounded-xl object-cover "
                            />
                          )
                        }
                      </a>
                    )
                  }
                })


              }
            </div>
          </div>
        </div>
        <div className="relative mb-8 mt-10 gap-4 rounded-[20px] bg-okaogray-500 p-6 pb-12 dark:bg-slate-800 md:hidden lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-4">
            <h6
              className={cn(
                "rtl mb-4 border-b border-okaogray-400 pb-4 text-xl font-bold",
                mvWaheed.className
              )}
            >
              ލިޔުމާ ގުޅޭ ފަހުގެ ހަބަރު
            </h6>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a className="rtl group relative" href="/dv/143700">
              <div className="relative mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                <img
                  alt="މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all group-hover:scale-110"
                  sizes="75vw"
                  srcSet="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=640&amp;q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=750&amp;q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=828&amp;q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1080&amp;q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1200&amp;q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1920&amp;q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=2048&amp;q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75 3840w"
                  src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75"
                  // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </div>
              <h3
                className={cn(
                  "group-hover:text-web-primary line-clamp-4 text-sm font-bold leading-loose opacity-75 transition-all",
                  mvRasmee.className
                )}
              >
                މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް
              </h3>
            </a>
            <a className="rtl group relative" href="/dv/143700">
              <div className="relative mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                <img
                  alt="މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all group-hover:scale-110"
                  sizes="75vw"
                  srcSet="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=640&amp;q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=750&amp;q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=828&amp;q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1080&amp;q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1200&amp;q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1920&amp;q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=2048&amp;q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75 3840w"
                  src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75"
                  // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </div>
              <h3
                className={cn(
                  "group-hover:text-web-primary line-clamp-4 text-sm font-bold leading-loose opacity-75 transition-all",
                  mvRasmee.className
                )}
              >
                މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް
              </h3>
            </a>
            <a className="rtl group relative" href="/dv/143700">
              <div className="relative mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                <img
                  alt="މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all group-hover:scale-110"
                  sizes="75vw"
                  srcSet="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=640&amp;q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=750&amp;q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=828&amp;q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1080&amp;q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1200&amp;q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1920&amp;q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=2048&amp;q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75 3840w"
                  src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75"
                  // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </div>
              <h3
                className={cn(
                  "group-hover:text-web-primary line-clamp-4 text-sm font-bold leading-loose opacity-75 transition-all",
                  mvRasmee.className
                )}
              >
                މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް
              </h3>
            </a>
            <a className="rtl group relative" href="/dv/143700">
              <div className="relative mb-[18px] aspect-[223/157] overflow-hidden rounded-2xl lg:rounded-[20px]">
                <img
                  alt="މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover transition-all group-hover:scale-110"
                  sizes="75vw"
                  srcSet="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=640&amp;q=75 640w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=750&amp;q=75 750w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=828&amp;q=75 828w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1080&amp;q=75 1080w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1200&amp;q=75 1200w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=1920&amp;q=75 1920w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=2048&amp;q=75 2048w,
                    https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75 3840w"
                  src="https://gaafu.mv/_next/image?url=%2Fsikundi-content%2Fuploads%2F2024%2F4%2FGKGR8ZTaUAAJ6ff.jpeg&amp;w=3840&amp;q=75"
                  // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </div>
              <h3
                className={cn(
                  "group-hover:text-web-primary line-clamp-4 text-sm font-bold leading-loose opacity-75 transition-all",
                  mvRasmee.className
                )}
              >
                މާލޭގެ މަގު ހެދުމުގެ މަޝްރޫއު ފެށޭނީ އަހަރު ފަހުކޮޅަށް - ރައީސް
              </h3>
            </a>
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
    </div>
  )
}

export default Single
