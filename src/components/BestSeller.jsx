import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => { 

 const {products} = useContext(ShopContext);
 const [bestSeller,setBestSeller] = useState([]);

 useEffect(()=>{
     const bestProduct = products.filter((item)=>(item.bestseller));
     setBestSeller(bestProduct.slice(0,5))
 },[])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'> 
      <Title text1={'BEST'} text2={'SELLERS'}/> 
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> 
      "Elevate your daily routine with our curated selection of top-selling essentials. These aren't just products; they are the must-haves that our customers rely on to make life more stylish, comfortable, and efficient. Whether you are searching for a wardrobe staple or a home game-changer, this collection features the best of the best, designed to bring joy and quality to your everyday life."
      </p>
      </div> 

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
    bestSeller.map((item,index)=>(
        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
    ))
}
</div>


    </div>
  )
}

export default BestSeller
