import React from 'react'
import AccountSidebar from './AccountSidebar'

const AccountLayout = ({children}) => {
  return (
    <div className='flex lg:space-x-10 lg:p-4'>
        <div className='hidden lg:block'>
        <AccountSidebar/>
        </div>
        <div className='p-2 bg-white'>
            {children}
        </div>

    </div>
  )
}

export default AccountLayout