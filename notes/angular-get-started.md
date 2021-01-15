---
title: Angular getting started
layout: default
---

## Getting started with Angular

The next part of our learning journey will depend on the excellent content that the Angular development team has published. 

Get ready by visiting the [Angular home page](https://angular.io/), and read/scan the following content:
* Landing page
* FEATURES page
* The DOCS landing page
* A few screenfuls of the GETTING STARTED page

![Angular web site](/bti425-2020/media/angular-web-site.png)

<br>

### Installation (setup)

As described in the SETUP notes, the [Angular CLI](https://cli.angular.io/) package is used to create projects, generate code, and enable development. It adds the `ng` command to your shell. 

Install Angular CLI on your computer with this command:

```text
npm install -g @angular/cli
```

The [Angular CLI documentation](https://angular.io/cli) explains how to do many tasks, including: 
* [Create a new](https://angular.io/cli/new) Angular project (app)
* Generate the code files for a [new component](https://angular.io/cli/generate) 
* [Run the app](https://angular.io/cli/serve) on localhost 

<br>

<img src="../media/angular-cli-web-site.png" class="border1" alt="Angular CLI web site" />

<br>

### Create an app

Next, create a new app. Assuming that you want to create a new app (and folder) named "my-dream-app":

```bash
# upper and lower case use for the options is important
ng new my-app-name --routing -S -g
```

The process will create a new folder, with the code needed to get started.

> Notes:  
> The `--routing` option adds the code we need for "routing", which is a topic that will be covered soon. Adding routing now (when the new project is created) is a *best practice*.  
> The `-S` option avoids adding "testing" code. We don't need that in the near future.  
> The `-g` option does not create a Git repository for the project. We don't need a repo in the near future.

<br>

### Run the app

Similar to a React app, an Angular app is a client-side front-end app. It does NOT have a server part to it. A browser user "pulls" an Angular app, by visiting a URL that is the "root" of the app. As you will learn later, the build, packaging, and deployment process creates a bundle of files that are sent to the browser when the root of the app is requested for the first time. 

That being said, during development on your computer, will start an on-demand per-instance Node.js server, and listen on the app's URL. Then, from a browser, the app is pulled to the browser's memory, and is ready for use. 

Therefore, start the server listener:

```bash
cd my-app-name
ng serve --open
```

> Note: The `--open` option opens a browser tab and loads the app. 

The server begins listening on HTTP port 4200. 

![Server is running](../media/angular-server-process.png)

<br>

A browser tab/window should open, loading the resource [localhost port 4200 URL](http://localhost:4200/). 

<br>

### Edit the app

Edit the app, using Visual Studio Code.

An easy edit, just to prove that you can do so, is to edit the `app.component.ts` file in the `src/app` folder. Change the text in the value of the "title" property. 

After you save your changes, switch over to the browser window. It should show the new content. Behind the scenes, the Terminal process will regenerate the content, making changes where necessary to the deployment assets. As part of the process, the browser will refresh the visible content.

![Server is running](../media/angular-getting-started-edit-result.png)

<br>

### Understanding app startup

The following image shows how a new generated Angular app starts up. It shows the code and markup connections.

<img class="border1" src="../media/angular-app-startup-code.png" alt="Angular app startup code">

<br>

### Work through some documentation topics

Return to the [GETTING STARTED](https://angular.io/guide/quickstart) documentation topic. 

In the instructions above, we have taken you through the first few screenfuls. Now it's time to read/scan the remaining content on this page, starting with [Step 4](https://angular.io/guide/quickstart#first-component).

Take your time. While you are doing this, inspect the source code in your editor.

Here are some of the highlights that you should be looking for:
* The code for your app lives in the `src` folder
* The "ng new" generator creates a `src/app` folder, with code assets for the "app" component
* Later (but soon), we will use the Angular CLI to create another component in the `src` folder
* There are a number of files and folders that perform specific tasks for the app, and/or help you as the programmer

![New app folder structure](../media/angular-cli-project-structure.png)

<br>

### What's next?

There are some documents that can help you understand more about the Angular way to build an app.

The official [Angular tutorial](https://angular.io/tutorial) is a recommended skim/read, and you may or may not want to code along with it. 

> We recommend that you develop locally on your own computer (and not do the live online process). 

The other is from the Visual Studio Code documentation set, titled [Using Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial). It's a reasonably short document. One of its very useful topics is the how-to for debugging Angular in VS Code. 

Happy coding!

<br>
