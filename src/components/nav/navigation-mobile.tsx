"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import type { NavItem } from "@/types"

import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import AnimateIn from "../animations/animate-in"

interface NavigationMobileProps {
  navItems: NavItem[]
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  disabled?: boolean
  segment: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rtl rounded-lg transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900 dark:text-slate-100 dark:hover:bg-slate-900 dark:hover:text-slate-100",
        href.includes(segment),
        disabled && "pointer-events-none opacity-60",
        mvWaheed.className
      )}
      onClick={() => setIsOpen(false)}
    >
      <span>
        <AnimateIn
          as="h2"
          from="opacity-0 translate-y-32"
          to="opacity-100 translate-y-0"
          delay={500}
          duration={300}
          className="text-3xl hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-100"
          style={{transitionTimingFunction:"cubic-bezier(0.25, 0.4, 0.55, 1.4)"}}
        >{children}</AnimateIn>
      </span>
    </Link>
  )
}

export function NavigationMobile({ navItems }: any) {
  const segment = useSelectedLayoutSegment()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  console.log("navItems", navItems);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="transition-all duration-300 ease-in-out">
        <Button variant="navbarIcon" size="icon" className="md:hidden">
          <Icons.newsMenu className="size-5" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-[98%] flex-col gap-6 bg-gray-300/30 font-bold backdrop-blur-md backdrop-brightness-150 transition-all duration-500 ease-in-out dark:bg-slate-800/60 dark:backdrop-blur-sm dark:backdrop-brightness-150"
      >
        {/* <div className="pl-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Home</span>
          </Link>
        </div> */}
        <div
          className={cn(
            "rtl mt-[10%] flex flex-col-reverse gap-6 pr-8 text-center text-3xl  font-medium leading-6 tracking-wider dark:text-slate-100 dark:hover:bg-slate-900",
            mvRasmee.className
          )}
        >

          {navItems.map((menu: any, key: number) => (

            <MobileLink
              key={key}
              href={menu?.node?.name}
              segment={String(segment)}
              setIsOpen={setIsOpen}
            >
              {menu?.node?.name}
            </MobileLink>
          ))}
        </div>
        </SheetContent>
    </Sheet>
  )
}
