import React, { useState } from "react";
import BreadCrumb from "../BreadCrumb";
import Image from "next/image";
import { FaPrescription } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const productImages = ["/product/p1.png", "/product/p2.png", "/product/p3.png"];
const tags = ["Winter Care", "Cream"];
const prescriptionRequried = true;

const SubProduct = ()=>{
    return (
        <div className="p-2 flex space-x-5 items-center font-default rounded-md shadow-sm border-[1px]">
            <div className="border p-2 flex items-center justify-center">
                <Image src={'/product/p2.png'} height="40" width="40"></Image>
            </div>
            <div>
                <div className="text-xs 2xl:text-sm">Loreal Winter Cream with 2 free packs</div>
                <div className="text-xs 2xl:text-sm mt-1 text-accent font-semibold">Rs.245 <span className="text-gray-400 text-xs ml-2"><strike>MRP:4500</strike></span>
                <span className="ml-2 text-green-600">60% off</span>
                </div>
            </div>

        </div>
    )
}

const MoreFromCategory = ({title})=>{
    return (
    <div className="p-4 bg-white w-[30vw] shadow-md 2xl:w-[28vw] 3xl:w-[25vw]">
        <div className="text-gray-600 2xl:text-lg">{title}</div>
        <div className="mt-4 space-y-3">
            <SubProduct/>
            <SubProduct/>
            <SubProduct/>
            <SubProduct/>
        </div>
        <div className="text-center text-sm mt-3 text-primary underline">See All</div>
    </div>
    );
}

