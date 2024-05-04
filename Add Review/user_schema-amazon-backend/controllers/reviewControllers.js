const ReviewModel = require("../models/reviewModel");

const getAllReview = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addReview = async (req, res) => {
  // const { userId, productId, review, rating, images } = req.body;
  // const newReview = new ReviewModel({
  //   userId,
  //   productId,
  //   review,
  //   rating,
  //   images,
  // });

  try {
    const savedReview = await ReviewModel.create(req.body);
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editReview = async (req, res) => {
  const { id } = req.params;
  const data = {...req.body,id};

  try {
    const updatedReview = await ReviewModel.findByIdAndUpdate({_id:id},data);

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await ReviewModel.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllReview,
  addReview,
  editReview,
  deleteReview,
};
