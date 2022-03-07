import React from "react";
import Image from "next/image";
import {MdArrowForward} from 'react-icons/md'
const CartProduct = () => {
  return (
    <div className="px-3 py-3 bg-white border-[1px]">
      <div className="flex space-x-3 items-center">
        <div>
          <Image src="/product/p1.png" height="100px" width="100px" />
        </div>
        <div>
          <div className="">Nivea Body Lotion with a pack of facewash</div>
          <div className="mt-2 font-bold text-lg">Rs. 256</div>
          <div className="text-sm text-green-600">Instock</div>
        </div>
      </div>
      <div className="flex space-x-4 mt-3 items-center">
        <div className="flex justify-between items-center mt-2 bg-gray-100 rounded-lg w-[100px]">
          <div
           
            className="h-[25px] w-[25px] bg-gray-300 rounded-full flex justify-center text-black align-center"
          >
            -
          </div>
          <div>{1}</div>
          <div
           
            className="h-[25px] w-[25px] bg-gray-300 rounded-full flex justify-center text-black align-center"
          >
            +
          </div>
        </div>
        <div className="border w-fit px-2 py-1 text-sm bg-white shadow-md rounded-md">Delete</div>
        <div className="border w-fit px-2 py-1 text-sm bg-white shadow-md rounded-md">Save for Later</div>
        
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div>
      <div className="bg-white shadow-sm px-4 py-3 space-y-2">
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
          <div className="font-bold text-lg">Total</div>
          <div className="font-bold text-lg">Rs. 4000</div>
        </div>
        <div className="flex justify-center items-center font-bold bg-primary py-3 rounded-md text-white ">
          Proceed to Buy (3 items)
        </div>
      </div>
      <div className="px-2 mt-5 space-y-3 bg-white">
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
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
