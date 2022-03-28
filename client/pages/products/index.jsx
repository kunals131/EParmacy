import React, { useState, useEffect, useRef } from "react";
import ProductListCard from "../../components/ProductCard/ProductListCard";
import BreadCrumb from "../../components/BreadCrumb";
import FilterOptions from "../../components/FilterOptions";
import { MdClear } from "react-icons/md";
import Pagenation from "../../components/Pagenation";
import { useDispatch, useSelector } from "react-redux";
import { allProductsAPI } from "../../api/products";
import { fillProducts } from "../../redux/actions/product";


export const getServerSideProps = async(ctx)=>{
  console.log(ctx.query);
  let category = ctx.query?.category || '';
  let page = ctx.query?.page;
  const queries = {}
  if (page)queries.page = page;
  if (category) queries.category = category;
  const res = await allProductsAPI(queries);
  const products = res.data.data;
  return {
    props : {
      fetchedProducts : products
    }
  }
}


const CheckBoxElement = ({ title, value, count }) => {
  return (
    <div className="flex items-center space-x-2 text-slate-600">
      <input
        type="checkbox"
        value={value}
        className="cursor-pointer appearance-none bg-white h-4 w-4 rounded-none checked:bg-primary checked:text-white border-[1px] border-gray-700"
      />
      <label
        className="flex text-xs justify-between  items-center w-[100%]"
        htmlFor={value}
      >
        <div>{title}</div>
        <div className="text-xs">{count}</div>
      </label>
    </div>
  );
};

const Products = ({fetchedProducts}) => {
  const dispatch = useDispatch();
  const listInnerRef = useRef();
  const [showOptions, setShowOptions] = useState(true);

  const products = useSelector(state=>state.products.list) || fetchedProducts
  console.log(products);
  console.log(fetchedProducts)

  const onScroll = (scroll, h) => {
    // console.log(scroll);
    if (listInnerRef.current) {
      // console.log(h);
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scroll >= h) {
        setShowOptions(false);
      } else {
        setShowOptions(true);
      }
    }
  };



  useEffect(() => {
    document.addEventListener("scroll", () =>
      onScroll(
        window.scrollY,
        document.body.scrollHeight - window.innerHeight - 200
      )
    );
    dispatch(fillProducts({status : true}, fetchedProducts));
    
  }, []);
  return (
    <>
      <div className="xl:flex xl:mt-2">
        <div className="xl:w-[25vw] hidden xl:block xl:pl-10 2xl:pl-16 xl:py-7">
          <div className="bg-white rounded-md p-3">
            <div>
              <div className="font-bold tracking-tight">FILTERS</div>
              <hr className="my-3" />
              <div>
                <div className="font-bold tracking-tight">CATEGORY</div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="border-[1px] text-xs p-2 w-[100%] shadow-sm"
                    placeholder="Search Brand"
                  />
                </div>
                <div className="mt-2 px-3 py-3  space-y-2 overflow-y-scroll h-[270px]">
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                </div>
              </div>
              <hr className="my-3" />
              <div>
                <div className="font-bold tracking-tight">BRANDS</div>
                <div className="mt-2">
                  <input
                    type="text"
                    className="border-[1px] text-xs p-2 w-[100%] shadow-sm"
                    placeholder="Search Categories"
                  />
                </div>
                <div className="mt-2 px-3 py-3  space-y-2 overflow-y-scroll h-[270px]">
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                  <CheckBoxElement title="Brand-1" value={"b1"} count="2" />
                </div>
              </div>
              <hr className="my-3" />
              <div>
                <div className="font-bold tracking-tight">DISCOUNTS</div>
                <div className="mt-2 px-3 py-3  space-y-2">
                  <CheckBoxElement title="10% - 30%" value={"b1"} count="2" />
                  <CheckBoxElement title="40% - 60%" value={"b1"} count="2" />
                  <CheckBoxElement title="70% - 90%" value={"b1"} count="2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={listInnerRef}
          className="px-2 py-5 lg:px-16 lg:py-7 xl:w-[75vw] xl:rounded-md xl:bg-transparent bg-white"
        >
          <div className="hidden xl:block">
            <BreadCrumb
              track={[
                { title: "Home", link: "/" },
                { title: "Categories", link: "/" },
                { title: "Winter Skin and body", link: "/", no: true },
              ]}
            />
          </div>
          <div className="hidden xl:block my-5">
            <div className="flex text-xs items-center space-x-3">
              <div className="flex items-center border-accent border-[1px] px-2 py-1 rounded-2xl space-x-2 ">
                <div>Winter Skin & Body Care</div>
                <div>
                  <MdClear className="font-bold" size={15} />
                </div>
              </div>
              <div className="flex items-center border-accent border-[1px] px-2 py-1 rounded-2xl space-x-2 ">
                <div>Loreal</div>
                <div>
                  <MdClear className="font-bold" size={15} />
                </div>
              </div>
              <div className="flex items-center border-accent border-[1px] px-2 py-1 rounded-2xl space-x-2 ">
                <div>Skin Care</div>
                <div>
                  <MdClear className="font-bold" size={15} />
                </div>
              </div>
              <div className="text-sm font-semibold text-accent tracking-tight">CLEAR FILTERS</div>
            </div>
          </div>
          <div className="text-gray-800 text-lg font-poppins xl:font-normal xl:text-2xl font-semibold">
            Winter Skin & body care
          </div>
          <div className="hidden xl:block">
            <div className="flex justify-between mt-7 items-center">
              <div className="text-sm">
                Showing <span className="font-bold">20</span> of{" "}
                <span className="font-bold">500</span> items
              </div>
              <div className="text-xs flex space-x-2 items-center">
                <div>Sort by:</div>

                <div className="bg-white text-xs py-[3px] px-4 rounded-md shadow-sm">
                  Popularity
                </div>
                <div className="bg-white text-xs py-[3px] px-4 rounded-md shadow-sm">
                  High to Low
                </div>
                <div className="bg-white text-xs py-[3px] px-4 rounded-md shadow-sm">
                  Low to High
                </div>
                <div className="bg-white text-xs py-[3px] px-4 rounded-md shadow-sm">
                  Discounts
                </div>
              </div>
            </div>
          </div>
          <div className="xl:bg-white xl:mt-5 xl:p-5 xl:rounded-md">
            <div className="text-grayX xl:font-semibold">All Products</div>
            <hr className=" my-4" />
            <div className="space-y-2 lg:space-y-0 xl:grid lg:grid lg:grid-cols-3 xl:grid-cols-3 3xl:grid-cols-4 lg:gap-3 3xl:gap-4 xl:p-2">
              {products.map((product)=>(
                <ProductListCard product={product} key={product._id} />
              ))}
            </div>
            <div className="flex items-center justify-center mt-4"><Pagenation/></div>
          </div>
          {showOptions && (
            <div className="flex xl:hidden fixed z-[100] bottom-5 left-[calc(50vw-90px)] justify-center">
              <FilterOptions />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
