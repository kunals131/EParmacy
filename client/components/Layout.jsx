import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import UnderConstruction from './UnderConstruction'
const Layout = ({children}) => {
    const [width,setWidth] = useState(0);
    useEffect(()=>{
        setWidth(window.innerWidth);
    }, [])
    if (width>750) {
        return (
            <>
            <UnderConstruction></UnderConstruction>
            </>
        )
    }
  return (
    <>
    <Header></Header>
    {children}
    <Footer></Footer>
    </>
  )
}

export default Layout