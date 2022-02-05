var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  mail: {
    type: String,
    unique:true,
    required: "E' necessario inserire una mail per creare un nuovo utente.",
  },
  password: {
    type: String,
    required: "E' necessario inserire una password per creare un nuovo utente",
  },
});

module.exports = mongoose.model("User", UserSchema);