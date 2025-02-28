const express = require('express');
const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')
const AuthVerification =require('../middlewares/AuthVerification')
const router  = express.Router()



//User
router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin)

//post
router.post('/CreatePost',AuthVerification,PostController.CreatePostController)
router.get('/ReadPost',AuthVerification,PostController.ReadPostController)
router.post('/UpdatePost/:postID',AuthVerification,PostController.UpdatePostController)
router.post('/RemovePost/:postID',AuthVerification,PostController.RemovePostController)

module.exports = router;