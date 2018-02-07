---
title: React app design basics
layout: default
---

## Composing a Simple Page (Using Components)

Now that we have learned all about Components in React (Stateful, Stateless, Functional, etc).  It's time that we start using this knowledge to create something that resembles a real app that uses these ideas.

To get started, create a *new app* (maybe named "comp1") using **create-react-app**.  Once this is complete follow the steps in the terminal to start the development server (ie: **npm start**).  This *should* open a new browser window to **http://localhost:3000**, but if it doesn't - proceed to open up that url now.

Notice how the create-react-app tool has created a start page for us already.  However, now that we know a little bit more about how React is used to define and manage "Components", let's disect what's happening here and create our own start page.

Inside the **src/index.js** file is where everything really kicks off.  It's known as the "JavaScript entry point" for our application and it's where we will put our highest level component (ie: `<App />`.  As you can see, this is exactly what create-react-app has done for us:

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

Here, we invoke the [ReactDom.render](https://reactjs.org/docs/react-dom.html#render) method to render our primary "App" element onto the main `<div>` element in `index.html`

You will notice however, that `<App />` isn't defined in index.js and neither is `ReactDOM`.  References to the original source is included via ["import"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statements at the top of the file.  This behaviour is defined in ES6 and it simply is the way for us to include modules from other source code files.  You can think of this as analogous to our "require" statements that we use when writing server code in Node.js.  

In our current application (index.js file), we import the modules **React**, **ReactDOM**, **App** and **registerServiceWorker**.  We can discard the **registerServiceWorker** code for now (for more infomation see: [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)).  This should leave you with the following code:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

The `import './index.css';` line in the above code simply informs the (Webpack) build process that we wish to include the ./index.css file whenever we include the ./index.js file.  

We obviously need **ReactDOM**, since we're using it to "render" our `<App />` component, however it's not immediately clear what we need the **React** module for.  It turns out, we actually need it to help us render our **JSX**, and if we try to remove it, we encounter the error: `'React' must be in scope when using JSX`.

Lastly, you will notice that we imported our **App** component as well.  Defining large components in their own files is an easy way to keep your React code organized.

Open up the "App.js" file and you will see that we require both the "React" and "{ Component }" modules from "react".  The latter is a "named" import, which allows us to reference the Component object (For more information see: [Named Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)). We also see a "export default App;" line at the bottom of the file.

If we wish to define our component in an external .js file and make it available to be imported in other files, we simply follow the pattern:

```js
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

Remember this for later, as we will (generally) be using this syntax whenever we create a new component.  There are many ways to organize your React application, however placing your components in separate files offers a lot of flexability and our code is much easier to manage.

<br>

### Organizing Our Layouts into Components

A simple way to start thinking about what components you'll need to develop your application is to simply start building out your **App** component.  As a brief exercise in what this process might look like, let's remove the boilerplate React content and start incorporating some simple Bootstrap components.

<br>

#### Incorporating Bootstrap

For simpliity, we're simply going to include all of the relavent CDN links that we've been using in the past weeks, ie:

**CSS**

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

**JavaScript**

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

* Copy the **CSS** code into the `<head>` section of your **public/index.html** file directly beneath the `<meta>` tags.
* Copy the **JavaScript** code just before the closing `</body>` tag in the **public/index.html** file.

<br>

#### Starting Fresh & Adding JSX

Now that we have the bootstrap CSS available to our "views" (rendered components), we can start adding code to our "App" component.

Start by wiping out the boilerplate JSX code from within the **return** statement of the "App" component within your "App.js" file.  

**Quick SideNote:** We aren't going to worry about writing test cases in our React app, so we can delete the "App.test.js" file.  For more information on testing in React (using Jest), see: [the README.md file here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#writing-tests).

Once you have removed the JSX code from the render() function in the App component, it should look like the following:

```javascript
class App extends Component {
  render() {
    return (
      
    );
  }
}
```

We now have a fresh canvas to start adding some Bootstrap code from the [Bootstrap 3 Documentation](http://getbootstrap.com/docs/3.3/). Just remember: **The render() method *must* return a *single* element, with 0 or more children**. Let's begin by adding the following bootstrap components / layout options. 

* A Minimal [Navbar](http://getbootstrap.com/docs/3.3/components/#navbar)
* A ["Container"](http://getbootstrap.com/docs/3.3/css/#overview-container) containing a responsive [Grid](http://getbootstrap.com/docs/3.3/css/#grid-example-basic) with one "row" and 2 "columns" (col-md-6 &amp; col-md-6)
  * Note: each "column" should contain a ["Panel with a heading"](http://getbootstrap.com/docs/3.3/components/#panels-heading)
  
When you have completed adding the above elements, the App component should look something like this:

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">React Practice</span>
            </div>
          </div>
        </nav> 
    
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>

            </div>
            <div className="col-md-6">

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>

            </div>

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
```

The code above has some extra spaces added to it for clarity.  Notice how every "class" attribute had to be renamed to "className" and that our component returns only a single `<div>` element (with many children).

<br>

#### Creating Components

Looking at our page, there's plenty of areas that can be broken down into "Components", starting with:

<br>

#### The "navbar"

The code for the "navbar" will be recycled over and over again for every page in our app, so we should make it a Component. Using the code outlined above, we can move our "navbar" into a new "external" .js file (ie: "Navbar.js") using the code:

```jsx
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">{this.props.title}</span>
                    </div>
                </div>
            </nav> 
        );
    }
}

export default Navbar;
```

Here, we have removed all of the "nav" code and placed it in it's own "Navbar" component, defined in "Navbar.js" (**src/Navbar.js**).  The static text has been removed in favour of accepting a "title" property to our new component.

Now, if any other file wishes to use the component, they can simply "import" the module.  For example, to ensure that we can use it in our App.js file, we add the line:

```javascript
import Navbar from './Navbar';
```

And if we want to reference it within our "App" component, we can use the JSX code:

```html
<Navbar title="React Practice" />
```
<br>

#### The "panels"

Since both panels are virtually identical, we can easily justify splitting them into their own external "Panel" component (ie: Panel.js), using the code:

```jsx
import React, { Component } from 'react';

class Panel extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Panel;
```

Here, we have removed all of the "panel" code and placed it in it's own component, defined in "Panel.js" (**src/Panel.js**).  The static title has been removed in favour of accepting a "title" property and the "content" of the panel is set up to render all components that rest inside the <Panel></Panel> element.  This is accomplished via a reserved property: **"children"**.

Like our "Navbar" component, if any other file wishes to use the "Panel", they can simply "import" the module.  For example, to ensure that we can use it in our App.js file, we add the line:

```javascript
import Panel from './Panel';
```

And if we want to reference it within our "App" component, we can use the JSX code:

```html
<Panel title="Panel title">
  Panel content
</Panel>
```
<br>

#### Uppdated &lt;App /&gt; JSX

If you have been following along and implementing the above changes to the "App" component, you will find that the "render" method now returns the (much cleaner) JSX code.

```html
<div>

  <Navbar title="React Practice" />

  <div className="container">
    <div className="row">

      <div className="col-md-6">
        <Panel title="Panel title">
          Panel content
        </Panel>
      </div>
      
      <div className="col-md-6">
        <Panel title="Panel title">
          Panel content
        </Panel>
      </div>

    </div>
  </div>

</div>
```

<br>

We could continue this trend by also making the "container", "row", and "col-md-6" `<div>` elements into their own containers as well.  This would place all of the containers that use bootstrap-specific class names into their own modules, which makes it much easier to manage any changes to our containers in the future (ie, adding new classes / modifying existing classes, or adding new child/parent elements to the containers).

### Rendering Data in a Collection

The above code is great for generating code that does not repeat (ie, "render this Component here").  However, as we've seen in this course so far, rendering items in a collection is an extremely important part of creating a Single Page Application.

To see how we can do this in React, let's add one more "stateful" component: **ListNames**.  This component does not accept any "props" but it does have an internal "state" that holds an array of names.  

```jsx
import React, { Component } from 'react';

class ListNames extends Component {
    constructor(){ // list names does *not* accept props
        super();
        this.state = {
            names: ["Dean", "Adrien", "Sarah", "Chandra"]
        }
    }
    render() {
        return (
            <ul>
                <li>TODO: Render Names Here</li>
            </ul>
        );
    }
}

export default ListNames;
```

If we wish to render each name in it's own `<li>` element, we need to embed some JavaScript into our render() method to iterate over **this.state.names** and output the resulting element.  Fortunately, as we have seen, we can provide a valid JavaScript *expression* at any point in our JSX code.  Therefore, if we want to iterate over the names collection, we can make use of the [Array Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Method to access each element in turn and output the related data.  For example, we can replace our `<li>TODO: ...</li>`: JSX with the following code.

```jsx
{this.state.names.map((name, index) => {
    return (
        <li>{name}</li>
    );
})}
```
This will iterate over every element in the "names" array and execute our callback function.  The callback function is then used to "wrap" each name in an `<li>` element before returning it.  Using this code, we can easily output one or more elements in an existing collection, using the formatting of our choice!  

There is one caveat, however.  If we were to add our new component to our App (in one of the panels, for example) and examine our resulting view in the browser, we'll see that everything looks fine.  The only concern is a **warning** that we recieve in the browser console: 

```
"Warning: Each child in an array or iterator should have a unique "key" prop."
```

The concern here is that React uses a unique ["key" property](https://reactjs.org/docs/lists-and-keys.html#keys) to help identify which elements of a list have been changed, added or removed. If we don't have an obvious key (ie, ".\_id" from our Teams API data), we can simply use the index for each element in the array.  For example, to address the above warning, we would change the "map" code from above to read: 

```javascript
{this.state.names.map((name, index) => {
    return (
        <li key={index} >{name}</li>
    );
})}
```

<br>

### Responding to Events

Fortunately for us, responding to events is relatively simple in React.  

For example; let's say that we want to extend our ListNames component to accept some user input and dynamically add new names to the list.  We can re-write the component to include a `<button>` element that invokes a "handleListItemAdd()" method of our ListNames Component:

```javascript
import React, { Component } from 'react';

class ListNames extends Component {
    constructor(){ // list names does *not* accept props
        super();
        this.state = {
            names: ["Dean", "Adrien", "Sarah", "Chandra"]
        }
        
         this.handleListItemAdd = this.handleListItemAdd.bind(this);
    }

    handleListItemAdd(){
        let newArray = this.state.names;
        newArray.push("New Item");

        this.setState({
            names: newArray
        });
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.names.map((name, index) => {
                        return (
                            <li key={index} >{name}</li>
                        );
                    })}
                </ul>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.handleListItemAdd}>Add List Item</button>
            </div>
        );
    }
}

export default ListNames;
```

Notice how we had to wrap the entire JSX code in a `<div>` element?  This is because we can only return a **single** element in our Render method.  

Also, we must to explicitly "bind" **this** to the handleListItemAdd method in the constructor (so that we can reference  ListNames using "this" in the function) using the line:

```javascript
 this.handleListItemAdd = this.handleListItemAdd.bind(this);
```

<br>

### Warning: Initializing this.state from a parent state using "props"

There is one stateful pattern that you may be tempted to try: setting the state of a child component via "props" to the "state" value of the parent.  

The idea here is that when the **parent** state changes, so too should the **child** state.  Unfortunately, this does not occur, since each element has it's own state. Changes in the parent will not affect changes in the child, even if the value is passed via "props". 

For example, take the two following components; "Inner" and "Outer".  "Outer" has "outerName" in it's state and passes it to the "Inner" component using the "name" property.  The "Inner" component uses this value to initialize it's own "innerName" property in it's own state.  After 2 seconds, the "Outer" component sets the "outerName" state to "Bob".  The expectation here is that the "innerName" should be updated as well, since innerName was initialized using "this.props.name":

```javascript
class Inner extends Component{
  constructor(props){
    super(props)
    this.state = {
      innerName: this.props.name 
    }
  }

  render(){ // innerName is not updated to reflect the new name: "Bob"
    return <span>{this.state.innerName}</span>
  }
}

class Outer extends Component {
  constructor() {
    super()
    this.state = {
      outerName: ""
    }
  }

  componentDidMount(){
    // set the "outerName" to change to "Bob" after 2 seconds
    setTimeout(()=>{
      this.setState({
        outerName: "Bob"
      });
    },2000);
  }

  render() {
    return <Inner name={this.state.outerName} />
  }
}
  ```

Unfortunately, this is not the case.  If we wish to reflect the changes of "outerName" in our "Inner" component, we must reference it using "this.props", not "this.state".  The corrected version can be seen here:

```javascript
class Inner extends Component{
  render(){ // this.props.name IS updated to reflect the new name: "Bob"
    return <span>{this.props.name}</span>
  }
}

class Outer extends Component {
  constructor() {
    super()
    this.state = {
      outerName: ""
    }
  }

  componentDidMount(){
    // set the "outerName" to change to "Bob" after 2 seconds
    setTimeout(()=>{
      this.setState({
        outerName: "Bob"
      });
    },2000);
  }

  render() {
    return <Inner name={this.state.outerName} />
  }
}
```

