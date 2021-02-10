const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
