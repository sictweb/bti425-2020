---
title: Angular Services Introduction
layout: default
---

## Angular Services - Introduction

An Angular *service* is a code asset that performs a task. It does not have a user interface. Often its main task is to perform data service operations (e.g. fetch, add, edit, transform). 

A service can be used by *any* of your app's components. Its use promotes a layered system architecture, also known as a [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). Enables you to write the code once, and use it in many places. 

<br>

#### More about components, and the role of services

Consider a scenario where an app has many components. Some of the components need to display data that's stored in a database on a server somewhere out there. The data could be fetched in a couple of ways:
1. Wrong way - add the same data-handling code to each component (so that multiple components have the same repeated block of data-handling code)
2. Right way - add the data-handling code to a single *service*, and then call the service from each component

A component should be lean and focused. Its job is to enable the user experience and nothing more. It mediates between the *view* (rendered by the template) and the *application logic* (which often includes some notion of a model). A good component presents properties and methods for data binding. It delegates everything nontrivial to services.

Angular helps you follow these principles by making it easy to factor your application logic into services and make those services available to components through dependency injection.

<br>

#### Learning pathway

In recent weeks, you learned that a *component* is a code asset that manages an area of the user interface. Most often, an app's user interface has many components. 

You also learned that *routing* enables navigation in an app. The user interface is updated, in whole or in part, as the result of a routing action. 

The code examples that supported these topics used static content in the components' user interface templates. This was done to keep the focus on the main topics, *components*, and then *routing*. 

This week, we will get data involved. The static content in component templates will be replaced by data that will be fetched from somewhere, and then rendered. Almost always, the data store will be external to the app, and will typically be a web service, like our Teams API. 

As introduced above, a *service* will be used to centralize the task of working with the data store. Learning this topic means that we will be learning much about a number of related topics and techniques, including: 
* Dependency injection
* HttpClient and [asynchrony](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming))
* Observable (from RxJS)
* Input directive
* Data binding in component templates
* Structural directives, `*ngFor` and `*ngIf` 
* Routing parameters
* Error handling

<br>

### Supporting documentation

While the idea of a service can be understood and appreciated, it has a number of "moving parts" when properly and fully done. 

As a result, there are several documentation sets that will help us get started, and then act as resources for richer or more complex scenarios. 

