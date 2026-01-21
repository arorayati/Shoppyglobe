import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div> 
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'}/> 
      </div> 
      <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w:[450px]' src={assets.about_img}/> 
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
       <p>Shoppyglobe was born for providing every size the new trendy and fashionable clothes.</p>
       <p>The ultimate destination for trendy fashionable clothes with best quality.</p> 
       <b className='text-gray-800'>Our Mission</b> 
       <p>Follow Us for always wearing good quality trendy clothes.</p>
       </div>
      </div>
      <div className='text-Sxl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/> s
      </div> 
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b> 
          <p className='text-gray-600'>We ensure that each product from our side meets the best quality for our customers.</p>
        </div> 
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b> 
          <p className='text-gray-600'>With our user friendly as husle-free ordering process,shopping has become easy and door step away .</p> 
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exeptional Customer Service:</b> 
          <p className='text-gray-600'>Our proffesionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
        </div> 
        <NewsletterBox/>
      </div>
    </div>
  )
}

export default About
 