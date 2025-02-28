const {DecodeToken} = require("../utility/TokenHelper");
module.exports = (req,res,next)=>{
    let token = req.headers['token'];
    if(!token){
       token=req.cookies['token']
    }

    let decoded = DecodeToken(token)
    if(decoded==null){
        return res.status(401).json({status:'fail',message:'unauthorized'})
    }
    else{
      req.headers.email = decoded['email'];
      req.headers.user_id = decoded['user_id'];
      next()
    }
}