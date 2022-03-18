import React, { useEffect, useState } from 'react'
import AccountLayout from '../../components/AccountLayout'
import {BsPlusLg} from 'react-icons/bs';
import {MdClear} from 'react-icons/md';
import Modal from '../../components/Modal';
import InputField from '../../components/InputField';
import AddressModal from '../../components/AddressModal';


const AddressComponent = ({isDefault, setOpen, setIsEdit})=>{
  const [showModal,setShowModal] = useState(true);
  return (
    <>
  
    <div className='hidden lg:block z-[100] p-3 border-2 xl:py-6  rounded-md'>
    <div className='flex justify-between'>
      <div className='font-bold text-sm'>Kunal Sangtiani</div>
     {isDefault&&<div className='text-primary text-sm'>Default</div>}
      </div>
      <div className="text-sm">
      <div className=''>32/5 Kushi Apartment</div>
      <div>Rajmahal Colony, Manik Bagh Road</div>
      <div>Indore, Madhya Pradesh 452014</div>
      <div>Phone Number : 9753255545</div>
      </div>
      <div className='mt-6 flex space-x-3 text-sm'>
        <div className='text-primary'>Edit |</div>
        <div className='text-primary'>Remove</div>
        {!isDefault&&<div className='text-primary'> | Set as Default</div>}
      </div>
    </div>

    <div className='p-3 lg:hidden text-sm border-2 rounded-md'>
      <div className='flex justify-between'>
      <div className='font-bold'>Kunal Sangtiani</div>
     {isDefault&&<div className='text-primary'>Default</div>}
     {!isDefault&& <div className='text-xs underline'>Set as Default</div>}
      </div>
      <div className='mt-1'>32/5 Kushi Apartment</div>
      <div>Rajmahal Colony, Manik Bagh Road</div>
      <div>Indore, Madhya Pradesh 452014</div>
      <div>India</div>
      <div>Phone Number : 9753255545</div>
      <div className='mt-3 flex justify-between'> 
      <div className='w-fit px-3 py-[4px] shadow-md border-[1px]' onClick={()=>{setIsEdit(true); setOpen(true)}}>Edit</div>
      <div className='w-fit px-3 py-[4px] shadow-md border-[1px]'>Remove</div>
      </div>
    </div>
    </>
  )
}



const MyAddress = () => {
  const [open,setOpen] = useState(false);
  const handleSubmit = (form)=>{
    console.log(form);
  }
  const [isEdit,setIsEdit] = useState(false);
  useEffect(()=>{
    if (open) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
      setIsEdit(false);

    }
  }, [open])
  return (
    <>
    {open&&<AddressModal handleSubmit={handleSubmit} isEdit={isEdit}  open={open} setOpen={setOpen}/>}
    <AccountLayout>
    
    <div className='font-default p-2'>
      <div className='flex justify-between items-center'>
    <div className='text-2xl font-semibold'>MY ADDRESSES</div>
    <div className='lg:hidden flex space-x-2'>
      <div className='border-primary px-3  w-fit border-[1px] text-center py-1 text-primary rounded-xl' onClick={()=>setOpen(true)}>Add New </div>
    </div>
    </div>
    <hr className='my-4' />
    <div>
      <input type="text" className='w-[100%] p-2 rounded-md border-2' placeholder='Search Address' />
    </div>
    <div className='mt-3 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 gap-2   xl:grid-cols-3 '>
      <div onClick={()=>setOpen(true)} className='h-auto hidden lg:flex w-auto border-2 border-dotted rounded-md items-center justify-center flex-col'>
        <div>
          <BsPlusLg className='text-gray-400' size={32}/>
        </div>
        <div className='mt-2 text-gray-500 font-semibold'>Add Address</div>
      </div>
      <AddressComponent isDefault={true} setIsEdit={setIsEdit} setOpen={setOpen}/>
      <AddressComponent setIsEdit={setIsEdit} setOpen={setOpen}/>
      <AddressComponent setIsEdit={setIsEdit} setOpen={setOpen}/>
      <AddressComponent setIsEdit={setIsEdit} setOpen={setOpen}/>

    </div>
    </div>
    </AccountLayout>
    </>
  )
}

export default MyAddress