 import React, {useState} from 'react';
import Modal from './Modal';
import InputField from './InputField';

const fetchedData = {
    fullName : 'Kunal',
    mobile : '+91 7049930190',
    pinCode : '452014',
    flat : '32/5 Kushi Apt',
    state : 'Madhya Pradesh',
    defaultCheck : true,
}

const AddressModal = ({isEdit,id,open,setOpen, handleSubmit})=>{
    const initalState = {
        fullName : '',
        mobile : '',
        pinCode : '',
        flat : '',
        area : '',
        landmark : '',
        town : '',
        state : '',
        defaultCheck : false
    }
    if (isEdit) {
        initalState = {...initalState,...fetchedData};
    }
    const [addressForm,setAddressForm] = useState(initalState)
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
          <div className='flex items-center space-x-2'>
              <div>
              <input id="defaultCheck" checked={addressForm.defaultCheck} onChange={(e)=>setAddressForm({...addressForm,defaultCheck : e.target.checked})} type="checkbox" className='h-4 w-4 mt-2' />
              </div>
              <div>
              <label htmlFor="defaultCheck" className='text-sm'>Set As Default</label>
              </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='w-fit text-white text-sm  px-3 py-[4px] rounded-md bg-primary shadow-sm ' onClick={()=>handleSubmit(addressForm)}>Add Address</div>
        </div>
      </Modal>
    )
  }
  

  export default AddressModal;