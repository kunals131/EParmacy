import { loginUserAPI, refreshAuth } from "../../api/auth"
import jwt_decode from 'jwt-decode';
import { USER_ACTIONS } from "../actionTypes";
export const loginUser = (username,password)=>async (dispatch)=>{
    try {
        console.log(username,password);
        const res = await loginUserAPI(username,password);
        console.log(res);
        const token = res.data.accessToken;
        console.log(token);
        const data = jwt_decode(token);
        console.log(data);
        dispatch({
            type : USER_ACTIONS.LOGIN_USER,
            payload : {...data}
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
        payload : {...data}
    });
    }catch(err) {
    console.log(err.message)
}

}