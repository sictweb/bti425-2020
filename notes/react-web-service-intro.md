---
title: React and web service use
layout: default
---

## Using a web service from a React app

When a component must fetch data from a web service (web API), it is typically done in the `componentDidMount()` lifecycle method.  

As you saw in last week's `react-tania-walkthrough` code example, we use the new Fetch API to interact with a web service. 

<mark>This document is being edited.<br>This notice will be removed when the edits are complete.</mark>

<br>

### Use HTTP GET

The following example shows how a "componentDidMount()" lifecycle method can be used to make a request for data and store the results in the "state" of the component as "data".  This example uses the familiar [https://reqres.in](https://reqres.in) testing service as an example of how we can fetch items ("get all"):

```javascript
componentDidMount() {
  fetch("https://reqres.in/api/users") 
  .then(res => res.json())
  .then(data => {
      this.setState({ 
          users: data 
      });
  }).catch(err => {
      console.log(err);
  });
}
```

<br>

### Use HTTP POST

If we wish to add a new item, we must provide a configuration object as the second parameter of the `fetch()` call. 

For example, if we wish to add a new "user" on https://reqres.in, we can write the following code:

```js
componentDidMount() {
  fetch("https://reqres.in/api/users",{ 
    method: 'POST',
    body: JSON.stringify({
        name: "smooleyburf",
        job: "fence painter"
    }),
    headers: { 'Content-Type': 'application/json' } })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err)
  });
}
```

<br>

### Use HTTP PUT

Similar to above, if we wish to update an item, we must provide a configuration object as the second parameter of the `fetch()` call. The URL must also uniquely identify the resource to be updated. 

For example, if we wish to update "user number 2" on https://reqres.in, we can write the following code:

```js
componentDidMount() {
  fetch("https://reqres.in/api/users/2",{ 
    method: 'PUT',
    body: JSON.stringify({
        name: "floobort",
        job: "murmur listener"
    }),
    headers: { 'Content-Type': 'application/json' } })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err)
  });
}
```

<br>
