"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"

import logo from "../../../public/logos/logo.svg"
import darkLogo from "../../../public/logos/logodark.svg"

const LogoImage = ({ logotheme = null }: { logotheme: string | null }) => {
  const { theme } = useTheme()
  const router = useRouter()

  // const home = () => {
  //   //show loading for 2 seconds
  //   setTimeout(() => {
  //     router.push("/")
  //   }, 2000)
  // }

  if (logotheme === "dark") {
    return (
      <div
        className="flex w-full items-center justify-center gap-2 md:justify-end"
        onClick={() => router.push("/")}
      >
        <Image src={darkLogo} alt={siteConfig.name} width={130} height={40} />
      </div>
    )
  } else if (logotheme === "light") {
    return (
      <div
        className="flex w-full items-center justify-center gap-2 md:justify-end"
        onClick={() => router.push("/")}
      >
        <Image
          className="cursor-pointer"
          src={logo} alt={siteConfig.name} width={130} height={40}
        />
      </div>
    )
  }

  if (theme === "dark") {
    return (
      <div
        className="flex w-full items-center justify-center gap-2 md:justify-end"
        onClick={() => router.push("/")}
      >
        <Image src={darkLogo} alt={siteConfig.name} width={130} height={40} />
      </div>
    )
  } else if (theme === "light") {
    return (
      <div
        className="flex w-full items-center justify-center gap-2 md:justify-end"
        onClick={() => router.push("/")}
      >
        <Image src={logo} alt={siteConfig.name} width={130} height={40} />
      </div>
    )
  } else {
    return (
      <div
        className="flex w-full items-center justify-center gap-2 md:justify-end"
        onClick={() => router.push("/")}
      >
        <Image src={logo} alt={siteConfig.name} width={130} height={40} />
      </div>
    )
  }

  // return <div className="flex items-center justify-end gap-2"></div>
}

export default LogoImage
