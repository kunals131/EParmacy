
import React, { useRef, useState, useEffect} from "react";
import { GiRoundStar } from "react-icons/gi";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import ProductCard from "./ProductCard/ProductCard";

const CategoryPreviewComponent = ({heading, link,children}) => {
    const containerRef = useRef(null);
    const [onceCount,setOnceCount] = useState(2)
    useEffect(()=>{
      console.log(window.innerWidth)
      if (window.innerWidth>750) {
        setOnceCount(3)
      }
      if (window.innerWidth>1000) {
        setOnceCount(5);
      }
    }, [])
    const handleClick = (direction)=>{
      const oneWidth = (containerRef.current.clientWidth)/onceCount;
        if (direction===1) {
            containerRef.current.scrollLeft+=oneWidth;

        }
        else {
            containerRef.current.scrollLeft-=oneWidth;

      

            
        }
    }
  return (
    <div className='my-5 py-1'>
     <div className="px-2">
      <div className="flex justify-between items-center pr-3">
        <h1 className="text-grayX flex items-center space-x-2">
          <div className="font-semibold text-grayX lg:text-black lg:font-[500] lg:text-xl lg:font-poppins">{heading}</div>
        </h1>
        <div className="text-primary underline text-sm">View All</div>
      </div>
      
      <div className={`flex justify-between items-center relative -mt-4 top-44`}>
    <div onClick={()=>handleClick(-1)} className="text-slate-500 p-2 z-[50] relative -left-3  border-[1px] w-fit h-fit opacity-90 rounded-full bg-white shadow-md"><IoIosArrowBack size={20}/></div>
    <div onClick={()=>handleClick(1)} className={`text-slate-500 p-2 relative z-[50] left-3  border-[1px] w-fit h-fit opacity-90 rounded-full bg-white ${containerRef.current?.scrollWidth===containerRef.current?.clientWidth&&'opacity-1'} shadow-md`}><IoIosArrowForward size={20}/></div>

        </div>
      <div ref={containerRef} className="no-scrollbar py-3 grid rounded-sm gap-4 grid-flow-col overflow-x-auto scroll-smooth ">
          {children}
      </div>
    </div>
    </div>
  )
}

export default CategoryPreviewComponent