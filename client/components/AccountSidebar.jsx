import React from 'react'
import {TiUser} from 'react-icons/ti';
import {MdArrowForwardIos} from 'react-icons/md';
import {FaPrescription} from 'react-icons/fa';
import {GoPackage} from 'react-icons/go'
import {AiOutlineHome, AiOutlineFileDone} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs';
import {RiLogoutCircleLine, RiLockPasswordLine} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../redux/actions/user';
import {useRouter} from 'next/router';
import { useSelector } from 'react-redux';

const MenuItem = ({title,link,icon, onClick})=>{
    return (
        <div onClick={onClick} className='flex cursor-pointer  justify-between 2xl:px-2 items-center'>
        <div className='flex p-2 items-center space-x-4 lg:px-3'>
            <div className='p-3 border-2 rounded-full flex items-center justify-center bg-gray-100'>{icon}</div>
            <div className=' text-lg 2xl:text-base'>{title}</div>
        </div>
        <div>
        <MdArrowForwardIos className='text-gray-500' size={18}/>
        </div>
        
    </div>
    );
}

const AccountSidebar = () => {
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const router = useRouter();
  return (
    <div className='bg-white rounded-md lg:w-[110%] xl:w-[112%]'>
        <div className='bg-white flex space-x-5 font-poppins py-7 px-4 rounded-md'>
            <div className='h-[60px] flex items-center bg-primary bg-opacity-20 justify-center w-[60px]  rounded-full'>
                <TiUser size={40} className='text-primary'/>
            </div>
            <div>
                <div className='font-semibold font-poppins text-2xl lg:text-xl'>{user.fullName}</div>
                <div className='text-sm text-gray-400 mt-[2px] lg:mt-1'>{user.email}</div>
                <div className='text-sm mt-[1px] text-gray-400'>{user.phoneNumber}</div>
            </div>
        </div>
        <div className='mt-2 p-3 lg:p-2 bg-white space-y-4'>
              <MenuItem onClick={()=>router.push('/account/user')} title={'Account Information'} icon={<TiUser size={24} className='text-gray-500'/>}/>
              <hr />
              <MenuItem onClick={()=>router.push('/account/myorders')} title={'My Orders'} icon={<GoPackage className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem onClick={()=>router.push('/account/myprescriptions')} title={'My Prescriptions'} icon={<AiOutlineFileDone className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem onClick={()=>router.push('/account/myaddress')} title={'My Address'} icon={<AiOutlineHome className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem onClick={()=>router.push('/account/saveditems')} title={'Saved Items'} icon={<BsBag className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem onClick={()=>router.push('/account/security')} title={'Security'} icon={<RiLockPasswordLine className='text-gray-600' size={22}/>}/>
              <hr />
              <MenuItem onClick={()=>{dispatch(logoutUser(router))}} title={'Logout'} icon={<RiLogoutCircleLine className='text-gray-600' size={22}/>}/>
              
            </div>

    </div>
  )
}

export default AccountSidebar