import React, {useState, useEffect} from 'react'
import {MdMenu, MdShoppingCart, MdArrowBack, MdUpload} from 'react-icons/md';
import {RiFileList3Fill, RiShoppingCartFill, RiShieldUserFill} from 'react-icons/ri'
import Image from 'next/image';
import SearchBar from './Searchbar';
import { useRouter } from 'next/router';
import Link from 'next/link'

const DekstopHeader = ({className})=>{
    <div className={`${className}`}>

    </div>
}

const HeaderItem = ({title,link, className})=>{
    const router = useRouter();
    const [active,setActive] = useState(router.pathname===link);
    useEffect(()=>{
        setActive(router.pathname===link);
    }, [router.pathname])
    return (
        <div className='group'>
            <Link href={link}><a className={className}>{title}</a></Link>
            <div className={`h-[2px] ${active?'scale-95':''}  scale-0 group-hover:scale-75 transition-all bg-primary`}></div>
        </div>
    )
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

    <div className='lg:bg-background bg-primary lg:shadow-md px-4 py-2 lg:px-3 xl:px-4 3xl:px-5 4xl:px-12 lg:py-6 md:py-5'>
        <div className='flex justify-between items-center'>
            <div className='text-white flex items-center  space-x-2'>
                {
                    searchType==='bar'?
                <MdMenu className='lg:hidden' onClick={()=>setShowSidebar(true)} size={30}/>:
                <MdArrowBack className='lg:hidden'  size={30}/>

}
                <div className='mt-1'>
                    <div className='lg:hidden'>{Heading()}</div>
                    <div className='hidden lg:block 3xl:hidden'>
                    <Image src="/logoHeader.png"height="30px" width="100px"/>
                    </div>
                    <div className='hidden 3xl:block'>
                    <Image src="/logoHeader.png"height="40px" width="130px"/>
                    </div>
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
                <div className='flex space-x-4 xl:space-x-5 lg:text-black text-white font-semibold'>
                <HeaderItem className="text-sm 2xl:text-base" title="Home" link="/"/>
                <HeaderItem className="text-sm 2xl:text-base" title="Categories" link={"/categories"}/>
                <HeaderItem className="text-sm 2xl:text-base" title="About Us" link={"/about"}/>
                <HeaderItem className="text-sm 2xl:text-base lg:hidden xl:inline" title="Contact Us" link={"/contact"}/>
                </div>
            </div>
            <div className='hidden lg:block'>
                <input className='w-[330px] xl:w-[360px] 2xl:w-[420px] 3xl:w-[500px] ml-5 rounded-md h-[40px] lg:border-2 p-3 text-sm' type="text" placeholder='Search for medicine' />
            </div>
            <div className='hidden lg:block text-white lg:text-black'>
                <div className='flex space-x-5 xl:space-x-7 2xl:space-x-9 3xl:space-x-12'>
                <div className='flex items-center space-x-2'>
                    <div><RiFileList3Fill size={20}/></div>
                    <div className='font-semibold cursor-pointer text-sm 2xl:text-base'>Upload</div>
                </div>
                <div className='flex items-center space-x-2'>
                    <div><RiShoppingCartFill size={27}/></div>
                    <div className='font-semibold cursor-pointer text-sm 2xl:text-base'>Cart</div>
                </div>
                <div className='flex items-center space-x-2'>
                    <div><RiShieldUserFill size={27}/></div>
                    <div className='font-semibold cursor-pointer text-sm 2xl:text-base' onClick={()=>router.push('?login=true', undefined,{shallow : true})}>User</div>
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