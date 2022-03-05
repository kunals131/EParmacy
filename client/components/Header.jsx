import React from 'react'
import {MdMenu, MdShoppingCart, MdSearch} from 'react-icons/md';
import Image from 'next/image';



const Header = ({setShowSidebar}) => {
  return (
      <>
 
    <div className='bg-primary px-5 py-3'>
        <div className='flex justify-between items-center'>
            <div className='text-white flex items-center space-x-2'>
                <MdMenu onClick={()=>setShowSidebar(true)} size={30}/>
                <div className='mt-1'>
                <Image src="/mainx.png"height="30px" width="100px"/>
                </div>
            </div>
            <div className='text-white'>
                <MdShoppingCart size={32}/>
                <div className='h-[17px] w-[17px] rounded-full bg-accent relative -top-8 left-5 flex items-center justify-center text-[0.7rem]'>0</div>
            </div>
        </div>
        <div className='mt-3'>
            <input className='text-sm w-[100%] h-9 rounded-l outline-none p-3' type="text" placeholder='Search Medicine' />

        </div>
    </div>
    </>
  )
}

export default Header