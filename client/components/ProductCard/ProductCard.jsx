import React, { useState } from 'react'
import Image from 'next/image'
import {MdShoppingCart} from 'react-icons/md'
const ProductCard = () => {
    const [counter,setCounter] = useState(0);
  return (
    <div className='py-3 px-2 bg-white w-[calc((100vw-1rem)/2)] sm:w-[calc((100vw-2rem)/3)] md:w-[calc((100vw-1rem)/3)]  lg:w-[calc((100vw-3.75rem-11rem)/4)] 2xl:w-[calc((100vw-3.75rem-11rem)/5)] 3xl:w-[calc((100vw-3.75rem-11rem)/6)] border-[1px] border-gray-300 rounded-lg'>
        <div className='flex justify-end relative -top-3 left-2 '>
            <div className='flex justify-center text-xs p-1 items-center text-white bg-[#37b9c596] w-[40%]'>10% OFF</div>
        </div>
        <div className='flex justify-center items-center'>
            <Image src={"/product.png"} height="100" width="100"></Image>
        </div>
        <div className='space-y-1'>
            <h1 className='text-grayX text-sm mt-3 font-semibold'>Calpol Syrup 30mg</h1>
           <div>
            <span className='text-accent font-semibold'>Rs. 256</span> <strike className='text-xs text-gray-500 ml-1'>Rs 1200</strike> <span className='text-sm ml-2 text-gray-400'>20</span>
           </div>
           <div className='text-xs text-gray-400'>Ravi Pharmacy</div>
        </div>
        <div className='text-center mt-4 bg-primary text-white py-2 text-sm rounded-md'>Add to Cart</div>
    </div>
  )
}

export default ProductCard