import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { mvRasmee } from "@/config/fonts"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import LogoImage from "@/components/common/logo-image"
// import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import Logo from "../../../public/images/news/logo-mini.png"
import LogoImageFooter from "../common/logo-image-footer"

export function Footer() {
  return (
    <footer
      id="footer"
      aria-label="footer"
      className="mt-16 grid gap-8 bg-gray-950 bg-opacity-90 pb-8 dark:bg-slate-900"
    >
      <div className="container mx-auto">
        <div className="rtl py-10 md:flex">
          <div className="flex-1">
            <div className="rtl text-center">
              <a className="ltr" href="/">
                {/* <div className="flex justify-center md:justify-end"> */}
                <div className="flex justify-center">
                  <LogoImageFooter logotheme="dark" />
                </div>
              </a>
              <p className={cn("mt-8 text-gray-100", mvRasmee.className)}>
                މި މަސައްކަތުގައި އަހަރެމެން ހަމަ ހަމަ ވާނެ، އިންސާފުވެރި ވާނެ،
                އިތުބާރު ދަމަހައްޓާނެ
              </p>
              {/* <div className="rtl mt-5 flex items-center justify-center space-x-4 space-x-reverse md:justify-start"> */}
              <div className="rtl mt-5 flex items-center justify-center space-x-4 space-x-reverse">
                <a
                  href="https://www.facebook.com/profile.php?id=61556479060350"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#d4d4d4"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61556479060350"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#d4d4d4"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61556479060350"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#d4d4d4"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="32"></circle>
                    <path d="M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="ltr mt-10 flex-1 text-gray-500 md:mt-0">
            <div className="space-y-5 text-center md:flex md:space-y-0 md:text-left">
              <div className="flex-1">
                <div className="mb-2 font-bold text-gray-500">Call Us On</div>
                <div className="text-gray-400">Phone: 9948154</div>
                <div className="text-gray-400">Email: news@breaking.mv</div>
              </div>
            </div>
            <div className="mt-10 text-center md:text-left">
              Ethan Mithan, Nirolhu Magu, Hulhumale <br /> Republic of
              Maldives
            </div>
          </div> */}
        </div>
        {/* <div className="border-t border-gray-700 py-6 text-sm">
          <div className="justify-between md:flex">
            <div className="text-center md:text-left">
              <div className="text-gray-400">
                © 2024 Mi. All rights reserved.
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center space-y-3 md:mt-0 md:block md:space-x-5 md:space-y-0">
              <a href="#" className="text-gray-400">
                Code of Conduct
              </a>
              <a href="#" className="text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400">
                Terms
              </a>
              <a href="#" className="text-gray-400">
                Contact us
              </a>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="container flex items-center justify-between">
        <p className="text-sm text-muted-foreground xl:text-base">
          <Balancer>
            Built by{" "}
            <Link
              href={siteConfig.links.authorsGitHub}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline-offset-8 transition-all hover:underline hover:opacity-70"
            >
              Okao MV.
            </Link>{" "}
            <span className="hidden md:inline-flex">
              Freely available under the MIT license. Enjoy :)
            </span>
          </Balancer>
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "icon", variant: "ghost" }),
              "rounded-full"
            )}
          >
            <Icons.gitHub className="size-[18px]" />
          </Link>
          <ThemeToggle />
        </div>
      </div> */}
    </footer>
  )
}
