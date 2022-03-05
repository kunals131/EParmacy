import React, { useState } from 'react'
import Image from 'next/image'
import {MdShoppingCart} from 'react-icons/md'
const ProductCard = () => {
    const [counter,setCounter] = useState(0);
  return (
    <div className='py-3 px-2 bg-white w-[180px] border-[1px] border-gray-300 rounded-lg'>
        <div className='flex justify-end relative -top-3 left-2 '>
            <div className='flex justify-center items-center text-white bg-primary w-[50%]'>10% OFF</div>
        </div>
        <div className='flex justify-center items-center'>
            <Image src={"/product.png"} height="100" width="100"></Image>
        </div>
        <div className='space-y-1'>
            <h1 className='text-grayX text-sm mt-3'>Calpol Syrup 30mg</h1>
           <div>
            <span className='text-accent font-semibold'>Rs. 256</span> <span className='text-sm ml-2 text-gray-400'>20</span>
           </div>
        </div>
        <div className='flex items-center space-x-3'>
        <div className='flex justify-between items-center mt-2 bg-gray-200 rounded-lg w-[100px]'>
            <div onClick={()=>setCounter(counter-1)} className='h-[25px] w-[25px] bg-primary rounded-full flex justify-center text-white align-center'>-</div>
            <div>{counter}</div>
            <div  onClick={()=>setCounter(counter+1)} className='h-[25px] w-[25px] bg-primary rounded-full flex justify-center text-white align-center'>+</div>
        </div>
        <MdShoppingCart className='text-grayX' size={25}/>
        </div>
    </div>
  )
}

export default ProductCard