---
title: Web API - commands
layout: default
---

## Web API - command technique

This document describes how to design and code a "command" feature in a web API that uses a MongoDB database. 

Most of our database interaction has been query-oriented, where we one of create, read, update, or delete. 

At other times, we might want to do a combination of query-oriented tasks, and/or run a "do this" task, or something that doesn't fit neatly into a query. Or, do a logic or computation task at the server, which changes a value in the database. There are many other possibilities. For these situations, we code the web API method pair (`server.js` and `manager.js`) as a "command". 

> This "command" technique is not a standard.  
> However, it is a widely-used pattern.  
> When you want to learn more, look for CQRS.  

<br>

### Overall design

The command pattern has certain characteristics. In `server.js`:
* The Express.js method is `.put()` 
* Its URL may, or may not, include parameters 
* The request's entity body typically includes data that you can think of as command "options" 
* On success, it will typically return HTTP 200 and a representation that makes sense (you decide as the programmer) 

> Sometimes, a command just "does something" and it isn't necessary to return a value. In that situation, HTTP 204 and an empty entity body can be returned. 

The `manager.js` characteristics include: 
* Its code does the work desired, and uses the data sent in the entity body as command "options" 
* On success, it will typically return a representation that makes sense 

<br>

### Code example and technique

For this code example, we'll use the [webapi-data-assoc-embed-doc](https://github.com/sictweb/bti425/tree/master/Week_09/webapi-data-assoc-embed-doc) code example. 

We will do two command scenarios:
1. One will affect a specific document
1. The other will affect a specific (embedded) subdocument in a document

<br>

#### Document task 

In this task, let's assume that all we want to do is to change the value of the "slogan" field, for a specific document, to UPPER CASE. Whatever the current situation, just change it - don't query for it, change it at the requester end, and send it back - just change it at the server with a "do this" command. 

Following the characteristics above, we must send a request to the web API:
* As a PUT request
* With an specific document identifier, which we'll pass in the URL 
* And, we'll send, in the entity body, and object that matches the required shape 
* Obviously, as application/json 

The `server.js` Express.js method calls the `manager.js` method, which does this:
* Check/verify that the identifiers in the URL parameter and the entity body match 
  * This could be done either or both of `server.js` and/or `manager.js` 
* Attempt to fetch the specific document, if OK...
* Do the task (change "slogan" value to upper case)
* Return the entire document (or not, or another representation that makes sense)

For example:

```js
// Command - change the "slogan" to upper case
// This will need an identifier parameter, and an entity body that looks like this...
// { "_id": "abc123etc." }
businessSloganUpperCase: async function (itemId, newItem) {

  // Confirm that the parameter and entity body match

  // Attempt to locate the existing document
  let business = await Business.findById(itemId);

  if (business) {
    // Do the task
    business.slogan = business.slogan.toUpperCase();
    await business.save();
    // Send the entire document back to the requestor
    return business;
  }
  else {
    // Uh oh, "throw" an error
    throw "Not found";
  }
}
```

<br>

#### Subdocument task

In this task, let's assume that all we want to do is to increment the value of the "headCount" field, for a specific subdocument. Whatever the current situation, just change it - don't query for it, change it at the requester end, and send it back - just change it at the server with a "do this" command. 

Following the characteristics above, we must send a request to the web API:
* As a PUT request
* With an specific *subdocument* identifier, which we'll pass in the URL 
* And, we'll send, in the entity body, and object that matches the required shape 
* Obviously, as application/json 

The `server.js` Express.js method calls the `manager.js` method, which does this:
* Check/verify that the identifiers in the URL parameter and the entity body match 
  * This could be done either or both of `server.js` and/or `manager.js` 
* Attempt to fetch the specific subdocument, if OK...
* Do the task (increment "headCount" value)
* Return the entire document (or not, or another representation that makes sense)

Before continuing, you should learn something about the technique to find a subdocument. MongoDB (Mongoose) supports the ability to query a collection, in an attempt to find a specific *subdocument*. If successful, the result is the "parent" of the subdocument. In our code example, we are attempting to find a "department" subdocument, and the query will return a "business" document (with the embedded subdocument included). Just keep that in mind, so that you're thinking about the right data. 

In the code below, notice the `Business.findOne...` technique. We're specifying the path to the field that will be matched. 

And, notice the `business.departments.id...` technique. This is documented in the [Mongoose docs](https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument).

Here's an example of this in action:

```js
// Command - increment a department "headCount"
// This will need an identifier parameter, and an entity body that looks like this...
// { "_id": "abc123etc." }
businessDepartmentHeadcountUp: async function (itemId) {

  // Early exit, confirm that the parameter and entity body match

// Attempt to locate the existing document that has the desired department
  let business = await Business.findOne({ "departments._id": itemId });

  if (business) {
    // Attempt to locate the department
    let dep = business.departments.id(itemId);
    // Increment and save
    dep.headCount++;
    await business.save();
    // Send the entire document back to the requestor
    return business;
  }
  else {
    // Uh oh, "throw" an error
    throw "Not found";
  }
}
```

<br>

Happy coding!

<br>
