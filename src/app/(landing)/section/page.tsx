import SectionPage from '@/components/pages/section/section-page'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getArticleWithTypeCount } from '@/graph/apollo';
import { mvWaheed } from '@/config/fonts'
import { cn } from '@/lib/utils';
import { Suspense } from 'react'


const Section = () => {








  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SectionPage />
      </Suspense>
    </div>
  )
}

export default Section