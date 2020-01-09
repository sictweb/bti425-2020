
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema

var carSchema = new Schema({
  id: Number,
  make: String,
  model: String,
  year: Number,
  msrp: Number,
  photo: String,
  description: String
});

// Make schema available to the application
module.exports = carSchema;
