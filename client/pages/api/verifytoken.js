import { verify } from "jsonwebtoken";
import User from "../../models/User";

const verifyHandler = async (req,res)=>{
    if (req.method==='POST') {
        const cookies = req.cookies;
        if (cookies?.token) {
            try {
                console.log(cookies.token)
                const decode = verify(cookies.token,process.env.ACCESS_TOKEN_SECRET);
                const foundUser = await User.findById(decode.id).exec();
                if (!foundUser) return res.status(406).json({message : 'UnAuthorized'});
                return res.json({
                    fullName : foundUser.name,
                    cart : foundUser.cart,
                    email : foundUser.email,
                    id: foundUser._id,
                    phoneNumber : foundUser.phoneNumber,
                    fullName : foundUser.fullName
                });
            }
            catch(err) {
                console.log(err)
                return res.status(406).json({message : 'UnAuthorized'});
            }
        }
        else return res.status(406).json({message : 'UnAuthorized'});
    } 
    else return res.status(406).json({message : 'Invalid Request Method'});
}

export default verifyHandler;