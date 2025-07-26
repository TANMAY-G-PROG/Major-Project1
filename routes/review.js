const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const { isLoggedIn, validateReview, isReviewAuthor } = require('../middleware.js');
const ReviewController = require('../controllers/reviews.js');

//Reviews
//Post Route
router.post("/",isLoggedIn, validateReview,wrapAsync(ReviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(ReviewController.destroyReview));

module.exports = router;