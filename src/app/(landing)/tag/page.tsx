import React from 'react'
import { Suspense } from 'react'
import TagPage from '@/components/pages/tag/tag-page';

const Tag = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TagPage />
      </Suspense>
    </div>
  )
}

export default Tag