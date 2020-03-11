
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema
var departmentSchema = new Schema({
  name: String,
  leader: String,
  headCount: Number
});

// Make schema available to the application
module.exports = departmentSchema;
