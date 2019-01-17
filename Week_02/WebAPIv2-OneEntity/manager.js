// Data service operations

// Setup
const mongoose = require('mongoose');

// Load the schemas
const personSchema = require('./schemas.js');

module.exports = function (mongoDBConnectionString) {

  let Person; // defined on connection to the new db instance

  return {

    connect: function () {
      return new Promise(function (resolve, reject) {
        let db = mongoose.createConnection(mongoDBConnectionString);

        db.on('error', (err) => {
          reject(err);
        });

        db.once('open', () => {
          Person = db.model("people2", personSchema);

          resolve();
        });
      });
    },

    personGetAll: function () {
      return new Promise(function (resolve, reject) {

        Person.find()
          .sort({lastName: 'asc', firstName: 'asc'})
          .exec()
          .then((persons) => {
            // Found, a collection will be returned
            resolve(persons);
          })
          .catch((err) => {
            reject(err);
          });
      })
    },

    personGetById: function (personId) {
      return new Promise(function (resolve, reject) {

        Person.findById(personId)
          .exec()
          .then((person) => {
            // Found, one object will be returned
            resolve(person);
          })
          .catch((err) => {
            // Find/match is not found
            reject(err);
          });
      })
    }
  }
}
