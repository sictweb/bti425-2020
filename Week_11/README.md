## Week 11 code examples

Remember to run this command while in the directory/folder that has the `package.json` file:

```
npm i
```

<br>

### code-for-angular-app-v1

Code assets for an Angular app.  
Follow the guidance in the notes.  
You will have to edit the "login" component code.  

<br>

### Updated security bits

In this folder, you will find good quality updatedd versions when compared to what you may have seen in the past. We strongly recommend that you use this code in your web API, as it now does all the right things. (Older versions were missing some key features and data.) 

Here's a guide to what's included here:

`server.js`
* Security-enabled example

`security-setup.js`
* The security environment setup code 
* Intended to be placed near the top of `server.js` of an existing web API

`requests-handle-user-account-tasks.js`
* Typical user account task handlers
* Get all and get one user accounts
* View my token (if authenticated)
* Activate and register 
* Login

`requests-data-and-security.js`
* Typical handlers when requesting data (e.g. "get all products")
* Notice the presences of the "passport.authenticate..." function call

`requests-handle-roles-and-claims.js`
* Code that enables you to make decisions based on claims
* Includes different scenarios

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
