
// Add the following statement just below "const mongoose..."
const bcrypt = require('bcryptjs');




// Add the following function members to the main function
// We suggest that you paste them just below the "connect" function member code block

// ############################################################
// User account requests

useraccountsActivate: function (userData) {
  return new Promise(function (resolve, reject) {

    // Incoming data package has user name (email address),
    // two identical passwords, and a role (string)
    // { userName: xxx, password: yyy, passwordConfirm: yyy, role: zzz }

    if (userData.password != userData.passwordConfirm) {
      return reject("Passwords do not match");
    }

    // Generate a "salt" value
    var salt = bcrypt.genSaltSync(10);
    // Hash the result
    var hash = bcrypt.hashSync(userData.password, salt);

    // Attempt to update the user account
    UserAccounts.findOneAndUpdate(
      { userName: userData.userName },
      { password: hash, statusActivated: true, role: userData.role },
      { new: true }, (error, item) => {
        if (error) {
          // Cannot edit item
          return reject(`User account activation - ${error.message}`);
        }
        // Check for an item
        if (item) {
          // Edited object will be returned
          //return resolve(item);
          // Alternatively...
          return resolve('User account was activated');
        } else {
          return reject('User account activation - not found');
        }

      }); // UserAccounts.findOneAndUpdate
  }); // return new Promise
}, // useraccountsActivate

useraccountsRegister: function (userData) {
  return new Promise(function (resolve, reject) {

    // Incoming data package has user name (email address), full name, 
    // two identical passwords, and a role (string)
    // { userName: xxx, fullName: aaa, password: yyy, passwordConfirm: yyy, role: zzz }

    if (userData.password != userData.passwordConfirm) {
      return reject("Passwords do not match");
    }

    // Generate a "salt" value
    var salt = bcrypt.genSaltSync(10);
    // Hash the result
    var hash = bcrypt.hashSync(userData.password, salt);

    // Update the incoming data
    userData.password = hash;

    // Create a new user account document
    let newUser = new UserAccounts(userData);

    // Attempt to save
    newUser.save((error) => {
      if (error) {
        if (error.code == 11000) {
          reject("User account creation - cannot create; user already exists");
        } else {
          reject(`User account creation - ${error.message}`);
        }
      } else {
        resolve("User account was created");
      }
    }); //newUser.save
  }); // return new Promise
}, // useraccountsRegister

useraccountsLogin: function (userData) {
  return new Promise(function (resolve, reject) {

    // Incoming data package has user name (email address) and password
    // { userName: xxx, password: yyy }

    UserAccounts.findOne(
      { userName: userData.userName }, (error, item) => {
        if (error) {
          // Query error
          return reject(`Login - ${error.message}`);
        }
        // Check for an item
        if (item) {
          // Compare password with stored value
          let isPasswordMatch = bcrypt.compareSync(userData.password, item.password);
          if (isPasswordMatch) {
            return resolve(item);
          }
          else {
            return reject('Login was not successful');
          }
        } else {
          return reject('Login - not found');
        }

      }); // UserAccounts.findOneAndUpdate
  }); // return new Promise
}, // useraccountsLogin
