const reviewModel = require("../models/reviewModel");
const userModel = require("../models/userModels");

const getAllReview = async (req, res) => {
  try {
    const data = await reviewModel.find();
    console.log(data);
    console.log(req.url);
    res.json({
      status: "success",
      results: data.length,
      data: {
        reviews: data,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while fetching reviews",
    });
  }
};

const addReview = async (req, res) => {
  try {
    const newReview = await reviewModel.create(req.body);
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "fail",
      message: "Failed to create review",
      error: err.message,
    });
  }
};

const editReview = async (req, res) => {
  try {
    const reqId = req.params.id;
    const updatedReview = await reviewModel.findByIdAndUpdate(
      reqId,
      req.body,
      { new: true }
    );
    res.json({
      status: "success",
      data: {
        review: updatedReview,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "fail",
      message: "Failed to update review",
      error: err.message,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const reqId = req.params.id;
    const deletedReview = await reviewModel.findByIdAndDelete(reqId);
    if (!deletedReview) {
      return res.status(404).json({
        status: "fail",
        message: "Review not found",
      });
    }
    res.json({
      status: "success",
      message: "Review deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the review",
      error: err.message,
    });
  }
};

module.exports = {
  getAllReview,
  addReview,
  editReview,
  deleteReview,
};
