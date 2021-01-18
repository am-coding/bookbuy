import React from 'react'
import Articles from '../components/Articles';
import { ArticleProvider } from '../components/articleWrapper'

export default function Page() {

  return (
    <ArticleProvider>
      <div>
        <Articles />
      </div>
    </ArticleProvider>
   
  )
}