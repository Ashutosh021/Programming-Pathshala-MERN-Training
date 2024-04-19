const userModel = require("../models/userModels");

const getAllUser = async (req, res) => {
  const data = await userModel.find();
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

const addUser = async (req, res) => {
  try {
    const data = await userModel.create(req.body);
    console.log(data);
    res.json({
      status: "true",
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

const editUser = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = { ...req.body, reqId };
    const result = await userModel.findOneAndReplace({ _id: reqId }, data);
    res.json({
        status: "true",
      });
  } catch (err) {
    console.log(err);
  }
};


const deleteUser = async (req, res) => {
    try {
      const reqId = req.params.id;
      await userModel.findOneAndDelete({ _id: reqId });
        res.json({
          status: "success",
          message: "User deleted successfully"
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
  getAllUser,
  addUser,
  editUser,
  deleteUser
};
