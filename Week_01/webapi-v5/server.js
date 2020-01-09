
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
// Deliver the app's home page to browser clients

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});



// ################################################################################
// Resources available in this web API

app.get("/api", (req, res) => {
  // Here are the resources that are available for users of this web API...
  // YOU MUST EDIT THIS COLLECTION
  const links = [];
  // This app's resources...
  links.push({ "rel": "collection", "href": "/api/items", "methods": "GET,POST" });
  // Example resources...
  links.push({ "rel": "collection", "href": "/api/customers", "methods": "GET,POST" });
  links.push({ "rel": "collection", "href": "/api/employees", "methods": "GET,POST" });
  const linkObject = { 
    "links": links, 
    "apiVersion": "1.0", 
    "apiName": "Web API example version 5" 
  };
  res.json(linkObject);
});



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
// Resource not found (this should be at the end)

app.use((req, res) => {
  res.status(404).send("Resource not found");
});



// ################################################################################
// Tell the app to start listening for requests

app.listen(HTTP_PORT, () => { console.log("Ready to handle requests on port " + HTTP_PORT) });
