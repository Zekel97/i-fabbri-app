var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  name: String,
  description: String,
  img: {
      data: Buffer,
      contentType: String,
  }
});

module.exports = mongoose.model("Image", ImageSchema);