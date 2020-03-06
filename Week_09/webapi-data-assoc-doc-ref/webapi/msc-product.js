
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema
var productSchema = new Schema({
  name: String,
  yearReleased: Number,
  // to-one with company, as a document reference 
  companyId: { type: Schema.Types.ObjectId, ref: 'companies' }
});

// Make schema available to the application
module.exports = productSchema;
