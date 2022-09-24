import React from 'react'
import {MdOutlineLocationOn} from 'react-icons/md'
import {GiShoppingCart} from 'react-icons/gi';

const TrackComponent = () => {
  return (
    <div className='grid grid-cols-2 mt-5 mb-3 gap-3 md:hidden w-full p-2'>
        <div className='bg-grayX bg-opacity-10 p-2 flex items-center gap-4 rounded-md'>
        <div className='flex gap-3 shrink-0 items-center'>
            <MdOutlineLocationOn size={23} className='text-primary'/>
        </div>
        <div>
            <div className='text-sm text-primary'>Track Orders</div>
            <div className=' text-xs'>Check your order status</div>
        </div>
        </div>
        <div className='bg-grayX bg-opacity-10 p-2 flex items-center gap-4 rounded-md'>
        <div className='flex gap-3 shrink-0 text-2xl items-center'>
            <GiShoppingCart size={23} className='text-primary'/>
        </div>
        <div>
            <div className='text-sm text-primary'>Recreate Order</div>
            <div className='text-xs'>Previously ordered items</div>
        </div>
        </div>
    </div>
  )
}

export default TrackComponent