const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: "First name is required",
  },
  last_name: {
    type: String,
    trim: true,
    required: "Last Name is required",
  },
  email: {
    type: String,
    trim: true,
    required: "Email is required",
  },
  username: {
    type: String,
    trim: true,
    required: "Username is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
  },
  image: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
