
import React, { useRef } from "react";
import { GiRoundStar } from "react-icons/gi";
import { MdArrowRight, } from "react-icons/md";
import ProductCard from "./ProductCard/ProductCard";

const CategoryPreviewComponent = ({heading, link,children}) => {
    const containerRef = useRef(null);
    const handleClick = (direction)=>{
        if (direction===1) {
            containerRef.current.scrollLeft+=380;
        }
        else {
            containerRef.current.scrollLeft-=380;
        }
    }
  return (
    <div className='mt-5 py-1'>
     <div className="px-2">
      <div className="flex justify-between items-center pr-3">
        <h1 className="text-grayX flex items-center space-x-2">
          <div className="font-semibold text-grayX">{heading}</div>
        </h1>
        <div className="text-primary underline text-sm">View All</div>
      </div>
      <div ref={containerRef} className=" p-3 grid rounded-sm  gap-3 mt-4 grid-flow-col overflow-x-auto scroll-smooth ">
          {children}
      </div>
    </div>
    </div>
  )
}

export default CategoryPreviewComponent