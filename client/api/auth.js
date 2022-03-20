import Axios from "axios"

export const axios = Axios.create({
    baseURL : 'http://localhost:3000/api',
    timeout : 1000,
    headers : {
        'Content-Type': 'application/json',
    },
    withCredentials : true
});

export const loginUserAPI = async(username,password,isEmail)=>{
    const res = await axios.post('/login', {username,password});
    return res;
}

export const registerUserAPI = async(data)=>{
    const res = axios.post('/register', data);
    return res;
}

export const refreshAuth = async(data)=>{
    const res = axios.get('/refreshtoken');
    return res;
}

export const logoutUserAPI = async()=>{
    const res = axios.post('/logout');
    return res;
}