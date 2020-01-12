---
title: React get started
layout: default
---

## Getting started with React

The next part of our learning journey will depend almost completely on the excellent content that the React development team has published. 

Get ready by visiting the [React home page](https://reactjs.org/), and read/scan the content.

On the top navigation menu, notice the [Docs](https://reactjs.org/docs/installation.html) (documentation) and [Tutorial](https://reactjs.org/tutorial/tutorial.html) items. 

![React web site](/media/react-docs-topics-install.png)

![React web site](/media/react-docs-topics-main.png)

<br>

### Installation

As described in the getting-started documentation, a React app can be created on demand, using an online app generator. As a result, it really isn't necessary to install the framework on your computer. 

<br>

### Create an app

[The documentation](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) shows how to generate a new React app named "hello": 

```bash
npx create-react-app hello
```

The command will create a new folder, with the code needed to get started.

<br>

### Run the app

A React app is a client-side front-end app. It does NOT have a server part to it. A browser user "pulls" a React app, by visiting a URL that is the "root" of the app. As you will learn later, the packaging and deployment process creates a bundle of files that are sent to the browser when the root of the app is requested for the first time. 

That being said, all React developers - you included now - will [start](https://docs.npmjs.com/cli/start) an on-demand per-instance [localhost](https://en.wikipedia.org/wiki/Localhost) Node.js server, and listen on the app's URL. Then, from a browser, the app is pulled *from* the localhost server, *to* the browser's memory, and is ready for use. 

Therefore, navigate to the app folder, and then start the server listener:

```bash
cd hello
npm start
```

The server begins listening on HTTP port 3000. Depending on your computer's configuration, it may automatically open a browser to the [localhost port 3000 URL](http://localhost:3000/). 

<br>

### Edit the app

Start Visual Studio Code, and open the folder that holds your project. 

An easy edit, just to prove that you can do so, is to edit the `App.js` file in the `src` folder. Add an HTML `p` element with some content. After you save your changes, switch over to the browser window. It should show the new content. 

Behind the scenes, the Terminal process will regenerate the content, making changes where necessary to the deployment assets. As part of the process, the browser will refresh the visible content.

<br>

### Work through several topics

At the top of this document we noted that the next part of our learning journey will depend almost completely on the excellent content that the React development team has published. 

In class, we will get you started with a number of topics from these docs. 

In addition, spend a few hours (before, during, and after class) to go through these topics:
* INSTALLATION
* MAIN CONCEPTS
  * Topic 1 (Hello World) through to Topic 8 (Lists and Keys)

And, try coding them yourself. 

The course code example repository has working solutions for each of these. All except the first one is an app, which means that you will have to re-install the app's packages before you start/run the app:

```bash
npm i
```

<br>

### Tania Rascia overview and walkthrough

One of the resources recommended by the React docs is an [overview and walkthrough by Tania Rascia](https://www.taniarascia.com/getting-started-with-react/). 

Go through this too. The course repo has an implementation of this document. 

<br>

### What's next?

There are three more documents that can help you understand more about the React way to build an app.

The first is the `README.md` that the React generator creates. It has a link to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). Surprisingly, there are many nuggets that give you hints about the app design and deployment process. Most will be beyond your need during this course's short treatment of React, but many of the themes will be reused when we begin working with Angular (and you never know, you may end up working with React in the future). 

Another is the official [React tutorial](https://reactjs.org/tutorial/tutorial.html). It's a recommended skim/read, and you may or may not want to code along with it.

The other is from the Visual Studio Code documentation set, titled [Using React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial). It's a reasonably short document. One of its very useful topics is the how-to for debugging React in VS Code. 

Happy coding!

<br>
