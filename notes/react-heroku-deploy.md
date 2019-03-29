---
title: Deploy React app to Heroku
layout: default
---

## Deploy React app to Heroku

During development, your React app is "served" from an instance-based on-demand web server, to one of your browsers. 

Now, we will learn how to package the React app so that it can be deployed to a new Heroku app, and therefore available on the public web (so that you can get to it from your computer or smartphone).

<br>

### "Build" the app

Now that we have some React experience, why don't we actually "build" the application? 

As noted above, we've been learning and practicing our React skills in a controlled, "development" environment.  Once we're happy with the end result, we can actually "build" the application, which will generate a much smaller footprint, and make it hosting-ready.

If you take a look at the generated `package.json` file, you will see that the `"scripts"` property contains our initial `"start"` script (ie: **npm start**), as well as a number of *other* scripts that we can invoke.  The one we're most interested in here, is the `"build"` script (ie: **npm run build**).  Once executed, this script initiates a "build" process that creates a highly optomized "production" build of our code in a new folder called "build".

Try executing this command by following the steps below:

* Stop the "development server" currently running using **ctrl + c**
* Execute the command **"npm run build"**

Once this process is complete, open the newly created "build" folder.  You will see that there's only a handful of files now, most notably, an "**index.html**" file and a "**static**" folder containing 2 sub-folders: "**js**" and "**css**" which contain your bundled JavaScript &amp; CSS files respectfully. If you take a look at `index.html`, you will see that it's a small skeleton that references your .js file.

Now, all we need to run this in a "production" environment, is a static web server.  Fortunately for us, we know exactly how to create one using Node.js and Express.js.

Recall [from the previous level-3 web dev course](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/week4-class1/), a **server.js** file has the following code:

```javascript
var express = require("express");
var app = express();
var HTTP_PORT = process.env.PORT || 8080

app.use(express.static("public"));

app.listen(HTTP_PORT, ()=>{
    console.log("Ready to handle requests on port " + HTTP_PORT);
});
```

will treat a local "public" directory as a "static" directory!  All we have to do is create a new web server using the above code, and place **all** of our React.js production code from the "build" directory, into our new server's "public" directory. 

Once this is complete, we can run our new Express server.js file (`node server.js`) in the browser to see our production React.js code.

Remember: the server is only serving up static files to **build** the application on the client-side.

<br>

### Heroku hosting

During this course's week 2, you had another opportunity to deploy a Node+Express app to a new Heroku app.

Now, you have another opportunity. [Follow the guidance again](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/getting-started-with-heroku/), and deploy the package you created in the previous section. 

<br>

### Diagram 

Here is a diagram of the app hosting configuration. Right-click to open it in a new tab/window and view it full size. 

<img src="/media/app-hosting-react-v1.png" alt="" class="border1" />

<br>
