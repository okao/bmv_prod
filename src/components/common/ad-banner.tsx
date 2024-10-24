import { useEffect, useState } from 'react';
import MainAd from '../../../public/images/ads/main_ad_coke.png';
import Image from 'next/image';


const AdBanner = ({ href }: { href: string }) => {
  return (
    <div className='pb-2'>
      <a
        className="mx-auto block md:container"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <div className='mb-4 h-[90px] lg:h-[180px]'>
          <Image
            src={MainAd}
            className="size-full "
            alt=""
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 728px, 970px 90vw, 970px 728px'
          />
          <span className="ml-auto text-[8px] tracking-wide md:text-[10px]">
            ADVERTISEMENT
          </span>
        </div>
      </a>
    </div>
  )
}

export default AdBanner
