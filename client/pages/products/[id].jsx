import React, {useState} from "react";
import { MdShare, MdClear } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
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

const CategoryModal = ({close})=>{

  return (
  <div onClick={close} className="bg-[rgba(0,0,0,0.73)] z-[50] flex justify-center items-center fixed top-0 left-0 h-screen w-screen ">
    <div onClick={(e)=>e.stopPropagation()} className="bg-white rounded-xl p-3 w-[85%]">
      <div className="flex justify-between items-center">
        <div>Smiliar to Nivea..</div>
        <div onClick={close}><MdClear size={26}/></div>
      </div>
      <div className="mt-7 space-y-2">
      <div className="px-1 py-3 border-[1px]">
        <div className="font-semibold" ><Link href="/products/1233" onClick={close}>Nivea soft product 2</Link> </div>
        <div className="text-sm">2500/bottle</div>
      </div>
      <div className="px-1 py-3 border-[1px]">
        <div className="font-semibold" ><Link href="/products" onClick={close}>Nivea soft product 2</Link></div>
        <div className="text-sm">2500/bottle</div>
      </div>
      </div>
    </div>
  </div>
  );
}


const Product = ({prescriptionRequired}) => {
  const [modal,setModal] = useState(false);

  return (
    <>
    {modal&&<CategoryModal close={()=>setModal(false)}/>}
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
        <div className="m-auto bg-[#37b9c531] rounded-md px-2 py-5">
          <h1 className="font-semibold " onClick={()=>setModal(true)}>More from this category {">"}</h1>
          <div className="mt-3">
            <div>
              <div className="text-accent">Eplipsa 500mg/5ml injection</div>
              <div className="text-sm text-grayX">Rs. 2524/bottle</div>
            </div>
          </div>
        </div>
    </div>
    <div className="mt-7">
    <div className="text-xl font-bold text-grayX">Other Information</div>
    <DescText className="mt-2 text-sm">COD available</DescText>
    </div>
    </div>
    </>
  );
};

export default Product;
