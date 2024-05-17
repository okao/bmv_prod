'use client'

import { cn } from '@/lib/utils'
import { mvWaheed } from '@/config/fonts'
import React, {useState, useEffect, useCallback} from 'react'
import { getArticleWithTypeCount } from '@/graph/apollo';
import moment from 'moment';
import { useSearchParams } from 'next/navigation';

const SectionPage = () => {

  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true)
  const [section, setSection] = useState('')
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async (name: string) => {
    setLoading(true);
    const data = await getArticleWithTypeCount(name, 40);

    if (data?.pageInfo?.pageSize > 0) {
      setArticles(data?.edges);
    } else {
      setArticles([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    try {
      setSection('')
      if (searchParams.has('name')) {
        const name = searchParams.get('name') as string;
        setSection(name);
        fetchArticles(name);
      }
    } catch (e) {
      console.error('Error in fetching articles', e)
    }
  }, [searchParams, fetchArticles]);




  return (
    <div>
      <div className='mb-10 bg-okaogray-600 dark:bg-slate-900'>
        <div className='container mx-auto'>
          <h1 className={
            cn("mx-4 py-10 text-center text-[40px] text-gray-700 dark:text-slate-300 sm:text-[50px]", mvWaheed.className)
          }>
            {section}
          </h1>
        </div>
      </div>
      <div className='mt-4 overflow-hidden md:container md:mx-auto'>
        <div className='-my-4 grid grid-cols-2 text-center sm:-mx-4 md:flex md:flex-row-reverse md:flex-wrap xl:mx-0'>
          {
            articles?.map((article: any, index: number) => (

              <div className='group grid w-full border-l  border-t  border-dashed border-gray-300 p-4 transition duration-300
 ease-in-out  dark:border-slate-700  sm:w-1/3  sm:flex-col lg:w-1/4' key={index}>

                <div className='size-[216px] shrink-0 sm:h-[254px] sm:w-full'>
                  <a
                    href={`/article/${article?.node?.id}`}
                    title={article?.node?.title}
                  >
                    <div className='relative h-[200px] overflow-hidden '>
                      <img
                        src={article?.node?.mainImage?.url}
                        alt=""
                        className='size-full object-cover'
                      />
                    </div>
                  </a>
                </div>

                <a
                  href={`/article/${article?.node?.id}`}
                  title={article?.node?.title}
                  className='mr-6 flex w-full flex-col justify-between text-right sm:mr-0 md:justify-start md:text-right'
                >
                  <p className={cn("text-xl leading-10 text-gray-700 dark:text-slate-300", mvWaheed.className)}>
                   {article?.node?.title}
                  </p>
                  <div className='mr-6 flex justify-end space-x-2 text-[13px] text-gray-400 md:mr-0'>
                    <div className='flex items-center'>
                      <img
                        width={16}
                        alt='time icon'
                        src='https://cdn.mihaaru.com/assets/mhr/icons/icon-listing-time.svg?v=2'
                      />
                      <span className="ml-1 w-full">
                        {moment(article?.node?.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>
                </a>

              </div>

            ))

          }
        </div>
      </div>
    </div>
  )
}

export default SectionPage