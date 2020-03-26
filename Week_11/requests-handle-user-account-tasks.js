
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
