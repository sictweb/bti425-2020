
// An implementation of the native Fetch API for Node.js
// Works the same as WindowOrWorkerGlobalScope.fetch() 
const fetch = require('node-fetch');

// Make sure that the web API is loaded and running

// Define the request parameters
let url = 'http://localhost:8080/api/cars';
let options = {};

// Execute the fetch request
fetch(url, options)
.then(response => {
  
  if (response.ok) {
    // This is the happy case
    // The HTTP status code will be in the range 200 to 299 
    
    // Before continuing, let's inspect the response...

    // Generate a readable collection of headers
    var headers = [];
    for (const h of response.headers) {
      headers.push(`\n${ h[0] }: ${ h[1] }`);
    }
    // Show the result
    console.log(`\nHTTP status is ${ response.status } ${ response.statusText },\n\nHeaders are ${ headers },\n\nContent length is ${ response.headers.get('Content-Length')} bytes\n`);
    
    // Return the body
    return response.json();
  }
  else {
    // This handles some error or unwanted scenarios
    // We do get a response from the server, and the 
    // HTTP status code will be in the range 300 to 399, 400 to 499, or 500 to 599
    // Throw an error, and the catch block will run
    throw new Error(`HTTP error ${ response.status } - ${ response.statusText }`);
  }

})
.then(data => {
  return console.log(data[3]);
})
.catch(error => {
  // Error handler, version 1
  return console.log(`Error: ${ error.message }`);
});

// Fetch API documentation
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

// Response properties:
// headers
// ok (boolean)
// status (number)
// statusText
// url
// body

// Response methods:
// Response implements Body, so we also get these methods
// .json()
// .text()
// .blob() for an image