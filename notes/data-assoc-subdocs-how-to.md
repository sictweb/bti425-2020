---
title: Subdocuments how-to
layout: default
---

## Data associations or relations...<br>*subdocuments* how-to

This document enables the reader to begin learning how to design and implement *subdocuments* (aka embedded documents) as a data organization scheme in a MongoDB database. 

Before continuting, ensure that you have read, analyzed, and understood the content in the [data associations or relations introduction document](data-assoc-intro).

<br>

### Data organization and design 

For this example, assume the following: 
* The entity is a "business" 
* The "business" is organized into "departments" (e.g. finance, production, sales, etc.)
* The "department" documents are *embedded* in the "business" object as a collection of subdocuments

This makes sense because the "department" objects cannot really or logically exist outside the context of the hosting "business" object. 

Another way to think about a subdocument is that it is just a multi-property object. Depending on the problem to be solved, the hosting document can declare that it needs a subdocument as a single object, or as an array of objects. 

In the MongoDB database, an example of a "business" document, with a collection of three "department" subdocuments, looks like this in the MongoDB Compass tool:

![Subdocuments](/bti425/media/data-subdocs-in-mongodb-compass.png)

A web API will fetch the document (and its embedded subdocuments) and return the following JSON:

```json
{
  "_id": "5e66ab46febfae0f6598775d",
  "name": "Adams-Barton",
  "companyType": "n/a",
  "slogan": "whiteboard bricks-and-clicks networks",
  "city": "Tacoma",
  "country": "United States",
  "departments": [
    {
      "_id": "5e66ad69fc13ae38c2000004",
      "name": "Engineering",
      "leader": "Lianna Richmond",
      "headCount": 36
    },
    {
      "_id": "5e66ad69fc13ae38c2000005",
      "name": "Marketing",
      "leader": "Micheline Tye",
      "headCount": 15
    },
    {
      "_id": "5e66ad69fc13ae38c2000006",
      "name": "Sales",
      "leader": "Royce Pack",
      "headCount": 48
    }
  ],
  "__v": 2
}
```

<br>

### Database work

Obviously, a MongoDB database is needed. For testing purposes, we will assume that your computer already has a *folder* (maybe named `db-local`) to hold databases. 

Start the database engine, and then start the Compass tool.

In an existing database, or in a new database (maybe named `testing`), create an (empty) collection, probably named "businesses".

Next, we'll generate and load data into the collection.

<br>

### Generating and loading sample data

