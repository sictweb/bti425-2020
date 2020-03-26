
// ################################################################################
// Request handlers for data entities (listeners)

// The following function does NOT include the "passport.authenticate..." statement
// It will succeed for ANY request

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

// The following function does INCLUDES the "passport.authenticate..." statement
// It will succeed for a request that includes a valid token
// In other words, this will work if the user has authenticated, for any claims

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

// If your scenario is more complex, and you need the requestor to possess
// specific claims, see the code example snippet titled...
// requests-handle-roles-and-claims.js
