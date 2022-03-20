import { loginUserAPI, logoutUserAPI, refreshAuth } from "../../api/auth"
import jwt_decode from 'jwt-decode';
import { USER_ACTIONS } from "../actionTypes";
export const loginUser = (username,password, router)=>async (dispatch)=>{
    try {
        console.log(username,password);
        const res = await loginUserAPI(username,password);
        console.log(res);
        const token = res.data.accessToken;
        console.log(token);
        const data = jwt_decode(token);
        console.log(data);
        router.back();
        dispatch({
            type : USER_ACTIONS.LOGIN_USER,
            payload : {...data, token}
        })
        
    }catch(err) {
        console.log(err);
    }
}

export const updateUser = ()=>async(dispatch)=>{
    try {
    const res = await refreshAuth();
    const token = res.data.accessToken;
    console.log(res);
    const data = jwt_decode(token);
    console.log(data);
    dispatch({
        type : USER_ACTIONS.UPDATE_USER,
        payload : {...data,token}
    });
    }catch(err) {
    console.log(err.message)
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