import React, {useState, useEffect} from 'react'
import {MdMenu, MdShoppingCart, MdArrowBack} from 'react-icons/md';
import Image from 'next/image';
import SearchBar from './Searchbar';
import { useRouter } from 'next/router';

const Header = ({setShowSidebar}) => {
    const [searchType, setSearchType] =  useState('button')
    const router = useRouter();
    useEffect(()=>{
        if (router.pathname!=='/') {
            setSearchType('button');
        }
        else {
            setSearchType('bar');
        }

    }, [router.pathname])

  return (
      <>

    <div className='bg-primary px-4 py-2'>
        <div className='flex justify-between items-center'>
            <div className='text-white flex items-center items-center space-x-2'>
                {
                    searchType==='bar'?
                <MdMenu onClick={()=>setShowSidebar(true)} size={30}/>:
                <MdArrowBack  size={30}/>

}
                <div className='mt-1'>
                <Image src="/mainx.png"height="30px" width="100px"/>
                </div>
            </div>
            <div className='text-white flex space-x-2 items-center mt-2 align-center'>
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
        </div>
        {searchType==='bar'&&
        <div className='mt-3 w-full'>
             <SearchBar type={searchType} />
        </div>
}
    </div>
    </>
  )
}

export default Header