---
title: React routing
layout: default
---

## "Routing" in React

One of the key components in creating a SPA (Single Page Application) is Routing.  When Routing is implemented using a framework like React, we will find that we can browse different URL's within our app without actually reloading the page.  In this case, the components of one URL are swapped out for the components of another, giving the illusion that we're navigating through multiple pages, when we're really just adding / removing components based on the browser URL / history.  Our User-Interface is in sync with the URL.

Recently, the major routing library used to achieve this in react; **React Router** has been updated to [version 4](https://reacttraining.com/react-router/):

> Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering.

<br>

## Getting Started using React Router v4

To start using the React Router library in our web app, we must first fetch react-router-dom using npm (once we have halted our debugging server using ctrl+c), ie:

```
npm install react-router-dom --save
```

Now, let's say that we have 3 top-level components that represent 3 separate views, ie: **Home**, **Projects** and **Project**:

```javascript
class Home extends Component{
  render(){
    return <h1>Home Page</h1>
  }
}

class Projects extends Component{
  render(){
    return <h1>All Projects Page</h1>
  }
}

class Project extends Component{
  render(){
    return <h1>Specific Project Page</h1>
  }
}
```

**Quick Note:** Each of these components (views) currently only renders an `<h1>` element, however in a real application they would be defined in separate files and contain many child components.

If we wish to conditionally render each of the above components (views) based on the following routes:

* "/" renders &lt;Home /&gt;
* "/projects" renders &lt;Projects /&gt;
* "/project" renders &lt;Project /&gt;

we need to modify our App.js file as well as our index.js file.

<br>

### index.js

* "import" the `<BrowserRouter>` Component using `import { BrowserRouter } from 'react-router-dom'` 
* Update the ReactDom.render() method to wrap the `<App />` component in a `<BrowserRouter>` component:

  ```javascript
  ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  , document.getElementById('root'));
  ```

The above code specifies the type of router that we will be using in our `<App />` component.  This could be either [&lt;BrowserRouter&gt;](https://reacttraining.com/react-router/web/api/BrowserRouter) or [&lt;HashRouter&gt;](https://reacttraining.com/react-router/web/api/HashRouter) - here, we have decided to use `<BrowserRouter>`, as the Hash Router technique is only really intended to support legacy browsers.

<br>

### App.js

* "import" the `<Route>` and `<Switch>` Components using `import { Route, Switch } from 'react-router-dom'`
* Update the render() method of the "App" class to use the following JSX:

  ```javascript
  <Switch>
        <Route exact path='/' render={() => (
                <Home />
        )}/>
        <Route exact path='/Projects' render={() => (
                <Projects  />
        )}/>
        <Route exact path='/Project' render={() => (
                <Project  />
        )}/>
  </Switch>
  ```
  
Here, we can define our routes explicitly using the ["Switch" component](https://reacttraining.com/react-router/web/api/Switch) with our 3 nested ["Route" components](https://reacttraining.com/react-router/web/api/Route).  Each of the routes have a "path" property which we use to define the target route, as well as a "render" property which defines which component will be rendered for that route.  

In all three above routes, we use the ["exact"](https://reacttraining.com/react-router/web/api/Route/exact-bool) because we want to match the route *exactly* (ie, we don't care about "/Project/1" yet, only "/Project") 

<br>

## Adding URL Parameters to our Routes

If we wish to pass a specific URL pattern to a given route, we can use the same syntax as we're accustomed to in Node.js, ie: "/routeName/:parameter". To pass the ":parameter" to the `<Project />` component (so we can make use of routes like "/project/4", etc), we need to make the following changes to our files: 

* Update the "Project" component's "render()" method to include a reference to an "id" property:

  ```javascript
  render(){
    return <h1>Project {this.props.id} Page</h1>
  }
  ```

* Update the "Project" `<Route>` component:

  ```javascript
  <Route path='/Project/:id' render={(props) => (
      <Project id={props.match.params.id} />
  )}/>
  ```
  
Once we have made the above changes (removed "exact", added /:id, referenced props.match.params.id, etc.), we can now render routes that look like "/Project/9" or "/Project/abc" and see the results reflected in the browser.

<br>

## Adding A "Not Found" Route

Using React Router, we can easily define a "Not Found" route - this is analagous to the "404" error that we returned in our server.js files in WEB322 when a route was not matched.

To add a "Not Found" route, we simply need to add another route as a child to our `<Switch>` component defined in App.js.  This route will need to be **beneath** the other routes, so that it doesn't block any of our legitimate routes:

```javascript
<Route render={() => (
        <h1>Not Found</h1>
)}/>
```

<br>

## Linking to a Route

To use the react router effectively, we cannot simply use normal links to route to our pages from within the application. For example, using code like: 

```html
<a href="/myRoute">My Route</a>
```
would lead to a whole page reload (we only want to load the full app at the beginning, not after every route change).  Instead, what we need to do is use the `<Link>` component (from "react-router-dom"), to prevent this from happening.  

The same code can updated to use the `<Link>` component as follows:

```html
<Link to='/myRoute'>My Route</Link>
```

<br>

## "Redirecting" to a Route

Sometimes, we wish to "redirect" the user to a different route and override the current route in the "history" stack (or alternatively "push" it onto the current history stack) - this is similar to what we would use [res.redirect()](http://expressjs.com/en/4x/api.html#res.redirect) for in our Node.js servers.

React provides an intuitive way to achieve this, by providing a special [&lt;Redirect /&gt;](https://reacttraining.com/react-router/web/api/Redirect) component.  When rendered, it will redirect the client to the specified route using the following syntax (Note: the use of "push" will add the new route to the "history" stack):

```
<Redirect push to={"/newRoute"} />
```
