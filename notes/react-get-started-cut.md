Content cut out in January 2019  
(we will do this later)  

### "Build" the app

Now that we've scratched the surface of React and worked with some of it's core functionality, why don't we actually "build" the application.  So far, we've been learning and practicing our React skills in a controlled, "development" environment.  Once we're happy with the end result however, we can actually "build" the application, which will generate a much smaller footprint (bundled, minified JavaScript / CSS, etc). 

If you take a look at the generated `package.json` file, you will see that the `"scripts"` property contains our initial `"start"` script (ie: **npm start**), as well as a number of *other* scripts that we can invoke.  The one we're most interested in here, is the `"build"` script (ie: **npm run build**).  Once executed, this script initiates a "build" process that creates a highly optomized "production" build of our code in a new folder called "build".

Try executing this command by following the below steps:

* Stop the "development server" currently running using **ctrl + c**
* Execute the command **"npm run build"**

Once this process is complete, open the newly created "build" folder.  You will see that there's only a handful of files now, most notably, an "**index.html**" file and a "**static**" folder containing 2 sub-folders: "**js**" and "**css**" which contain your bundled JavaScript &amp; CSS files respectfully. If you take a look at index.html (after temporairly formatting it in Visual Studio Code), you will see that it's a small skeleton that references your .js file.

Now, all we need to run this in a "production" environment, is a static web server.  Fortunately for us, we know exactly how to create one using Node.js and Express.

Recall [from WEB322](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/week4-class1/), a **server.js** file using the following code:

```javascript
var express = require("express");
var app = express();
var HTTP_PORT = process.env.PORT || 8080

app.use(express.static("public"));

app.listen(HTTP_PORT, ()=>{
    console.log("listening on port: " + HTTP_PORT);
});
```

will treat a local "public" directory as a "static" directory!  All we have to do is create a new web server using the above code, and place **all** of our React.js production code from the "build" directory, into our new server's "public" directory. 

Once this is complete, we can run our new Express server.js file (`node server.js`) in the browser to see our production React.js code (we can even push this to Heroku).

Remember: the server is only serving up static files to **build** the application on the client-side.

<br>
