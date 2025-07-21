const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const Review = require('./review.js');

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image : {
        type:String,
          set: (v) => {
        if (!v || v.trim() === "") {
        return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80";
        }
        return v;
    },
    },
    price: Number,
    location: String,
    country : String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
});

listingSchema.post('findOneAndDelete', async (listing) => {
    if (listing) {
        await Review.deleteMany({_id: { $in: listing.reviews}});
    }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;