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

export function Navigation({ navItems }: NavigationProps) {
  return (
    <NavigationMenu className="hidden transition-all duration-500 ease-in-out md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title} asChild>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "rtl bg-transparent text-xl",
                  mvWaheed.className
                )}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
