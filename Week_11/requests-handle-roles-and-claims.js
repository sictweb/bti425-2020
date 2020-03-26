
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
