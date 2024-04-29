const { query } = require("express");
const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  // const {sort,...q}=req.query;
  // const {sort='price',page=1,pageSize=3,...q}=req.query;
  const {sort='price',page=1,pageSize=3,fields,...q}=req.query;


  const sortStr=sort.split(',').join(' ');
  // const fieldsStr=fields.split(',').join(' ');
  // const q=req.query;
  // console.log(q,sort)
  // const data = await productModel.find(q);

  let query = productModel.find(q);
  query=query.sort(sortStr);
  // const skip=0;
  // const limit =5;
  
  const skip=pageSize*(page-1);
  // const limit =pageSize;

  query=query.skip(skip).limit(pageSize)
  // query=query.select('-title')
  // query=query.select(fieldsStr)
  const products = await query;

  // console.log(data);
  const totalResult=productModel.countDocuments();
  console.log(req.url);
  res.json({
    status: "success",
    results: products.length,
    data: { 
      products: products,
    },
    totalResult,
    pageSize,
    page:page
  });
};
const addProduct = async (req, res) => {
  try {
    const data = await productModel.create(req.body);
    console.log(data);
    res.json({
      status: "flase",
      product: data,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = { ...req.body, reqId };
    const result = await productModel.findOneAndReplace({ _id: reqId }, data);
    res.json({
        status: "true",
      });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req, res) => {
    try {
      const reqId = req.params.id;
      await productModel.findOneAndDelete({ _id: reqId });
        res.json({
          status: "success",
          message: "Product deleted successfully"
        });
      }
     catch (err) {
      console.log(err.message);
      res.status(500).json({ // Handle possible errors
        status: "error",
        message: "An error occurred while deleting the product"
      });
    }
  };
  

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  deleteProduct,
};
