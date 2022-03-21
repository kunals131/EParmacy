import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import AccountSidebar from '../../components/AccountSidebar';
import { axios } from '../../api/auth';
import { userAuthVerification } from '../../utils/AuthVerification';


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

const Account = () => {
    const [screenWidth,setScreenWidth] = useState(100);
    const router = useRouter();
    useEffect(()=>{
        setScreenWidth(window.innerWidth);
    }, [])
    useEffect(()=>{
        if (screenWidth>=1024) {
            router.push('/account/user');
        }
    }, [screenWidth])


    return <AccountSidebar/>
}


export default Account