"use client"

import * as React from "react"
import Link from "next/link"
import type { NavItem } from "@/types"

import { mvAanamu, mvRasmee, mvWaheed } from "@/config/fonts"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface NavigationProps {
  navItems: NavItem[]
}

export function Navigation({ navItems }: any) {

  const menus = navItems?.items;
  console.log(menus)

  return (
    <NavigationMenu className="hidden transition-all duration-500 ease-in-out md:flex">
      <NavigationMenuList>
        {menus?.map(({item, index} : any) => (
          <NavigationMenuItem key={index} asChild>
            {/* {
              console.log(item?.data?.name?.iv)
            } */}
            <Link href={item?.data?.name?.iv} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "rtl bg-transparent text-xl",
                  mvWaheed.className
                )}
              >
                {item?.data?.name?.iv}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
