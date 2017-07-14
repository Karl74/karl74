var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  Name: {
    type: String,
    maxlength: 45
  },

  Email: {
    type: String,
    maxlength: 45
  },

  Comment: {
    type: String,
    maxlength:280
  },
});

var Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
