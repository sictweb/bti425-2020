---
title: Angular services example
layout: default
---

## Angular services example

In this document, you will learn how to add and use a service in an app. It's the app that was worked on in the past few weeks, as we learned more about components and routing. Here, we will make the changes to support and use services. 

<br>

### Getting started

Fetch the week 9 code example from [the course's GitHub code repository](https://github.com/sictweb/bti425). 

Refresh the modules (`npm i`). Open the project for editing. Then, you can build and run the app. 

<br>

### Working with a web service

In the "getting started" example above, the service created its data in memory, as part of its initialization process. 

We want to add on to this functionality with another typical scenario - using a web service that's external (and outside) this app. In this section, we use a public web API that deliver simple data without fuss or muss. 

When compared to the simple "getting started" example above, there are three new or additional interrelated concepts and techniques that we are interested in:
1. HttpClient 
2. RxJS 
3. Observable

We blend all three together when working with a web service. 

<br>

#### Enable the app to use HTTP

Open the app module (`app.module.ts`) for editing. Near the top, add this import statement:

```js
import { HttpClientModule } from "@angular/common/http";
```

Then, add the `HttpClientModule` to the `imports` collection in the `@NgModule` decorator.

This action will enable all services in the app to use HTTP (in other words, work with a web service). 

<br>

**Important Note**

When trying to use **HttpClient** anywhere else in your application (e.g. a `whatever.service.ts` file), be sure to *import* ***HttpClient*** (and not HttpClientModule) into that service or component. For example:

```js
import { HttpClient } from "@angular/common/http";
```

<br>

#### Visit and browse the web service

For the following, we could use our Teams API. Just to be different and flexible, we'll use a different web service. 

A programmer with the moniker *typicode* has published a small-size web service named "JSONPlaceholder". Open Postman (or JSON Formatter), and look at the results from these URLs:

`http://jsonplaceholder.typicode.com/posts`

`http://jsonplaceholder.typicode.com/users`

`http://jsonplaceholder.typicode.com/comments`

All return an array/collection of data. 

<br>

#### Write view model classes to match the data

Now, write *view model* classes to match the data returned by the first two URLs above. We must do this when working with web services. Here's how:

Create a new source code file named `vm-typicode.ts`. Its name suggests that this source code file will define "view models for the typicode web service". In it, we will write several classes, which will allow us to work with "posts", "users", and "comments":

```js
// View models for the typicode.com web service

export class Post {
    id:         number;
    userId:     number;
    title:      string;
    body:       string;
}

export class Comment {
    id:         number;
    postId:     number;
    email:      string;
    name:       string;
    body:       string;
}

export class Geo {
    lat:        number;
    lng:        number;
}

export class Address {
    city:       string;
    geo:        Geo;
    street:     string;
    suite:      string;
    zipcode:    string;
}

export class Company {
    bs:             string;
    catchPhrase:    string;
    name:           string;
}

export class User {
    address:        Address;
    company:        Company;
    email:          string;
    id:             number;
    name:           string;
    phone:          string;
    username:       string;
    website:        string;
}
```

<br>

#### Prepare the service

Open the service for editing. Add the following near the top:

```js
import { Observable } from "rxjs/Observable";

import { Post, Comment, Geo, Address, Company, User } from "./vm-typicode";
```

We need `Observable`, because that's the type of the web service get/fetch result. 

We need the view model classes to enable the model binder to correctly create the arrays/collections. 

<br>

**Suggestion - create a "url" string field**

Suggestion - create a "url" string field, to hold the long and constant part of the URL to the web service. Doing this will make it easy to create a concatenated string that includes the segment we want. 

```js
  private url = "http://jsonplaceholder.typicode.com";
```

<br>

**Write a function for each web service resource**

Write a function for each web service resource that the app needs. Assume, as noted above, that we want posts, comments, and users.

```js
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`)
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments`)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
  }
```
<br>

#### Use the new function(s) in the service

Let's do the work in a different component, "horse". We'll just push the existing content down. Open the horse component class (`horse.component.ts`) for editing. 

Import the service. 

Import the view model class. Let's work with posts, so we need the Post class imported. 

Inject the service into the constructor. 

Create a field to hold the content we want; it will be a Post array/collection field. 

Add a function that will call the service.

We want to call this function when the component is loaded/initialized, so do that in the ngOnInit function code. 

Finally, open the HTML template (`horse.component.html`) for editing. We want to push the existing content down. So, in the panel body, add these elements to the top:

{% raw %}
```html
    <p>All posts:</p>
    <table class="table table-striped">
      <tr>
        <th>User ID</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <tr *ngFor='let p of posts'>
        <td>{{p.userId}}</td>
        <td>{{p.title}}</td>
        <td>{{p.body}}</td>
      </tr>
    </table>
    <hr>
```
{% endraw %}

The result should look like this:

![Posts](../media/angular-services-render11.png)

<br>

#### Do it again

Do it again, to the lizard component. Show the users resource, and push the existing content down.

The result should look like this:

![Users](../media/angular-services-render12.png)

<br>

### Summary

In this document, you learned an incremental approach to creating and using a service. 

We started by delivering static data that was created in the service. 

Then, we got the more typical web service scenario involved, and learned a reliable and repeatable way to implement a very common scenario. 

<br>
