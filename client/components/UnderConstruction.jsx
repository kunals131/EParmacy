import React from 'react'
import Image from 'next/image'
const UnderConstruction = () => {
  return (
    <div className='h-screen bg-primary flex flex-col justify-center items-center'>
        <Image src="/logo.svg" height="90px" width="250px"></Image>
        <h1 className='text-white text-4xl font-bold'>Under Construction!</h1>
    </div>
  )
}

export default UnderConstruction