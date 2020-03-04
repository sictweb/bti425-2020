---
title: Document reference how-to
layout: default
---

## Data associations or relations...<br>Document reference how-to

This document enables the reader to begin learning how to design and implement *document references* as a data organization scheme in a MongoDB database. 

Before continuting, ensure that you have read, analyzed, and understood the content in the [data associations or relations introduction document](data-assoc-intro).


<br>

### Data organization and design 

For this example, assume the following: 
* One entity is a "company" that sells products 
* The other entity is a "product" sold by a company

One *company* will sell zero or more *products*. From the perspective of a *company* item, it has a *to-many* association or relation with *product* items. 

One *product* is sold by only one specific *company*. From the perspective of a *product* item, it has a *to-one* association or relation with a *company* item. 

<br>

### Database work

Obviously, a MongoDB database is needed. For testing purposes, we will assume that your computer already has a *folder* to hold databases (maybe named `db-local`). 

Start the database engine, and then start the Compass tool.

In an existing database, or a new database (maybe named `testing`), create two (empty) collections, probably named:
* companies
* products

(more to come)

<br>

### Generating and loading sample data

etc.

<br>

### Web API work

etc.

<br>
