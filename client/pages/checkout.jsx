import React, { useState } from "react";
import { MdShoppingBag, MdArrowDropDown, MdOutlineHome, MdSave } from "react-icons/md";
import { AiOutlineShopping, AiOutlineBank } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import Image from "next/image";

const PaymentItem = ({ value, title, desc, setSelected, selected, icon }) => {
  return (
    <div className="bg-white p-2 flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="p-2 border-[1px]">{icon}</div>
        <div>
          <div>{title}</div>
          {selected === value && (
            <div className="text-xs text-grayX">{desc}</div>
          )}
        </div>
      </div>
      <div className="mr-2" onClick={() => setSelected(value)}>
        <div className="flex items-center justify-center h-[25px] w-[25px] border-[1px] border-primary rounded-full">
          <div
            className={`h-[20px] w-[20px] rounded-full border-primary border-[2px] ${
              selected === value ? "bg-primary" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const AddressItem = () => {
  return (
    <div className="p-2 items-center border-[1px] rounded-md flex justify-between">
      <div className="flex space-x-2">
        <div className="p-2 px-3 border-[1px] flex items-center">
          <MdOutlineHome size={28} />
        </div>
        <div>
          <div className="text-grayX font-semibold">Home Address</div>
          <div className="text-xs">Raj Mahal Colony</div>
          <div className="text-xs">+9753255545</div>
        </div>
      </div>
      <div className="text-xs p-1 bg-primary text-white rounded-md">
        Use Another
      </div>
    </div>
  );
};

const Checkout = ({ prescription }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="px-3">
      <div className="flex justify-between items-center px-3 py-3 mt-2 bg-white shadow-sm rounded-sm font-poppins">
        <div className="flex space-x-1 items-center">
          <div className="flex">
            <AiOutlineShopping size={30} />{" "}
            <div className="h-[20px] w-[20px] relative -left-4 bg-primary flex justify-center items-center rounded-full text-white">
              2
            </div>
          </div>
          <div className="flex items-center">
            Show Order Summary{" "}
            <MdArrowDropDown className="text-primary" size={28} />
          </div>
        </div>
        <div>$15.75</div>
      </div>
      <div>
        <div className="font-semibold mt-7 text-xl">Shipping Details</div>
        <div className="text-sm mt-1 text-grayX">
          Add new address or continue with the previously saved address.
        </div>
        <div className="bg-white mt-4">
          <AddressItem />
        </div>
        <div className="underline text-accent ml-1 mt-1 text-sm">Add New</div>
      </div>
      <div>
        <div className="font-semibold mt-7 text-xl">Payment Method</div>
        <div className="mt-4 space-y-2">
          <div>
            <PaymentItem
              desc={
                "You will recieve bank details via email, Complete the payment and inform the seller"
              }
              setSelected={setSelected}
              selected={selected}
              title="Direct Transfer to Seller"
              icon={<AiOutlineBank size={28} />}
              value="bank"
            ></PaymentItem>
          </div>
          <div>
            <PaymentItem
              setSelected={setSelected}
              selected={selected}
              title="Cash On Delivery"
              icon={<FaRegMoneyBillAlt size={28} />}
              value="cod"
            ></PaymentItem>
          </div>
        </div>
      </div>
      <div>
      <div className="font-semibold mt-7 text-xl">Prescription Required</div>
      <div className="text-sm mt-2 text-grayX">
          Require Prescription for following products
            <div>medicine 1 30mg, medicine 2 30mg</div>
        </div>
        <div className="mt-3 flex space-x-3">
          <div className="bg-white px-2 text-sm py-2 w-fit rounded-md border-[1px]">Choose from previous prescriptions</div>
          <div className="bg-white px-2 py-2 text-sm w-fit rounded-md border-[1px] text-primary">Add New </div>
        </div>
        <div className="mt-2 ml-1"><span className="font-semibold text-xs">Chosen File : </span> <span className="text-accent text-sm">Pres1.pdf</span></div>
      </div>

      <div className="mt-7 text-center mx-auto w-[95%] bg-primary text-white rounded-xl py-3">Complete Order</div>
    </div>
  );
};

export default Checkout;
