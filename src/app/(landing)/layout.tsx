import type * as React from "react"

import AdBanner from "@/components/common/ad-banner"
import { Footer } from "@/components/nav/footer"
import { Header } from "@/components/nav/header"

interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
   return (
    <div className="flex min-h-screen flex-col overflow-visible bg-white dark:bg-slate-950">
      <div>
        <div className="bg-white py-4 dark:bg-slate-900">
          <AdBanner
            src={
              "https://minoos-space.sgp1.cdn.digitaloceanspaces.com/content/miad/3G8vkkhnT9BxeJf6w7WbqQYGn.jpg"
            }
            href={"https://www.miadhu.mv/"}
          />
        </div>
        <div className="border-2 border-none md:border-none">
          <div className="container mx-auto">
            <div className="flex">
              <div className="hidden w-1/4 space-x-3 pb-2 pt-12">
                <button className="bg-gray-200 text-miblue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                <button className="text-miblue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="hidden w-1/4 space-x-3 pb-2 pt-12 text-right">
                <a
                  href=""
                  className="bg-miblue-600 px-2 py-1 text-xs font-semibold text-white"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Header />
      <main className="flex-1">
         {children}
       </main>
      <Footer />
    </div>
  )
}