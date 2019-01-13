---
title: Web API create, v2
layout: default
---

## Web API design, create, deploy, and test, version 2

The theme of this document is to design and create a simple web service that uses a database to persist the app's data.

We will also deploy the web service to a public-facing host. We will continue to use the *Heroku* app hosting service, and the *MongoDB Atlas* database hosting service. 

<br>

### Confirm that your tooling is ready

Before writing and running the app, confirm that your computer's tooling is ready. The College systems should be ready, but you may have to do some of these tasks if you want to use your own computer. 

> Remember the cautions in the [welcome document](welcome#how-can-you-get-started):  
> We expect you to use a Unix-like system to do your work.  
> The College has hundreds of correctly-configured systems that are ready for use, so don't waste course time doing personal configuration tasks (do that on your own time).  

<br>

#### If your system does not yet have the MongoDB engine etc.

MongoDB is a database engine, and therefore provides persistent storage for apps. The database engine can run on your own computer for development and testing purposes, and it obviously runs in a publicly-hosted server environment. The database itself can be on your own computer, and it can be migrated or copied to the public host. 

You can run commands to learn whether MongoDB is installed:

```bash
# Is the database engine installed?
mongod --version

# Is the command shell installed?
mongo --version
```

If you need to, install the community version of MongoDB.

> Need a how-to reminder?  
> One or both of these will help:  
> [MongoDB docs](https://docs.mongodb.com/manual/administration/install-community/)   
> [Last term's web dev course notes](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/week8-class1/)

> Another note:  
> If you are using the Windows Subsystem for Linux and therefore a Microsoft Store version of Linux (Ubuntu etc.), do the installation of MongoDB in Linux, and NOT in Windows.  
> All your dev tooling will be Linux apps. 

<br>

Robo 3T is a graphical UI app that enables you as the developer to inspect and work with local (or hosted) MongoDB databases. 

If you need to, install the Robo 3T tool. 

<br>

#### Prepare to use the Mongoose package

Mongoose is an object modeling tool for MongoDB. It is added to a Node.js + Express.js app that uses MongoDB as its persistent store. It improves and enhances the way our app uses the persistent store. 

Its package can be added to an app's project folder:

```bash
npm install mongoose
```

In the app, it looks like this:

```js
// Ensure the app can use it
// (this code is typically in a 
// data model manager source code file)
const mongoose = require('mongoose');

// You must define entity schemas that describe
// the shape of the app's entities
// Then, it must connect to the database
```

<br>

#### Confirm that you can use the MongoDB Atlas service

From the [MongoDB Atlas docs](https://docs.atlas.mongodb.com/):

> "MongoDB Atlas is a fully-managed cloud database developed by the same people that build MongoDB. Atlas handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS, Azure, and GCP)."

We must use this service to get a free (no-cost) publicly-accessible endpoint for our data. (The free no-cost Heroku service does not support the hosting of databases.)

Use the same account that you used last term in the predecessor course. Alternatively, if you do not have an account, follow the [how-to instructions](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/week8-class1/).  

Confirm or ensure that you can login to your account.

<br>

#### If your system does not yet have the Heroku CLI

Heroku is a public hosting service, for Node.js apps (like our web apps and web services). It offers no-cost hosting for developers with entry-level needs, so it is ideal for students.

Heroku CLI is an app that enables developers to manage their Heroku account, and to deploy an app to the public host. It relies on git, so make sure that's installed too. 

You can run these commands to learn whether git and the Heroku CLI engine are installed:

```bash
# Is git installed?
git --version

# Is the Heroku CLI installed?
heroku --version
```
If you need to, [install git and the Heroku CLI](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/getting-started-with-heroku/). 

<br>

<mark>&nbsp;MongoDB version of an API</mark>

Tentative plan:
* FIRST phase of activity...
* local MongoDB
* understand dev env, (vs code, browser, terminal), add db engine running
* mongo import
* add a db service module
* edit/update the server app 
* shoot the web service to a hosted server (Heroku)
* shoot the database to a hosted server (MongoDB Atlas)
* test with Postman
* SECOND phase of activity...
* use mockaroo to create a related data set (must study the Teams API first to learn the connection-relation pattern)
* mongo import
* edit/update the server app
* shoot both to hosted server destinations
* test with Postman
* THIRD phase of activity...
* common set of pages to render content (all, one, etc.), each one using a set of functions stored in one js file 
* vanila JS clients, XmlHttpRequest, and the new Fetch API
* jQuery assisted
* then look a bit at the value provided by add-on libraries

Get the Azure example MEAN.js app  
It may have or show an app architecture for the server

<br>
<br>
<br>
<br>
<br>
<br>
Delete the content below  
<br>
<br>
<br>
<br>
<br>
<br>
