---
title: Assignment 2
layout: default
---

## BTI425 Assignment 2

> This document is being edited.  
> This notice will be removed when the edits are complete.

The purpose or objective of the assignment is to get some experience with React. 

Read/skim all of this document before you begin work.

<br>

### Due Date

Sunday, February 18, 2018, at 6:00pm ET

Grade value: 10% of your final course grade

*If you wish to submit the assignment before the due date and time, you can do that.*

<br>

### Introduction to the problem to be solved

We need a React app that will display data from the Teams API. The app will have multiple components, and support routing. When finished, the initial or landing-page view of the app will look similar to the following:

![Initial view](media/a2-view-overview.png)

<br> 

### Specifications overview and work plan

Here's a brief list of specifications that you must implement:

* Follow best practices, guidance, and recommendations
* Continues to work with your Teams API, using an HTTP request add-in named "axios" 
* Has four data-oriented component views, Overview, Projects, Teams, and Employees 
* Has other structural views (nav header, sidebar, main container, not found)
* Viewing a data-oriented component is implemented by routing
* Display-only, we will not be updating or modifying the data

More details are provided below, in the section titled **"Doing the work"**.

During the Thursday classes/sessions, your professor will help you *get started* and *make progress* on the assignment. 

<br>

### Getting started

Open a terminal window, and navigate to a suitable file system location. We will use the `create-react-app` program to create the folder and its generated code:

```
create-react-app assignment2
```

After it completes, verify that it runs, by using the `npm start` command; it should show the "Welcome to React" view. You can close it, and shut down (Control+C) the process in your terminal window. 

