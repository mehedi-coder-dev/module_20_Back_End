const {CreatePostService,ReadPostService,UpdatePostService,RemovePostService } = require('../services/PostService')

exports.CreatePostController = async (req,res)=>{
    let result = await CreatePostService(req);
    return res.status(200).json(result)
}
exports.ReadPostController = async (req,res)=>{
    let result = await ReadPostService(req);
    return res.status(200).json(result)
}
exports.UpdatePostController = async (req,res)=>{
    let result = await UpdatePostService(req);
    return res.status(200).json(result)
}
exports.RemovePostController = async (req,res)=>{
    let result = await RemovePostService(req);
    return res.status(200).json(result)
}