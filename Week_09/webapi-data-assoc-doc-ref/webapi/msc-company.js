
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema
var companySchema = new Schema({
  name: String,
  country: String,
  ceo: String
});

// Make schema available to the application
module.exports = companySchema;
