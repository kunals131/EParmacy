import React, {useState, useEffect, useRef} from 'react'
import ProductListCard from '../../components/ProductCard/ProductListCard'
import FilterOptions from '../../components/FilterOptions'
const Products = () => {
  const listInnerRef = useRef();
  const [showOptions,setShowOptions] = useState(true);

  const onScroll = (scroll, h) => {
    // console.log(scroll);
    if (listInnerRef.current) {
      // console.log(h);
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scroll>=(h)) {
        setShowOptions(false);
      }
      else {
        setShowOptions(true);
      }
    }
  };
  useEffect(()=>{
    document.addEventListener('scroll', ()=>onScroll(window.scrollY, document.body.scrollHeight-window.innerHeight-200));
  }, [])
  return (
    <div ref={listInnerRef} className='px-2 py-5  bg-white'>
        <div className='text-gray-800 text-lg font-poppins font-semibold'>Winter Skin & body care</div>
        <div className='text-grayX'>All Products</div>
        <hr className=' mt-4' />
        <div className='space-y-2'>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
          <ProductListCard/>
        </div>
        {showOptions&&
        <div className='flex fixed z-[100] bottom-5 left-[calc(50vw-90px)] justify-center'><FilterOptions/></div>
}
    </div>
  )
}

export default Products