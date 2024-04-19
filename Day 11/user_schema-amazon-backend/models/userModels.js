const mongoose=require("mongoose");

const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            unique:true,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        age:{
          type:Number,
          required:true
        },
        email:{
          type:String,
          required:true
        },
        description:{
            type:String
        },
        images:[String],
        createdAt:{
            type:Date,
            default:new Date()
        },
        updatedAt:{
            type:Date,
            default:new Date()
        },
    }
)

const userModel=mongoose.model('user',userSchema);


module.exports=userModel;