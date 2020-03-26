
// ################################################################################
// Web service setup

const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());
// Add support for CORS
app.use(cors());



// ################################################################################
// Data model and persistent store setup

const manager = require("./manager.js");
const m = manager();



// ################################################################################
// Security setup

// Passport.js components
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");

// JSON Web Token Setup
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

// Configure its options
var jwtOptions = {};
// Configure the issuer
jwtOptions.issuer = 'useraccounts.example.com';
// Choose whether the incoming authorization header scheme is BEARER or JWT
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");

// IMPORTANT - the following secret should be a long, unguessable string 
// (ideally stored in a "protected storage" area on the 
// web server, a topic that is beyond the scope of this course)
// You MUST generate a random 64-character string using the following online tool:
// https://lastpass.com/generatepassword.php 
// And use it as the value for the following...
//jwtOptions.secretOrKey = 'generate-your-own-value';
jwtOptions.secretOrKey = '&0y7$noP#5rt99&GB%Pz7j2b1vkzaB0RKs%^N^0zOP89NT04mPuaM!&G8cbNZOtH';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {

  // Get the timestamp now
  let now = Date.now();
  now = Math.round(now / 1000);

  // Unpack and validate the token by ensuring that it has not expired
  if (jwt_payload && now < jwt_payload.exp) {
    // Attach the token's contents to the request
    // It will be available as "req.user" in the route handler functions
    next(null, jwt_payload);
  } else {
    next(null, false);
  }
});

// Activate the security system
passport.use(strategy);
app.use(passport.initialize());



// ################################################################################
// Deliver the app's home page to browser clients

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});



// ############################################################
// Requests to handle user account tasks

// Get info about me; it will return the token contents
app.get("/api/useraccounts/me", passport.authenticate('jwt', { session: false }), (req, res) => {
  // Return the token contents
  res.json({ "message": "Token contents", token: req.user });
});

