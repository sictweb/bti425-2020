---
title: React get started
layout: default
---

## Getting started with React

The next part of our learning journey will depend almost completely on the excellent content that the React development team has published. 

Get ready by visiting the [React home page](https://reactjs.org/), and read/scan the content.

On the top navigation menu, notice the [Docs](https://reactjs.org/docs/installation.html) (documentation) and [Tutorial](https://reactjs.org/tutorial/tutorial.html) items. 

![React web site](/media/react-docs-topics-install.png)

![React web site](/media/react-docs-topics-install.png)

<br>

### Installation

As described in the [Docs](https://reactjs.org/docs/installation.html) installation notes, React is installed by using the Node Package Manager. 

For best results, use the React app generator. There are two ways to use it:
1. Install it on your computer
2. Run it on demand

If you want to install it on your computer:

```text
npm install -g create-react-app
```

If you want to run it on demand:

```text
npx create-react-app <NEW-APP-NAME>

<br>

### Create an app

Next, create a new app. We will assume that you want to create a new app named "new-app-1". 

If you have installed the React app generator on your computer, run this command:

```text
create-react-app new-app-1
```

Alternatively, if you want to run it on demand, run this command:

npx create-react-app new-app1

The process will create a new folder, with the code needed to get started.

<br>

### Run the app

A React app is a client-side front-end app. It does NOT have a server part to it. A browser user "pulls" a React app, by visiting a URL that is the "root" of the app. As you will learn later, the packaging and deployment process creates a bundle of files that are sent to the browser when the root of the app is requested for the first time. 

That being said, all React developers - you included now - will [start](https://docs.npmjs.com/cli/start) an on-demand per-instance [localhost](https://en.wikipedia.org/wiki/Localhost) Node.js server, and listen on the app's URL. Then, from a browser, the app is pulled *from* the localhost server, *to* the browser's memory, and is ready for use. 

Therefore, start the server listener:

```text
npm start
```

The server begins listening on HTTP port 3000. Depending on your computer's configuration, it may automatically open a browser to the [localhost port 3000 URL](http://localhost:3000/). 

<br>

### Edit the app

Start Visual Studio Code. Open the "my-app" folder. 

Alternatively, you can use the command line. However, as you probably noticed in your Terminal window, the on-demand web server is blocking it from further interaction. So, open a new Terminal window (Cmd+T, or Shell > New Window). Then you can make "my-app" your current folder, and run the `code .` command. 

An easy edit, just to prove that you can do so, is to edit the `App.js` file in the `src` folder. Add an HTML `p` element with some content. After you save your changes, switch over to the browser window. It should show the new content. Behind the scenes, the Terminal process will regenerate the content, making changes where necessary to the deployment assets. As part of the process, the browser will refresh the visible content.

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

```text
npm i
```

<br>

### Tania Rascia overview and walkthrough

One of the resources recommended by the React docs is an [overview and walkthrough by Tania Rascia](https://www.taniarascia.com/getting-started-with-react/). 

Go through this too. The course repo has an implementation of this document. 

<br>

### What's next?

There are three more documents that can help you understand more about the React way to build an app.

The first is the `README.md` that the React generator creates. As it states near the top of that file, you can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Surprisingly, there are many nuggets that give you hints about the app design and deployment process. Most will be beyond your need during this short two-week treatment of React, but many of the themes will be reused when we begin working with Angular (and you never know, you may end up working with React in the future). 

Another is the official [React tutorial](https://reactjs.org/tutorial/tutorial.html). It's a recommended skim/read, and you may or may not want to code along with it.

The other is from the Visual Studio Code documentation set, titled [Using React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial). It's a reasonably short document. One of its very useful topics is the how-to for debugging React in VS Code. 

Happy coding!

<br>
