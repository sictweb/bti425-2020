
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
// Request handlers for data entities (listeners)

// Get all
app.get("/api/cars", (req, res) => {
  // Call the manager method
  res.json(m.carGetAll());
});

// Get one
app.get("/api/cars/:id", (req, res) => {
  // Call the manager method
  let o = m.carGetById(req.params.id);
  // Return the appropriate result
  // Longer if-else form...
  /*
  if (o) {
    res.json(o);
  }
  else {
    res.status(404).json({ "message": "Resource not found" });
  }
  */
  // Terse form...
  o ? res.json(o) : res.status(404).json({ "message": "Resource not found" });
});

// Add new
app.post("/api/cars", (req, res) => {
  // Call the manager method
  // MUST return HTTP 201
  res.status(201).json(m.carAdd(req.body));
});

// Edit existing
app.put("/api/cars/:id", (req, res) => {
  // Make sure that the URL parameter matches the body value
  // This code is customized for the expected shape of the body object
  if (req.params.id != req.body.id) {
    res.status(404).json({ "message": "Resource not found" });
  }
  else {
    // Call the manager method
    let o = m.carEdit(req.body);
    // Return the appropriate result
    o ? res.json(o) : res.status(404).json({ "message": "Resource not found" });
  }
});

// Delete item
app.delete("/api/cars/:id", (req, res) => {
  // Call the manager method
  m.carDelete(req.params.id)
  // MUST return HTTP 204
  res.status(204).end();
});



// ################################################################################
// Tell the app to start listening for requests

app.listen(HTTP_PORT, () => { console.log("Ready to handle requests on port " + HTTP_PORT) });
