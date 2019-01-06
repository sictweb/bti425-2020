---
title: Web API create, v1
layout: default
---

## Web API design, create, deploy, and test, version 1

The theme of this document is to design and create a simple web service. 

The web service will deliver data to requestors. The data will be materialized in the app (i.e. as JavaScript objects). A future "version 2" web service will use a database. 

<br>

### Confirm that your tooling is ready

Before writing and running the app, confirm that your computer's tooling is ready. The College systems should be ready, but you may have to do some of these tasks if you want to use your own computer. 

> Remember the cautions in the [welcome document](welcome#how-can-you-get-started):  
> We expect you to use a Unix-like system to do your work.  
> The College has hundreds of correctly-configured systems that are ready for use, so don't waste course time doing personal configuration tasks (do that on your own time).  

<br>

#### If your system does not yet have the Node.js app dev ecosystem

Install Node.js (which also installs npm). Verify its status:

```bash
node --version
npm --version
```

<br>

#### If your system does not have the developer tools

1. Install git
2. Install GitHub Desktop
3. Install more browsers (assume that Safari is already there; add Chrome, Firefox, and Opera)
4. Install Visual Studio Code (aka VS Code)

<br>

#### Configure VS Code

Do this only if it was just installed: Configure "`code .`" functionality [as described here](https://code.visualstudio.com/docs/setup/mac).

<br>

### Create a project to hold the web service

Using Terminal, navigate to the file system location that will hold the project. Create a new folder to hold the project. 

Navigate into that folder. Create an empty `server.js` file. Create an empty `index.html` file. 

Now, initialize the folder as a Node.js app:

```bash
npm init
```

Make sure you specify `server.js` as its entry point. Add your name as the author name, and add a description if you wish. The other settings can stay at the suggested default values. 

Now, edit the project.

```bash
code .
```

Open the `server.js` file for editing. Make it do something. For example:

```js
console.log('Hello, world!');
```

Back in Terminal, run the app:

```bash
node server.js
```

It should respond with the console message, and then terminate. 

<br>

### Write a simple web server 

Again, follow much of the technique used in BTI325 Week 9. 

Our goal is to create an app that will handle these requests:
* Get all
* Get one
* Add new
* Edit existing
* Delete item

This goal will work for a web service that handles ANY kind of data. Obviously, a more complex data model will have more request handlers, but they all share the same core design, and handle these five - or variants of these five - requests. 

The core getting-started code looks something like the following. It assumes it is working with a "user" object that has a first name and a last name (as string data). 

```js
// Setup
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Deliver the app's home page to browser clients
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

// Get all
app.get("/api/items", (req, res) => {
    res.json({message: "fetch all items"});
});

// Get one
app.get("/api/items/:itemId", (req, res) => {
    res.json({message: "get user with Id: " + req.params.itemId});
});

// Add new
app.post("/api/items", (req, res) => {
     res.json({message: "add a user item: " + req.body.firstName + " " + req.body.lastName});
});

// Edit existing
app.put("/api/items/:itemId", (req, res) => {
    res.json({message: "update user with Id: " + req.params.itemId + " to " + req.body.firstName + " " + req.body.lastName});
});

// Delete item
app.delete("/api/items/:itemId", (req, res) => {
     res.json({message: "delete user with Id: " + req.params.itemId});
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send("Resource not found");
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
    console.log("Ready to handle requests on port " + HTTP_PORT);
});
```

<br>

#### Edit `server.js` 

Edit `server.js` so that it holds the code shown above. 

<br>

#### Make sure Express.js is installed into the project

If you haven't done this yet, add Express.js:

```bash
npm install express
```

<br>

#### Make a simple home page (HTML)

Edit `index.html`. Use the `html:5` Emmet snippet to help with this task. 

<br>

#### Run the app

In Terminal, run the app.

Open a browser, and navigate to the root (home page). 

Open Postman, and interact with the resources that begin with `/api/`. 

<br>

### Add some data (simple arrays)

You obviously noticed that the server's functions were not really handling any data. The requests and responses were simple strings. We'll change that now, and use real data.

We have to do two tasks:
1. Add some data
2. Edit the functions

<br>

#### Add simple string data

Let's add a super-simple array of strings, for example the names of colours. At the bottom of the `server.js` file, create a variable to hold the data, something like this:

```js
// Array of strings
var colours = [ 'Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia' ];
```

Change the "get all" function, and this time return the data.

What about the other functions? Yes, they need some work. 

If we assume that `itemId` is the array element or index, then we can code a "get one". For example, the function body looks like the following:

```js
// Extract the item identifier
let itemId = req.params.itemId;
// Make sure it's valid 
if (itemId > colours.length) {
  res.status(404).send("Resource not found");
} else {
  res.json(colours[req.params.itemId]);
}
```

Next, if we assume that we pass in a simple JSON object with one key-value pair (and the key name is "colourName"), then we can code an "add new". For example, the function body looks like the following:

```js
// Extract the incoming data
let newItem = req.body.colourName;
// Add another item to the array
colours.push(newItem);
// Return the result
res.json({message: "added " + newItem + " as itemID " + colours.length});
```

<br>

### Add some data (objects)

We will leave this as an in-class hands-on task (in our computer-lab session). 

<br>
