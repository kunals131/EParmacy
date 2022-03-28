import { loginUserAPI, logoutUserAPI, refreshAuth, registerUserAPI,  } from "../../api/auth"
import jwt_decode from 'jwt-decode';
import { USER_ACTIONS } from "../actionTypes";
import { axios } from "../../api/auth";

export const loginUser = (username,password, router)=>async (dispatch)=>{
    try {
        console.log(username,password);
        const res = await loginUserAPI(username,password);
        const data = res.data;
        console.log(data);
        dispatch({
            type : USER_ACTIONS.LOGIN_USER,
            payload : {...data, state : true}
        })
        router.back();
    }catch(err) {
        console.log(err);
    }
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

export const updateUser = (userForm,setError)=>async(dispatch)=>{
    try {
        const {fullName,email,phoneNumber} = userForm;
        const res = await axios.patch('/user', {
            fullName : userForm.fullName,
            email : userForm.email,
            phoneNumber : userForm.phoneNumber
        });
        dispatch({
            type : USER_ACTIONS.SET_DETAILS,
            payload : {fullName,email,phoneNumber}
        })

    }catch(err) {
        console.log(err.message);
        setError(err.message);
    } 
}

