import { useEffect, useState } from 'react';
import MainAd from '../../../public/images/ads/main_ad_coke.png';
import Image from 'next/image';


const AdBanner = ({ href }: { href: string }) => {
  return (
    <div>
      <a
        className="mx-auto block md:container"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <div className='mb-4'>
          <Image
            src={MainAd}
            className="size-full " alt=""

          />
          <span className="ml-auto px-2 text-xs tracking-wide opacity-30 md:px-0">
            ADVERTISEMENT
          </span>
        </div>
      </a>
    </div>
  )
}

export default AdBanner
