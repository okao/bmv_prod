import { useEffect, useState } from 'react';



const AdBanner = ({ src, href }: { src: string; href: string }) => {
  return (
    <div>
      <a
        className="container mx-auto block"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <img src={src} className="w-full md:rounded" alt="" />
        <span className="ml-auto px-2 text-xs tracking-wide opacity-30 md:px-0">
          ADVERTISEMENT
        </span>
      </a>
    </div>
  )
}

export default AdBanner
