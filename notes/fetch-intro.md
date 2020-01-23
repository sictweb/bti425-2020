---
title: Introduction to the Fetch API
layout: default
---

## Introduction to the Fetch API

This document attempts to summarize the essential getting started knowledge about the Fetch API, which is used to fetch resources from the network. 

Complete coverage is in the Mozilla Developer Network (MDN) [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) documentation set. It was used exclusively to prepare this document. 

Make sure you read the vast coverage on MDN. 

<br>

### Need to know

The caller (client, requestor, sender) creates, configures, and sends a [request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object. 

The listener (server, responder, receiver) processes the request, and then creates, configures, and sends a [reponse](https://developer.mozilla.org/en-US/docs/Web/API/Response) object. 

The [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) method is used to send the request, and handle the response. 

The return value of a fetch request is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). 

> From the documentaiton, a "...Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value."

<br>

### Request and response example

In this section, we will show the raw request and response for a GET request to this URL:  
`https://reqres.in/api/users/4`

<br>

#### Raw request 

```http
GET /api/users/4 HTTP/1.1
User-Agent: PostmanRuntime/7.21.0
Accept: */*
Cache-Control: no-cache
Host: reqres.in
Accept-Encoding: gzip, deflate
Connection: keep-alive
```

<br>

#### Raw response

```http
HTTP/1.1 200 OK
Date: Wed, 22 Jan 2020 18:51:14 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
X-Powered-By: Express
Access-Control-Allow-Origin: *
Etag: W/"a3-73zR1vi9H0gpNTybS36DkZDMU34"
Via: 1.1 vegur
Cache-Control: max-age=14400
CF-Cache-Status: HIT
Age: 319
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Vary: Accept-Encoding
Server: cloudflare
CF-RAY: 5593b7d51a8af97d-YYZ
Content-Encoding: gzip

{"data":{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"}}
```

<br>

### Typical GET request (get all, some, one)

At a minimum, a fetch request requires a URL. Without any additional configuration:
* The method is GET 
* The URL is a string, provided by you the programmer 
* The accept header's value is typically `*/*` 
* There is no body/data 

A Promise object is returned:
* If the request was "resolved" (successful),  
the value of the Promise is the response object 
* If not ("rejected"), typically because of a network error,  
the value of the Promise is an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object 

What does a typical GET request look like? 

The simplest and happy-case version (response is OK and delivers a JSON object or array) is as follows:

```js
// URL
const url = 'https://reqres.in/api/users/4';

// Execute the fetch
fetch(url)
  .then(response => response.json())
  .then(responseData => console.log(responseData))
  .catch(error => console.log(error));
```

A more realistic version, with some error-checking, is as follows:

```js
// Variable to hold the result of the fetch
var result = {};

// URL
const url = 'https://reqres.in/api/users/4';

// Execute the fetch
fetch(url)
  .then(response => {
    // Promise was resolved successfully
    if (response.ok && response.headers.get('content-type').startsWith('application/json')) {
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
    // Response was HTTP 200 to 299, and the body data was
    // extracted and passed in to the responseData parameter
    // You must inspect the shape of the data object/collection 
    // and then use what you want or need
    // We really want the value of the "data" property...  
    result = responseData.data;
  })
  .catch(error => { 
    console.log(error); 
  });
```

<br>

### Other requests 

Requests that use an HTTP method other than GET will require a "request options" object, as the fetch method's second parameter after the URL. For example:

```js
// Data to send in the request
const bodyData = { /* define an object here or earlier */ };

// Request options
var requestOptions = {
  method: 'POST,
  headers: { "Content-Type": 'application/json' },
  body: JSON.stringify(bodyData);
};

// URL
const url = 'https://reqres.in/api/users';

// Execute the fetch
fetch(url, requestOptions)
  // etc.
```

For more information, view and use the code in the ["react-ws-intro" code example](https://github.com/sictweb/bti425/tree/master/Week_04) in the course's code example repo. 

<br>

### MDN reference 

Here are links to the relevant reference documents.

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[.fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) method

[Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) interface

[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) interface

[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) guide

Promise [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method

<br>
