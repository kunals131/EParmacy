import React from 'react'
import CategoryPreviewComponent from './CategoryPreviewComponent'
import ProductCard from './ProductCard/ProductCard'
const CategoryPreview = () => {
  return (
    <div>
        <CategoryPreviewComponent heading={"Popular Products"}>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </CategoryPreviewComponent>
    </div>
  )
}

export default CategoryPreview