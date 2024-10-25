"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Advertisement = {
  id: string;
  adsAsset: {
    url: string;
  };
  name: string;
  link?: string;
};

type Props = {
  advertisements: Advertisement[];
  time?: number;
};

const AdCarousel: React.FC<Props> = ({ advertisements, time = 5000 }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('left');
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % advertisements.length);
    }, time);

    return () => clearInterval(interval);
  }, [advertisements.length, time]);

  if (advertisements.length === 0) return null;

  const currentAd = advertisements[currentAdIndex];
  const nextAdIndex = (currentAdIndex + 1) % advertisements.length;
  const nextAd = advertisements[nextAdIndex];

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 pb-2 md:h-[180px] md:py-2">
      <div className={`flex transition-transform duration-500 ease-in-out ${direction === 'left' ? '-translate-x-full' : 'translate-x-0'}`}>
        <AdImage ad={currentAd as Advertisement} />
        <AdImage ad={nextAd as Advertisement} />
      </div>
      <div className="text-left text-[9px] text-gray-900">
        Advertisement
      </div>
    </div>
  );
};

const AdImage: React.FC<{ ad: Advertisement }> = ({ ad }) => (
  <Link
    href={ad?.link ?? ''}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full shrink-0"
  >
    <Image
      src={ad?.adsAsset.url ?? ''}
      alt={ad.name}
      priority
      width={100}
      height={230}
      className="size-full object-cover"
    />
  </Link>
);

export default AdCarousel;
