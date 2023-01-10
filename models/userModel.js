const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: String,
  first_name: String,
  last_name: String,
  avatar_src: String,
  birthday: Date,
  movies: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
      status: {
        type: String,
        enum: ["finished", "watching", "will watch"],
      },
      isFavorite: Boolean,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
