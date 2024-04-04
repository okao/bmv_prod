"use client"

import React, { useRef, useState } from "react"
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { cn } from "@/lib/utils"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { mvAanamu, mvRasmee } from "@/config/fonts"

const HomeGallery = () => {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  // const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
  //   progressCircle.current.style.setProperty("--progress", String(1 - progress))
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  // }

  return (
    <div className="mx-auto py-8 md:container">
      <Swiper
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={}
        className="ltr relative w-full bg-gray-900"
      >
        <SwiperSlide>
          <a className="rtl block" href="/14774">
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_42stxsHZNcGaK2uqHlmUkv5Hs.jpg"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-65",
                  mvRasmee.className
                )}
              >
                ރޯދައާއެކު މާލޭގެ ބާޒާރުމަތި
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="rtl block" href="/14700">
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_7qq8UmB5uOoChbkYGcnKeQT7d.jpg"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-75",
                  mvAanamu.className
                )}
              >
                ދޮންއަދަރާދަ ހިނގުން ހުޅުވުން
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="rtl block" href="/14688">
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_R5Tzt10PJPZpLJeVoWsXRMndq.jpg"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-75",
                  mvAanamu.className
                )}
              >
                ރޯދައަށް ސާފު ކުރުމުން މާލެވީ ގޮނޑަކަށް
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="rtl block" href="/14686">
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_ht1kTe4VaIWOE6IUfgAnqvz2x.jpg"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-75",
                  mvAanamu.className
                )}
              >
                ގޭބިސީތަކަށް ކާޑު ބެހުން
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="rtl block" href="/14607">
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_nodqslbFvsx7SpITJSg52dbZN.JPG"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-75",
                  mvAanamu.className
                )}
              >
                ދޮންއަދަރާދަ މަގު ހުޅުވުމުގެ ތައްޔާރީ
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="rtl block" href="/14560">
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_NXnt8v5EzmubWbH3ts4hgDZVi.jpg"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-75",
                  mvAanamu.className
                )}
              >
                މާލެ ސަރަހަށްދުގެ ޕާކިންގެ ދަތިކަން
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="rtl block" href="/14570">
            <div style={{ lineHeight: 0 }}>
              <img
                className="w-full object-cover"
                src="https://minoos-space.sgp1.digitaloceanspaces.com/content/media/rect_mDsptOStYUxayFcEkh8GbFgu8.jpg"
                alt=""
              />
            </div>
            <div>
              <h2
                className={cn(
                  "absolute inset-x-0 top-0  bg-black p-4 leading-relaxed text-white opacity-75",
                  mvAanamu.className
                )}
              >
                މާލޭގައި ހިނގި އަލިފާނުގެ ހާދިސާ
              </h2>
            </div>
          </a>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default HomeGallery
