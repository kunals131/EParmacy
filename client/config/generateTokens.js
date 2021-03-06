import jwt from 'jsonwebtoken';

const createAccessToken = (data,expTime='5m')=>{
    const accessToken = jwt.sign(data,process.env.ACCESS_TOKEN_SECRET, {expiresIn : '5m'});
    return accessToken;
}

const createRefreshToken = (data,expTime='1d')=>{
    const token = jwt.sign(data,process.env.REFRESH_TOKEN_SECRET, {expiresIn : '5m'});
    console.log(token);
    return token;
}

module.exports = {createAccessToken, createRefreshToken}