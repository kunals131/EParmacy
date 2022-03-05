import React from "react";
import Image from "next/image";
const OrderPrescription = () => {
  return (
    <div className="bg-white shadow-sm px-4 py-4 mt-3 w-[95%] m-auto items-center flex justify-between">
      <div>
        <div className="text-sm">Quickly Order with Prescription</div>
        <p className="text-[0.7rem] text-grayX w-[80%] mt-2">
          Upload Prescription and tell us what you need. We do the rest
        </p>
        <button className="text-sm shadow-md shadow-primary bg-primary px-3 py-2 mt-3 text-white rounded-sm">
          Upload
        </button>
      </div>
      <div>
        <Image src='/pres.jpg' height="100px" width="100px"></Image>
      </div>
    </div>
  );
};

export default OrderPrescription;
