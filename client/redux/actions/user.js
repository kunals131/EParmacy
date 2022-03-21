import { loginUserAPI, logoutUserAPI, refreshAuth, registerUserAPI,  } from "../../api/auth"
import jwt_decode from 'jwt-decode';
import { USER_ACTIONS } from "../actionTypes";
import axios from 'axios'


export const loginUser = (username,password, router)=>async (dispatch)=>{

        console.log(username,password);
        const res = await loginUserAPI(username,password);
        const data = res.data;
        console.log(data);
        dispatch({
            type : USER_ACTIONS.LOGIN_USER,
            payload : {...data, state : true}
        })
        router.back();
}


export const logoutUser = (router)=>async(dispatch)=>{
    try {
        await logoutUserAPI();
        router.push('/');
        dispatch({
            type : USER_ACTIONS.LOGOUT_USER
        })
    }catch(err) {
        console.log(err);
    }
}

export const updateAuth = ()=>async(dispatch)=>{
    try {
    const res = await refreshAuth();
    const data =res.data;
    dispatch({
        type : USER_ACTIONS.UPDATE_USER,
        payload : {...data, state : true}
    })
    }
    catch(err) {
        dispatch({
            type : USER_ACTIONS.UPDATE_USER,
            payload : {state : false}
        })
    }
}

