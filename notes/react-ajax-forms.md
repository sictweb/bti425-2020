---
title: React AJAX & forms
layout: default
---

## React Forms

To learn about how we can use form elements in React, we will be referencing the official documentation [located here](https://reactjs.org/docs/forms.html).  This includes the following topics:

* [Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)
* [The textarea Tag](https://reactjs.org/docs/forms.html#the-textarea-tag)
* [The select Tag](https://reactjs.org/docs/forms.html#the-select-tag)
* [Handling Multiple Inputs](https://reactjs.org/docs/forms.html#handling-multiple-inputs)

This will give us a complete introduction on using forms within and how we can use "state" to achieve a two-way "stateful" binding relationship to properties within the component.

<br>

## AJAX & Teams API

If a component is going to fetch data from an external API, such as our Teams API, it is typically done in the **"componentDidMount()"** lifecycle method in order to populate the component's "state" with the results.  In React there's nothing built in that supports making an AJAX request, however we have a number of 3rd party modules to choose from (ie: [axios](https://github.com/axios/axios), [superagent](https://github.com/visionmedia/superagent), [fetch](https://github.com/github/fetch), etc.).

For our purposes, we will go with "axios", since it works with the familiar **promise** pattern.  To add axios to the app, simply execute the command (after terminating the development server with ctrl+c)

```
npm install --save axios
```

Once it's installed, we simply have to "import" it wherever we wish to use it:

```javascript
import axios from 'axios';
```

### Fetching the Data

The following example shows how a "componentDidMount()" lifecycle method can be used to make a request for data using "axios" and store the results in the "state" of the component as "data".  This example uses the popular [https://reqres.in](https://reqres.in) testing service as an example of how we can fetch the data.  This can easily be swapped out for your "Teams" API running on Heroku:

```javascript
componentDidMount() {
  axios.get("https://reqres.in/api/users").then((res) => { // this would be a URI from your "Teams API"
    this.setState({
      data: res.data
    });
  }).catch((err) => {
    console.log("error")
  });
}
```

### Putting it together - Week 5 Example Code

To see how we can put all the ideas from Week 5 together in a single React web application, we will be walking through the [Week 5 example](https://github.com/sictweb/web422/tree/master/Code%20Examples/week5) from our Github repo.  Here, we will see how we can load / modify "Employee" data, access different routes and render Bootstrap components in a structured, component-oriented manner.

