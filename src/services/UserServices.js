const EmailSend=require('../utility/EmailHelper')
const UserModel=require('../models/UserModel');
const {EncodeToken} = require("../utility/TokenHelper");


const UserOTPService = async (req,res)=>{
   try {
     const EmailTo = req.params.email;
     const OTP = Math.floor(100000+Math.random()*900000);
     const EmailText = `Your verification code is= ${OTP}`;
     const EmailSubject = 'Email verification';

     await EmailSend(EmailTo,EmailText,EmailSubject);
     await UserModel.updateOne({email:EmailTo},{$set:{otp:OTP}},{upsert:true})

     return {status:'success',message:'OTP code has been send'}
   }catch (e){
       return {status:'fail',message:'Something went wrong!'}
   }
}
const VerifyLoginService = async (req,res)=>{
   try {
       const email = req.params.email;
       const otp = req.params.otp
       const user = await UserModel.find({email:email,otp:otp})
       if(user.length===1){
           const user_id = await UserModel.find({email:email,otp:otp}).select('_id')
           const token = EncodeToken(email,user_id[0]['_id'].toString())
           await UserModel.updateOne({email:email},{$set:{otp:0}})

           return {status:'success',message:"Valid OTP",token:token}
       }else {
           return {status:'fail',message:"Invalid OTP"}
       }

   }catch (e){
       return {status:'fail',message:'Something went wrong!'}
   }
}

module.exports = {
    UserOTPService,
    VerifyLoginService,
}