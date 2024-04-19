const express = require("express");
const productsController=require('../controllers/productsControllers.js')
const productRouter=express.Router();


// handler assigned

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct)

productRouter.route('/:id')
.put(productsController.replaceProduct)
.delete(productsController.deleteProduct)


module.exports=productRouter