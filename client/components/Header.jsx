import React, {useState, useEffect} from 'react'
import {MdMenu, MdShoppingCart, MdArrowBack, MdUpload} from 'react-icons/md';
import {RiFileList3Fill, RiShoppingCartFill, RiShieldUserFill} from 'react-icons/ri'
import Image from 'next/image';
import SearchBar from './Searchbar';
import { useRouter } from 'next/router';

const DekstopHeader = ({className})=>{
    <div className={`${className}`}>

    </div>
}

const Header = ({setShowSidebar}) => {
    const [searchType, setSearchType] =  useState('button')
    const [path,setPath] = useState('/');
    const router = useRouter();
    useEffect(()=>{
        if (router.pathname!=='/') {
            setSearchType('button');
        }
        else {
            setSearchType('bar');
        }
        setPath(router.pathname);

    }, [router.pathname])

    const Heading = ()=>{
        if (router.pathname==='/cart') {
            return <div className='font-semibold font-poppins text-lg'>Order Summary</div>
        }
        if (router.pathname==='/products') {
            return <div className='font-semibold font-poppins text-lg'>Products</div>
        }
        if (router.pathname==='/categories') {
            return <div className='font-semibold font-poppins text-lg'>Categories</div>
        }
        return <Image src="/mainx.png"height="30px" width="100px"/>
    }

  return (
      <>

    <div className='bg-primary px-4 py-2 lg:px-28 md:py-5'>
        <div className='flex justify-between items-center'>
            <div className='text-white flex items-center  space-x-2'>
                {
                    searchType==='bar'?
                <MdMenu className='lg:hidden' onClick={()=>setShowSidebar(true)} size={30}/>:
                <MdArrowBack  size={30}/>

}
                <div className='mt-1'>
                    {Heading()}
                </div>
            </div>
            <div className='text-white lg:hidden flex space-x-2 items-center mt-2 align-center'>
                {
                    searchType==='button'&&
                <div className='-mt-3 '>
                    <SearchBar type={searchType} />
                </div>
}
                <div>
                <MdShoppingCart size={30}/>
                <div className='h-[17px] w-[17px] rounded-full bg-accent relative -top-8 left-5 flex items-center justify-center text-[0.7rem]'>0</div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <input className='w-[720px] ml-5 rounded-md h-[40px] p-3 text-sm' type="text" placeholder='Search for medicine' />
            </div>
            <div className='hidden lg:block text-white'>
                <div className='flex space-x-10'>
                <div className='flex items-center space-x-1'>
                    <div><RiFileList3Fill size={20}/></div>
                    <div className='font-semibold'>Upload</div>
                </div>
                <div className='flex items-center space-x-1'>
                    <div><RiShoppingCartFill size={27}/></div>
                    <div className='font-semibold'>Cart</div>
                </div>
                <div className='flex items-center space-x-1'>
                    <div><RiShieldUserFill size={27}/></div>
                    <div className='font-semibold'>Login / Signup</div>
                </div>
                </div>
            </div>
            
        </div>
        {searchType==='bar'&&
        <div className='mt-3 w-full lg:hidden'>
             <SearchBar type={searchType} />
        </div>
}
    </div>
    </>
  )
}

export default Header