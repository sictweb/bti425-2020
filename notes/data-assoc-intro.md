---
title: Data associations or relations introduction
layout: default
---

## Data associations or relations introduction

This document discusses some introductory data assocations or relations topics. 

<br>

### Associated or related data 

Let's talk more about associated or related data. Almost always, an entity collection will be somehow associated or related to another entity collection. The kinds of associations or relationships can include the following: 
* One to many (probably the best-known and best-understood)
* One to one
* Many to many
* Self-referenceing one-to-many
* Self-referencing one-to-one 

Over time, we'll discuss these, but to get started, we'll probably end up using *one to many* associations or relationships. 

<br>

### Embedded documents 

In a Week 8 class/session, you learned about *embedded documents* as one way to compose a MongoDB-stored document that has an embedded "sub-document". For example, a "student" document has a collection of (course history) "credit" sub-documents. 

This *embedded documents* organization scheme is discussed in the MongoDB documentation article:  
[Model One-to-Many Relationships with Embedded Documents](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/)

Use this design for the following scenarios or preferences: 
* The query strategy will often or always want to fetch a document with all of its associated or related data 
* The data in the sub-documents is typically stable and unchanging (almost archival in nature)
* The amount of data in the sub-documents is relatively or contextually not too large 

<br>

### Document references

If your scenario is different, an alternative (and perhaps more familiar to those with relational database management system experience) organization scheme is *document references*:  
[Model One-to-Many Relationships with Document References](https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/)

Use this design for the following scenarios or preferences: 
* Data repetition would be a bad idea (too much or whatever)
* Data is for use in a frequently-updated transactional manner 
* There is a flexible and unpredictable query strategy, where it is likely that each entity in the association or relation may be separately queried for whatever purpose 

For the following discussion, assume that we're designing the structure of two associated or related entities. Into which entity do we add the reference? Here's some getting-started guidance (but your scenario may result in adjusted guidance):
* The growth of the data in the association or relation determines where to store the reference
  * We're referring to general growth, or rate of growth
* One of the entity collections in the association or relationship will typically naturally have many more items (by a large factor) than the other entity collection 
* Therefore, store the reference in the entity collection with the most items 

For example, assume that each smartphone "maker" (e.g. Apple) will have a large number of smartphone "models" available for sale (e.g. iPhone Xs, iPhone Xr, iPhone 8, iPhone 7). In that situation, in the "model" entity, add a reference to the "maker". 

<br>

### Query strategy

For documents with embedded (sub-)documents, simply query (get) the items that match whatever criteria you have (all, some, specific by identifier). You'll get back all the associated or related data. 

For the other scenario, there are ways of looking at querying. Let's continue to use the "maker" and "model" example above. 

Assume that you want to query all, some, or one "maker". Simply get what you want from the "maker" collection, without considering any other collections. Easy. 

Next, assume that you want to query for all, some, or one "model". Similar to above, get what you want from the "models" collection. 

Next, assume that you want to query for all, some, or one "model" from a specific "maker". In your query statement, you will have two search criteria:
1. The "maker" identifier (and you must have that beforehand) 
2. If desired, the "models" matching criteria that meets your need (e.g. screen size larger than 4.0 inches) 

Finally, a variation on the previous query, assume that you want the "maker" data *included* in the result, when querying the "models" collection. Well, the query must include a command that will *de-reference* the associated or related "maker" for each "models" item returned. We'll see that in the code example. 

<br>