For this how-to document, we will use the [Mockaroo service](https://mockaroo.com/) to generate data. You may need a Mockaroo account and be signed in to complete some of these tasks. 

The following is a four step procedure:

1. Design the basic Mockaroo schema
1. Add on the schema fields for the embedded subdocuments
1. Generate some data
1. Import the generated data into the database

Here are the details:

#### 1. Design the basic Mockaroo schema

Define some fields to hold some data about a business. (Do NOT define an `_id` field here.) 

#### 2. Add on the schema fields for the embedded subdocuments

Mockaroo enables us to define fields for *nested* (as they call them) fields. Here's what we must do:
1. Define a field of type JSON Array 
2. Define fields that will be inside the array

When you define a field of type JSON Array, its name must be appropriate for the situation. In our situation, inside of a "business" object, we want a collection of "departments", so we'll name this field "departments". 

Then, we define the fields that will be inside the array by using a "dot notation". For example:
* `departments._id`  
Type is MongoDB ObjectId
* `departments.name`  
Type is Department (Corporate)
* etc.

Notice the suggested configuration values for the "departments" and "departments.headCount" fields. 

Here's what the schema will probably look like. Right-click and open it in a new tab/window to view it full size. 

<img style="max-width: 600px;" class="border1 img-responsive" alt="Mockaroo schema" title="Mockaroo schema" src="/media/data-mockaroo-schema-subdocs.png" />

#### 3. Generate some data

Generate a reasonable number of rows. Save.

#### 4. Import the generated data into the database

Use the Compass tool, and navigate to the "businesses" collection that was created above in the [Database work](#database-work) section.

Import the data generated in step 3 above, and test. 

<br>

### Web API work

For this how-to document, we will write a DEN (database, Express.js, Node.js) web API. 

> Note that this was implemented in a recent code example,  
> webapi-data-assoc-embed-doc  

The following is a five step procedure:

1. Create the web API or use a template
1. Write a "department" Mongoose schema
1. Write a "business" Mongoose schema
1. At a minimum, write "get" methods for "business"
1. Write a "post" method

Then, to show that we can add another subdocument to the "departments" collection: 

6. Write a "put" method to add another "department" to a specific "business" 

Here are the details:

#### 1. Create the app or use a template

Create a new Node.js and Express.js app from scratch, and add all the bits needed to create a simple working web API that uses a database. 

Alternatively, use a template or code example (e.g. `webapiv7`) to do the same. 

#### 2. Write a "department" Mongoose schema

In a new source code file (maybe named `msc-department.js`), write a Mongoose schema that describes a "department". For example, the code below describes the data generated by Mockaroo:

```js
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema
var departmentSchema = new Schema({
  name: String,
  leader: String,
  headCount: Number
});

// Make schema available to the application
module.exports = departmentSchema;
```

#### 3. Write a "business" Mongoose schema

In a new source code file (maybe named `msc-business.js`), write a Mongoose schema that describes a "business". For example, the code below describes the data generated by Mockaroo: 

Notice the Mongoose syntax for the embedded subdocument collection.  

```js
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Associated or related schema(s)
var Department = require('./msc-department');

// Entity schema
var businessSchema = new Schema({
  name: String,
  companyType: String,
  slogan: String,
  city: String,
  country: String,
  departments: [Department]
});

// Make schema available to the application
module.exports = businessSchema;
```

In `manager.js`, add statements (in various places) that will enable you to use this schema:

```js
// Use the schema
const businessSchema = require('./msc-business');

// Declare the model variable
let Business;

// Initialize the model 
Business = db.model("businesses", businessSchema, "businesses");
```

#### 4. At a minimum, write "get" methods for "business"

Following the well-known pattern, add "get all" and "get one" (by identifier) methods, in both `server.js` and `manager.js`.  

Test with Postman. 

#### 5. Write a "post" method

Now, we must write a "post" method that will enable a new "business" to be added. Following the well-known pattern, write "add new" methods, in both `server.js` and `manager.js`. 

How do we add a NEW "business" document that includes one (or more) embeded "department" subdocument(s)? Well, the question answers itself - when you write the JSON for the main document, *include an array of one (or more) subdocuments*. For example: 

```json
{
  "name": "Seneca College",
  "companyType": "Postsecondary education",
  "slogan": "our graduates are the best",
  "city": "Toronto",
  "country": "Canada",
  "departments": [
    {
      "name": "Academic Programs",
      "leader": "Laurel Schollen",
      "headCount": 1800
    }
  ]
}
```

#### 6. Write a "put" method to add another "department" to a specific "business" 

In this scenario, assume that there is an existing "business" document, with one or more embedded "department" subdocuments. Now, you want to add another "department" to the collection of subdocuments. 

Is this a pure "add new" or "post" task? No. 

The hint is in the scenario - we want to modify an *existing "business" document*. As a result, it will be an "edit existing" task, so the `server.js` Express.js method will be `put()`. 

The data that we are sending *must* include the identifier for the existing "business" document, which can be part of the route/URL. And, we must send the "business" document that is to be added in the request body. 

In `server.js`, the route listener function will look something like the following. Notice that we will call the `manager.js` method with two arguments: 

```js
app.put("/api/businesses/:id/add-department", (req, res) => {
  // Call the manager method
  // Send BOTH the identifier, AND the body
  m.businessAddDepartmentEdit(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});
```

The "business" document in the body must match the schema, and will look something like this: 

```json
{
  "name": "Academic Programs",
  "leader": "Laurel Schollen",
  "headCount": 1800
}
```

The `businessAddDepartmentEdit()` method in `manager.js` must do a few things:
1. It must attempt to locate the existing "business" document
2. If successful, add the new "department" subdocument and save
3. Otherwise throw (return) an error

If we use our somewhat standard coding pattern in `manager.js`, this task's code becomes ugly and complicated, and lengthy to explain. Your professors are instead suggesting that this task can be done using the relatively new `async await` feature in JavaScript. The method's code will look something like the following:

```js
// Notice the function accepts two arguments
businessAddDepartmentEdit: async function (itemId, newItem) {

  // Attempt to locate the existing document
  let business = await Business.findById(itemId);

  if (business) {
    // Add the new subdocument and save
    business.departments.push(newItem);
    await business.save();
    return business;
  }
  else {
    // Uh oh, "throw" an error
    throw "Not found";
  }
},
```

Nice.

<br>

Happy coding!

<br>