In the official [Angular.io documentation](https://angular.io/docs) set, there are two main sources of information on services. 

One is the **TUTORIAL > Services** area. To preview its contents:
* It continues with the *Tour of Heroes* example
* The basics are covered
* Data comes from within the app itself (not from outside)
* Introduces the notion of an asynchronous call to fetch data
* Does show how to add a second service to an app

In summary, the content is minimally useful to us. Its learning pathway is not as clear as we need.

A companion is the **TUTORIAL > HTTP** area. To preview its contents:
* Also continues with the *Tour of Heroes* example 
* Comprehensive coverage, maybe too much
* Shows a simulated data server; an in-memory server
* Introduces error-handling
* And two-way data flow (updates back to the web service)

In summary, some of this content is useful. The info nuggets are dispersed however. 

Another source of information is the **FUNDAMENTALS > HttpClient** area. To preview its contents:
* Deep dive on HttpClient 
* Covers many advanced topics

In summary, some of this content will be useful in the future. 

The community has some quality documentation too. A technology that comes from the community is Observables, which is part of the Reactive Extensions project (RxJS). Some links:

[Reactive Extensions project home](http://reactivex.io/rxjs/)

[Rangle.io Angular Training Book, Observables topic](https://angular-2-training-book.rangle.io/handout/observables/)

<br>

#### To summarize the introduction...

As a wrap-up, rely on these course notes to guide your learning path, and refer or link you out to other documentation sets. Following that path will enable you to make better use, in the future, of the supporting documentation introduced in this section. 

<br>

### Adding a service to an app

We can use the Angular CLI to add a service. In the example below, a service named "DataManager" is added to the app:

```
ng g s DataManager --module app --spec false
```

As you have seen when creating components, a CamelCase name is transformed into lower case with dash word separators, when it generates the source code files. 

A new source code file is created, named `data-manager.service.ts`. Its contents:

```js
import { Injectable } from '@angular/core';

@Injectable()
export class DataManagerService {

  constructor() { }

}
```

The `@Injectable()` decorator indicates that this service is intended to be "injected" into another component or service at runtime. We'll have more to say about "injection" soon. 

In the class code, we will add members: Properties to hold state information, and functions to perform tasks. 

The Angular CLI "generate service" command also updated the app module (`app.module.ts`) source code, in two related and important ways:
1. A new `import` statement near the top
2. A declaration in the `providers` array of the `@NgModule` decorator

These updates enable the new service to be available to *every* component in the app. 

<br>

### Configure and use ( a service )

The [services example](angular-services-example) document will help you get started and successfully create, configure, and use a service, in detail. In this section, we present an overview. 

The main task to complete is to write a function, in the service, that can be called by a component. The function will do something with data. In our simple getting-started examples, it will *deliver* data to the component. (Then, the component can display/render the data in its user interface.)

Therefore, the simplest implementation of a service is to do the following two tasks:
1. Declare a private field to hold the data 
2. Write a public function to deliver the data

Not included in the above is a task that would *materialize* the data. Yes, that is necessary too. In the week 9 example (link above), you will see at least two examples; one will create local (in memory) data in the service class constructor, and the other will fetch data from a web service. 

<br>

#### Use a service

A service can be used by *any component*. There are typically about four coding tasks to be done in the component class, and then another in its HTML template. The four tasks are:

* **Import statement**: As you would expect, we must `import` the service, to be able to use its members. 

* **Constructor parameter**: We "inject" the service into the constructor, as a parameter. More about this in the next section. 

* **Property to hold the data**: The main goal of our getting-started work is to work with data. Therefore, a component will need one or more properties to hold the results of a call to a web service resource. 

* **Get the data**: In our examples, we will fetch the data when the component is loaded/initialized. Later (but soon), we'll learn how to fetch data as the result of user interaction. 

Incidentally, the HTML template coding task will require us to add/edit elements to display/render the data that was fetched. 

<br>

### Dependency injection

Above, you were introduced to the `@Injectable` decorator, which indicates that a service is intended to be "injected" into another component or service at runtime. 

The Angular system is has dependency injection (DI) built in. It includes an "Injector", which is a module that knows about and maintains a container of **service** instances that it has previously created. A service is created when it is accessed for the first time.

The idea behind dependency injection is very simple. You have a component that depends on a service. In the component's code, you do not create that service yourself. Instead, you request one in the constructor (as a parameter - see: ["Parameter Properties"](https://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties)), and the framework will provide you one. This leads to more decoupled code, which enables testability, and other great things.

During compilation, Angular looks at constructor types, and "providers", which are declarations. Together, those are the services that the injector maintains.

<br>

### HttpClient and asynchrony

HttpClient is Angular's mechanism for communicating with a remote server over HTTP.

From the official documentation:

> With `HttpClient`, `@angular/common/http` provides a simplified API for HTTP functionality for use with Angular applications, building on top of the `XMLHttpRequest` interface exposed by browsers. Additional benefits of `HttpClient` include testability support, strong typing of request and response objects, request and response interceptor support, and better error handling.

To make HttpClient available everywhere in the app:
1. Open the root AppModule for editing (`app.module.ts`),  
2. Import the **HttpClientModule** symbol from @angular/common/http,  
3. Add it to the **@NgModule.imports** array.

<br>

##### Important Note

When trying to use **HttpClient** anywhere else in your application (e.g. a `whatever.service.ts` file), be sure to *import* ***HttpClient*** (and not HttpClientModule) into that service or component. For example:

```js
import { HttpClient } from "@angular/common/http";
```

<br>

#### Asynchronous by nature

As you have learned in the past, communication between systems over HTTP is asynchronous in nature. When we send a request, we just do not know when - or if - we will receive a response. 

In our apps - in our components - the user interface must remain responsive. A call to a web service must not block or freeze the user interface.

All the parts of our solutions will respect this requirement. In fact, you'll learn that the guidance will result in a flexible yet correct approach to handling interaction with a web service. 

<br>

#### The get() function

[HttpClient](https://angular.io/api/common/http/HttpClient) includes a `get()` function. Guess what it does?

This is what we will use in our getting-started examples. In its simplest usage, we do two things:
1. Specify the shape of the data that we're expecting
2. Specify the URL
 
The `get()` function returns an *Observable*, to be explained in detail soon. In essence, it is a stream of asynchronous data. The data could be a single object, or a collection. (That's determined by the web service resource.)

> The return type is actually a generic `Observable`.  
> The syntax is `Observable<T>`, where `T` is a placeholder for a type.  
> Read/skim [the generics documentation](https://www.typescriptlang.org/docs/handbook/generics.html) for more coverage.  
> Often, it is an observable of an array of something.  

For example, assume that the web service has a resource URL `/users` that will deliver a collection of user objects. 

Next, assume that our data manager service is still responsible for the app's data. Its code will have a method that will call into the web service. For example, it may have a `getUsers()` method similar to this:

{%raw%}
```js
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
  }
```
{%endraw%}

Notice that the return type of the method is `Observable<User[]>`. You can read this return type as an "observable of an array of User objects". 

In any component class that is using the data manager service, we "subscribe" to the result by using the following code:

```js
// assume we have a local "this.users" property defined
// and "this.m" is a reference to the data manager service
this.m.getUsers().subscribe(users => this.users = users);
```

The result is that the stream of data - a collection of users - is transformed into a more familiar array object that we can immediately work with. 

<br>

### Observable (from RxJS)

**R**eactive E**x**tensions for **J**ava**S**cript ([RxJS](http://reactivex.io/rxjs/)) is a library that comes bundled with the Angular toolchain.

> "RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code."

This sounds like exactly what we need - something to "make it easier to compose **asynchronous** code".  However, you might be thinking "we have that already, it's called a **Promise**".  This is true, Promises do help us manage asynchronous code; they do so by giving us an opportunity to perform a task / queue up a follow up Promise to be executed upon the completion or failure of the first piece of asynchronous code (Promise).  By writing functions that return promises, we can enforce an order of execution for asychronous code while avoiding the use of callbacks, which tend to lead to ["Callback Hell"](http://callbackhell.com/).

Observables on the other hand, allow us to watch (observe) the changing values of data over time and execute code when these changes occur.  For example:

```js
import { Observable } from 'rxjs/Observable';

var source = Observable.create(function (observer) {
  
  let i = 0;
  let interval = setInterval(() => {

    observer.next(i++);

    if (i == 5) {
      clearInterval(interval);
      observer.complete();
    }

  }, 1000);
});

var subscription = source.subscribe(
  function (x) { console.log('next: %s', x); }, // "next"
  function (e) { console.log('error: %s', e); }, // "error"
  function () { console.log('complete'); } // "complete"
);

// Note: we can also "unsubscribe" to this service at any time using:
// subscription.unsubscribe();
```

In the above code, we create an "Observable" by passing a function that contains operations that we wish to **subscribe** to (ie: "be notified of", or "observe").  In the above case, every 1000 ms, the function increases an internal counter ( **i** ) and notifies any subscribers of the change, by invoking the "next" method. 

Once the function is complete, it notifies any subscribers by invoking the "complete" method.

If we wish to "subscribe" to our Observable method we an simply invoke the "subscribe" method on the Observable and pass in 1 (or more) callback functions to be executed on: **"next"**, **"error"** or **"complete"**.

If we run the code above as-is, we should see the output: 

```
next: 0
next: 1
next: 2
next: 3
next: 4
complete
```

If we encounter an error (say, instead of calling "complete" on i==5, we call `observer.error("encountered an Error");` ), our output would instead look like:

```
next: 0
next: 1
next: 2
next: 3
next: 4
error: encountered an Error
```

In addition to simply "subscribing" to any changes identified using the "next" function, RxJS also provides additional methods to control the flow/output of observed data, ie:

* [take()](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-take)
* [filter()](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-filter)
* [delay()](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-delay)
* [distinct()](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-distinct)

Note: To use the above mehods, we need to import each individual method using the syntax:

```
import "rxjs/add/operator/map"; 
import "rxjs/add/operator/filter";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/distinct";
```

For a full reference of all methods available on the Observable object, see: [the official documentation here](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html).

<br>

### Creating a Service to work with Data

At this point, it's useful to visit the [Week 9 example](angular-services-example), as it reinforces the ideas introduced above, ie:

* Correctly creating a service using the Angular CLI
* Working with the HttpClient Module in our services / application
* Creating classes to define the structure of the returned data (and using them to define "Observable" service methods)
* Injecting the service into our Components using their constructor methods
* Subscribing to (injected) Observable service methods and updating Component data
* Rendering Component data in its template

<br>

### Summary, and next actions

In past weeks, we have had a good treatment of *components* and *routing*. The scenarios were simple, in that the goal was to package and display an area of the user interface. Multiple components were created and displayed. 

This week, we learned how to add *services* to an app. This feature gets external (and internal) data and services involved in your app. 

<br>

#### Next actions

In our [getting started example](angular-services-example) document, you will learn to enhance last week's routing example, by adding services. 

<br>
