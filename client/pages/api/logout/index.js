import User from "../../../models/User";
import cookie from "cookie";

const logoutController = async (req, res) => {
  const cookies = req.cookies;
  if (cookies) {
    const {token} =cookies;
    if (token) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: -1,
          sameSite: "strict",
          path: "/",
        })
      );
      return res.json({message : 'Logged Out'});
    }
  }
  return res.json({message : 'Logged Out'});

};

export default logoutController;
