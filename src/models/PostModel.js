const mongoose= require('mongoose');
const DataSchema = mongoose.Schema({
    userID : {type:mongoose.Schema.Types.ObjectId,required:true},
    title:{type:String,unique:true,required:true},
    description:{type:String,unique:true,required:true},
    img:{type:String,unique:true,required:true},
    codelink:{type:String,unique:true,required:true},
    livelink :{type:String,unique:true,required:true},
},{timestamps:true,versionKey:false});

const PostModel=mongoose.model("posts",DataSchema);

module.exports = PostModel;