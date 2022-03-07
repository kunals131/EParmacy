import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import UnderConstruction from './UnderConstruction';
import Sidebar from './Sidebar';



const Layout = ({children}) => {
    const [width,setWidth] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    useEffect(()=>{
        setWidth(window.innerWidth);
    }, [])
    if (width>750) {
      console.log(width)
        return (
            <>
            <UnderConstruction></UnderConstruction>
            </>
        )
    }
  return (
    <>
    {showSidebar&&<Sidebar setShowSidebar={setShowSidebar}/>}
    <Header setShowSidebar={setShowSidebar}></Header>
    {children}
    <Footer></Footer>
    </>
  )
}

export default Layout