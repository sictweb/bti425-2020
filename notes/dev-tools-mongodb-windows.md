---
title: Dev tools - MongoDB on Windows
layout: default
---

## Dev tools - MongoDB on Windows

This document has content about installing and using the MongoDB engine on Windows 10. 

This information was most recently updated in January 2020.

<br>

### Overview

The "Community Edition" of the MongoDB server (engine) can be installed on Windows 10. Open this MongoDB documentation page:

[Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

The rest of this document has suggestions or recommendations on how to complete the installation task, and how to use the engine in your web dev work. 

<br>

### Suggestion - Do NOT configure as a Windows service

During the installation (step 3 in the MongoDB docs), you can choose to configure the engine as a Windows service. 

Do NOT configure it as a service.

Instead, we will start and stop the engine when needed. That way it does not consume resources (memory, storage, processor) on your computer when you're doing other work. 

<br>

#### Run the engine from the CLI

In [this part](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#run-mdb-edition-from-the-command-interpreter) of the MongoDB docs, it explains how to start the engine. 

In the course's dev tools document, it suggests that you create a folder `c:\dev` to hold the apps that you will be writing. 

Similarly, we suggest that you create a folder `c:\db` to hold your locally-installed databases that will be used by the MongoDB database server engine. Inside that folder, you will (likely) be creating separate databases for each of your apps (e.g. `db-company`). 

The MongoDB docs then explain how to start the engine, with a command that looks something like this:

```
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\db\db-company"
```

That's a long command. The next section explains how to make this a bit easier. 

<br>

#### Edit the PATH environment variable 

Our goal is to be able to run a command (from the Windows CLI) that looks like this (assuming that our current directory is `c:\db`):

```
mongo --dbpath=db-company
```

Much better than the long command above. Here's how to make this happen. 

On the keyboard, tap the Windows key.  

Type "`env`". Click/tap the item named "Edit environment variables for your account". 

In the top "User variables..." area, choose "Path", then Edit. 

Add this as a new item:  
```
C:\Program Files\MongoDB\Server\4.2\bin
```

Save and exit. 

#### Start the engine, etc. 

Now, open a Windows command line. 

Navigate to the `c:\db` directory. 

Start the engine with a command that looks something like this:

```
mongo --dbpath=db-company
```

If you open another Windows command line, you can run the MongoDB shell (with the "`mongo`") command, and interact with the engine. 

Alternatively, you can use the MongoDB Compass GUI app to do the same.

<br>
