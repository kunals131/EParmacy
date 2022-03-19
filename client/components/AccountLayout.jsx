import React from 'react'
import AccountSidebar from './AccountSidebar'

const AccountLayout = ({children}) => {
  return (
    <div className='flex lg:space-x-16 xl:space-x-18 xl:p-6 lg:p-4 3xl:px-20 3xl:py-10'>
        <div className='hidden lg:block rounded-md'>
        <AccountSidebar/>
        </div>
        <div className='p-2 bg-white w-[100%] xl:w-[80%] rounded-md'>
            {children}
        </div>
    </div>
  )
}

export default AccountLayout