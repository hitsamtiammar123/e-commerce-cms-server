const jwt=require('jsonwebtoken');

module.exports={
    makeToken:(user)=>{
        let tokenData=user.tokendata;
        return jwt.sign(tokenData,process.env.JWT_SECRET);
    }
}