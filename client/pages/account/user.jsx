import React, { useState } from 'react'
import AccountLayout from '../../components/AccountLayout'
import { userAuthVerification } from '../../utils/AuthVerification';


export const getServerSideProps = (ctx)=>{
  const isAuth = userAuthVerification(ctx.req);
  if (!isAuth) {
      return {
          redirect : {
              permanent : 'false',
              destination : '/login'
          }
      }
  }
  return {props : {}}
}

const InputField = ({id,name,placeholder,type,value,label,onChangeHandler,editMode})=>{

  return (
    <div className='font-poppins'>
      <label htmlFor={id} className='text-primary text-sm font-semibold'>{label}</label>
      <div>
        <input  name={name} type={type} onChange={onChangeHandler} id={id} disabled={!editMode} placeholder={placeholder} value={value} className='py-[8px] disabled:bg-white w-[94%] border-b-2'/>
      </div>
    </div>
  )
}

const User = () => {
  const [userForm,setUserForm] = useState({
    fullName : 'Kunal Sangtiani',
    email : 'ksangtinai13@gmail.com',
    mobile : '+91 7049930190',
    primaryAddress  :'32/5 Kushi Apt. Rajmahal colony, Indore'
  })
  const [editMode,setEditMode] = useState(false);
  const handleChange = (e)=>{
    setUserForm((prev)=>{
      return {
        ...prev,[e.target.name] : e.target.value
      }
    })
  }
  const handleSubmit = ()=>{
    setEditMode(false);

  }
  return (
    <AccountLayout>
      <div className='p-3 font-poppins lg:p-4'>
        <div className='text-2xl font-semibold'>USER DETAILS</div>
        {editMode&&<div className='text-green-600 text-sm mt-1'>You are in Edit Mode, You can change any field and save the changes.</div>}
        <div className='mt-5 space-y-7 lg:space-y-0 lg:flex'>
          <div className='lg:flex-[0.5]'>
          <div className='text-gray-700 font-poppins'>LOGIN DETAILS</div>
          <div className='mt-2 space-y-3'>
            <InputField value={userForm.email} editMode={editMode} onChangeHandler={handleChange} name="email" label="EMAIL" type="email" placeholder="Edit Your Email" />
            <InputField value={userForm.mobile}  editMode={editMode} onChangeHandler={handleChange} name="mobile" label="MOBILE NUMBER" type="text" placeholder="Edit Your Mobile " />
          </div>
          </div>
          <div className='lg:flex-[0.5]'>
          <div className='text-gray-700 font-poppins'>OTHER INFORMATION</div>
          <div className='mt-2 space-y-3'>
            <InputField value={userForm.fullName}  editMode={editMode} onChangeHandler={handleChange} name="fullName" label="FULL NAME" type="text" placeholder="Edit Your FULL NAME" />
            <InputField value={userForm.primaryAddress}  editMode={editMode} onChangeHandler={handleChange} name="primaryAddress" label="PRIMARY ADDRESS" type="text" placeholder="Edit Your Address " />
          </div>
          </div>
        </div >
        <div className='flex space-x-3 mt-8'>
          {!editMode&&<div className='p-2 bg-primary text-white w-fit rounded-md ' onClick={()=>setEditMode(true)}>Edit Information</div>}
          {editMode&&<div className='p-2 bg-accent text-white w-fit rounded-md' onClick={handleSubmit}>Save</div>}
        </div>
      </div>
    </AccountLayout>
  )
}

export default User