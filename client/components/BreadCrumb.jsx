import React from 'react'
import Link from 'next/link'
const BreadCrumb = ({track}) => {
  return (
    <div className='my-3 text-xs flex space-x-2 items-center'>
        {track.map((t,id)=>(
            <div key={id} className='flex cursor-pointer'>
            <Link href={t.link}><a className={`${!t.no?'text-accent':'black'}`}>{t.title}</a></Link>
            {!t.no&&<span className='text-gray-600 ml-2'>{">"}</span>}
            </div>

        ))}
    </div>
  )
}

export default BreadCrumb