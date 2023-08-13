import React from 'react'
import Header from './Header'
import {motion} from 'framer-motion'
import { Premiumpage } from '../assets/img'

const Premium = () => {
  return (
  <div className="relative w-screen h-screen">
  <Header />
  <img src={Premiumpage} type="image/jpg" className="w-full h-full object-cover"/>
  <div className="absolute w-full top-40 flex items-center justify-center">
    <marquee className="text text-green-500 text-5xl font-mono font-extrabold">
      Join our premium membership to enjoy unlimited benefits !!!
    </marquee>
  </div>
  <div className="absolute w-full bottom-60 flex items-center justify-center p-4 gap-4 text text-white">
    <motion.p whileTap={{ scale: 0.75 }} className="flex items-center justify-center p-4 rounded-md bg-gray-600 bg-opacity-50">
      <button>Join Now</button>
    </motion.p>
  </div>
</div>

  )
}

export default Premium