import React, {useState} from "react";
import { MdShare } from "react-icons/md";
import Image from "next/image";
import ProductListCard from "../../components/ProductCard/ProductListCard";
const DescText = ({children, className})=>{
    const text=  children;
    const [show,setShow] = useState(false);
    return (
        <div className={className}>
            {
                text.length<300?text:(
                    show?(text):(<>
                    
                    {`${text.substr(0,300)}...`}
                   
                    </>
                    
                    )
                )
            }
            {text.length>300&& <div className="mt-2 text-primary underline" onClick={()=>setShow(!show)}>{show?'Show less':'Show more'}</div>}
        </div>
    )

}

const Product = () => {
  return (
    <div className="p-4 bg-white ">
      <div className="flex justify-between">
        <div className="text-xl font-poppins text-grayX">
          Nivea Soft Light Mosturizer and protection Face wash
        </div>
        <div>
          <MdShare className="text-grayX" size={22}></MdShare>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center mt-7">
        <Image src="/product/p1.png" height="270px" width="270px" />
      </div>
      <div className="flex mt-7 space-x-5 items-center">
        <h1 className="text-xl font-semibold text-gray-800">Rs. 257</h1>
        <h1 className="text-sm text-gray-400">
          <strike>MRP Rs. 400</strike>
        </h1>
        <div className="bg-green-400 font-bold px-1 text-white text-sm">
          55% off
        </div>
      </div>
      <div className="mt-4">
        <select
          className="w-[70%] p-2 py-2 outline-none bg-white border-[1px] border-gray-300 rounded-sm "
          name="options"
          id=""
        >
          <option value="">Pack of one</option>
          <option value="">Pack of two</option>
          <option value="">Pack of three</option>
        </select>
      </div>
      <div className="flex space-x-4 mt-4 items-center">
        <div className="bg-white text-center font-semibold text-primary border-primary border-[1px]  w-full py-2 rounded-md">
          Add to Cart
        </div>
        <div className="bg-primary text-center font-semibold text-white border-primary border-[1px]  w-full py-2 rounded-md">
          Buy Now
        </div>
      </div>
      <div className="mt-7">
        <div className="text-xl font-bold text-grayX">Description</div>
        <DescText className="mt-3 text-sm text-gray-600">
          Nivea Soft Light Moisturising Creme (Beiersdorf AG) Nivea Soft Creme
          treats the skin with a quick-absorbing formula, it keeps you feeling
          fresh at the snap of a finger, so you can get ready in seconds. Enjoy
          fresh skin with the goodness of vitamin E and jojoba oil. Key
          Ingredients: Vitamin E Jojoba oilith the goodness of vitamin E and jojoba oil. Key
          Ingredients: Vitamin E Jojoba oil
        </DescText>
      </div>
      <div className="mt-7">
      <div className="text-xl font-bold text-grayX">Alternate Products</div>
      <div className="mt-2 flex-col space-x-3">
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
      </div>
      <div className="text-center text-primary mt-2 font-semibold">View All</div>
    </div>
    <div className="mt-7">
    <div className="text-xl font-bold text-grayX">Other Information</div>
    <DescText className="mt-2 text-sm">COD available</DescText>
    </div>
    </div>
  );
};

export default Product;
