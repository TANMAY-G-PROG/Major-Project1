const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const { isLoggedIn, isOwner, validateListing } = require('../middleware.js');
const ListingController = require('../controllers/listings.js');

//index route
router.get("/",wrapAsync(ListingController.index));

//new route
router.get("/new", isLoggedIn, wrapAsync(ListingController.renderNewForm));

//show route
router.get("/:id", wrapAsync(ListingController.showListing));

//create route
router.post("/",isLoggedIn, validateListing, wrapAsync(ListingController.createListing));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(ListingController.RenderEditForm));

//update route
router.put("/:id",isLoggedIn,isOwner, validateListing, wrapAsync(ListingController.updateListing));

//delete route
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(ListingController.destroyListing));

module.exports = router;