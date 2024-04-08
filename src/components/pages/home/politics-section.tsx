import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee, mvWaheed } from '@/config/fonts'
import HomeGallery from "@/components/home/home-gallery"


const PoliticsSection = ({ article, imageMainUrl, loading }: {article: any, imageMainUrl: string, loading: boolean}) => {
  return (
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
  )
}

export default PoliticsSection