---
title: Assignment 2 more
layout: default
---

## BTI425 Assignment 2 - more / future content

It's possible that the following content may end up in the Assignment 2 specs.

<br>

### MongoDB Atlas work

In the console, select the cluster to work with.

The command line tools include an "import" command:

Original:  
```text
mongoimport --host PeterBTI425Winter2019-shard-0/peterbti425winter2019-shard-00-00-ikjae.mongodb.net:27017,peterbti425winter2019-shard-00-01-ikjae.mongodb.net:27017,peterbti425winter2019-shard-00-02-ikjae.mongodb.net:27017 --ssl --username dbAdmin --password <PASSWORD> --authenticationDatabase admin --db <DATABASE> --collection <COLLECTION> --type <FILETYPE> --file <FILENAME>
```

<br>

### Tasks in sequence

Get data from the Week 8 folder.  

Make sure that you can work with it in an Angular app (or in JavaScript).  

Import both "students" and "courses" to your MongoDB Atlas database (as new collections).  

Make sure that you can view the data (the documents in the collections) with any of these viewers:  
* the browser-based cloud console/dashboard app that's focused on your cluster 
* MongoDB Compass app 
* MongoDB shell (i.e. the "mongo" command in terminal)  

Make a new web API, or prepare to add on to your Assignment 1 web API.  

Add functionality to your web API that will deliver from the new "students" and "courses" database collections:
* Get all (and sorted)
* Get all CPA
* Get all BSD
* Get one by its MongoDB identifier

> We have recently added a new document:  
> [Mongoose tasks](mongoose-tasks)

Deploy the updated web API to Heroku.

Test all this in Postman BEFORE you do any Angular app work. 

Create an Angular app. If you wish, you can copy-paste the "angular-validation-intro" code example from the repo and change its name, title, and so on. 

Create these components (and add them to the routing feature): 
* Student list
* Student detail
* Available courses list  

Modify the data model manager service. Add methods that will fetch the data needed by these new components.

Modify each component. Your goal is to get the right data to display in each.
