const express = require("express")
const productRouter=express.Router();
const productController=require("../Controller/productController")

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct)

productRouter.route('/:id')
    .put(productController.replaceproduct)
    .delete(productController.deleteProduct)
module.exports=productRouter;