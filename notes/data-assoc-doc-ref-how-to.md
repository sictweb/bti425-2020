---
title: Document reference how-to
layout: default
---

## Data associations or relations...<br>*Document reference* how-to

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

Obviously, a MongoDB database is needed. For testing purposes, we will assume that your computer already has a *folder* (maybe named `db-local`) to hold databases. 

Start the database engine, and then start the Compass tool.

In an existing database, or in a new database (maybe named `testing`), create two (empty) collections, probably named:
* companies
* products

Next, we'll generate and load data into these collections.

<br>

### Generating and loading sample data

For this how-to document, we will use the [Mockaroo service](https://mockaroo.com/) to generate data. You may need a Mockaroo account and be signed in to complete some of these tasks. 

The following is a xxx step procedure:
1. Generate some MongoDB identifiers
1. Create a Mockaroo "dataset"
1. Generate some "company" data
1. Import the generated "company" data into the database
1. Generate some "product" data
1. Import the generated "product" data into the database

Here are the details:

#### 1. Generate some MongoDB identifiers

For this task, we will need some MongoDB object (document) identifiers for the *companies*. 

Navigate to the Mockaroo page that enables you to create a new schema. The new schema will have only one field. The name does not matter, but the type will be "MongoDB ObjectID". Choose to generate a reasonable number of rows, maybe around 50. Choose the CSV format, and do NOT include a header or BOM. Download / save.

#### 2. Create a Mockaroo "dataset" 

Navigate to the Mockaroo "DATASETS" page. Choose to upload a new dataset, maybe named `MongoDB-ObjectIDs-Company` or whatever enables you to understand its purpose and content. The data will be from the file downloaded/saved in step 1 above. 

#### 3. Generate some "company" data

Navigate to the Mockaroo page that enables you to create a new schema. The new schema will have as many field names as needed to define a company. Choose to generate the *same* number of rows (as JSON, but not in an array wrapper) generated for the MongoDB identifiers in step 1 above. 

In addition, it *must* include:
* Field Name `_id`
* Type `Dataset Column`
* Options...  
Choose the name of the dataset from step 2 above  
Choose `sequential` 

Download / save. Notice that each row now includes a MongoDB identifier. 

#### 4. Import the generated "company" data <br>into the MongoDB database collection 

Use the Compass tool, and navigate to the "companies" collection that was created above in the [Database work](#database-work) section.

Import the data generated in step 3 above, and test. 

#### 5. Generate some "product" data

Navigate to the Mockaroo page that enables you to create a new schema. The new schema will have as many field names as needed to define a product. Choose to generate *more* rows than was done for "companies". Maybe generate about 200 or 300 rows (again, as JSON, but not in an array wrapper). 

This time, do *not* include an `_id` field. 

However, it *must* include a field that holds the document reference:
* Field Name `companyId.$oid`
* Type `Dataset Column`
* Options...  
Choose the name of the dataset from step 2 above  
Choose `random` 

Download / save. Notice that each row now includes a `companyId` field with a value that is a MongoDB identifier for the `company` object/document that it is associated or related to. 

#### 6. Import the generated "product" data <br>into the MongoDB database collection 

Use the Compass tool, and navigate to the "products" collection that was created above in the [Database work](#database-work) section.

Import the data generated in step 5 above, and test. 

<br>

### Web API work

(more to come)

<br>
