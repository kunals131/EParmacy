import User from "../../../models/User";
import cookie from 'cookie';
const logoutController = async(req,res)=>{
    const cookies = req.cookies;
    if (!cookies?.refreshToken) return res.status(204).json({message : "Already Logged Out"});
    const refreshToken = cookies.refreshToken;

    const foundUser = await User.findOne({refreshToken}).exec();
    if (!foundUser) {
            res.setHeader('Set-Cookie', cookie.serialize('refreshToken', '', {
                httpOnly : true, sameSite : 'None', secure : "true", maxAge :  -1
            }));
            return res.status(204).json({message : "Logged Out"});
    }

    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.setHeader('Set-Cookie', cookie.serialize('refreshToken', '', {
        httpOnly : true, sameSite : 'None', secure : "true", maxAge :  -1
    }));
    return res.status(204).json({message : "Logged Out"});;

}