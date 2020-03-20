---
title: Web API - commands
layout: default
---

## Web API - command technique

This document describes how to design and code a "command" feature in a web API that uses a MongoDB database. 

Most of our database interaction has been query-oriented, where we one of create, read, update, or delete. 

At other times, we might want to do a combination of query-oriented tasks, and/or run a "do this" task, or something that doesn't fit neatly into a query. For these situations, we code the web API method pair (`server.js` and `manager.js`) as a "command". 

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

> Sometimes, a command just "does something" and it isn't necessary to return a value. In that situation, HTTP 204 and no entity body can be returned. 

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

(more to come)

<br>

#### Subdocument task

(more to come)

<br>
