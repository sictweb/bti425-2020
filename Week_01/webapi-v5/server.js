
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

// Array of strings
var colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];



// ################################################################################
// Request handlers for data entities (listeners)

// Get all
app.get("/api/items", (req, res) => {
  // Return the array contents
  res.json(colours);
});

// Get one
// THIS ROUTE EXPECTS A STRING COLOUR NAME
// It could be rewritten to use an array index value
app.get("/api/items/:id", (req, res) => {
  // Look for the supplied identifier, case-insensitive
  let index = colours.findIndex(i => i.toLocaleLowerCase() == req.params.id.toLocaleLowerCase());
  // Return as appropriate
  index > -1 ? res.json(colours[index]) : res.status(404).json({ "message": "Resource not found" });
});

// Add new
// This route expects a JSON object in the body, e.g. { "colourName": "Brown" }
app.post("/api/items", (req, res) => {
  // Add to the array
  let index = colours.push(req.body.colourName) - 1;
  // MUST return HTTP 201
  res.status(201).json(colours[index]);
});

// Edit existing
// THIS ROUTE EXPECTS AN ARRAY INDEX VALUE (INTEGER)
// This route expects a JSON object in the body, e.g. { "colourName": "Brown" }
app.put("/api/items/:id", (req, res) => {
  // Attempt to find the element
  if (req.params.id > colours.length - 1) {
    res.status(404).json({ "message": "Resource not found" });
  }
  else {
    colours[req.params.id] = req.body.colourName;
    res.json(colours[req.params.id]);
  }
});

// Delete item
// THIS ROUTE EXPECTS AN ARRAY INDEX VALUE (INTEGER)
app.delete("/api/items/:id", (req, res) => {
  // Attempt to find the element
  if (req.params.id > colours.length - 1) {
    res.status(404).json({ "message": "Resource not found" });
  }
  else {
    colours.splice(req.params.id, 1);
    // MUST return HTTP 204
    res.status(204).end();
  }
});



// ################################################################################
// Tell the app to start listening for requests

app.listen(HTTP_PORT, () => { console.log("Ready to handle requests on port " + HTTP_PORT) });
