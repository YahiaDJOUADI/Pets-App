const mongoose = require("mongoose");

const Pet = mongoose.model("Pet", {
  name: String,
  type: String,
  birthdate: String,
  gender: String,
  descreption: String,

  image: String,
});

module.exports = Pet;
