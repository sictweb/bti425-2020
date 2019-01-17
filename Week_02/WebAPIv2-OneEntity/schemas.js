// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Write the entity schemas, one per entity

var personSchema = new Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  email: String,
  url: String,
  creditScore: Number,
  rating: Number
});

// Make schemas available to the application
module.exports = personSchema;
