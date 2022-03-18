import React from "react";
import HeroImage from "../components/HeroImage";
import Image from "next/image";

const CategoryItem = ({img,title,offer})=>{
  return (
    <div className="flex justify-between items-center p-3 px-4 border-2 border-gray-200 shadow-sm rounded-md w-[95%] m-auto">
      <div className="flex space-x-3 items-center w-[80%]">
        <div><Image src={img} height="70px" width="70px"/></div>
        <div className="py-5">{title}</div>
      </div>
      {offer&&<div className="text-green-600">{offer}% off</div>}
    </div>
  )
}

const Categories = () => {
  return (<div>
    <HeroImage/>
    <div className="mt-5 space-y-4 lg:max-w-[750px] m-auto">
      <CategoryItem title="Covid HealthCare Products" img="/categoryImage/pic1.png" offer={55}/>
      <CategoryItem title="Hepatetis B" img="/categoryImage/pic2.png" offer="20" />
      <CategoryItem title="Lifestyle Products" img="/categoryImage/pic3.png" />
      <CategoryItem title="Toothpaste and sanitationary" img="/categoryImage/pic4.png" />
      <CategoryItem title="Covid HealthCare Products" img="/categoryImage/pic5.png" />
      <CategoryItem title="Covid HealthCare Products" img="/categoryImage/pic6.png" offer={55}/>
    </div>


  </div>);
};

export default Categories;
