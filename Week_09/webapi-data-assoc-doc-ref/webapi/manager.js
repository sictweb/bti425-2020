
// ################################################################################
// Data service operations setup

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Load the schemas...

// Data entities; the standard format is:
const companySchema = require('./msc-company');
const productSchema = require('./msc-product');



// ################################################################################
// Define the functions that can be called by server.js

module.exports = function () {

  // Collection properties, which get their values upon connecting to the database
  let Company;
  let Product;

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
          Company = db.model("companies", companySchema, "companies");
          Product = db.model("products", productSchema, "products");

          resolve();
        });
      });
    },



    // ############################################################
    // Company requests

    companyGetAll: function () {
      return new Promise((resolve, reject) => {

        Company.find()
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

    companyGetByName: async function (text) {

      // URL decode the incoming value
      text = decodeURIComponent(text);

      // Attempt to find in the "name" field, case-insensitive
      let results = await Company.find({ name: { $regex: text, $options: "i" } });
      // This will find zero or more
      return results;
    },

    companyGetByCountry: async function (text) {

      // URL decode the incoming value
      text = decodeURIComponent(text);

      // Attempt to find in the "country" field, case-insensitive
      let results = await Company.find({ country: { $regex: text, $options: "i" } });
      // This will find zero or more
      return results;
    },

    companyGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Company.findById(itemId)
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

    companyGetByIdWithProducts: async function(itemId) {

      // We will return a custom data structure that's not defined by a Mongoose schema

      // Attempt to locate the existing document
      // .findById() normally returns an instance of a Mongoose document
      // .lean() will skip that and return a POJO
      let company = await Company.findById(itemId).lean();

      if (company) {
        // Then we can continue

        // Attempt to fetch associated/related products
        // .find() will return an array of objects defined by the productSchema
        let products = await Product.find({ companyId: company._id });

        // Add the result to the document
        company.products = products;
        return company;
      }
      else {
        // Uh oh, "throw" an error
        throw "Not found";
      }
    },

    companyAdd: async function (newItem) {

      // Attempt to create a new item
      let company = new Company(newItem);

      if (company) {
        // Save
        await company.save();
        return company;
      }
      else {
        // Uh oh, "throw" an error
        throw "Not found";
      }
    },

    // The "edit existing" and "delete item" methods will be similar
    // to those seen in other code examples and templates
    


    // ############################################################
    // Product requests

    productGetAll: function () {
      return new Promise((resolve, reject) => {

        Product.find()
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

    productsFromCompanyGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Product.find({ companyId: itemId })
          .exec((error, items) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          return resolve(items);
        });
      })
    },

    productGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Product.findById(itemId)
          .populate('companyId')
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

    // Must send a product entity that includes a company identifier
    productAdd: async function(newItem) {

      // Attempt to locate the existing document
      let company = await Company.findById(newItem.companyId);

      if (company) {
        
        // We can continue
        let product = new Product(newItem);
        await product.save();
        return product;
      }
      else {
        // Uh oh, "throw" an error
        throw "Not found";
      }
    }

    // The "edit existing" and "delete item" methods will be similar
    // to those seen in other code examples and templates



  } // return statement that encloses all the function members

} // module.exports
