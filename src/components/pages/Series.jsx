import React from 'react'
import FreeToWatch from '../main/cards/FreeToWatch'
import PopularCard from '../main/cards/PopularCard'
import TopRateCard from '../main/cards/TopRateCard'
import TrendingCard from '../main/cards/TrendingCard'

export default function Series() {
  return (
    <div className='pt-20'>
        <FreeToWatch/>
        <TrendingCard/>
        <TopRateCard/>
    </div>
  )
}
