
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
jwtOptions.secretOrKey = 'generate-your-own-value';

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