Prepare the rest of your dev environment:
* Code editor
* Browser developer tools (at a minimum, you'll probably be using the element inspector, and the JavaScript console)

<br>

#### Add links to Bootstrap CSS and plugins

Edit `public/index.html`:
1. Add the Bootstrap CSS library link element (CDN version) to the `<head>` element
2. Add the jQuery and Bootstrap JavaScript script elements to the end of the `<body>` element

<br>

#### Add new packages

This app will send requests to your Teams API. React has no built-in way to compose HTTP requests. The React designers leave that to us as programmers. We could use the native `XmlHttpRequest` object, the newer `fetch` API, or any of several libraries. For this assignment, let's use a well-known library named [axios](https://github.com/axios/axios). Using a terminal window (and located in the `assignment2` folder), add axios:

```
npm install --save axios
```

Some of the data in the Teams API is date-and-time oriented. Let's continue to use the [Moment.js](https://momentjs.com) library. In Assignment 1, we referred to it using a content delivery network (CDN). In this assignment, let's add the code:

```
npm install --save moment
```

Finally, we will be creating multiple components, and replacing a large area/rectangle on the view with content from the different components. This will be done with resource URLs, and a feature called routing. The base React library does not include routing; the React designers leave that to us as programmers. We will use the well-known [React Router](https://reacttraining.com/react-router/) library. Add the code:

```
npm install --save react-router-dom
```

<br>

#### Get some "starter" source code files

To help you get started with the appearance of the "Overview" view, we have created some "starter" source code files. On the GitHub code repository, in the `Templates_and_solutions` folder, locate the `a2-source` folder. Inside, there are two source code files. 

The contents of `App.js` will *replace* the generated code in App.cs. 

Similarly, the contents of `index.css` will *replace* the generated code in index.css. 

After you save your work and restart the app (in your terminal window), the initial view will look similar to the following:

![View, step 1](media/a2-overview-step1.png)

<br>

### Doing the work

This is a three-part procedure:
1. Create simple *component* versions for each view 
2. Update each component to fetch data from the Teams API
3. Implement routing 

We will do this work in three distinct parts, to ensure that you can make progress all during the lifetime of the assignment. It will enable you to build and test/run, and then continue to build on the results. 

<br>

#### Create simple components

Above, you learned that the app needs four data-oriented views (for Overview, Projects, Teams, Employees). 

[In the notes](https://sictweb.github.io/bti425/notes/react-app-design-basics), you learned that a component has a consistent and predictable code structure, as shown here:

```jsx
import React, { Component } from 'react';
// import whatever else you like here

// Declare your Component here
class SomeComponent extends Component{
  render(){
    return <div>Hello World</div>;
  }
}

// export the component by name
export default SomeComponent; 
```

Create the "Overview" component first:
* The first source code file will be named `Overview.js`
* Copy the code above, and paste it into the source code file
* Replace the "SomeComponent" name/symbol with `Overview`

Look again at the image example above. You can see that the "overview" view is a container for three other views (projects, teams, employees). Each of these views will display a small amount of data. In our app, we want to use [Bootstrap panels](https://getbootstrap.com/docs/3.3/components/#panels) because they look nice. So, let's assume that each of those is a "panel". 

Therefore, for *each* of the other three views named above, create a new source code file for the component, using the naming format ProjectsPanel, TeamsPanel, and EmployeesPanel. 

Finally, we need some "structural" views, as learned above. Using the technique above, create components with these names:
* NavBar (the top black-background strip)
* SideBar (for left-side links)
* MainContainer (the all-enclosing container for all visible views)
* NotFound (which will be a special version of MainContainer to hold content for a route that does not actually exist)

Before continuing, run (i.e. `npm start`) the app, to ensure that your work is correct. Look at the JavaScript console to ensure that there are no errors. When that happens, shut down the process, so we can continue.

<br>

**General strategy**

For the next while, we'll cut (take) code from `App.js` and paste it into the appropriate component. Before moving on to data-fetching, we'll ensure that your app can render multiple components. 

<br>

**NavBar component**

Take the `<nav>` element code from `App.js`, and paste it in the render function in the NavBar component, replacing the existing "hello world" `<div>` element. 

> Suggestion: Back in `App.js`, add a comment to remind you that you cut out some code. 

<br>

**SideBar component**

Take the sidebar `<div>` element code from `App.js`, and paste it in the render function in the SideBar component (replacing, as above...). 

Next, we're going to add some code that will highlight the "active" view. (We are preparing for a future task.) First, the Bootstrap `active` class is used to highlight (or change the appearance) of a currently-active or selected item. For example, here is the first `<li>` element from the sidebar, before and after the `active` class is added:

```html
<!-- Before adding the 'active' class... -->
<li><a href="/projects">Projects</a></li>
<!-- After adding... -->
<li class="active"><a href="/projects">Projects</a></li>
```

We are not yet done, because we do not actually want to hard-code these `<li>` items with the class. Instead, we want to programmatically determine which is active. How? By passing some data to the sidebar component, something that will indicate whether it should be active. (Again, we are preparing for a future task.) 

Therefore, change the hard-coded class with a React expression. For example, here is the first `<li>` element from the sidebar, coded as an expression:

```jsx
// As a conditional expression...
// The value of the 'highlight' property will be passed in...
<li className={(this.props.highlight === 'Projects' ? 'active' : '')}><a href="/projects">Projects</a></li>
```

<br>

**MainContainer component**

As noted above, this component is the all-enclosing container for all visible views. It has the navbar and sidebar components. In the remaining rectangle, it will render - depending on user interaction - one of the other views (overview, projects panel, teams panel, or employees panel). 

Top-to-bottom, the markup will be organized like this:
* `<NavBar>` element (which will resolve to the NavBar component)
* `<div>` "container" element 

Inside the "container" element, we will have the sidebar component, and then the component for the user-selected view. 

Now that you know its organization, do some coding. Using the code in `App.js` to give you hints, write the code. Here's an example of what it may look like:

![MainContainer code](media/a2-maincontainer-code-v1.png)

<br>

( more to come )

<br>

**ProjectsPanel component**

TBA

<br>

**TeamsPanel component**

TBA

<br>

**EmployeesPanel component**

TBA

<br>

**Overview component**

TBA

<br>

#### Add data-fetching to each component

TBA

<br>

**(subsections)**

TBA

<br>

#### Implement the results

TBA

<br>

**(subsections)**

TBA

<br>

### Testing your work

For this assignment, there is no external testing capability that can be used. 

Therefore, rely on your browser tools for this step. Soon, your professor will help you learn how to use the debugger.

<br>

### Reminder about academic honesty

You must comply with the College’s academic honesty policy.

Although you may interact and collaborate with others, you must submit your own work.

<br> 

### Submitting your work

Here’s how to submit your work, before the due date and time:

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. 

4. Compress/zip the copied folder. The zip file SHOULD be less than 1MB in size. If it isn’t, you haven’t followed the instructions properly.

5. Login to My.Seneca. Open the course area. Click the “Assignments” link on the left-side navigator. Follow the link for this assignment. Submit/upload your zip file. The page will accept three submissions, so if you upload, then decide to fix something and upload again, you can do so.

<br>
