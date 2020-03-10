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

![Subdocuments](/media/data-subdocs-in-mongodb-compass.png)

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

Here's what the schema will probably look like. Right-click and open it in a new tab/window to view it full size. 

<img style="max-width: 500px;" class="border1 img-responsive" alt="Mockaroo schema" title="Mockaroo schema" src="/media/data-mockaroo-schema-subdocs.png" />

#### 3. Generate some data

Generate a reasonable number of rows. Save.

#### 4. Import the generated data into the database

Use the Compass tool, and navigate to the "businesses" collection that was created above in the [Database work](#database-work) section.

Import the data generated in step 3 above, and test. 

<br>

### Web API work

<mark>the following will be updated</mark>

For this how-to document, we will write a DEN (database, Express.js, Node.js) web API. 

The following is a five step procedure:

1. Create the web API or use a template
1. Write a "company" Mongoose schema
1. Write a "product" Mongoose schema
1. At a minimum, write "get" methods for "company" and "product"

Then, to show that associated or related data can be fetched: 

5. Modify the "get one" method for product

Here are the details:

#### 1. Create the app or use a template

Create a new Node.js and Express.js app from scratch, and add all the bits needed to create a simple working web API that uses a database. 

Alternatively, use a template or code example (e.g. `webapiv7`) to do the same. 

#### 2. Write a "company" Mongoose schema

In a new source code file (maybe named `msc-company.js`), write a Mongoose schema that describes a "company". For example, the code below describes a simple "company", but yours will likely have more fields:

```js
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema
var companySchema = new Schema({
  name: String,
  country: String,
  ceo: String
});

// Make schema available to the application
module.exports = companySchema;
```

In `manager.js`, add statements (in various places) that will enable you to use this schema:

```js
// Use the schema
const companySchema = require('./msc-company');

// Declare the model variable
let Company;

// Initialize the model 
Company = db.model("companies", companySchema, "companies");
```

#### 3. Write a "product" Mongoose schema

In a new source code file (maybe named `msc-product.js`), write a Mongoose schema that describes a "product". For example, the code below describes a simple "product", but yours will likely have more fields. 

Notice the Mongoose syntax for the document reference. The value of the `ref` property MUST match the string used for the model name in the model initializer statement (above) in `manager.js`. 

```js
// Setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Entity schema
var productSchema = new Schema({
  name: String,
  yearReleased: Number,
  // to-one with company, as a document reference 
  companyId: { type: Schema.Types.ObjectId, ref: 'companies' }
});

// Make schema available to the application
module.exports = productSchema;
```

In `manager.js`, add statements (in various places) that will enable you to use this schema:

```js
// Use the schema
const productSchema = require('./msc-product');

// Declare the model variable
let Product;

// Initialize the model 
Product = db.model("products", productSchema, "products");
```

#### 4. At a minimum, write "get" methods for "company" and "product"

Following the well-known pattern, add "get all" and "get one" methods, in both `server.js` and `manager.js`. For both entities. 

Test with Postman. 

#### 5. Modify the "get one" method for "product"

In step 4 above, you wrote a standard "get one" method for product. Notice that it probably returned something like this:

```json
{
  "_id": "5e5e967dfebfae0f659875c1",
  "name": "ASPERGILLUS FUMIGATUS",
  "yearReleased": 1994,
  "companyId": "5e5e66effc13ae3c5f000031"
}
```

Instead of the MongoDB object identifier value of the `companyId` property, we want the *full and complete "product" object*. 

We use the Mongoose `populate()` method ([doc link here](https://mongoosejs.com/docs/populate.html)). Its simplest usage or syntax accepts an arguement that's a field name string:

```js
// Find one specific document
Product.findById(itemId)
  .populate('companyId')
  .exec((error, item) => {
  if (error) {
    // Find/match is not found
    return reject(error.message);
  }
  // Check for an item
  if (item) {
    // Found, one object will be returned
    return resolve(item);
  } else {
    return reject('Not found');
  }
}
```

Notice that it probably returned something like this:

```json
{
  "_id": "5e5e967dfebfae0f659875c1",
  "name": "ASPERGILLUS FUMIGATUS",
  "yearReleased": 1994,
  "companyId": {
    "_id": "5e5e66effc13ae3c5f000031",
    "name": "Mylan Institutional Inc.",
    "country": "China",
    "ceo": "Florina Liddall"
  }
}
```

Nice.

<br>

Happy coding!

<br>
