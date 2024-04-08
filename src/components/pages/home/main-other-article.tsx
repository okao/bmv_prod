import React from 'react'
import { mvAanamu, mvRasmee } from '@/config/fonts'
import { cn } from '@/lib/utils'

const MainOtherArticle = ({ article, imageMainUrl, loading }: {article: any, imageMainUrl: string, loading: boolean}) => {
  return (
    <div className="flex flex-col space-y-4 bg-okaogray-500 p-5 opacity-90 dark:bg-slate-900 dark:shadow-lg md:ml-3 md:w-2/6 md:rounded-lg">
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
      <hr className="border-okaogray-600" />
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
  )
}

export default MainOtherArticle