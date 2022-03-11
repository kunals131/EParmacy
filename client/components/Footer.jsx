import React, { useState } from "react";
import { MdAdd, MdMinimize } from "react-icons/md";
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
      <div className="hidden lg:block bg-white mt-1 py-10  px-20">
        <div className="flex items-center space-x-24">
          <div className="">
            <Image src={"/main.png"} height="55px" width="165px" />
          </div>
          <div className="w-[60%] text-gray-500 ">
            RavimedicalStore, Pakistan {"'"} favourite and trusted pharmacy with over 15 years of experience in 
            dispensing quality medicines.
          </div>
        </div>
        <hr className="my-10" />
        <div className="grid grid-cols-4 justify-between">
          <div>
            <div className="font-semibold">KNOW US</div>
            <div className="mt-4 space-y-2 text-sm">
              <div>About Us</div>
              <div>Contact Us</div>
              <div>Location</div>
              <div>Terms and Conditions</div>
            </div>
          </div>
          <div>
            <div className="font-semibold">TOP CATEGORIES</div>
            <div className="mt-4 space-y-2 text-sm">
              <div>Hepatetis B</div>
              <div>Hepatetis C</div>
              <div>Ayurveda</div>
            </div>
          </div>
          <div>
            <div className="font-semibold">Connect With Us</div>
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
          </div>
          <div>
            <div className="font-semibold">Download App</div>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <Image
                  src="/footerImages/appstore.png"
                  height="45px"
                  width="140px"
                />
              </div>
              <div>
                <Image
                  src="/footerImages/playstore.png"
                  height="45px"
                  width="140px"
                />
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
