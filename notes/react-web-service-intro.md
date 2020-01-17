---
title: React and web service use
layout: default
---

## Using a web service from a React app

When a component must fetch data from a web service (web API), it is typically done in the `componentDidMount()` lifecycle method.  

As you saw in the `react-tania-walkthrough` code example, we use the new Fetch API to interact with a web service. 

These examples uses the familiar [https://reqres.in](https://reqres.in) testing service. The code example `react-ws-intro` uses the following code in a fully-working app. 

<br>

### Use HTTP GET

*Get all* (or get some, filtered) and *get one* are similar. The differences include the URL and the kind of response (object, or an array of objects). 

<br>

#### Get all (or get some, filtered)

Get all can be done at any time, either on first load (mount) or on demand (event-driven). 

The following example shows how a first load "componentDidMount()" lifecycle method can be used to make a request for data and store the results in the "state" of the component as "data". 

```javascript
// Assumptions or prerequisites:
// State has these properties:
// - something to hold the response data
// - "httpStatusCode" and "HttpStatusOk"
// Component has a "url" property

componentDidMount() {

  // Get all
  fetch(this.url)
    .then(response => {
      // Optional...
      //this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
      if (response.ok) {
        // Parse the response body as JSON
        return response.json();
      } else if (response.status === 404) {
        // Not found 
        throw Error('HTTP 404, Not found');
      } else {
        // Some other situation
        throw Error(`HTTP ${response.status}, ${response.statusText}`);
      }
    })
    .then(responseData => {
      // "responseData" is an object; here, we're interested in its "data" property
      // Study the shape of the data in the reqres.in service
      this.setState({ users: responseData.data });
      // Optional...
      //console.log(responseData.data);
    })
    .catch(error => {
      // Handles an error thrown above, as well as network general errors
      console.log(error)
    });

}
```

<br>

#### Get one

Get one can be done at any time, either on first load (mount) or on demand (event-driven). 

The following example shows how a first load "componentDidMount()" lifecycle method can be used to make a request for data and store the results in the "state" of the component as "data". 

```javascript
// Same assumptions or prerequisites as above
// "url" identifies a specific resourse, e.g. 
// url = `https://reqres.in/api/users/${this.props.id}`;

componentDidMount() {

  // Get one
  fetch(this.url)
    .then(response => {
      // Optional...
      this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
      if (response.ok) {
        // Parse the response body as JSON
        return response.json();
      } else if (response.status === 404) {
        // Not found 
        throw Error('HTTP 404, Not found');
      } else {
        // Some other situation
        throw Error(`HTTP ${response.status}, ${response.statusText}`);
      }
    })
    .then(responseData => {
      // "responseData" is an object; here, we're interested in its "data" property
      // Study the shape of the data in the reqres.in service
      this.setState({ user: responseData.data });
      // Optional...
      //console.log(responseData.data);
    })
    .catch(error => {
      // Handles an error thrown above, as well as network general errors
      console.log(error)
    });
}
```

<br>

### Use HTTP POST

If we wish to add a new item, we must provide a configuration object as the second parameter of the `fetch()` call. 

For example, if we wish to add a new "user" on https://reqres.in, after a user fills in a form and clicks/tabs a "save" button, we can write the following code. Notice that a successful response does a redirect to a landing page (which is typically the same "get one" page as seen above):

```js
// For coding convenience, create an object that matches
// the shape that the web service expects
const newUser = { 'name': this.state.name, 'job': this.state.job };

fetch(this.url, {
  method: 'POST',
  headers: { "Content-Type": 'application/json' },
  body: JSON.stringify(newUser)
})
  .then(response => {
    if (response.ok) {
      // Parse the response body as JSON
      return response.json();
    } else if (response.status >= 400 && response.status < 500) {
      // Error caused by the requestor
      throw Error(`HTTP ${response.status}, ${response.statusText}`);
    } else {
      // Some other situation
      throw Error(`HTTP ${response.status}, ${response.statusText}`);
    }
  })
  .then(responseData => {
    // "responseData" is an object
    // Study the shape of the data in the reqres.in service
    // Optional...
    console.log(responseData);
    // The identifier "id" can be used to redirect
    this.props.history.push(`/users/detail/${responseData.id}`);
  })
  .catch(error => {
    // Handles an error thrown above, as well as network general errors
    console.log(error)
  });
}
```

<br>

### Use HTTP PUT

Similar to above, if we wish to update an item, we must provide a configuration object as the second parameter of the `fetch()` call. The URL must also uniquely identify the resource to be updated. 

For example, if we wish to update "user number 2" on https://reqres.in, we can write the following code:

```js
// For coding convenience
const newUser = { 'id': this.props.id, 'name': this.state.name, 'job': this.state.job };

// Edit existing
fetch(this.url, {
  method: 'PUT',
  headers: { "Content-Type": 'application/json' },
  body: JSON.stringify(newUser)
})
  .then(response => {
    if (response.ok) {
      // Parse the response body as JSON
      return response.json();
    } else if (response.status >= 400 && response.status < 500) {
      // Error caused by the requestor
      throw Error(`HTTP ${response.status}, ${response.statusText}`);
    } else {
      // Some other situation
      throw Error(`HTTP ${response.status}, ${response.statusText}`);
    }
  })
  .then(responseData => {
    // "responseData" is an object
    // Study the shape of the data in the reqres.in service
    // Optional...
    console.log(responseData);
    // The identifier "id" can be used to redirect
    this.props.history.push(`/users/detail/${this.props.id}`);
  })
  .catch(error => {
    // Handles an error thrown above, as well as network general errors
    console.log(error)
  });
```

<br>

### Use HTTP PUT

Finally, if we wish to delete an item, we must provide a configuration object as the second parameter of the `fetch()` call. The URL must also uniquely identify the resource to be updated. 

For example, if we wish to update "user number 2" on https://reqres.in, we can write the following code. Notice the redirect. 

```js
fetch(this.url, { method: 'DELETE' })
  .then(response => {
    if (response.ok) {
      // Parse the response body as JSON
      return response.status;
    } else if (response.status >= 400 && response.status < 500) {
      // Error caused by the requestor
      throw Error(`HTTP ${response.status}, ${response.statusText}`);
    } else {
      // Some other situation
      throw Error(`HTTP ${response.status}, ${response.statusText}`);
    }
  })
  .then(responseData => {
    // "responseData" is an integer (probably 204)
    // Study the shape of the data in the reqres.in service
    // Optional...
    console.log(responseData);
    // Redirect
    this.props.history.push('/users');
  })
  .catch(error => {
    // Handles an error thrown above, as well as network general errors
    console.log(error)
  });
  ```

<br>
