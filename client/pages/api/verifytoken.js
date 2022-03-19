import User from '../../models/User';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../../config/generateTokens';
import dbConnect from '../../config/dbConfig';

const handleRefreshToken = async (req,res)=>{
    await dbConnect();
    const {token} = req.body;
    const cookies = req.cookies;
    console.log(token);
   
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
        if (err) {
            return res.status(201).json({message : "Logged In!"});
        }
        else {
            return res.status(201).json({message : "Logged In"});
        }
    });

}

export default handleRefreshToken;