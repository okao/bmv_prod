import React from 'react'
import { cn } from '@/lib/utils'
import { mvAanamu, mvRasmee, mvWaheed } from '@/config/fonts'
// import HomeGallery from "@/components/home/home-gallery"


const EditorialSection = ({ article, imageMainUrl, loading }: {article: any, imageMainUrl: string, loading: boolean}) => {
  return (
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
  )
}

export default EditorialSection