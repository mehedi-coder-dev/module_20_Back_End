const jwt= require('jsonwebtoken');

exports.EncodeToken = (email,user_id)=>{
     const Key = '17248342fjlFHGsnd3ncn328#@';
     const Expire = {expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) }
     const Payload = {
         email:email,
         user_id:user_id
     }

     return jwt.sign(Payload,Key,Expire)

}
exports.DecodeToken = (token)=>{
    try{
        const Key = '17248342fjlFHGsnd3ncn328#@';

        return jwt.verify(token,Key)

    }catch (e){
       return null
    }
}

