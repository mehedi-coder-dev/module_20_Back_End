const {UserOTPService, VerifyLoginService
} = require("../services/UserServices");


exports.UserOTP = async (req,res)=>{
    let result = await UserOTPService(req);
    return res.status(200).json(result)
}

exports.VerifyLogin= async (req,res)=>{
    let result = await VerifyLoginService(req);

    if(result['status']==='success'){
        let cookieOption = {
            expires:new Date(Date.now()+24*60*60*1000),
            httponly:false
        }
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)
    }else {
        return res.status(200).json(result)
    }

}
