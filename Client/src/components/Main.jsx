import React from 'react'
import Hero from './Hero'
import Collections from './Collections'
import Policies from './Policies'
import Subscribe from './Subscribe'
import { collectionHeading, SellersHeading } from '../heading'

function Main() {
  return (
    <div>
      <Hero/>
    <Collections>
      <h1 className="text-xl md:text-4xl">{collectionHeading}</h1>
    </Collections>
    <Collections>
      <h1 className="text-xl md:text-4xl">{SellersHeading}</h1>
    </Collections>
    <Policies/>
    <Subscribe/>
    </div>
  )
}

export default Main
