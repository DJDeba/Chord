import React from 'react'
import Header from './Header'
import {motion} from 'framer-motion'

const Premium = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-primary">
        <Header />
        <div>
            <div className='w-full h-auto items-center justify-center flex flex-col p-4 gap-4 bg-primary text text-white'>
                <p>
                Join our premium membership to enjoy unlimited benefits
                </p>
                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center justify-center p-4 rounded-md bg-gray-600'>
                    <button>Join Now</button>
                </motion.p>
            </div>
        </div>    
    </div>
  )
}

export default Premium