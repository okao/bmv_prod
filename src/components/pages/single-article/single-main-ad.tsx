import React from 'react'
import ArtcleMainImage from "../../../../public/images/ads/article_main_1.webp"
import Image from 'next/image'

const SingleMainAd = () => {
  return (
    <div className="col-span-12 hidden px-4 lg:col-span-3 lg:row-span-2 lg:block lg:px-0">
      <div className="sticky top-28 grid gap-6 pb-8 lg:gap-8">
        <a
          href="/"
          className="relative aspect-[300/600] w-full overflow-hidden rounded-xl bg-secondary lg:block"
        >
          <Image
            fill
            alt="މޯލްޑިވްސް ގޭސް"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="size-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"


            // srcSet={ArtcleMainImage}
            src={ArtcleMainImage}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </a>
      </div>
    </div>
  )
}

export default SingleMainAd