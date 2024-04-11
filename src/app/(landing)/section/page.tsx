'use client'
import SectionPage from '@/components/pages/section/section-page'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getArticleWithTypeCount } from '@/graph/apollo';
import { mvWaheed } from '@/config/fonts'
import { cn } from '@/lib/utils';

const Section = () => {
  const [section, setSection] = useState('')
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()

  const fetchArticles = async (name: string) => {
    setLoading(true);
    const data = await getArticleWithTypeCount(name, 40);

    if (data?.pageInfo?.pageSize > 0) {
      setArticles(data?.edges);
    } else {
      setArticles([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    setSection('')
    if (searchParams.has('name')) {
      setSection(searchParams.get('name'))
      fetchArticles(section)
      setLoading(false)
    }
  }, [searchParams, section])


  return (
    <div>
      <div className='mb-10 bg-gray-300'>
        <div className='container mx-auto'>
          <h1 className={
            cn("mx-4 py-10 text-center text-[40px] text-gray-700 sm:text-[50px]", mvWaheed.className)
          }>
            {section}
          </h1>
        </div>
      </div>
      {
        // articles && articles.length > 0 && <SectionPage articles={section} />
        articles && <SectionPage articles={articles} />
      }
    </div>
  )
}

export default Section