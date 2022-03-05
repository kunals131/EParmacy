import React from 'react'
import {FcBusinessman} from 'react-icons/fc'
import {MdKeyboardArrowRight} from 'react-icons/md'
const Sidebar = ({setShowSidebar}) => {
  return (
    <div onClick={()=>setShowSidebar(false)} className='bg-[rgba(0,0,0,0.7)] h-screen w-screen fixed top-0 left-0 z-40'>
    <div onClick={(e)=>e.stopPropagation()} className='h-screen  w-[75vw] fixed z-50 left-0 top-0 p-3 bg-white'>
        <div className='flex justify-between'>
        <div className='mt-3 flex space-x-2'>
            <div className='border-[1px] rounded-full p-2 w-[60px] h-[60px] flex justify-center items-center'>
                <FcBusinessman size={60}/>
            </div>
            <div>
                <div className='text-lg  font-bold'>Hi there!</div>
                <div className='text-grayX text-sm'>Login/ Sign Up</div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <MdKeyboardArrowRight className='text-grayX' size={53}/>
        </div>
        </div>
        <hr className='mt-3' />
        <div>

        </div>
    </div>
    </div>
  )
}

export default Sidebar