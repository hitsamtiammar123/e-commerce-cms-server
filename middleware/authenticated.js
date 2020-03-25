const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    let {token}=req.headers;
    if(!token){
        res.status(401).json({message:'Unauthenticated, Token is missing'});
        return;
    }

    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        next();
      } catch(err) {
        res.status(400).json({message:'Error on authenticating',err});
    }
}
