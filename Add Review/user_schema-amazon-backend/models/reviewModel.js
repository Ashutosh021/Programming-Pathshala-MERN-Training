const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    review: {
        type: String
    },
    rating: {
        type: Number
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    }
});

const reviewModel = mongoose.model('Review', reviewSchema); 

module.exports = reviewModel;
