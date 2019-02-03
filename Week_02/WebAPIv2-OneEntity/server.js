// The initial structure is from here...
// https://bti425.ca/notes/web-api-v1#write-a-simple-web-server

// Added features...
// Mongoose and MongoDB

// Setup
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Data model and persistent store
const manager = require("./manager.js");
// This one works for localhost...
const m = manager("mongodb://localhost/coursedbweek2");
// This one works for MongoDB Atlas...
// Replace the database user name and password, and cluster name, with your own values
//const m = manager("mongodb+srv://<database-user-name>:<database-user-password>@<your-atlas-cluster-name-abcde>.mongodb.net/coursedbweek2?retryWrites=true");

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Add support for CORS
app.use(cors());

// Deliver the app's home page to browser clients
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Get all
app.get("/api/persons", (req, res) => {
  // Call the manager method
  m.personGetAll()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Get one
app.get("/api/persons/:personId", (req, res) => {
  // Call the manager method
  m.personGetById(req.params.personId)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Add new
app.post("/api/persons", (req, res) => {
  // Call the manager method
  m.personAdd(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Edit existing
app.put("/api/persons/:personId", (req, res) => {
  // Call the manager method
  m.personEdit(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Delete item
app.delete("/api/persons/:personId", (req, res) => {
  // Call the manager method
  m.personDelete(req.params.personId)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// Attempt to connect to the database, and
// tell the app to start listening for requests
m.connect().then(() => {
  app.listen(HTTP_PORT, () => { console.log("Ready to handle requests on port " + HTTP_PORT) });
})
  .catch((err) => {
    console.log("Unable to start the server:\n" + err);
    process.exit();
  });
