// import { Inter, Urbanist } from "next/font/google"
import localFont from "next/font/local"

// export const fontInter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// })

// export const fontUrbanist = Urbanist({
//   subsets: ["latin"],
//   variable: "--font-urbanist",
// })

export const fontHeading = localFont({
  src: "../../public/fonts/cal-sans-semi-bold.woff2",
  variable: "--font-heading",
})

export const mvFaseyha = localFont({
  src: "../../public/fonts/mv/MVFaseyhaMhr.woff2",
  variable: "--font-mv-faseyha",
})

export const mvWaheed = localFont({
  src: "../../public/fonts/mv/MVWaheed.woff2",
  variable: "--font-mv-waheed",
})

export const mvRasmee = localFont({
  src: "../../public/fonts/mv/AK-Rasmee.woff2",
  variable: "--font-mv-rasmee",
})

export const mvAanamu = localFont({
  src: "../../public/fonts/mv/mv-aammu-fk.ttf",
  variable: "--font-mv-aanamu",
})

export const enRoboto = localFont({
  src: "../../public/fonts/Roboto/Roboto-Regular.ttf",
  variable: "--font-roboto",
})
