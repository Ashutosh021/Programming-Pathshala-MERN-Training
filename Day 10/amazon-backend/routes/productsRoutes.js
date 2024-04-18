const express = require("express");
const productsController=require('../controllers/productsControllers.js')
const productRouter=express.Router();


// handler assigned

productRouter.route('/')
.get(productsController.getAllProducts);


module.exports=productRouter