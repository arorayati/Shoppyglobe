import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1  md:grid-cols-3 gap-12 my-10 mt-40 text-sm'>
    <div>
        <img src={assets.logo} className='mb-5 w-32'/> 
        <p className='w-full md:w-2/3 text-gray-600'>
            Shoppyglobe• Quality products delivered to your doorstep.
        </p>
    </div> 
    <div> 
        </div> 
          <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p> 
        <ul className='flex flex-col gap-1 text-gray-600 '>
            <li>+1-212-456-7860</li> 
            <li>contact@Shoppyglobe.com</li> 
        </ul> 
        </div> 

        <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p> 
        <ul className=' flex flex-col gap-1 text-gray-600 '> 
      <li>Home</li>
      <li>About us</li>
      <li>Delivery</li>
      <li>Privacy policy</li> 
        </ul> 
        </div> 


    </div> 
    <div> 
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@Shoppyglobe.All Rights Reversed</p> 
    </div>
    </div>
  )
}

export default Footer
