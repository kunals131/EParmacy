import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import UnderConstruction from './UnderConstruction';
import Sidebar from './Sidebar';



const Layout = ({children}) => {

    const [showSidebar, setShowSidebar] = useState(false);
   
  return (
    <>
    
    {showSidebar&&<Sidebar setShowSidebar={setShowSidebar}/>}
    <Header setShowSidebar={setShowSidebar}></Header>
    <div className='max-w-[1800px] m-auto'>
    {children}
    </div>
    <Footer></Footer>
    </>
  )
}

export default Layout