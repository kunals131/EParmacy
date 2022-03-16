import React, { useState } from "react";
import { MdAdd, MdMinimize, MdHome, MdPhone, MdMail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

import Image from "next/image";
const FooterLink = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-3">
      <div className="py-2 border-b-[1px] flex justify-between items-center border-gray-300">
        <div className="text-sm font-semibold text-grayX">
          {title || "Our Services"}
        </div>
        {!open ? (
          <MdAdd className="text-primary" onClick={() => setOpen(!open)} />
        ) : (
          <MdMinimize className="text-primary" onClick={() => setOpen(!open)} />
        )}
      </div>
      {open && (
        <div className="border-[1px] p-2">
          <div className="text-sm text-gray-500 my-1 py-1 border-b-[1px] border-gray-300">
            Latest Offers
          </div>
          <div className="text-sm text-gray-500 my-1 py-1 border-b-[1px] border-gray-300">
            Key Products
          </div>
          <div className="text-sm text-gray-500 my-1 py-1 border-b-[1px] border-gray-300">
            Delivery Partners
          </div>
          <div className="text-sm text-gray-500  my-1 py-1  border-b-[1px] border-gray-300">
            About Us
          </div>
        </div>
      )}
    </div>
  );
};

const DekstopFooter = () => {};

const Footer = () => {
  return (
    <>
      <div className="hidden lg:block bg-white mt-5 py-10  px-20">
        <div className="flex items-center space-x-24">
          <div className="">
            <Image src={"/logoHeader.png"} height="55px" width="165px" />
          </div>
          <div className="w-[60%] text-gray-500 ">
            RavimedicalStore, Pakistan {"'"} favourite and trusted pharmacy with over 15 years of experience in 
            dispensing quality medicines.
          </div>
        </div>
        <hr className="my-10 text-gray-500"/>
        <div className="grid grid-cols-4 justify-between">
          <div>
            <div className="font-semibold">Connect</div>
            <div className="mt-4 space-x-4 flex text-sm items-center">
              <div>
                <FaInstagram size={30} className="text-red-500" />
              </div>
              <div>
                <FaFacebook size={31} className="text-blue-600" />
              </div>
              <div>
                <FaGoogle size={30} className="text-green-600" />
              </div>
            </div>
            <div className="font-semibold mt-4">Download App</div>
            <div className="mt-2">
                <Image
                  src="/footerImages/playstore.png"
                  height="45px"
                  width="140px"
                />
              </div>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <div>My Account</div>
              <div>My Orders</div>
              <div>All Offers</div>
            </div>
          </div>
          <div>
            <div className="font-semibold">Policies</div>
            <div className="mt-4 text-gray-600 space-y-2 text-sm">
              <div>About Us</div>
              <div>Contact Us</div>
              <div>Terms and Conditions</div>
              <div>Privacy Policy</div>
              <div>FaQs</div>
            </div>
          </div>
          <div>
            <div className="font-semibold ">Contact Us</div>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <div className="flex space-x-2">
                <div className="mt-1"><MdHome size={18}/></div>
                <div>Shah Ghazi Muhallah Near Imam Medical Center Jacobabad (Sindh)</div>
              </div>
              <div className="flex space-x-2">
                <div className="mt-1"><MdPhone size={18}/></div>
                <div>03337389640</div>
              </div>
              <div className="flex space-x-2">
                <div className="mt-1"><MdMail size={18}/></div>
                <div>ravimedicalstorejcd@gmail.com</div>
              </div>

            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-grayX">2022 Ravi Medical Store. All Rights Reserved</div>
        </div>
      </div>
      <div className="bg-white mt-1 pt-4 px-5 lg:hidden">
        <div>
          <FooterLink title="Our Services" />
          <FooterLink title="Top Categories" />
          <FooterLink title="About Us" />
        </div>
        <div className="mt-7 font-semibold ">Find us on Playstore</div>
        <div className="flex mt-4 space-x-7">
          <div>
            <Image
              src="/footerImages/appstore.png"
              height="40px"
              width="120px"
            />
          </div>
          <div>
            <Image
              src="/footerImages/playstore.png"
              height="40px"
              width="120px"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="font-semibold">Connect With Us</div>
          <div className="flex mt-4 space-x-5">
            <div>
              <Image
                src="/socialmedia/facebook.png"
                height="32px"
                width="32px"
              />
            </div>
            <div>
              <Image src="/socialmedia/google.png" height="32px" width="32px" />
            </div>
            <div>
              <Image
                src="/socialmedia/instagram.png"
                height="32px"
                width="32px"
              />
            </div>
          </div>
        </div>
        <div className="py-5 text-gray-600 text-sm">
          2022 Ravi Medical Store. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
