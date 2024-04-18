const express = require('express');
const userController=require('../Controller/userController.js')

const userRouter = express.Router();

userRouter.route('/')
.get(userController.adduser)
.post(userController.adduser)
.put(userController.adduser)
.delete(userController.adduser)


module.exports=userRouter;