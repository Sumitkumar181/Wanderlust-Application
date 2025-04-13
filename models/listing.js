const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default: "https://unsplash.com/photos/mountains-and-tree-range-during-golden-hour-8c6eS43iq1o",
      set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/mountains-and-tree-range-during-golden-hour-8c6eS43iq1o"
        : v,
    },
      
      
  },
  price: Number,
  location: String,
  country: String,
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

