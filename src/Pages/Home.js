import React from 'react'
import Collection from '../components/Collections/Collection'
import Hero from '../components/Hero/Hero'

const Home = () => {
  return (
      <>
          <Hero />
         <Collection title="Trending"/> 
         <Collection title="What's Popular"/> 
         <Collection title="Top Rated"/> 
    </>
  )
}

export default Home