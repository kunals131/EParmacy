import User from "../../../models/User";
import jwt from 'jsonwebtoken';
import { createAccessToken } from "../../../config/generateTokens";
import dbConnect from "../../../config/dbConfig";

const handleRefreshToken = async(req,res)=>{
    const cookies = req.cookies;
    console.log(cookies);
    await dbConnect();
    if (!cookies?.refreshtoken) return res.status(401).json({message : 'Not Authenticated!'});
    const refreshToken = cookies.refreshToken;
    const foundUser = await User.findOne({refreshToken});
    if (!foundUser) return res.status(403).json({message : 'Not Authenticated!'});

    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,decoded)=>{
        if (err || foundUser.email !==decoded.email || foundUser.phoneNumber !==decoded.phoneNumber) return res.send(403).json({message : 'Not Authenticated!'});
        const accessToken = createAccessToken(decoded);
        res.json({accessToken});
    })
}

export default handleRefreshToken;