const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const data = await productModel.find();
  console.log(data);
  console.log(req.url);
  res.json({
    status: "success",
    results: 0,
    data: {
      products: data,
    },
  });
};
const addProduct = async (req, res) => {
  try {
    const data = await productModel.create(req.body);
    console.log(data);
    res.json({
      status: "false",
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
