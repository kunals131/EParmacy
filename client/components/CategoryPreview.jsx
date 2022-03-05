import React from 'react'
import CategoryPreviewComponent from './CategoryPreviewComponent'
import ProductCard from './ProductCard/ProductCard'
const CategoryPreview = ({heading}) => {
  return (
    <div>
        <CategoryPreviewComponent heading={heading}>
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