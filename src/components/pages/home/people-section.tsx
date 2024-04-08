
import { mvAanamu, mvRasmee, mvFaseyha, mvWaheed } from '@/config/fonts'
import { cn } from '@/lib/utils'
import moment from 'moment'
import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Skeleton({ number, width, height }: { number: number, width?: string, height?: string }) {
  return (
    Array(number).fill(0).map((el, index) => (
        <div key={index}>
          {/* <div className='flex h-[300px] flex-row items-center gap-2 rounded border-r-4 bg-gray-300/30 p-2 opacity-90 shadow-lg sm:w-[400px] md:h-full lg:w-[860px]'>
              <div className='size-[4.5rem] animate-pulse rounded-full bg-gray-300'></div>
              <div className='flex w-9/12 flex-col gap-2'>
                <span className='h-2 w-11/12 animate-pulse rounded-full bg-gray-300'></span>
                <span className='h-2 w-9/12 animate-pulse rounded-full bg-gray-300'></span>
              </div>
          </div> */}
      </div>
      ))
  )
}

const PeopleSection = ({ articles, imageMainUrl, loading }: { articles: any, imageMainUrl: string, loading: boolean }) => {
  const firstArticle = articles[0];
  const mainOtherArticles = articles.slice(1, 3);

  return (
    <div className='w-full flex-col'>
      <div className=''>
        <h2
          className={cn(
            "mb-8 mt-6 text-center text-3xl font-bold",
            mvWaheed.className
          )}
        >
          މީހުންގެ ވާހަކަ
        </h2>
      </div>

      <div className='md:flex md:flex-col-reverse'>

      </div>
    </div>
  )
}

export default PeopleSection;