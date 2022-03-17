import React from "react";
import AccountLayout from "../../../components/AccountLayout";
import { BsCheck2 } from "react-icons/bs";
import Image from "next/image";

const OrderItem = () => {
  return (
    <div className="flex items-center space-x-5 p-1 border-[1px] rounded-md">
      <div className="p-1">
        <Image src="/product/p1.png" height={50} width={50} />
      </div>
      <div>
        <div className="font-semibold">Calpol Syrup</div>
        <div className="text-accent text-sm ">Price : Rs.129</div>
      </div>
      <hr />
    </div>
  );
};

const Order = () => {
  return (
    <AccountLayout>
      <div className="font-default 2xl:px-5">
        <div className="p-2">
          <div className="text-sm text-gray-500 font-semibold">
            #120239034839
          </div>
          <div className="mt-1 text-xl font-poppins font-semibold">
            ORDER DETAILS
          </div>
        </div>
        <div className="mt-2 p-2">
          <div className="text-green-600 text-lg ">Delivered</div>
          <div className="mt-5">
            <div className="h-[5px] flex items-center justify-between w-[100%] bg-primary">
              <div className="flex flex-col mt-[15px] justify-center">
                <div className="h-[20px] w-[20px] bg-primary rounded-full flex items-center justify-center text-white">
                  <BsCheck2 />
                </div>
                <div className="text-xs">Ordered</div>
              </div>
              <div className="flex flex-col mt-[15px] items-center justify-center">
                <div className="h-[20px] w-[20px] bg-primary rounded-full flex items-center justify-center text-white">
                  <BsCheck2 />
                </div>
                <div className="text-xs">Dispatched</div>
              </div>
              <div className="flex flex-col mt-[15px] items-end">
                <div className="h-[20px] w-[20px] bg-primary rounded-full flex items-center justify-center text-white">
                  <BsCheck2 />
                </div>
                <div className="text-xs">Delivered</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 p-2">
          <div className="font-semibold text-lg">Items in this Order</div>
          <div className="mt-2 space-y-3">
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
        </div>
        <div className="mt-5 p-2">
          <div className="font-semibold text-lg">Order Summary</div>
          <div className="mt-3">
            <div className="justify-between flex">
              <div>Items Subtotal(3) : </div>
              <div>Rs. 228.00</div>
            </div>
            <div className="justify-between flex">
              <div>Delivery Charges : </div>
              <div>Rs. 50.00</div>
            </div>
            <div className="justify-between flex">
              <div>Total Tax : </div>
              <div>Rs. 30.00</div>
            </div>
            <div className="justify-between flex mt-3">
              <div className="font-bold">Grand Total : </div>
              <div className="font-bold">Rs. 228.00</div>
            </div>
            <div className="justify-between flex mt-1">
              <div className="font-bold text-green-600">Total Savings : </div>
              <div className="font-bold text-green-600">Rs. 100.00</div>
            </div>
          </div>
        </div>
        <div className="mt-5 p-2">
          <div className="text-lg font-semibold">Delivery Address</div>
          <div className="mt-2">
            <div>Kunal Sangtiani</div>
            <div>32/5 Rajmahal Colony, Manik Bagh Road</div>
            <div>Indore, India</div>
          </div>
        </div>
        <div className="flex mt-7 p-2">
          <div className="px-3 py-1 bg-accent text-white rounded-md">
            Cancel Order
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Order;
