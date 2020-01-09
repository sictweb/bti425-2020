## Week 2 code examples

Remember to run this command while in the directory/folder that has the `package.json` file:

```
npm i
```

<br>

### Introduction

This week, we have another example *web API* app. This one uses a database, and work with the same "cars" collection of objects that you worked with last week as a JavaScript array. 

<br>

### Web API version 7

Uses a database; YOU must have a database server running somewhere (localhost or hosted).  
The expected database name is "week2", and it must have a collection named "cars" that has a schema that matches the `msc-car.js` definition.  
Also continuing from last week's code examples:  
Methods that support get all, get one, add new, edit existing, and delete item.  
This app uses a data model manager (<code>manager.js</code>) to handle data service tasks.  

<br>

### Client requestor in a Node.js app 

Implements the Fetch API in the a Node.js app, using the `node-fetch` package.  
It expects that you have a local web API running.  

<br>

### Client requestor in the browser 

Implements the Fetch API in the browser's JavaScript engine.  
It works with a hosted web API that the professor created.  
There may be a delay in fetching data from the web API, as the host isn't always running.  

<br>
