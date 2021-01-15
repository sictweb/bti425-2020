---
title: React get started
layout: default
---

## Getting started with React

The next part of our learning journey will depend almost completely on the excellent content that the React development team has published. 

Get ready by visiting the [React home page](https://reactjs.org/), and read/scan the content.

On the top navigation menu, notice the [Docs](https://reactjs.org/docs/installation.html) (documentation) and [Tutorial](https://reactjs.org/tutorial/tutorial.html) items. 

![React web site](/bti425-2020/media/react-docs-topics-install.png)

![React web site](/bti425-2020/media/react-docs-topics-main.png)

<br>

### Installation

As described in the getting-started documentation, a React app can be created on demand, using an online app generator. As a result, it really isn't necessary to install the framework on your computer. 

<br>

### Create an app

[The React documentation](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) shows how to generate a new React app named "hello": 

```bash
npx create-react-app hello
```

This dev tool will create a new folder, with the code needed to get started.

The `create-react-app` dev tool has [its own documentation web site](https://create-react-app.dev/docs/getting-started), which has content that will be useful during our course work with React. 

> Note:  
> When using the A2534 Mac mini computers:  
> Use this command (without "`npx`") to create a new React app:  
> `create-react-app hello`

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

And, try coding them yourself. The easiest way is to edit `src/index.js`. 

The course code example repository has working solutions for each of these. All except the first one is an app, which means that you will have to re-install the app's packages before you start/run the app:

```bash
npm i
```

<br>

#### Topic highlights - 1. Hello World

In this section, and in the following sections, we highlight some of the information and experiences:

The `ReactDOM.render` function renders an element in a container. 

#### Topic highlights - 2. Introducing JSX

JSX is a syntax extension to JavaScript. Created by the React team.  
JSX produces React elements. Typical syntax is:  
`const element = <h1>Hello, {name}</h1>`  
The right side of this statement can be static HTML, or it can include expressions (as shown above). The expression can be a variable name or function call.  
Attribute values can come from an expression; do not combine its curly braces with quotes.  
Can use an empty element (i.e. without a closing tag).  
Can also define an element with nested children.  

#### Topic highlights - 3. Rendering Elements

React apps typically have one "root" element, defined in the app's `index.html` source code.  
We render our React elements in this "root":  
`ReactDOM.render(<p>Hello, world!</p>, document.getElementById('root'));`  
A React element can be one of the standard HTML elements, or it could be a component (covered in the next section).  
React elements are immutable once created. (We learn soon how to handle updates and re-rendering).  
In the DOM, React updates only the affected content. The entire viewport is NOT re-rendered.  

#### Topic highlights - 4. Components and Props

As a React beginner, components are the MOST IMPORTANT IDEA that you must learn.  
There are two types of components:  
1. Function component  
2. Class component  

Function components must return a React element (and that's typically all they do).  
Class components have additional features: 
* Can maintain their own state 
* Must include a single `render()` method (along with other code if necessary), which *returns* a React element
* Can include a `constructor()` method to initialize state and your event handlers 
* Can include "lifecycle" methods that are automatically called during the lifecycle of the component 
* Can include any other members (e.g. variables, functions that do things, functions that are event-handlers, etc.)  

Component names MUST begin with an upper-case letter.  
A component can have data passed into it as initial values. This is known as "props" (i.e. properties).  
`props` is an object. Can be simple, can be complex.  
Props are read-only. If an incoming value must change, then copy a `props` value to a variable (or some other state container).  
A component can include other component(s) in their output.  

#### Topic highlights - 4. State and Lifecycle

Must write a *class component* to get access to state and lifecycle features.  
Can convert a *function component* to a *class component*.  
Inside a class component, must now refer to "props" as `this.props`.  
We now have access to another mutable storage area, `this.state`.  
Can define state keys-and-values in a constructor function.  
Elsewhere, can access a state value by its key.  
Can also update a state value with the `setState()` function.  
The most-used lifecycle method is `componentDidMount()`.  
State is local, and is not passed to child components.  
If that behaviour is needed, pass state as props.  

#### Topic highlights - 6. Handling Events 

We do not use `addEventListener` to DOM elements.  
React events (in elements) use [camelCase](https://en.wikipedia.org/wiki/Camel_case) names.  
For example, `<button onclick=` becomes `<button onClick=`.  
The value of the event (i.e. the handler) is a function, and NOT a string.  
For example, `<button onclick="login()">` becomes `<button onClick={login}>`.  
In the constructor, bind the event handler function.  
Can pass one or more parameters to the function. If passing the event as a parameter, use a specific syntax.  

#### Topic highlights - 7. Conditional Rendering

Use `if` or `? :` or `&&` to render elements based on state or logic.  
If an element's logic returns `null`, then it will not render.  

#### Topic highlights - 8. Lists and Keys

Use the JavaScript `map()` function to create a collection (array) of repeating elements.  
Great for lists, tables, and select-option form controls.  
If you must identify or use each repeating element, use keys to give the elements a stable identity.  
If your data source has a stable identifier, then use that as the value for the key.  
Otherwise, and if the repeating element collection (array) is immutable, you can use the array's index as a key. (Not really recommended.)  
See [the code](https://reactjs.org/docs/lists-and-keys.html#extracting-components-with-keys) for the right way to use keys.  

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
