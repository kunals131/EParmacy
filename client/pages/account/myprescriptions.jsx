import React from 'react';
import AccountLayout from '../../components/AccountLayout';
import {RiFileList3Line} from 'react-icons/ri';
import {BsPlusLg} from 'react-icons/bs';

export const getServerSideProps = (ctx)=>{
  const isAuth = userAuthVerification(ctx.req);
  if (!isAuth) {
      return {
          redirect : {
              permanent : false,
              destination : '/login'
          }
      }
  }
  return {props : {}}
}

const PrescriptionItem = ()=>{
  return (
    <div className='p-3 border-2 rounded-md flex items-center space-x-5 3xl:p-10 3xl:py-16'>
      <div className='p-1 '>
        <RiFileList3Line size={34} className='text-gray-800'/>
      </div>
      <div>
        <div  className='font-semibold'>Prescription -1</div>
        <div className='text-sm'>Added on 03 Jan 2021</div>
      </div>
      

    </div>
  )
}

const Prescriptions = () => {
  return (
   <AccountLayout>
     <div className='font-default p-2'>
      <div className='flex justify-between items-center'>
    <div className='text-2xl font-semibold'>My Prescriptions</div>
    <div className='lg:hidden flex space-x-2'>
      <div className='border-primary px-3 w-fit border-[1px] text-center py-1 text-primary rounded-xl'>Add New </div>
    </div>
    </div>
    <div className='mt-4'>
      <input type="text" className='w-[100%] p-2 rounded-md border-2' placeholder='Search Prescription' />
    </div>
    <hr className='my-6'/>
    <div className='space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 2xl:grid-cols-3 lg:gap-3'>
    <div className='h-auto hidden lg:flex w-auto border-2 border-dotted rounded-md items-center justify-center flex-col'>
        <div>
          <BsPlusLg className='text-gray-400' size={21}/>
        </div>
        <div className='mt-2 text-gray-500 font-semibold text-sm'>Add Prescription</div>
      </div>
      <PrescriptionItem/>
      <PrescriptionItem/>
      <PrescriptionItem/>
      <PrescriptionItem/>
      <PrescriptionItem/>
    </div>
     </div>
   </AccountLayout>
  )
}

export default Prescriptions