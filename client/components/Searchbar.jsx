import React, {useState, useRef} from 'react'
import {MdSearch, MdArrowBack, MdClear} from 'react-icons/md';


const SearchBar = ({type}) => {
    const [searchMode, setSearchMode] = useState(false);
    const [inputEmpty, setInputEmpty] = useState(true); 
    const inputRef = useRef();
    const handleSearch = (value)=>{
        setSearchMode(value)
    }
    const handleChange = (e)=>{
        if (e.target?.value) {
            setInputEmpty(false);
        }
        else {
            setInputEmpty(true);
        }
    }
  return (
      <> {
    !searchMode?(
    <div>
        {type==='bar'?(
             <input onFocus={()=>handleSearch(true)} className='text-sm w-[100%] h-9 rounded-l outline-none p-3' type="text" placeholder='Search Medicine' />
        ):(
            <div><MdSearch onClick={()=>handleSearch(true)} size={30}/></div>
        )} 
    </div>):(
        <div className='bg-white h-screen w-screen px-3 py-4 fixed z-50 top-0 left-0 text-black'>
            <div className='flex space-x-4 w-full'>
                <div onClick={()=>handleSearch(false)}><MdArrowBack size={25}/></div>
                <div className='w-full'>
                    <input ref={inputRef}  onChange={handleChange} className='w-full outline-none' type="text" placeholder='Search for Medicine & health products' />
                </div>
                {
                 !inputEmpty&&<MdClear onClick={()=>{inputRef.current?.value=''}} size={25}/>   
                }
            </div>
        </div>
    )
}
    </>
  )
}

export default SearchBar