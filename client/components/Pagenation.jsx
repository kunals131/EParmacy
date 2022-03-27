import React, { useEffect, useState } from 'react'
import{BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
const Pagenation = () => {
    const [page,setPage] = useState(1);
    const [otherPages, setOtherPages] = useState([1,2,3]);
    const [activeLeft,setActiveLeft] = useState(true);
    const [activeRight,setActiveRight] = useState(true);
    useEffect(()=>{
      if (page>=3) {
        setOtherPages([page-2,page-1,page]);
      }
      else {
        setOtherPages([1,2,3]);
      }

      if (page==1) {
        setActiveLeft(false);
      }
      else {
        setActiveLeft(true);
      }
    }, [page])

    const handleClick = (direc)=>{
      if (direc===-1 && activeLeft) {
        setPage(page-1);
      }
      if (direc===1 && activeRight) {
        setPage(page+1);
      }
    }
    
  return (
    <div className='flex p-1 space-x-3 items-center'>
        <div onClick={()=>handleClick(-1)} className={` ${activeLeft?'hover:shadow-lg hover:p-2':'text-gray-400'}  transition-all`}>
            <BsArrowLeftShort size={20}/>
        </div>
        <div className=' flex space-x-4 text-primary'>
        <div className={`px-3 py-1 border-2 ${page===otherPages[0]?'border-primary':''} shadow-md`} onClick={()=>setPage(otherPages[0])}>{otherPages[0]}</div>
        <div className={`px-3 py-1 border-2 ${page===otherPages[1]?'border-primary':''} shadow-md`} onClick={()=>setPage(otherPages[1])} >{otherPages[1]}</div>
        <div className={`px-3 py-1 border-2 ${page===otherPages[2]?'border-primary':''} shadow-md`} onClick={()=>setPage(otherPages[2])}>{otherPages[2]}</div>
        </div>
        <div onClick={()=>handleClick(1)} className={` ${activeRight?'hover:shadow-lg hover:p-2':'text-gray-400'}  transition-all`}>
        <BsArrowRightShort size={20}/>
        </div>
    </div>
  )
}

export default Pagenation