---
title: React architecture
layout: default
---

## React component-based architecture

This document is intended to be a light summary of the concepts and principles of React component-based architecture. Much of it was gleaned from the topic set that you just went through in the [getting started](react-get-started) document. 

<br>

### Files and folders in a new generated React app

The `create-react-app` generator creates a folder with many code assets included.

The `node_modules` folder has code used by the development, packaging, and deployment phases of your work. 

The `public` folder has the very important "root" or start page of your app, `index.html`. Other assets can be added here that can be referenced directly by the code in the index page. 

The `src` folder has your app's initial source code. Edit and add, to build up your app. 

<br>

### Contents of `index.html`

Typical of React (and Angular) apps, the "root" or starting point of an app is or appears to be almost empty. Notice the single `<div>` in the body element.

As it states in the code comments, "The build step will place the bundled scripts into the `<body>` tag". Then, the scripts - the app itself - will replace the content of the div element with the components in the app. 

<br>

### How this all is different from your past web app work

In the first web programming course, you learned the fundamentals of the JavaScript programming language. Then, you applied to the browser document object model (DOM), while learning HTML and CSS. As part of the learning process, you created web client solutions for typical and common scenarios. 

In the second web programming course, we got a server involved. A server enabled deployment at scale for many users, and persistent storage in a database. Content for browsers was often dynamically *generated* at the server. The bottom line is that the server was still controlling the app's state and workflow, and shipping HTML (and JavaScript and CSS) to the browser clients. 

In the first part of this course, we started working with some JavaScript libraries (jQuery, Knockout) to enable client-side front-end rich app scenarios. For the most part, the role of the server didn't change too much, but we started using JavaScript to make things better. 

With React (and then Angular), we keep the JavaScript part, and knowledge of the DOM structure, but we throw away most of the other knowledge about traditional web app development.

Really? Yes.

**What's different**

A React app runs in the browser (or in a browser-like object on a device). Fully. Completely. 

Yes, the browser must fetch the app's code from a URL (typically at a server), but the server's role is minimal. It does not do any computation or code generation. It delivers the root page and the app bundle in a way similar to any other static resource that it might deliver to any user. 

The React app that runs in the browser has an often-sizeable memory footprint. The app is stateful. In other words, as the content the user sees changes and adapts, the app is managing its memory and displayed content on its own, without any server involvement. (Well, that's not exactly true; if the app needs data, it will make a call to a web service/API to do that.) 

This behaviour holds even through well-understood "navigation" actions, where the user navigates to a new URL. As you will learn, one of the React app's features is "routing", which manages resource URLs. It's important to realize, however, that the app remains in memory, and the browser repaints the window to match the user's navigation intention. There's no page reload/refresh, in the traditional server-fetched sense. 

<br>

### Notable new React concepts and topics

Again, as a summary, here are some notable new concepts and topics gleaned from the getting-started documentation set. 

A component is a source code file, `<whatever>.js`. While HTML is a *markup* container, with embedded *JavaScript code*, React components turn that around. It is centered around JavaScript code. 

A React app manages the DOM. We must abandon our previous vanilla or library-assisted JavaScript means of manipulating, traversing, and modifying the DOM, and give that task over to the app. We do that with the component architecture.

A component has a well-defined organizational structure, and includes:
* A function or a class 
* A ReactDOM.render function call that updates the DOM
* State management, if needed
* Event handling, if needed

<br>

### Thinking in React

The React development team has published a document that is obviously useful for React apps, but will also be useful to us in the near future when we begin learning Angular:

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

Have a look at it. It's just another way of getting accustomned to the "new" way of thinking about app building.

Happy coding!
