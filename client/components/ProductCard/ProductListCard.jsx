import React from 'react'
import Image from 'next/image'
const ProductListCard = () => {
  return (
    <div className='px-4 py-4 border-b-[1px] border-b-gray-300 bg-white rounded-md flex space-x-5 items-center'>
        <div className='bg-white'>
            <Image src="/product/p1.png" height="120px" width="120px"></Image>
        </div>
        <div>
            <div className='font-bold'>Nivea Soft light cream and mosturizer</div>
            <div className='text-gray-400 font-semibold text-sm'>combo pack of 2 packs</div>
            <div className='flex space-x-5 mt-1'>
                <div className='text-lg font-semibold items-center text-accent'>Rs. 257</div>
                <div className='text-gray-400'><strike>Rs.457</strike></div>
                <div className='text-primary font-bold'>55% off</div>
            </div>
            <div className='px-2 rounded-md py-1  font-semibold text-primary border-primary border-[1px] w-fit mt-3'>Add to Cart</div>
        </div>

    </div>
  )
}

export default ProductListCard