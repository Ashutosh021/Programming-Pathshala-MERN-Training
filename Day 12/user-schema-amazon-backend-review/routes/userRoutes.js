const express = require("express")
const userController = require("../controllers/userControllers.js")
const userRouter=express.Router();


userRouter.route("/")
    .get(userController.getAllUser)
    .post(userController.addUser)

userRouter.route("/:id")
    .put(userController.editUser)
    .delete(userController.deleteUser)

    
module.exports=userRouter;