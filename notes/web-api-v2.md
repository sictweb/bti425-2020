---
title: Web API create, v2
layout: default
---

## Web API design, create, deploy, and test, version 2

The theme of this document is to design and create a simple web service that *uses a database* to persist the app's data.

We will also deploy the web service to a public-facing host. We will continue to use the *Heroku* app hosting service, and the *MongoDB Atlas* database hosting service that you used in the predecessor web dev course. 

<br>

### Confirm that your tooling is ready

Before writing and running the app, confirm that your computer's tooling is ready. The College systems should be ready, but you may have to do some of these tasks if you want to use your own computer. 

> Remember the cautions in the [welcome document](welcome#how-can-you-get-started):  
> We expect you to use a Unix-like system to do your work.  
> The College has hundreds of correctly-configured systems that are ready for use, so don't waste course time doing personal configuration tasks (do that on your own time).  

> If you are using the Windows Subsystem for Linux and therefore a Microsoft Store version of Linux (Ubuntu etc.), all your dev tooling will be Linux versions, and NOT Windows versions.

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

> Another reminder:  
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

And, confirm that it has a sandbox with one cluster in it. Later (but soon), we will create a new database. 

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

~ ~ ~ ~ ~ 

Now we're ready to do this week's tasks. They will be done incrementally. Start at the beginning, as later tasks will build on earlier tasks. 

<br>

### Task phase 1 - one-entity local database

In this task phase 1, we will:
* use the locally-installed MongoDB engine
* generate data with Mockaroo
* import the data into MongoDB
* add database-related code to the app
* run the database engine
* run the app, and interact with it using Postman

Ensure that your tooling is ready, and that your hosted service accounts are ready. 

Create a folder (directory) to hold the database.

> Suggestion:  
> Create the folder as a peer to your app's folder.  
> Maybe named `coursedbweek2`. 

Attempt to start and run the database engine. Open a new Terminal window to do this, because you will need your other/existing Terminal window to run more commands. 

```bash
mongod --dbpath ./coursedbweek2
```

This task should result in many console messages, and one of the later or final messages will tell you that it's ready; something like this:

```
2019-01-13T10:45:49.380-0500 I NETWORK  [initandlisten] waiting for connections on port 27017
```

<br>

#### MongoDB import

Generate some data, using the Mockaroo service. If you are happy with the data you generated (and downloaded) last week, you can use the same configuration, EXCEPT that you do NOT need an "id" field. (The database engine assigns an object identifier, and its field name is "_id".) 

Then, move or copy the downloaded data to the same folder that holds your app's project folder and the database folder. 

Run this command while in the same folder as your generated data file. 

```bash
mongoimport --db coursedbweek2 --collection person --file mockdataweek2.json --jsonArray
```

If successful, it will respond with something like this:

```text
2019-01-13T11:06:27.389-0500	connected to: localhost
2019-01-13T11:06:27.460-0500	imported 200 documents
```

You can use the MongoDB shell or the Robo 3T tool to query the database. The following are shell commands after running `mongo`.

Confirm that your database is on the list of known databases:  

```
> show dbs
```

Use or set the context to your database:

```
> use coursedbweek2
```

What collections are in this database?

```
> show collections
```

Run a query (assuming "person" is one of the collections in the database):

```
> db.person.find()
```

For now, you can exit the shell (`Ctrl+C`) and shut down the database engine (also `Ctrl+C`). 

<br>

#### Add database-related code to the app

For this task, do not use the apps that were created last week. Instead... 

Create a new project (`npm init` etc.).

Install Express.js and Mongoose into the project. 

The project will have three (3) JavaScript source code files: 
* `server.js` - the app's entry point 
* `manager.js` - data service tasks (get, add, etc.) 
* `schemas.js` - Mongoose "schema" code, to define the shape of the entities 

> Remember...  
> Create and configure an `index.html` source code file, so that the app has a nice home/landing page. 

Open the code example before continuing. Your professor will explain the code in class. 

So far, it can handle requests for two resources:
1. All persons 
2. One specific person, using its (MongoDB) identifier

<br>

#### Start the database engine

Almost ready... Start the database engine, so that it is listening, and ready to handle calls from the app:

```bash
mongod --dbpath ./coursedbweek2
```

<br>

#### Run the app, and interact with it using Postman

Now we're ready... Start the app. Then, interact with it using Postman.

When you are satisfied, shut down the app, and shut down the database engine. 

<br>

### Task phase 2 - deploy phase 1 to a public host

In this task phase 2, there are several sub-tasks:
1. Move the database content to MongoDB Atlas
2. Update the app, with the connection string info
3. Prepare a new Heroku app
4. Deploy to Heroku
5. Test with Postman

> The authors were delayed by a server configuration issue, and are unable to demonstrate this feature at this time.  
> The issue has been resolved, and the how-to content will be restored to this section of the notes very soon. 

<br>

#### Move the database content to MongoDB Atlas

The [notes from the previous course](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/week8-class1/) can be used to help complete this task. 

In the Atlas console, on the Clusters panel, open the Security settings panel, which will show you a list of database users. We will be using a database user, in the "atlasAdmin" role, when we do the move (mongorestore) task soon. Make sure you note one of the users, and have its credentials. Optionally, you can create a new database user (maybe named "dbRestore") that can be used exclusively for this task. 

> Tip - The Atlas console can suggest a password for a database user.  
> Yes, that would be a good idea.  

Next, we will prepare the data. While we could do an "import" task similar to what we did above (from the Mockaroo-generated JSON to MongoDB), we will not do that. Instead, we will do a "backup and restore" task. 

MongoDB has a `mongodump` command that will "dump" the contents of an existing database, into a format that can be "restored" to a different server. Exactly what we want here. 

Briefly [read/scan the docs](https://docs.mongodb.com/manual/reference/program/mongodump/) before continuing. Then, use the command:
1. Make sure the local MongoDB database engine is running
2. In another Terminal window, navigate to the location where you want the exported data folder
3. Run the command, for example...  
`mongodump --db coursedbweek2`

As you have learned (from the docs), the command creates a folder named "dump". Inside, there is a sub-folder with the database name, and inside that, the exported BSON and JSON file(s). 

After the "dump", you can shut down your local database server engine. 

Return to the Atlas console. Select (open) your cluster. Then, select the Collections settings panel. We will create a new database. If you wish, you can use the same name as the one in your local database (something like coursedbweek2). You must specify or create a collection; as the previous course notes guided you, it can be named "tbd", and it can be deleted later (after the restore task). 

After the new database has been created, select it in the Atlas console. Select the Command Line Tools settings panel. We need the "mongorestore" command text. Copy that, and paste it into an editor or a new TextEdit document/window (because we must edit it before we run the command). 

Replace `<PASSWORD>` with an appopriate database user password. 

Add two more options to the command text: 

```text
--db <NAME-OF-THE-DESTINATION-DATABASE>
<NAME-OF-THE-LOCAL-FOLDER-THAT-HOLDS-THE-BSON-FILE(S)>
```

In a Terminal window, navigate to the folder that holds the sub-folder of BSON and JSON files (which is probably "dump"). 

Then, copy the command text, and paste it into a Terminal window. Execute the command. If successful, it will tell you that it restored a number of records to the destination. 

To verify, refresh the Atlas console, and select the database. It should now show the new collection. Select the collection, and it should show the records. 

<br>

#### Update the app, with the connection string info

Still in the Atlas console, select the Command Line Tools settings panel again. We need a connection string. 

Click on the "Connect Instructions" button, and then "Connect Your Application". Choose either a "Short SRV..." or a "Standard..." connection string. Copy the result. 

Paste it into your web service project, into the `server.js` source code file, near the existing connection string statement. 

Save the existing connection string statement, and then configure the new connection string. Two edits MUST be done:
1. Your database user's password must be provided
2. The `test` database name must be changed to match the actual target database on the MongoDB Atlas service 

Run your local app (again). If it is working, the app will load successfully, and you will be able to interact with it, using Postman. 

<br>

#### Prepare a new Heroku app, deploy, and test

In this subtask, we will send the now-working local project to Heroku, so that it can be publicly accessible. 

Using the previous course's [Heroku how-to guidance/notes](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/getting-started-with-heroku/), create a new app. 

Deploy the project to the new Heroku app. Finally, test with Postman. 

<br>

### Task phase 3 - local database with related entities

<mark>&nbsp;This section is still being edited, and its content will be posted when complete.&nbsp;</mark>

Preview: 
* Use Mockaroo to create a collection with a "nested" property that is itself a collection of objects
* MongoDB import
* Create the server app (copy then edit the above app)
* Test with Postman

<br>

### Task phase 4 - deploy phase 3 to a public host

This task will be very similar to the previous task phase 2. 

> Similar to above, the how-to content will be restored to this section after the server configuration issue is resolved. 

<br>

### Task phase 5 - client HTML5 apps, interacting with the web service

In this final task, we will write HTML5 client apps that interact with the web service. 

More content will be posted before the computer-lab (second class session of the week). The plan is to cover these kinds of client apps:
* JavaScript, using XmlHttpRequest
* JavaScript, using the new Fetch API
* jQuery assisted

<br>
