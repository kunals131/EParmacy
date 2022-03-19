import User from "../../../models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dbConnect from "../../../config/dbConfig";
import { createAccessToken,createRefreshToken } from "../../../config/generateTokens";
import cookie from 'cookie';
const loginController = async(req,res)=>{
    if (req.method==='POST') {
        await dbConnect();
        const {username,password,isEmail} = req.body;
        if (!username || !password) return res.status(406).json({message : 'Invalid Username or Password!'});
        try {
            let foundUser = null;
            if (isEmail) {
                foundUser = await User.findOne({email : username}).exec();
            }
            else {
                foundUser = await User.findOne({phoneNumber : username}).exec();
            }
            if (!foundUser) return res.status(401).json({
                message : 'Username not found.'
            });
            const match = await bcrypt.compare(password,foundUser.password);
            if (!match) res.send(406).json({message : "Invalid Username or Password"});
            const accessToken = createAccessToken({
                email : foundUser.email,
                phoneNumber : foundUser.phoneNumber,
                cart : foundUser.cart,
                fullName : foundUser.fullName
            });
            const refreshToken =  createRefreshToken({
                email : foundUser.email,
                phoneNumber : foundUser.phoneNumber,
            });
            foundUser.refreshToken =refreshToken;
            let result = foundUser.save();
            console.log(result);
            res.setHeader(
                "Set-Cookie",cookie.serialize("refreshToken",refreshToken,{
                    httpOnly : true, sameSite : 'None', secure : "true", maxAge :  24 * 60 * 60 * 1000
                })
            )
            res.json({accessToken});
            
        }catch(err) {
            console.log(err);
            res.status(500).json("INTERNAL ERROR 500")
        }

    }
}

export default loginController;