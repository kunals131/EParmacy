import User from '../../../models/User';
import dbConnect from '../../../config/dbConfig';
import jwtDecode from 'jwt-decode';
import { checkToken } from '../../../utils/authverification';


const userHandler = async(req,res)=>{
    if (req.method==='GET') {
        const cookies = req.cookies;
        if (cookies?.token) {
            const id = jwtDecode(token).id;
            if (!id) return res.status(406).json("Not Authenticated!");
            const foundUser =await  User.findById(id).exec();
            if (!foundUser) return res.status(406).json("Not Authenticated!");
            return res.json({
                fullName: foundUser.fullName,
                email: foundUser.email,
                cart: foundUser.cart,
                id: foundUser._id,
                phoneNumber: foundUser.phoneNumber,
            });
        }
        else {
            return res.status(406).json("Not Authenticated!");
        }
        return;
    }

    if (req.method==='PATCH') {
        const userId = checkToken(req);
        if (!userId) return res.status(406).json({message : "Not logged in"});
        try {
        const {fullName,email,phoneNumber} = req.body;
        const isEmailExists = await User.findOne({email, _id:{$ne:userId}}).exec();
        const isPhoneExists = await User.findOne({phoneNumber, _id:{$ne:userId}}).exec();
        if (isEmailExists&&isPhoneExists) return res.status(406).json({message : 'Email and Phone already exist.'});
        if (isEmailExists) return res.status(406).json('Email Id already Exists.');
        if (isPhoneExists) return res.status(406).json({message : 'Phone Number already Exists!'});
        
        const foundUser = await User.findById(userId).exec();
        if (!foundUser)  return res.status(406).json({message : "Not logged in"});
        foundUser.fullName = fullName,
        foundUser.email = email,
        foundUser.phoneNumber = phoneNumber;
        const userDetails = await foundUser.save();
        const {password,...userObject} = userDetails;
        return res.json({fullName,email,phoneNumber});
        }catch(err) {
            console.log(err)
            return res.status(500).json({message : 'Internal server error'});
        }
        

    }
}
export default userHandler;