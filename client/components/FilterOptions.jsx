import React from 'react'
import {MdSort, MdFilter} from 'react-icons/md'
const FilterOptions = () => {
  return (
    <div className='p-2 flex justify-between w-[180px] rounded-md bg-[#e7e8eb] text-gray-800'>
        <div className='text-gray-800 flex items-center space-x-2'><MdSort/><div>Sort</div></div>
        <div className='text-gray-800 flex items-center space-x-2'><MdFilter/><div>Filter</div></div>
       
    </div>
  )
}

export default FilterOptions