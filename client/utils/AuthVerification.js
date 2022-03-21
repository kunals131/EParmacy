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