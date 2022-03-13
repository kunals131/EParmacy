import React from 'react'
import ProductPhone from '../../components/ProductsResponsive/ProductPhone'
import ProductDekstop from '../../components/ProductsResponsive/ProductDekstop'
const Product = () => {
  return (
    <>
    <div className='lg:hidden'>
      <ProductPhone></ProductPhone>
    </div>
    <div className='hidden lg:block'>
      <ProductDekstop></ProductDekstop>
    </div>
    </>
  )
}

export default Product