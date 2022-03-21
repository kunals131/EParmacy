import { loginUserAPI, logoutUserAPI, refreshAuth } from "../../api/auth"
import jwt_decode from 'jwt-decode';
import { USER_ACTIONS } from "../actionTypes";
export const loginUser = (username,password, router)=>async (dispatch)=>{
    try {
        console.log(username,password);
        const res = await loginUserAPI(username,password);
        const data = res.data;
        dispatch({
            type : USER_ACTIONS.LOGIN_USER,
            payload : {...data}
        })
        // router.back();
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