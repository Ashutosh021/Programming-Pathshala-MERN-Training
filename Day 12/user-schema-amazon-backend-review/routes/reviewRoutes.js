const express = require("express");
const reviewControllers = require("../controllers/reviewControllers.js");

const reviewRouter = express.Router();


reviewRouter.get("/", reviewControllers.getAllReview);


reviewRouter.post("/", reviewControllers.addReview);


reviewRouter.put("/:reviewId", reviewControllers.updateReview);


reviewRouter.delete("/:reviewId", reviewControllers.deleteReview);

reviewRouter.all('*', (req, res) => {
    res.status(403).json({ msg: "Unauthorized access" });
});

module.exports = reviewRouter;
