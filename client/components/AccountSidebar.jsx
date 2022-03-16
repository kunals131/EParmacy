import React from 'react'
import {TiUser} from 'react-icons/ti';
import {MdArrowForwardIos} from 'react-icons/md';
import {FaPrescription} from 'react-icons/fa';
import {GoPackage} from 'react-icons/go'
import {AiOutlineHome, AiOutlineFileDone} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs';
import {RiLogoutCircleLine, RiLockPasswordLine} from 'react-icons/ri';

const MenuItem = ({title,link,icon})=>{
    return (
        <div className='flex  justify-between items-center'>
        <div className='flex p-2 items-center space-x-4'>
            <div className='p-3 border-2 rounded-full flex items-center justify-center bg-gray-100'>{icon}</div>
            <div className=' text-lg'>{title}</div>
        </div>
        <div>
        <MdArrowForwardIos className='text-gray-500' size={20}/>
        </div>
        
    </div>
    );
}

const AccountSidebar = () => {
  return (
    <div className='p-2'>
        <div className='bg-white flex space-x-5 font-poppins py-7 px-4 rounded-md'>
            <div className='h-[60px] flex items-center bg-primary bg-opacity-20 justify-center w-[60px]  rounded-full'>
                <TiUser size={40} className='text-primary'/>
            </div>
            <div>
                <div className='font-semibold font-poppins text-2xl'>Kunal Sangtiani</div>
                <div className='text-sm text-gray-400 mt-[2px]'>ksangtiani13@gmail.com</div>
                <div className='text-sm mt-[1px] text-gray-400'>+91 7049930190</div>
            </div>
        </div>
        <div className='mt-2 p-3 bg-white space-y-4'>
              <MenuItem title={'Account Information'} icon={<TiUser size={24} className='text-gray-500'/>}/>
              <hr />
              <MenuItem title={'My Orders'} icon={<GoPackage className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem title={'My Prescriptions'} icon={<AiOutlineFileDone className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem title={'My Address'} icon={<AiOutlineHome className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem title={'Saved Items'} icon={<BsBag className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem title={'Security'} icon={<RiLockPasswordLine className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem title={'Logout'} icon={<RiLogoutCircleLine className='text-gray-600' size={22}/>}/>
              
            </div>

    </div>
  )
}

export default AccountSidebar