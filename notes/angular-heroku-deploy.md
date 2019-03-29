---
title: Deploy Angular app to Heroku
layout: default
---

## Deploy Angular app to Heroku

During development, your Angular app is "served" from an instance-based on-demand web server, to one of your browsers. 

Now, we will learn how to package the Angular app so that it can be deployed to a new Heroku app, and therefore available on the public web (so that you can get to it from your computer or smartphone).

> Good news - the process is similar to the one you learned for a React app. 

<br>

### Build the app

The Angular CLI enables us to build an app. Navigate into the app/project folder. Then:

```
ng build --prod
```

It will create a folder named `dist`, and place several static code assets in the folder. Soon, these will be copied to a Node.js + Express.js server. 

![Angular build result](/media/angular-build-result.png)

<br>

### Node.js + Express.js server app

Create (either from new or from a template that you have) a Node.js + Express.js server app. 

It will need a `public` folder. Copy the several static code assets from the `dist` folder into this new `public` folder. 

It will need a git configuration. Run the `git init` command to do that. 

The `server.js` code can be something like the following:

```js
var express = require("express");
var app = express();
var HTTP_PORT = process.env.PORT || 8080

// Setup static content folder
app.use(express.static("public"));

// This handles a situation where the requestor sends
// a URL for a specific resource within the app
// The resource will not exist here at the server,
// because it exists only in the client device AFTER
// the Angular app is loaded
// So... handle all requests for anything other than the root
app.get('*', function (req, res) {
  console.log('Redirect was triggered');
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(HTTP_PORT, () => {
    console.log("Ready to handle requests on port " + HTTP_PORT);
});
```

Test it locally. When you're happy, do a "git commit":
```
git commit -m "Your custom commit message"
```

<br>

### Heroku hosting

[For reference, here is the guidance again](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/getting-started-with-heroku/). 

We suggest that you create a new Heroku app. 

If you do it with the Heroku command line interface - while in the app/project folder - then it will update the app/project with the name of the new Heroku app. 

Alternatively, if you do it with the Heroku web console, then you must run a command to update the app/project with the name of the new Heroku app. The command is:
```
heroku git:remote -a name-of-heroku-app
```

Finally, you can deploy to Heroku:
```
git push heroku master
```

<br>

### Diagram 

Here is a diagram of the app hosting configuration. Right-click to open it in a new tab/window and view it full size. 

<img src="/media/app-hosting-angular-v1.png" alt="" class="border1" />

<br>
