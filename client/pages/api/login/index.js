import User from "../../../models/User";
import bcrypt from "bcrypt";
import dbConnect from "../../../config/dbConfig";
import { sign } from "jsonwebtoken";
import cookie from 'cookie';
export default async function loginHandler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(406).json({ message: "Invalid Email or Password" });
    try {
      await dbConnect();

      const foundUser = await User.findOne({ email: username }).exec();
      if (!foundUser)
        return res.status(406).json({ message: "Invalid Email or Password" });
      const match = await bcrypt.compare(password, foundUser.password);
      if (!match)
        return res.status(406).json({ message: "Invalid Email or Password" });
      const token = sign({
        id: foundUser._id
      },process.env.ACCESS_TOKEN_SECRET, {expiresIn : '100m'});
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
      return res.json({
        fullName: foundUser.fullName,
        email: foundUser.email,
        cart: foundUser.cart,
        id: foundUser._id,
        phoneNumber: foundUser.phoneNumber,
      });
    } catch (err) {
      console.log(err);
      return res.status(406).json({ message: err.message });
    }

    return;
  }

  return res.status(404).json({ message: "Invalid Request Method" });
}
