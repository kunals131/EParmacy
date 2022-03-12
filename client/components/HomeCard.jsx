import React from 'react'
import Image from 'next/image';
const HomeCard = () => {
  return (
    <div className='bg-white w-[calc((100vw-3.75rem-11rem)/3)] xl:w-[calc((100vw-3.75rem-11rem)/4)] 2xl:w-[calc((100vw-3.75rem-11rem)/5)] h-[300px] flex flex-col justify-center items-center rounded-xl shadow-lg'>
        <div className=''>
            <Image src="/categoryImage/pic1.png" height="180px" width="180px" ></Image>
        </div>
        <div className='text-center font-semibold'>Covid Essentials</div>
    </div>
  )
}

export default HomeCard