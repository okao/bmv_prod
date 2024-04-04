'use client'
import Image from "next/image"
import Link from "next/link"
// import { auth } from "@/auth"
import { IoIosSearch } from "react-icons/io"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { SignOutButton } from "@/components/auth/signout-button"
import { Navigation } from "@/components/nav/navigation"
import { NavigationMobile } from "@/components/nav/navigation-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import LogoImage from "@/components/common/logo-image"
import { useEffect, useState } from "react"


const fetchMenu = async () => {
  const response = await fetch(`/api/menus`, {
    // headers: {
    //   Authorization: `Bearer ${BearerToken}`,
    // },
  });

  const data = await response.json();
  return data;
}

export function Header() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({
    items: [],
    total: 0,
  })


  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await fetchMenu()
      setResult({
        items: data.items,
        total: data.total,
      })
    } catch (error) {
      // setError(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(result)


  loading && <div>Loading...</div>


  return (
    <header className="sticky top-0 z-40 flex h-20 w-full bg-gray-200 dark:bg-slate-800">
      <div className="flex w-full items-center justify-center md:container">
        <div className="flex w-full justify-between gap-x-4">
          <Link
            href="/"
            className="ml-4 flex items-center justify-end gap-2 text-lg font-bold tracking-wide transition-all duration-300 ease-in-out"
          >
            <IoIosSearch className="text-xl text-gray-700 md:hidden lg:flex dark:text-gray-300" />
          </Link>
          <Navigation navItems={result} />
          <LogoImage logotheme={null} />
        </div>

        <div className="flex items-center justify-center">
          <ThemeToggle />
          <NavigationMobile navItems={siteConfig.navItems} />

          {/* <nav className="space-x-1">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className={cn(
                    buttonVariants({ variant: "user", size: "icon" }),
                    "transition-all duration-300 ease-in-out hover:opacity-70"
                  )}
                >
                  <Avatar className="size-9">
                    {session?.user.image ? (
                      <AvatarImage
                        src={session?.user.image}
                        alt={session?.user.name ?? "user's profile picture"}
                        className="size-7 rounded-full"
                      />
                    ) : (
                      <AvatarFallback className="size-9 cursor-pointer p-1.5 text-xs capitalize">
                        <Icons.user className="size-5 rounded-full" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {session?.user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild disabled>
                      <Link href="/dashboard/account">
                        <Icons.avatar
                          className="mr-2 size-4"
                          aria-hidden="true"
                        />
                        Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild disabled>
                      <Link href="/dashboard/settings">
                        <Icons.settings
                          className="mr-2 size-4"
                          aria-hidden="true"
                        />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <SignOutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                aria-label="Get started"
                href="/signup"
                className={cn(buttonVariants({ size: "sm" }), "ml-2")}
              >
                Get Started
                <span className="sr-only">Get Started</span>
              </Link>
            )}
          </nav> */}
        </div>
      </div>
    </header>
  )
}
