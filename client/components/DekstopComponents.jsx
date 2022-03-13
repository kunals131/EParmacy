import React from 'react'
import CategoryPreviewComponent from './CategoryPreviewComponent'
import HomeCard from './HomeCard'
import {TiStarFullOutline,TiStarHalfOutline} from 'react-icons/ti'
import OffersComponent from './OffersComponent'

const DekstopComponents = () => {
  return (
      <>
      <div className='py-4 mt-4 flex justify-between px-[5%] shadow-md rounded-md text-white bg-primary items-center'> 
          <div>Our Customers have rated us better than 75% of other pharmacies</div>
          <div className='flex'>
              <div><TiStarFullOutline size={28} className='text-[#FFC618]'/></div>
              <div><TiStarFullOutline size={28} className='text-[#FFC618]'/></div>
              <div><TiStarFullOutline size={28} className='text-[#FFC618]'/></div>
              <div><TiStarHalfOutline size={28} className='text-[#FFC618]'/></div>
          </div>
      </div>
      <OffersComponent/>
      <div>
          <CategoryPreviewComponent heading={"Shop By Category"}>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard> 
          </CategoryPreviewComponent>
          <div className='mt-8'></div>
          <CategoryPreviewComponent heading={"Top Brands"}>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard>
              <HomeCard></HomeCard> 
          </CategoryPreviewComponent>
      </div>
   
      </>
  )
}

export default DekstopComponents