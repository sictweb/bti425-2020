---
title: Route design
layout: default
---

## Route design

This note has recommendations for designing routes for web API and for web apps (e.g. React, Angular). 

<br>

### Web API route design recommendations

Usually, CRUD routes are composed of the collection name, maybe with an object identifier.  
The Express.js method (get, post, put, delete) is used to identify the CRUD task.  
Therefore, it is not necessary to add the CRUD task to the route.  

Examples: 

Task | Express.js method	| Route | Expected return 
--- | --- | --- | ---
Get all | get | /api/products | Collection 
Get some | get | /api/products/:named | Collection 
Get one | get | /api/products/:id | Object 
Add new | post | /api/products | Object 
Update existing<br>(i.e. a pure "edit" scenario) | put | /api/products/:id | Object 
Command<br>(i.e. do something) | put | /api/products/command/:id | Object or nothing
Delete item | delete | /api/products/:id | Usually nothing

<br>

### React and Angular app route design recommendations 

Compared to web API routes, React and Angular app routes can be much more descriptive.  

We don't worry about (or consider) the HTTP method, because the app is loaded into the device's browser with a standard HTTP GET request, and then the framework's runtime, using the its router, takes over the DOM and manages a number of browser navigation-related features, including navigation, the address bar, back and forward, history. All router requests are HTTP GET by definition. 

Therefore, when we state that app routes *can* be much more descriptive, they must in fact *be* much more descriptive. We must "tell a story" with the routes. 

Examples: 

Task | Route | UI and UX expectations 
--- | --- | ---
Get all | /products | Some kind of a list of items 
Get some | /products/named/:text<br>-or by passing data-<br>/products or<br>/products/some | Some kind of a list of items 
Get one | /products/detail/:id | Detail for one item
Add new | /products/create | Editable details for new item
Update existing | /products/edit/:id | Editable detail for one item 
Command | /products/do-something/:id | Editable detail for one item (usually)
Delete | (similar to a command) | 

<br>
