import Axios from "axios"

const axios = Axios.create({
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