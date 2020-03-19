
// ################################################################################
// TODO to do items

// delete all data (to restart)
// load (reload) sample data

// maybe in the msc-term-english.js schema, i don't need the "termsOther" field



// ################################################################################
// Data service operations setup

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Load the schemas...

// Data entities; the standard format is:
const businessSchema = require('./msc-business');



// ################################################################################
// Define the functions that can be called by server.js

module.exports = function () {

  // Collection properties, which get their values upon connecting to the database
  let Business;

  return {

    // ############################################################
    // Connect to the database

    connect: function () {
      return new Promise(function (resolve, reject) {

        // Create connection to the database
        console.log('Attempting to connect to the database...');

        // The following works for localhost...
        // Replace the database name with your own value
        mongoose.connect('mongodb://localhost:27017/DATABASE', { connectTimeoutMS: 5000, useUnifiedTopology: true });

        // This one works for MongoDB Atlas...
        // (to be provided)
        //mongoose.connect('mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/DATABASE?retryWrites=true&w=majority', { connectTimeoutMS: 5000, useUnifiedTopology: true });

        // From https://mongoosejs.com/docs/connections.html
        // Mongoose creates a default connection when you call mongoose.connect(). 
        // You can access the default connection using mongoose.connection.
        var db = mongoose.connection;

        // Handle connection events...
        // https://mongoosejs.com/docs/connections.html#connection-events
        // The data type of a connection event is string
        // And more than one connection event may be emitted during execution

        // FYI the Node.js EventEmitter class docs is here...
        // https://nodejs.org/api/events.html#events_class_eventemitter

        // Handle the unable to connect scenario
        // "on" is a Node.js method in the EventEmitter class
        // https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
        db.on('error', (error) => {
          console.log('Connection error:', error.message);
          reject(error);
        });

        // Handle the open/connected event scenario
        // "once" is a Node.js method in the EventEmitter class
        // https://nodejs.org/api/events.html#events_emitter_once_eventname_listener
        db.once('open', () => {
          console.log('Connection to the database was successful');
          Business = db.model("businesses", businessSchema, "businesses");

          resolve();
        });
      });
    },



    // ############################################################
    // Business requests

    businessGetAll: function () {
      return new Promise((resolve, reject) => {

        Business.find()
          .sort({ name: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }
            // Found, a collection will be returned
            return resolve(items);
          });
      });
    },

    businessGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Business.findById(itemId)
          .exec((error, item) => {
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

    // This will need a document that includes an embedded subdocument
    businessAdd: function (newItem) {
      return new Promise(function (resolve, reject) {

        Business.create(newItem, (error, item) => {
          if (error) {
            // Cannot add item
            return reject(error.message);
          }
          //Added object will be returned
          return resolve(item);
        });
      })
    },

    // This will need a document that looks like this...
    // { name: 'Engineering', leader: 'Gardiner De Roos', headCount: 36 }
    businessAddDepartmentEdit: async function (itemId, newItem) {

      // Attempt to locate the existing document
      let business = await Business.findById(itemId);

      if (business) {
        // Add the new subdocument and save
        business.departments.push(newItem);
        await business.save();
        return business;
      }
      else {
        // Uh oh, "throw" an error
        throw "Not found";
      }
    },

    // Other "edit" tasks can be coded in a way that's similar to the method above
    // Attempt to fetch the document, make changes, save

    // The "delete" task works as you have seen in the past in other code examples

  } // return statement that encloses all the function members

} // module.exports
