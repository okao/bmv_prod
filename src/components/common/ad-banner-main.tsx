import { useEffect, useState } from 'react';
import MainAd from '../../../public/images/ads/wellco_banner.jpeg';
import Image from 'next/image';


const AdBannerMain = ({ href }: { href: string }) => {
  return (
    <div>
      <a
        className="container mx-auto block"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {/* <img src={src} className="w-full md:rounded" alt="" /> */}
        <div className='mb-4 h-[100px] lg:h-[180px]'>
          <Image
            src={MainAd}
            className="size-full " alt=""
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 728px, 970px 90vw, 970px 728px'

          />
          <span className="ml-auto px-2 text-xs tracking-wide opacity-30 md:px-0">
            ADVERTISEMENT
          </span>
        </div>
      </a>
    </div>
  )
}

export default AdBannerMain
