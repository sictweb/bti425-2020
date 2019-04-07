## Week 12 code examples

Remember to run this command while in the directory/folder that has the `package.json` file:

```
npm i
```

<br>

### code-for-angular-app-v1

Code assets for your Angular app in Assignment 3.  
Follow the guidance in the notes.  
You will have to edit the "login" component code.  

<br>

### assign-3-data-user-accounts-v1.json

User accounts for the students in Assignment 2.  
Follow the guidance in the notes to import the data into a new MongoDB collection. 

<br>

### functions-for-web-api-manager-v1.js

Functions that enable user account activation, creation, and login.  
Add these functions to your `manager.js` source code file.  

<br>

### functions-for-web-api-server-v1.js

Functions that handle requests for user account activation, creation, and login.  
Add these functions to your `server.js` source code file.  

<br>

### Sending requests to the web API

Some requests will require an access (security) token. 

After a successful login, the response will include a value for a token. The value is a very long string. 

This token must be included in a request header, formatted as follows:

```
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI... etc. 
```

When using Postman:

The header "KEY" is "Authorization". 

The header "VALUE" is "JWT", then a space, then the very long string. 

Requests that are successful will deliver the results that you want. 

Unsuccessful requests will deliver HTTP 401. 

<br>
