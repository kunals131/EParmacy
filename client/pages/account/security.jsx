import React from 'react'
import AccountLayout from '../../components/AccountLayout'


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

const Security = () => {
  return (
    <AccountLayout>Security</AccountLayout>
  )
}

export default Security