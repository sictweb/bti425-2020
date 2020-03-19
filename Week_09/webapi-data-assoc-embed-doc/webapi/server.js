
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
  links.push({ "rel": "collection", "href": "/api/businesses", "methods": "GET" });
  const linkObject = { 
    "apiName": "webapi-data-assoc-embed-doc",
    "apiDescription": "Web API with associated embedded or subdocument data",
    "apiVersion": "1.0", 
    "apiAuthor": "Peter McIntyre",
    "links": links
  };
  res.json(linkObject);
});



// ################################################################################
// Request handlers for data entities (listeners)

// Get all
app.get('/api/businesses', (req, res) => {
  // Call the manager
  m.businessGetAll()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ 'message': error });
    })
});

// Get one
app.get("/api/businesses/:id", (req, res) => {
  // Call the manager method
  m.businessGetById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new
// This will need a "business" document with one or more embedded "department" document(s)
// You MUST send a properly-constructed "business" document
app.post("/api/businesses", (req, res) => {
  // Call the manager method
  m.businessAdd(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Update existing - add a new "department"
// This will need a document that looks like this...
// { name: 'Engineering', leader: 'Gardiner De Roos', headCount: 36 }
app.put("/api/businesses/:id/add-department", (req, res) => {
  // Call the manager method
  m.businessAddDepartmentEdit(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Other "update existing" functions will look similar to the one above
// The "delete item" function will be similar to those in other code examples



// ################################################################################
// Resource not found (this should be at the end)

app.use((req, res) => {
  res.status(404).send("Resource not found");
});



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
