import User from "../../../models/User";
import bcrypt from 'bcrypt';
import dbConnect from '../../../config/dbConfig';
const registerController = async(req,res)=>{
    if (req.method==='POST') {
        await dbConnect();
    const {email,phoneNumber,password,confirmPassword, fullName} = req.body;
    if (!email || !phoneNumber || !password || !confirmPassword || !fullName) {
        res.status(406).json({
            message : "Some Fields are missing"
        })
    }
    if (confirmPassword!==password) return res.status(406).json({
        message : "Password and Confirm Password don't match!"
    });
    if (password.length<5) {
        return res.status(406).json({
            message : "Password is too small"
        })
    }
    const isEmailExists = await User.findOne({email}).exec();
    const isPhoneNumberExists = await User.findOne({phoneNumber});
    if (isEmailExists) {
        return res.status(406).json({
            message : "Email Already Exists"
        });
    }
    if (isPhoneNumberExists) {
        return res.status(406).json({
            message : "Phone Number Already Exists."
        })
    }

    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            email,phoneNumber,password : hashedPassword, fullName
        })
        let result = await newUser.save();
        res.status(201).json({
            message : 'New user has been created successfully!',
            userInfo : {
                _id : result._id,
                email,phoneNumber,fullName
            }
        });
    }catch(err) {
        console.log(err);
        res.status(500).json({
            message : 'Something went Wrong, Internal Server Error!'
        })
    }
}
else {
    let users = await User.find({});
    await User.deleteMany({});
    res.json(JSON.stringify(users));
}

}

export default registerController;