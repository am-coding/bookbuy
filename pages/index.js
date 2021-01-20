import React from 'react'
// import Articles from '../components/Articles';
import Hero from '../components/Hero';
import Work from '../components/Work';
import NotifyBar from '../components/NotifyBar';
import Footer from '../components/Footer';

import { ArticleProvider } from '../components/articleWrapper'

export default function Page() {


  return (
    <ArticleProvider>
      <div>
        {/* <Articles /> */}
        <Hero
         />
        <Work />
        <NotifyBar />
        {/* <Footer /> */}
      </div>
    </ArticleProvider>
   
  )
}