import { Drawer } from '@mui/material'
import Image from 'next/image';
import React, { useEffect } from 'react'

import {MdArrowForwardIos, MdClear, MdOutlineStarBorder} from 'react-icons/md';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {TiUser} from 'react-icons/ti';


const SidebarItem = ({icon,title,link})=>{
    const router = useRouter();
    return (
        <div onClick={()=>router.push(link)} className='px-7 cursor-pointer text-black py-4 gap-4 text-lg flex items-center'>
            <div>{icon}</div>
            <div>{title}</div>

        </div>
    )
}

const PhoneMenuSidebar = ({isOpen,handleClose}) => {

  return (
    <Drawer open={isOpen} onClose={handleClose}>
        <div className='md:w-[50vw] sm:w-[60vw] xs:w-[70vw] w-[80vw] bg-white'>
            <div className='justify-between px-5 bg-primary bg-gradient-to-r from-pdark flex py-6 border-b-[1px] items-center'>
            <div className='flex gap-3 items-center'>
                <div className='w-[60px] h-[60px] flex items-center justify-center text-pdark bg-white rounded-full'>
                    <TiUser size={30}/>
                </div>
                {!false?<div onClick={()=>router.push('/login')} className='text-white cursor-pointer opacity-80'>
                    <div className='text-sm font-semibold text-white'>Hi there!</div>
                    <div className='font-semibold text-white'>Login/Signup</div>
                </div>:<div onClick={()=>router.push('/account')} className='text-white cursor-pointer opacity-80'>
                    <div className='text-xs font-normal  text-white'>{user?.email}</div>
                    <div className='font-semibold text-lg text-white'>{user?.name}</div>
                </div>}
            </div>
            <div className='text-white'><MdArrowForwardIos size={26}/></div>
            </div>
            <div className='mt-3 border-b-[1px]'>
                <SidebarItem link='/' icon={<AiOutlineHome size={20}/>} title='Home'/>
                <SidebarItem link='/products' icon={<AiOutlineShoppingCart size={20}/>} title='Products'/>
            </div>
            <div className='mt-1 border-b-[1px]'>
                <SidebarItem link='/categories' icon={<AiOutlineInfoCircle size={20}/>} title='About Us'/>
                <SidebarItem link='/about-us' icon={<BsTelephone size={20}/>} title='Contact Us'/>
            </div>
            <div className='mt-1 border-b-[1px]'>
                <SidebarItem link='/account/myorders' icon={<MdOutlineStarBorder size={20}/>} title='Orders'/>
                <SidebarItem link='/account' icon={<CgProfile size={20}/>} title='My Account'/>
            </div>
        </div>
    </Drawer>
  )
}

export default PhoneMenuSidebar