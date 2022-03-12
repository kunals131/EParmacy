import React from 'react'
import Image from 'next/image'
const ProductListCard = () => {
  return (
    <div className='px-4 py-4 border-b-[1px] border-b-gray-300 bg-white xl:border-[1px] xl:rounded-md rounded-md flex xl:flex-col xl:space-x-0 space-x-5 items-center'>
        <div className='bg-white'>
            <Image src="/product/p1.png" height="120px" width="120px"></Image>
        </div>
        <div className='xl:mt-7'>
            <div className='font-bold xl:text-sm xl:font-normal' >Nivea Soft light cream and mosturizer</div>
            <div className='text-gray-400 font-semibold text-sm xl:text-xs'>combo pack of 2 packs</div>
            <div className='flex mt-1 xl:flex-col xl:mt-1'>
                <div className='text-lg font-semibold items-center xl:mt-1 text-accent xl:text-base'>Rs. 257</div>
                <div className='flex space-x-5'>
                <div className='text-gray-400 xl:text-xs'><strike>Rs.457</strike></div>
                <div className='text-primary font-bold xl:text-xs'>55% off</div>
                </div>
            </div>
            <div className='px-2 rounded-md py-1  font-semibold text-primary border-primary border-[1px] xl:w-[100%] xl:text-center xl:bg-primary xl:text-white w-fit mt-3'>Add to Cart</div>
        </div>

    </div>
  )
}

export default ProductListCard