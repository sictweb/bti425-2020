---
title: React components
layout: default
---

## Build the user interface with React components 

One of the themes of this course is to make decent-looking web content. We use (at least initially) the Bootstrap CSS rules to guide us when composing views. 

This document discusses two ways to structure or organize components in a view, 1) sequentially-presented, and 2) contained (or nested or embedded). In future apps (React or Angular), you will be using both ways. 

<br>

### Sequentially-presented components

As you read this section, open and study the `react-app-layout` code example. 

This app shows how to declare/define and then organize a number of separate components, in a top-down manner on a simple page. 

Its layout starts with the simple and unadorned `div` element in the `public/index.html` source code file. Then, in `src/App.js` (where the App component is defined), it renders a `div` element, which contains a number of other React and HTML elements, in sequence:
1. Header
2. Navbar
3. `p` element
4. Content component
5. More content components (etc.)
6. `footer` element

The "Navbar" is a well-understood navigation menu. We will use that as a base for the next topic, routing. 

> For this app, you will notice that the components use the "[function component](https://reactjs.org/docs/components-and-props.html#function-and-class-components)" declaration style, and goes one step further by using the modern JavaScript "arrow function" style.  
> And, you will notice that all components are declared/defined in the `src/App.js` source code file, and not in separate files.  
> This approach works for this simple non-interactive illustrative example. However, your future apps will likely use "[class components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)" declaration style, because they will need more state and functionality. 

> When studying (and rebuilding) the code example, if something needs to be understood or explained, consult the [Bootstrap documentation](https://getbootstrap.com/docs/3.4/css/), and/or ask your professor. 

<br>

### Contained components

As you read this section, open and study the `react-tania-updated` code example. 

This app is an updated version of last week's Tania Rascia code example. It has a more clearly-defined and obvious component structure, using containment (aka nesting or embedding).

Its layout starts with the simple and unadorned `div` element in the `public/index.html` source code file. When compared to the previous example, you can see that it's surrounded by a small amount of layout elements. 

Then, in `src/App.js` (where the App component is defined), it renders a `div` element, which contains a small number of other React and HTML elements, in sequence:
1. Form
2. Table
3. Api

The Form and Table components are configured to receive and used passed-in data. 

#### Containment 

As you study the code example, you will notice how some components are inside other components. This is most clearly seen in the `src/Api.js` source code file. Its `render()` method returns an `ApiTable` React element (component). 

Then, the `src/ApiTable.js` source code file's `render()` method returns an HTML Table that contains two React elements (components). Going one step further, the `TableBody` element itself contains `TableRow` elements. 

We have prepared a diagram that shows this containment structure. Click to view the diagram full-size in a new tab/window: 

<a href="/media/react-tania-containment.png" target="_blank"><img src="/media/react-tania-containment.png" alt="" style="max-width: 20em" /></a>

<br>

#### Form component

Notice the Boostrap classes, which provide consistent layout and styling for HTML Form elements. 

This component enables the user to add new "characters" to an in-memory array (that is maintained in the `App` component's state). 

<br>

#### Table component

This component displays all the "characters" that have been added to the in-memory array. 

It uses a now-common approach to rendering table rows in a React component, by using the array `map()` function to create a new array of React elements from the source "characters" data array. 

<br>

#### Api component

This component calls the professor's web service, and renders the results in another table. 

It is a busy component, with an interesting and useful containment strategy. As noted above, the `Api` component renders `ApiTable`. The `src/ApiTable.js` source code file's `render()` method returns an HTML Table that contains two React elements (components). Going one step further, the `TableBody` element itself contains `TableRow` elements. 

Use the diagram to help you trace and understand the containment. 

<br>
