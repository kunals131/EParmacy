import React from "react";
import Image from "next/image";
import ProductListCard from '../components/ProductCard/ProductListCard'
import {MdArrowForward} from 'react-icons/md'
const CartProduct = () => {
  return (
    <div className="px-3 py-3 border-[1px] border-gray-100">
      <div className="flex space-x-3 items-center">
        <div className="lg:hidden">
           <Image src="/product/p1.png" height="100px" width="100px" />
        </div>
        <div className="hidden lg:block">
          <Image src="/product/p1.png" height="70px" width="70px" />
        </div>
        <div>
          <div className="lg:text-sm">Nivea Body Lotion with a pack of facewash</div>
          <div className="mt-2 font-semibold text-lg lg:text-sm text-accent">Rs. 256 <span><strike className='text-gray-400 ml-2 font-normal text-sm'>475</strike></span></div>
          <div className="text-sm text-green-600 lg:text-xs">Instock</div>
        </div>
      </div>
      <div className="flex space-x-4 mt-3 lg:mt-2 items-center">
        <div className="flex justify-between items-center mt-2 bg-gray-100 rounded-lg w-[100px] lg:w-[90px]">
          <div
           
            className="h-[25px] w-[25px] bg-gray-300 rounded-full flex justify-center text-black align-center"
          >
            -
          </div>
          <div className="lg:text-sm">{1}</div>
          <div
           
            className="h-[25px] w-[25px] bg-gray-300 rounded-full flex justify-center text-black align-center"
          >
            +
          </div>
        </div>
        <div className="border w-fit px-2 py-1 text-sm bg-white lg:text-xs shadow-md rounded-md">Delete</div>
        <div className="border w-fit px-2 py-1 text-sm bg-white lg:text-xs shadow-md rounded-md">Save for Later</div>
        
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className=" lg:px-10">
      <div className="lg:flex lg:space-x-8 lg:mt-2">
      <div className="bg-white px-3 py-2 lg:bg-transparent lg:w-[50vw]">
          <div className="text-sm font-semibold text-gray-400">PRODUCTS</div>
          <div className="space-y-3 lg:mt-2 lg:bg-white lg:p-2">
              <CartProduct/>
              <CartProduct/>
              <CartProduct/>
          </div>

      </div>

      <div className="bg-white lg:bg-transparent lg:mt-0 shadow-sm  py-3 lg:py-3 px-4 mt-5 lg:w-[30vw]">
      <div className="text-sm hidden lg:block font-semibold text-gray-400">ORDER SUMMARY</div>
        <div className=" p-3 lg:text-sm mt-2 bg-white space-y-2 rounded-md py-4">
        <div className="flex justify-between items-center">
          <div>Subtotal</div>
          <div>Rs. 256</div>
        </div>
        <div className="flex justify-between items-center">
          <div>Discount</div>
          <div>Rs. 0</div>
        </div>
        <div className="flex justify-between items-center">
          <div>Tax</div>
          <div>Rs. 39</div>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="border-[1px] rounded-md p-2 text-sm"
            placeholder="Enter Promocode"
          />
          <div className="px-2 py-1 bg-primary text-white rounded-md">
            Apply
          </div>
        </div>
        <hr />
        <div className="flex pt-2 justify-between items-center">
          <div className="font-bold text-lg lg:text-base">Total</div>
          <div className="font-bold text-lg lg:text-base">Rs. 4000</div>
        </div>
        <div className="text-green-600 text-center text-sm">*You saved Rs.400 on this order ⚡</div>
        <div>
        <div className="flex lg:mt-4 justify-center items-center font-bold bg-primary py-3 rounded-md text-white ">
          Proceed to Buy (3 items)
        </div>
        </div>
        </div>
      </div>
      </div>
      <div className="mt-5 rounded-md pl-4 hidden lg:block bg-white p-5">
        <div className="font-semibold text-grayX">Saved for later</div>
        <div className="mt-4 grid grid-cols-3 xl:grid-cols-4 lg:gap-4">
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
        </div>
      </div>
      <div className="px-4 py-2 mt-4 bg-white">
          <div className="flex border-t-[1px] border-b-[1px] py-2 justify-between items-center text-gray">
          <div>Continue Shopping</div>
          <div><MdArrowForward size={25}/></div>
          </div>
      </div>

    </div>
  );
};

export default Cart;
