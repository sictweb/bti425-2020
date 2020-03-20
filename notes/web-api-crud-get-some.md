---
title: Web API CRUD - get some
layout: default
---

## Web API CRUD - "get some" technique

This document describes how to design and code a "get some" feature in a web API that uses a MongoDB database. 

<br>

### Typical CRUD

The typical create, read, update, and delete tasks (aka CRUD) are well-understood and present in the web API [code example](https://github.com/sictweb/bti425/tree/master/Week_02/webapi-v7). 

Beyond these standard tasks, we have learned how to handle additional scenarios. A popular scenario is to enable a search. 

<br>

### Search, or "get some" design considerations

We all understand the "get one" technique, where we query for a single document, using its guaranteed unique identifier. We gather the identifier, and typically use a `findById()` method.

One of the first questions we have about searching for documents by some other field is whether we are expecting zero, one, or more than one to be returned.

It is possible to define a Mongoose schema field to hold a unique value. For example, consider this field definition for a (Canadian) social insurance number:
```js
sin: { type: String, unique: true, default: '000-000-000' },
```

In this situation, we can use the `findOne()` method, which will return one matching document, or `null` if no match. 

If we are not working with a guaranteed unique value, then we must expect zero or more matches, packaged in an array. That's why we typically call this technique "get some" (or "get some" filtered). 

In this situation, we can use the `find()` method, pass in an object that defines the search technique, and it will return an array of zero or more documents. If we're looking for an *exact* match, the search term is easy to define:
```js
// Assume that "text" is the local variable name
// that holds the text that we must match exactly
let results = await Model.find({ fieldName: text });
```

However, typical use is more complex. Often, we are looking for matching text anywhere in a field. Or in more than one field. And, case-insensitive. And, because we're coding a web API, we're usually getting the search text (from the caller/user) as part of the URL (in a segment and/or query string parameter). 

<br>

### Search for text anywhere in a field

This section attempts to address the complexities from the previous section. Let's start with getting the search text. 

We're coding a web API. Therefore, our `server.js` code will have an Express.js method that handles a route. We recommend `.get()` methods. However, when the caller sends a GET request, the only way to send data is in the URL, either as a segment, or as a query string parameter. 

One of the *requirements* that the caller/user implements is that the sent data *must* be [percent encoded](https://en.wikipedia.org/wiki/Percent-encoding) (aka URL or URI encoding). We all have seen percent encoded strings. For example a space character, in a URL, becomes %20. There are several other common "reserved" characters, which end up getting encoded:
```
Plain text:    Hello, world!
Encoded text:  Hello%2C%20world%21
```

How does the caller/user implement this? Well, hopefully it's obvious that just before sending the request to the web API, the data to be sent is *encoded* using the JavaScript [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) function. 

Therefore, in our web API `manager.js` method, we will [decode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) the data, before we search in the database. 

Another consideration is searching anywhere in a field, and not as an exact match. MongoDB offers a [regular expression operator](https://docs.mongodb.com/manual/reference/operator/query/regex/) that can help with this. It also will make the search case-insensitive. For example, here is a method that will search for a company name in the [webapi-data-assoc-doc-ref](https://github.com/sictweb/bti425/tree/master/Week_09/webapi-data-assoc-doc-ref) code example:

```js
companyGetByName: async function (text) {

  // URL decode the incoming value
  text = decodeURIComponent(text);

  // Attempt to find in the "name" field, case-insensitive
  let results = await Company.find({ name: { $regex: text, $options: "i" } });
  // This will find zero or more
  return results;
},
```

The only thing that we haven't coded here is how to search for content in more than one field. One approach is this: 
* For each field to search in...
  * Search, and get the results in an array
* When done, combine all arrays into one array 
* Return that

<br>

Happy coding!

<br>
