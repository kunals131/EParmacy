import User from '../../../models/User';
import dbConnect from '../../../config/dbConfig';
import jwtDecode from 'jwt-decode';


const userHandler = (req,res)=>{
    if (req.method==='GET') {
        const cookies = req.cookies;
        if (cookies?.token) {
            const id = jwtDecode(token).id;
            if (!id) return res.status(406).json("Not Authenticated!");
            const foundUser = User.findById(id).exec();
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
    }
}
export default userHandler;