import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { verify } from 'jsonwebtoken';

export const userAuthVerification=(req)=>{
    console.log('INSIDE FUNCTIOn')
    if (req.headers.cookie) {
        const {token} = cookie.parse(req.headers.cookie);
        console.log(token)
        console.log('INside header')
        try {
            verify(token,process.env.ACCESS_TOKEN_SECRET);
            return true;
        }catch(err) {
            console.log(err)
            return false;
        }
    }
    console.log('HERE3')

    return false;
} 

export const checkToken = (req)=>{
    console.log('')
    if (req.cookies) {
        const {token} = cookie.parse(req.headers.cookie);
        if (!token) return false;
        try {
           const decoded =  verify(token,process.env.ACCESS_TOKEN_SECRET);
           return decoded.id;
        }catch(err) {
            console.log(err)
            return false;
        }
    }
    
    return false;
}