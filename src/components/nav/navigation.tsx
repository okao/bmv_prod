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

// interface NavigationProps {
//   navItems: NavItem[]
// }

export function Navigation({ navItems } : any) {

  return (
    <NavigationMenu className="hidden transition-all duration-500 ease-in-out md:flex">
      <NavigationMenuList>
        {
          navItems?.map((menu : any, index: number) => {
            return (
              <NavigationMenuItem key={index} asChild>
                <Link href={menu?.node?.name} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rtl bg-transparent text-xl",
                      mvWaheed.className
                    )}
                  >
                    {menu?.node?.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          })
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}
