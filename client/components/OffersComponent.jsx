import React, { useRef } from "react";
import { GiRoundStar } from "react-icons/gi";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';


const OfferBlock = ({color})=>{
    return (
        <div className="w-[300px] bg-white p-2 py-6 flex space-x-3 items-center  border-[1px] border-gray-400 rounded-lg">
            <div className={`h-[50px] w-[50px] bg-${color||'accent'} flex justify-center items-center text-white`}>25%</div>
            <div className="text-sm">
              <div>25% off on all products</div>
                <div className="font-semibold">
                Code : FIRST10
                </div>
            </div>
        </div>
    )
}

const OffersComponent = () => {
    const containerRef = useRef(null);
    const handleClick = (direction)=>{
        if (direction===1) {
            containerRef.current.scrollLeft+=380;
            console.log(containerRef.current.scrollLeft);
        }
        else {
            containerRef.current.scrollLeft-=380;
            console.log(containerRef.current.scrollLeft);
        }
    }
  return (
    <div className="mt-5 px-2 lg:block hidden">
      <div className="flex justify-between items-center pr-3">
        <h1 className="text-grayX text-lg flex items-center space-x-2">
          <GiRoundStar className="text-secondary"></GiRoundStar>
          <div className="font-semibold text-xl">Offers Only for You</div>
        </h1>
        <div className="text-primary  flex items-center">
          <div className="hover:underline">See All Offers</div>
          <div className="ml-3 text-gray-900 mr-2 p-2 transition-all hover:border-[1px] hover:rounded-md hover:shadow-lg" onClick={()=>handleClick(-1)}><IoIosArrowBack/></div>
          <div className="p-2 text-gray-900 transition-all hover:border-[1px] hover:rounded-md hover:shadow-lg" onClick={()=>handleClick(1)}><IoIosArrowForward/></div>

          </div>
      </div>
      <div ref={containerRef} className="no-scrollbar p-3 grid rounded-sm  gap-5 mt-4 grid-flow-col overflow-x-auto scroll-smooth ">
          <OfferBlock color="accent"/>
          <OfferBlock color="primary"/>
          <OfferBlock/>
          <OfferBlock/>
          <OfferBlock/>
          <OfferBlock/>

      </div>
    </div>
  );
};

export default OffersComponent;
