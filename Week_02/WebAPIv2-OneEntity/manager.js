// Data service operations

// Setup
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

// Load the schemas
const personSchema = require('./schemas.js');

module.exports = function (mongoDBConnectionString) {

  let Person; // defined on connection to the new db instance

  return {

    connect: function () {
      return new Promise(function (resolve, reject) {
        let db = mongoose.createConnection(mongoDBConnectionString);

        db.on('error', (error) => {
          reject(error);
        });

        db.once('open', () => {
          Person = db.model("people2", personSchema);

          resolve();
        });
      });
    },

    personGetAll: function () {
      return new Promise(function (resolve, reject) {

        // Fetch all documents
        Person.find()
          .sort({ lastName: 'asc', firstName: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }
            // Found, a collection will be returned
            return resolve(items);
          });
      })
    },

    personGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Person.findById(itemId, (error, item) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Found, one object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }
        });
      })
    },

    personAdd: function (newItem) {
      return new Promise(function (resolve, reject) {

        Person.create(newItem, (error, item) => {
          if (error) {
            // Cannot add item
            return reject(error.message);
          }
          //Added object will be returned
          return resolve(item);
        });
      })
    },

    personEdit: function (newItem) {
      return new Promise(function (resolve, reject) {

        Person.findByIdAndUpdate(newItem._id, newItem, { new: true }, (error, item) => {
          if (error) {
            // Cannot edit item
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Edited object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }

        });
      })
    },

    personDelete: function (itemId) {
      return new Promise(function (resolve, reject) {

        Person.findByIdAndRemove(itemId, (error) => {
          if (error) {
            // Cannot delete item
            return reject(error.message);
          }
          // Return success, but don't leak info
          return resolve();
        })
      })
    }

  }
}
