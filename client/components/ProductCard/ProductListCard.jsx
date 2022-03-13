import React from 'react'
import Image from 'next/image'
const ProductListCard = () => {
  return (
    <div className='px-4 py-4 border-b-[1px] border-b-gray-300 bg-white lg:border-[1px] lg:rounded-md rounded-md flex lg:flex-col lg:space-x-0 space-x-5 items-center'>
        <div className='bg-white'>
            <Image src="/product/p1.png" height="120px" width="120px"></Image>
        </div>
        <div className='lg:mt-7'>
            <div className='font-bold lg:text-sm lg:font-normal' >Nivea Soft light cream and mosturizer</div>
            <div className='text-gray-400 font-semibold text-sm lg:text-xs'>combo pack of 2 packs</div>
            <div className='flex mt-1 lg:space-x-0 space-x-5 lg:flex-col lg:mt-1'>
                <div className='text-lg font-semibold items-center lg:mt-1 text-accent lg:text-base'>Rs. 257</div>
                <div className='flex space-x-5'>
                <div className='text-gray-400 lg:text-xs'><strike>Rs.457</strike></div>
                <div className='text-primary font-bold lg:text-xs'>55% off</div>
                </div>
            </div>
            <div className='px-2 rounded-md py-1  font-semibold text-primary border-primary border-[1px] lg:w-[100%] lg:text-center lg:bg-primary lg:text-white w-fit mt-3'>Add to Cart</div>
        </div>

    </div>
  )
}

export default ProductListCard