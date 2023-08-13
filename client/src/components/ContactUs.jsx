import React from 'react'
import Header from './Header'
import { Contactuspage } from '../assets/img'

const ContactUs = () => {
  return (
    <div className="relative w-screen h-screen">
      <Header />
      <img src={Contactuspage} type="image/jpg" className="w-full h-full object-cover"/>
      <div className='absolute w-full top-40 flex items-center justify-center'>
      <marquee className='text text-blue-700 text-5xl font-mono font-extrabold'>WE ARE HAPPY TO HELP !!!</marquee>
      </div>
      <div className='absolute w-full bottom-60 flex flex-col items-center justify-center bg-primary bg-opacity-70 text text-white'>
        <p>Phone: 8013064604</p>
        <p>Email: chakradeb321@gmail.com</p>
      </div>
    </div> 
  )
}

export default ContactUs