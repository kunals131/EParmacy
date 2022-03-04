import React, { useRef } from "react";
import { GiRoundStar } from "react-icons/gi";
import { MdArrowRight, } from "react-icons/md";


const OfferBlock = ({color})=>{
    return (
        <div className="w-[170px]  p-2 flex space-x-3 items-center  border-[1px] border-gray-400 rounded-lg">
            <div className={`h-[40px] w-[40px] bg-${color||'accent'} flex justify-center items-center text-white`}>25%</div>
            <div className="text-sm">
                Code : 
                <div className="font-semibold">
                    FIRST10
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
        }
        else {
            containerRef.current.scrollLeft-=380;
        }
    }
  return (
    <div className="mt-5 px-2">
      <div className="flex justify-between items-center pr-3">
        <h1 className="text-grayX text-lg flex items-center space-x-2">
          <GiRoundStar className="text-secondary"></GiRoundStar>
          <div>Exlucisve Offers</div>
        </h1>
        <div><span onClick={()=>handleClick(-1)}>{"< "}</span> <span onClick={()=>handleClick(1)}>{" >"}</span></div>
      </div>
      <div ref={containerRef} className="bg-white p-3 grid rounded-sm  gap-3 mt-4 grid-flow-col overflow-x-auto scroll-smooth ">
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
