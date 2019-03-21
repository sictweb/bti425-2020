---
title: Mongoose tasks
layout: default
---

## Mongoose tasks

This document has information about doing query-related tasks with Mongoose. It supplements the documentation, and provides sample code that can be used in your web APIs. 

Documentation:  
[Queries](https://mongoosejs.com/docs/queries.html)  
[Constructing Documents](https://mongoosejs.com/docs/models.html#constructing-documents)  

<br>

### Get (find...) 

Here are the typical "get" functions.

<br>

#### Get all - result is a collection of zero or more

The easiest "find". Given a model named "Person":

```js
Person.find().exec((error, items) => { // etc.
```

If there's a problem, the "error" variable will hold descriptive info. 

If "items" is returned, it will be a collection of zero or more items.

You can order the results; for example:
```js
Person.find()
  .sort({ lastName: 'asc', firstName: 'asc' })
  .exec((error, items) => { // etc.
```

<br>

#### Get some filtered - result is a collection of zero or more

Start with the previous query strategy. Add a JavaScript object to the `.find()` function; for example: 

```js
Person.find({ city: 'Toronto' })
  .exec((error, items) => { // etc.
```

You can also add more properties to the object.

Mongoose has operators and syntax for handling conditions like "greater than" or "starts with". More guidance will be posted soon. 

As above, you can order the results. 

<br>

#### Get one by its unique database identifier - result is error, null, or one

The database identifier - the 24 hex character string - is guaranteed to be unique within a collection. Therefore, use `findById()`:

```js
Person.findById(itemId, (error, item) => { // etc.
```

Similar to above, if there's a problem, the "error" variable will hold descriptive info. 

If "item" is returned, it will be null (which is usually a problem) or the matching object.

<br>

#### Get one by some other unique value - result is (error?) or one

( more to come )

<br>

#### Get the first one that matches a condition - result is (error?) or one

( more to come )

<br>
