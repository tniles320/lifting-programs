const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSessionSchema = new Schema({
  userId: {
    type: String,
    trim: true,
  },
  session: {
    type: String,
    trim: true,
  },
});

const UserSession = mongoose.model("UserSession", userSessionSchema);

module.exports = UserSession;
