---
title: Security topics introduction
layout: default
---

## Security topics introduction

> This document is being edited.  
> This notice will be removed when the edits are complete.  

For our purposes in this course, the *security topics* will introduce you to the security-related goals, terminology, and techniques. 

The overall goal is to protect a web app's usage and its data, making the app available for only its intended users. 

> A "web app" is an app that is created with *web technologies*.  
> It is assumed that this kind of app relies on HTTP, and is typically written in JavaScript (supported and complemented by related technologies, including HTML, CSS, JSON, etc.).  
> And, it's assumed that an app can be designed to be deployed to one or more device platforms (including a browser, a native-code platform, a server, etc.). 

<br>

### What is a *security system*?

Any [system](https://en.wikipedia.org/wiki/System) is an interdependent group of items that work together to implement a goal or purpose. 

As a result, you can think of a *security system* as programmed items that work together to protect an app's usage and its data. 

A typical security system does the following:
1. Identity managmement
2. Authentication
3. Authorization

Each will be explained below. 

<br>

#### 1. Identity management

Identity management is the process of defining, storing, and managing user accounts for an app. 

Each user of an app must be uniquely identified. A "user account" implements this requirement. 

The user account is an object that represents a human *user* of an app. A user account includes identification and description properties, including user name, a shared secret (i.e. a password), email address, etc. It usually also includes some other properties (e.g. family name, given name, etc.), as well as metadata (e.g. active/locked status, user account creation date, etc.). 

All user accounts are stored in a persistent store (i.e. a database). One or more user accounts are designated as "user account managers", which can manage all user accounts (e.g. active a user account, delete a user account, etc.)

Typical identity *management* tasks include the ability to register for a new user account, and enable a user to edit some properties of their user account (e.g. name, email address, etc.). For user account managers, typical tasks include the ability to view/inspect user accounts, search for a user account, and so on. 

Sometimes, identity management is a part of an app (embedded, in other words). Alternatively, it is often done as a separate app or service. In that situation, your app can "trust" the external identity management app for this aspect of a security system. 

<br>

#### 2. Authentication

Authentication is the process of presenting and validating credentials. 

**Not yet authenticated**

If a user has not been authenticated by the security system, then the user must present their credentials. For our purposes, this is typically done in two different ways:
1. User interface (i.e. a login page in an app)

2. Programmatic interface (i.e. a resource/endpoint in an app)

For both ways, the user typically presents a *username* and a *password* as their credentials. 

After the security system validates the credentials, the security system issues (delivers, returns) a package of data to the user: 
1. If the user authenticated through a browser (user interface), then the package is a [cookie](https://en.wikipedia.org/wiki/HTTP_cookie) 

2. If the user authenticated through an HTTP client/requestor (programmatic interface), then the package is an [access token](https://en.wikipedia.org/wiki/Access_token) (often just referred to as a "token")

The cookie or token includes information about the issuer, information about the user, and information about the cookie or token lifetime. It does *not* include secret information. 

A browser saves or stores the cookie in a secured manner. This is done automatically as a browser feature, and the user or programmer does not need to do any extra work to save and use the cookie in the future. 

In contrast, when using an HTTP client/requestor, the programmer *must* do extra work to save or store the token in the app (in memory and/or persisted) in a secured manner. 

**Has been recently authenticated**

If a user was recently authenticated, and has a cookie or token that has not yet expired, then the user can present the cookie or token as their credentials. 

When using a browser, assume the user requests a different resource in the same app. The browser automatically fetches the cookie from its storage area, and includes it in the header of the request. 

When using an HTTP client/requestor, the programmer must fetch the token from the app's storage area, and include it in the header of the request. 

In both situations, the listening app will notice the cookie or token in the request headers. It will then inspect and validate its contents.
* If valid, the app will allow the request to continue. Typically, the app will create a "security principal" that represents the user for the lifetime of the request. 

* If not valid, the request cannot continue. A browser user will be sent an HTTP 401 response, and likely redirected to a login page. An HTTP client/requestor will be sent an HTTP 401 response, and likely a message inside an object. 

<br>

#### 3. Authorization

As you have learned, after a successful authentication, the user will present a cookie or token as credentials with every request for a resource. 

However, is the user *allowed* to successfully use that resource? Well, that depends. 

Authorization is the process to determine whether a request for a resource can be successfully completed. 

( more to come )

<br>

#### Packaging and bundling

Most often, tasks 1 and 2 above are packaged or bundled together. This modular approach allows a security system to be added to an existing app. 
<br>
