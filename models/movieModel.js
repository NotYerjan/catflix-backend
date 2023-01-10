const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  img_src: {
    type: String,
    required: true,
  },
  tags: [String],
  release_date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  casts: [String],
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
