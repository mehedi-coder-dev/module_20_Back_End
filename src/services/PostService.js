const PostModel =  require('../models/PostModel')

const CreatePostService = async (req,res)=>{
    try{
        const user_id = req.headers.user_id;
        const reqBody = req.body;
        reqBody.userID = user_id;
        console.log(reqBody)
        await PostModel.create(reqBody)
        
       return {status:'success',message:'Post Create Success'}
    }catch(e){
        return {status:'fail',message:'Duplicate Data not Allow'}
    }
}
const ReadPostService = async (req,res)=>{
    try{
        const user_id = req.headers.user_id;
        const data = await PostModel.find({userID:user_id});

        return {status:'success',data:data}

    }catch(e){
        return {status:'fail',message:'Something went wrong!'}
    }
}
const UpdatePostService = async (req,res)=>{
    try{
        const user_id = req.headers.user_id
        const postID = req.params.postID;
        const reqBody = req.body;

        const data = await PostModel.updateOne({_id:postID,userID:user_id},reqBody)
        if(data['matchedCount']===1){
            return {status:'success',message:'Post Update Success'}
        }else {
            return {status:'success',message:"Post Not Found!"}
        }
    }catch(e){
        return {status:'fail',message:'Something went wrong'}
    }
}
const RemovePostService = async (req,res)=>{
    try{
        const user_id = req.headers.user_id
        const postID = req.params.postID;

        const data = await PostModel.deleteOne({_id:postID,userID:user_id})
        if(data['deletedCount']===1){
            return {status:'success',message:'Post Remove Success'}
        }else {
            return {status:'success',message:'Post Not Found!'}
        }

    }catch(e){
        return {status:'fail',message:'Something went wrong'}
    }
}


module.exports = {
    CreatePostService,
    ReadPostService,
    UpdatePostService,
    RemovePostService
}