const ProductDekstop = () => {
  const [productImage, setProductImage] = useState(productImages[0]);
  const handleImageChange = (e) => {
    setProductImage(e.target.id);
  };
  const track = [
    { title: "Home", link: "/" },
    { title: "Category", link: "/" },
    { title: "Winter Care", link: "/" },
    { title: "Nivea Soft", link: "/", no: true },
  ];
  return (
    <div className="p-3  font-poppins">
      <BreadCrumb track={track}></BreadCrumb>
      <div className="bg-white p-4 xl:p-7">
        <div className="flex">
          <div className="flex  space-x-10 2xl:space-x-24">
            {/* Inside Container with list of Images */}

            <div className="flex-col justify-center items-center space-y-3">
              <div className="w-auto flex items-center justify-center">
                <IoIosArrowUp />
              </div>
              <div className="flex-col space-y-4 items-center justify-center">
                {productImages.map((img, idx) => (
                  <div
                    key={idx}
                    id={img}
                    onClick={handleImageChange}
                    className={`border ${
                      img === productImage
                        ? "border-primary border-2 opacity-100"
                        : "opacity-60"
                    } flex justify-center items-center p-2`}
                  >
                    <Image id={img} src={img} height="50" width={50} />
                  </div>
                ))}
              </div>
              <div className="w-auto flex items-center justify-center">
                <IoIosArrowDown />
              </div>
            </div>
            {/* Inside Container with list of Images */}
            {/* Main Product Image */}
            <div className="block h-[300px] w-[300px] 2xl:scale-125 2xl:pt-8">
              <Image
                src={productImage}
                className="h-[100vh]"
                layout="responsive"
                height={300}
                width="300"
              ></Image>
            </div>
            {/* Main Product Image */}
          </div>
          {/* Description */}
          <div className="px-8 xl:px-10 2xl:px-52 flex-1">
            <div className="text-lg xl:text-xl 2xl:text-2xl">
              Nivea Soft Light Moisturiser and 1mg Germ Protection Face Wash
              Combo
            </div>
            <div className="flex space-x-3 mt-3 items-center">
              {prescriptionRequried && (
                <div className="flex space-x-2 py-[3px] px-2 items-center bg-primary rounded-md w-fit bg-opacity-20 border-primary border-[1px]">
                  <div>
                    <FaPrescription size={13} />
                  </div>
                  <div className="text-xs 2xl:text-sm">
                    Prescription Required
                  </div>
                </div>
              )}
              {tags.map((tag) => (
                <div className="py-[2px] px-2 2xl:text-sm text-xs bg-gray-200 text-gray-600 2xl:text-gray-500 rounded-md w-fit">
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <AiOutlineShareAlt size={23} />
            </div>
            <hr className="my-3" />
            <div className="mt-5">
              <div className=" font-poppins text-gray-500">
                <div className="xl:text-lg font-semibold">
                  Offer Price<span className="text-sm">*</span>{" "}
                  <span className="text-accent text-lg 2xl:tracking-wide font-bold 2xl:text-2xl 2xl:font-semibold">
                    Rs.256
                  </span>
                </div>
              </div>
              <div className="text-xs xl:text-sm 2xl:text-base mt-[2px] xl:text-gray-500 xl:mt-2 text-gray-600 opacity-90">
                MRP:<strike className="ml-1">400</strike>
                <span className="font-bold text-green-500 ml-3">60% off</span>
                <div className="text-xs text-gray-500">
                  (Inclusive All taxes)
                </div>
                <div className="mt-2 text-gray-500 font-lato">
                  <div>
                    *This product cannot be returned for refunded for exchange
                  </div>
                  <div>*Country of origin : Pakistan</div>
                  <div>*Delivery Charges if Applicable at checkout</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <select
                className="max-w-[70%] min-w-[50%] text-sm xl:text-base p-2 py-2 outline-none bg-white border-[1px] border-gray-300 rounded-sm "
                name="options"
                id=""
              >
                <option value="">Pack of one</option>
                <option value="">Pack of two</option>
                <option value="">Pack of three</option>
              </select>
            </div>
            <div className="mt-4 space-x-3 xl:mt-5">
              <button className="bg-primary px-3 py-2 rounded-md text-white 2xl:text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 2xl:px-24  px-10">
        <div className="flex 2xl:space-x-10 3xl:space-x-16">
          <div className="bg-white text-gray-700 p-8 h-fit 2xl:w-[50vw] w-[55vw]">
            <div className="text-lg 2xl:text-xl">
              Information about Nivea Soft Light Moisturiser and 1mg Germ
              Protection Face Wash Combo
            </div>
            <div className="mt-5 font-default 2xl:text-base text-sm">
              Nivea Soft Creme treats the skin with a quick-absorbing formula,
              it keeps you feeling fresh at the snap of a finger, so you can get
              ready in seconds. Enjoy fresh skin with the goodness of vitamin E
              and jojoba oil.
              <br />
              <br />
              Key Ingredients:
              <br />
              Vitamin E Jojoba oil
              <br />
              <br />
              Key Benefits:
              <br />
              Indicated to reduce dryness of the skin Helps in making skin
              smoother and softer Provides lustre and shine to the skin
              Direction For Use: Scoop the product Rub it on your palms to
              spread evenly Gently massage all over your face and body Use daily
              for soft and fresh skin Safety Information: Read the label
              carefully before use Store in a cool and dry place, away from
              sunlight Keep out of the reach of children For external use only
              Avoid contact with eyes
              <br />
              <br />
              1mg Waterless Face Wash with Aloe Vera, Witch Hazel, Prebiotics,
              Menthol and Active Silver Nanoparticles for Germ Protection (Delhi
              Mediart Private Limited) 1 mg Germ Protection Face Wash is a
              dual-purpose face wash. It gently cleanses the skin while
              providing protection from germs. It provides the goodness of aloe
              vera and witch hazel that have a multitude of benefits for the
              skin. The ingredients not only fight acne and reduces skin
              irritation but also make the skin clear.
              <br />
              <br />
              Key Ingredients:
              <br />
              Aloe Vera Witch hazel Probiotics Menthol
              <br />
              <br />
              Key Benefits:
              <br />
              It protects against germs Witch hazel helps to relieve
              inflammation and reduces skin irritation Aloe vera helps in
              treating dry skin and acne Probiotics help with conditions such as
              dry skin Menthol contributes a cooling effect to the skin
              Directions For Use: Take a few drops of liquid solution on the
              palm and gently massage on face Wipe off with a clean handkerchief
              or tissue Safety Information: Read the label carefully before use
              Store in a cool and dry place away from direct sunlight Keep out
              of reach of the children Do not use if seal is broken The product
              is meant for external use only
            </div>
          </div>
          <div className="space-y-5">
              <MoreFromCategory title="More from this Category"/>
              <MoreFromCategory title="Customers also Bought"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDekstop;
