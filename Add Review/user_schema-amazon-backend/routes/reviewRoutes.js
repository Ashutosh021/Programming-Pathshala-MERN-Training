const express = require("express")
const reviewController = require("../controllers/reviewControllers")
const reviewRouter=express.Router();

reviewRouter.route("/")
    .get(reviewController.getAllReview)
    .post(reviewController.addReview)

reviewRouter.route("/:id")
    .put(reviewController.editReview)
    .delete(reviewController.deleteReview)

    
module.exports=reviewRouter;