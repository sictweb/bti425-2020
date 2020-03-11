
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Associated or related schema(s)
var Department = require('./msc-department');

// Entity schema
var businessSchema = new Schema({
  name: String,
  companyType: String,
  slogan: String,
  city: String,
  country: String,
  departments: [Department]
});

// Make schema available to the application
module.exports = businessSchema;

/*

_id
:
5e6687a0febfae0f6598766c
name
:
"Johnson-Gusikowski"
companyType
:
"n/a"
slogan
:
"exploit 24/365 bandwidth"
city
:
"Malinovoye Ozero"
country
:
"Russia"
departments
:
0
:
name
:
"Support"
leader
:
"Rebeka Haggata"
headCount
:
47

*/