// Get all (for dev testing only; DISABLE or PROTECT before deployment!)
// (Maybe make it available only to requests that have the "UserAccountManager" role)
app.get("/api/useraccounts", (req, res) => {
  // Call the manager method
  m.useraccountsGetAll()
    .then((data) => {
      //res.json(data);
      res.json(package(data, '/api/useraccounts'));
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one (for dev testing only; DISABLE or PROTECT before deployment!)
// (Maybe make it available only to requests that have the "UserAccountManager" role)
app.get("/api/useraccounts/:id", (req, res) => {
  // Call the manager method
  m.useraccountsGetById(req.params.id)
    .then((data) => {
      //res.json(data);
      res.json(package(data, '/api/useraccounts'));
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// User account activate
app.post("/api/useraccounts/activate", (req, res) => {

  // Incoming data package has the following:
  // { "userName": "uuu", "password": "ppp", "passwordConfirm": "ppp", "statusActivated": true, 
  // "roles": ["Role1", "Role2"], 
  // "claims": [ { "type": "OU", "value": "Department1" }, { "type": "Task", "value": "canUpdateProducts" } ] }

  m.useraccountsActivate(req.body)
    .then((data) => {
      res.json({ "message": data });
    }).catch((msg) => {
      res.status(400).json({ "message": msg });
    });
});

// User account register/create
app.post("/api/useraccounts/register", (req, res) => {

  // Incoming data package has the following:
  // { "userName": "uuu", "fullName": "fff", "password": "ppp", "passwordConfirm": "ppp", 
  // "statusActivated": true, "statusLocked": false,
  // "roles": ["Role1", "Role2"], 
  // "claims": [ { "type": "OU", "value": "Department1" }, { "type": "Task", "value": "canUpdateProducts" } ] }

  m.useraccountsRegister(req.body)
    .then((data) => {
      res.json({ "message": data });
    }).catch((msg) => {
      res.status(400).json({ "message": msg });
    });
});

// User account login
app.post("/api/useraccounts/login", (req, res) => {

  // Incoming data package has the following:
  // { "userName": "xxx", "password": "yyy" }

  m.useraccountsLogin(req.body)
    .then((data) => {

      // Calculate an expiry time...
      // There are 86400 seconds in a day
      // Assume a token lifetime of 14 days
      let now = Date.now();
      let exp = Math.round(now / 1000) + (86400 * 14);
      // For testing purposes, expire the token in 120 seconds
      //let exp = Math.round(now / 1000) + 120;

      // Configure the payload with data and claims
      // Properties are defined here...
      // https://tools.ietf.org/html/rfc7519
      var payload = {
        iss: 'useraccounts.example.com',
        exp: exp,
        //_id: data._id,
        sub: data.userName,
        email: data.userName,
        name: data.fullName,
        roles: data.roles,
        claims: data.claims
        // Can add more if required
      };
      var token = jwt.sign(payload, jwtOptions.secretOrKey);
      // Return the result
      res.json({ "message": "Login was successful", token: token });

    }).catch((msg) => {
      res.status(400).json({ "message": msg });
    });
});



// ################################################################################
// Request handlers for testing security scenarios

// For any route, if you add the "passport.authenticate..." function to the parameters,
// it is equivalent to "yes, the request is authenticated", and no further test is required
// Howevever, when you have to look deeper, and look for a specific claim, continue below...

// Example - look for a specific role claim
app.get('/api/security/testrole2', passport.authenticate('jwt', { session: false }), (req, res) => {

  // req.user has the token contents
  if (req.user.roles.findIndex(role => role === 'Role2') > -1) {
    // Success
    res.json({ message: "User has role claim Role2" })
  } else {
    res.status(403).json({ message: "User does not have the role claim needed" })
  }
});

// Example - look for a specific custom claim
app.get('/api/security/testoulocation1', passport.authenticate('jwt', { session: false }), (req, res) => {

  // req.user has the token contents
  if (req.user.claims.findIndex(claim => claim.type === 'OU' && claim.value === 'Location1') > -1) {
    // Success
    res.json({ message: "User has custom claim OU = Location1" })
  } else {
    res.status(403).json({ message: "User does not have the custom claim needed" })
  }
});

// Example - look for a combination; a specific role claim, and a specific custom claim
app.get('/api/security/testrole2andoulocation1', passport.authenticate('jwt', { session: false }), (req, res) => {

  // req.user has the token contents

  // The -if- statement will look too ugly, so write a few more helper statements
  const roleIndex = req.user.roles.findIndex(role => role === 'Role2');
  const claimIndex = req.user.claims.findIndex(claim => claim.type === 'OU' && claim.value === 'Location1');

  // Make sure that both are found
  if (roleIndex > -1 && claimIndex > -1) {
    // Success
    res.json({ message: "User has role claim Role2 and custom claim OU = Location1" })
  } else {
    res.status(403).json({ message: "User does not have the claims needed" })
  }
});



// ################################################################################
// Request handlers for data entities (listeners)

// Get all
app.get("/api/cars", (req, res) => {
  // Call the manager method
  m.carGetAll()
    .then((data) => {
      //res.json(data);
      res.json(package(data, '/api/cars'));
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get all, PROTECTED!
app.get("/api/carsprotected", passport.authenticate('jwt', { session: false }), (req, res) => {
  // Call the manager method
  m.carGetAll()
    .then((data) => {
      //res.json(data);
      res.json(package(data, '/api/cars'));
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one
app.get("/api/cars/:id", (req, res) => {
  // Call the manager method
  m.carGetById(req.params.id)
    .then((data) => {
      //res.json(data);
      res.json(package(data, '/api/cars'));
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new
app.post("/api/cars", (req, res) => {
  // Call the manager method
  m.carAdd(req.body)
    .then((data) => {
      //res.json(data);
      res.json(package(data, '/api/cars'));
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing
app.put("/api/cars/:id", (req, res) => {
  // Call the manager method
  m.carEdit(req.body)
    .then((data) => {
      //res.json(data);
      res.json(package(data, '/api/cars'));
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item
app.delete("/api/cars/:id", (req, res) => {
  // Call the manager method
  m.carDelete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});



// ################################################################################
// Hypermedia representation packaging function

function package(incomingData, path) {

  // IMPORTANT - This is used for data stored in MongoDB
  // Its identifier property is "_id" (which is different from "id" or "ID" etc.)

  // Package is an object with these key-value pairs:
  // timestamp  string                 Current date-and-time, as an ISO 8601 string
  // version    string                 Version number identifier (for future use)
  // links      array of link objects  Package-level controls
  // count      number                 Item count being returned
  // data       array of item(s)       Data items, each one includes a "links" collection

  // Common tasks:
  // Add package metadata

  let now = new Date();
  let pkg = {
    timestamp: now.toISOString(),
    version: '1.0.0',
  };

  // Determine if the incoming data is an object or an array
  const isItem = (incomingData.length == undefined);

  // Make a local copy of the incoming data
  // Must do this to break the Mongoose schema prototype dependency
  let data = JSON.parse(JSON.stringify(incomingData));

  if (isItem) {

    // Item tasks:
    // Package links will have self and collection
    // Item links will have self and collection
    // Incoming data is put into an array and added to the package

    pkg.links = [{ href: `${path}/${data._id}`, rel: 'self' }, { href: path, rel: 'collection' }];
    pkg.count = 1;
    data.links = [{ href: `${path}/${data._id}`, rel: 'self' }, { href: path, rel: 'collection' }];
    pkg.data = [data];

  } else {

    // Collection tasks:
    // Package links will have self only
    // Item links will have self for each item, generated 

    pkg.links = [{ href: path, rel: 'self' }];
    pkg.count = data.length;

    // For each syntax
    /*
    data.forEach(e => {
      e.links = [{ href: `${path}/${e.id}`, rel: 'self' }, { href: path, rel: 'collection' }];
    });
    pkg.data = data;
    */

    // Map and spread syntax
    pkg.data = data.map(e => ({ ...e, links: [{ href: `${path}/${e._id}`, rel: 'self' }, { href: path, rel: 'collection' }] }));
  }

  return pkg;
}



// ################################################################################
// Attempt to connect to the database, and
// tell the app to start listening for requests

m.connect().then(() => {
  app.listen(HTTP_PORT, () => { console.log("Ready to handle requests on port " + HTTP_PORT) });
})
  .catch((err) => {
    console.log("Unable to start the server:\n" + err);
    process.exit();
  });
