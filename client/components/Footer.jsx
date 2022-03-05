import React, {useState} from 'react'
import {MdAdd, MdMinimize} from 'react-icons/md'
import Image from 'next/image';
const FooterLink = ({title,content})=>{

  const [open,setOpen] = useState(false);

  return(
  <div className='my-3'>
    <div className='py-2 border-b-[1px] flex justify-between items-center border-gray-300'>
    <div className='text-sm font-semibold text-grayX'>{title || 'Our Services'}</div>
    {!open?<MdAdd className='text-primary' onClick={()=>setOpen(!open)} />:<MdMinimize className='text-primary' onClick={()=>setOpen(!open)}/>
    
  }
    </div>{
      open&&<div className='border-[1px] p-2'>
    <div className='text-sm my-1 py-1  border-b-[1px] border-gray-300'>About Us</div>
    <div className='text-sm my-1 py-1 border-b-[1px] border-gray-300'>Key Products</div>
    <div className='text-sm my-1 py-1 border-b-[1px] border-gray-300'>Latest Offers</div>
    <div className='text-sm my-1 py-1 border-b-[1px] border-gray-300'>Delivery Partners</div>
    </div>
}
  </div>
  );
};

const Footer = () => {
  return (
    <div className='bg-white mt-9 pt-4 px-5'>
      <div>
        <FooterLink title="Our Services"/>
        <FooterLink title="Top Categories"/>
        <FooterLink title="About Us"/>
      </div>
      <div className='mt-7 font-semibold '>Find us on Playstore</div>
      <div className='flex mt-4 space-x-7'>
        <div>
        <Image src="/footerImages/appstore.png" height="40px" width="120px"/>
        </div>
        <div>
        <Image src="/footerImages/playstore.png" height="40px" width="120px"/>
        </div>
      </div>
      <div className='mt-5'>
        <div className='font-semibold'>Connect With Us</div>
        <div className='flex mt-4 space-x-5'>
          <div>
          <Image src="/socialmedia/facebook.png" height="32px" width="32px"/>
          </div>
          <div>
          <Image src="/socialmedia/google.png" height="32px" width="32px"/>
          </div>
          <div>
          <Image src="/socialmedia/instagram.png" height="32px" width="32px"/>
          </div>
        </div>
      </div>
      <div className='my-5 text-gray-600 text-sm'>2022 Ravi Medical Store. All Rights Reserved</div>
    </div>
  )
}

export default Footer