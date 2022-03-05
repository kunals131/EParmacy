import React from 'react'
import Image from 'next/dist/client/image'
const CategoryCard = ({title,img,link})=>{
    return (
        <div className='flex-col justify-center items-center'>
          <div className='bg-white flex justify-center items-center rounded-md p-1 border-gray-300 border-[1px]'>
          <Image src={img} width="80px" height="80px" />
          </div>
          <div className='mt-1 text-center text-grayX text-sm'>{title}</div>
        </div>
    )
}

const CategoryHome = () => {
  return (
    <div className=' mt-7 px-3 text-grayX '>
      <div className='font-semibold'>Shop by Category</div>
      <div className='text-sm text-gray-500'>Explore through our various categories</div>
      <div className='grid grid-cols-3 gap-4 mt-5 px-1'>
      <CategoryCard title="Ayurvedic" img="/categoryImage/pic1.png"/>
      <CategoryCard img="/categoryImage/pic3.png" title="Lifestyle"/>
      <CategoryCard img="/categoryImage/pic4.png" title="Personal Care" />
      <CategoryCard img="/categoryImage/pic5.png" title="Accessories"/>
      <CategoryCard img="/categoryImage/pic2.png" title="Diabetic"/>
      <CategoryCard img="/categoryImage/pic6.png" title="Skin Care"/>
      </div>
      <div className='text-center mt-5 px-3 py-2 font-semibold border-[1px] border-primary text-primary rounded-md'>All Categories {">"}</div>
    </div>
  )
}

export default CategoryHome