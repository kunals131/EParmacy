import React, { useState } from 'react'
import AccountLayout from '../../components/AccountLayout'
import {BsPlusLg} from 'react-icons/bs';
import {MdClear} from 'react-icons/md';
import Modal from '../../components/Modal';
import InputField from '../../components/InputField';


const AddressComponent = ({isDefault})=>{
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
      <div className='w-fit px-3 py-[4px] shadow-md border-[1px]'>Edit</div>
      <div className='w-fit px-3 py-[4px] shadow-md border-[1px]'>Remove</div>
      </div>
    </div>
    </>
  )
}

const AddressModal = ({isEdit,id,open,setOpen, handleSubmit})=>{
  const [addressForm,setAddressForm] = useState({
    fullName : '',
    mobile : '',
    pinCode : '',
    flat : '',
    area : '',
    landmark : '',
    town : '',
    state : '',
  })
  const handleChange = (e)=>{
    setAddressForm((prev)=>{
      return {...prev, [e.target.name] : e.target.value}
    })
  }
  return (
    <Modal show={open} onClose={()=>setOpen(false)} title="New Address">
      <div className='mt-2 space-y-3'>
        <InputField label="Full Name (First Name and Last Name)" type="text" id="fullName" name="fullName" onChange={handleChange} value={addressForm.fullName}   />
        <InputField label="Mobile Number" type="text" id="mobile" name="mobile" placeholder="10-digit mobile number without any prefixes" onChange={handleChange} value={addressForm.mobile}   />
        <InputField label="PIN Code" type="text" id="pinCode" name="pinCode" placeholder="Enter 6 digits[0-9] PIN code" onChange={handleChange} value={addressForm.pinCode}   />
        <InputField label="Flat, House no., Building, Company, Apartment" type="text" id="flat" name="flat" onChange={handleChange} value={addressForm.flat}   />
        <InputField label="Area, Colony, Street, Sector, Village" type="text" id="area" name="area" onChange={handleChange} value={addressForm.area}   />
        <InputField label="Landmark" type="text" id="landmark" name="landmark" onChange={handleChange} value={addressForm.landmark}   />
        <InputField label="Town/City" type="text" id="town" name="town" onChange={handleChange} value={addressForm.town}   />
        <InputField label="State / Province / Region" type="text" id="state" name="state" onChange={handleChange} value={addressForm.state}   />
      </div>
      <div className='mt-5'>
        <div className='w-fit text-white text-sm  px-3 py-[4px] rounded-md bg-primary shadow-sm ' onClick={()=>handleSubmit(addressForm)}>Add Address</div>
      </div>
    </Modal>
  )
}

const MyAddress = () => {
  const [open,setOpen] = useState(true);
  const handleSubmit = (form)=>{
    console.log(form);
  }
  return (
    <>
    {open&&<AddressModal handleSubmit={handleSubmit} open={open} setOpen={setOpen}/>}
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
      <div className='h-auto hidden lg:flex w-auto border-2 border-dotted rounded-md items-center justify-center flex-col'>
        <div>
          <BsPlusLg className='text-gray-400' size={32}/>
        </div>
        <div className='mt-2 text-gray-500 font-semibold'>Add Address</div>
      </div>
      <AddressComponent isDefault={true}/>
      <AddressComponent/>
      <AddressComponent/>
      <AddressComponent/>

    </div>
    </div>
    </AccountLayout>
    </>
  )
}

export default MyAddress