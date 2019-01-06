---
title: Web API create, v1
layout: default
---

## Web API design, create, deploy, and test, version 1

The theme of this document is to design and create a simple web service. 

The web service will deliver data to requestors. The data will be materialized in the app (i.e. as JavaScript objects). A future "version 2" web service will use a database. 

<br>

### Confirm that your tooling is ready

Before writing and running the app, confirm that your computer's tooling is ready. The College systems should be ready, but you may have to do some of these tasks if you want to use your own computer. 

> Remember the cautions in the [welcome document](welcome#how-can-you-get-started):  
> We expect you to use a Unix-like system to do your work.  
> The College has hundreds of correctly-configured systems that are ready for use, so don't waste course time doing personal configuration tasks (do that on your own time).  

<br>

#### If your system does not yet have the Node.js app dev ecosystem

Install Node.js (which also installs npm). Verify its status:

```bash
node --version
npm --version
```

#### If your system does not have the developer tools

1. Install git
2. Install GitHub Desktop
3. Install more browsers (assume that Safari is already there; add Chrome, Firefox, and Opera)
4. Install Visual Studio Code (aka VS Code)

#### Configure VS Code

Do this only if it was just installed: Configure "`code .`" functionality [as described here](https://code.visualstudio.com/docs/setup/mac).

<br>

### Getting started

To get started, configure your development environment, as described below. 

Using Terminal, navigate to the file system location that will hold the project. Create a new folder to hold the project. 

Navigate into that folder. Create an empty `server.js' file. 

Now, initialize it as a Node.js app:

```bash
npm init
```

Make sure you specify `server.js` as its entry point. Add your name as the author name, and add a description if you wish. The other settings can stay at the suggested default values. 

Now, edit the project.

```bash
code .
```

Open the `server.js` file for editing. Make it do something. For example:

```js
console.log('Hello, world!');
```

Back in Terminal, run the app:

```bash
node server.js
```

It should respond with the console message, and then terminate. 

<br>

Make a server, test it  

Generate some data 
* array of strings
* array of objects
* generated single-entity collection
* generated related entity collections



<br>
