---
title: Angular services introduction
layout: default
---

## Angular services, introduction

> This document is still being edited.  
> This notice will be removed when the edits are complete.  

An Angular *service* is a code asset that performs a task. It does not have a user interface. Often its main task is to perform data service operations (e.g. fetch, add, edit, transform). 

A service can be used by *any* of your app's components. Its use promotes a layered system architecture, also known as a [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). Enables you to write the code once, and use it in many places. 

<br>

**More about components, and the role of services**

Consider a scenario where an app has many components. Some of the components need to display data that's stored in a database on a server somewhere out there. The data could be fetched in a couple of ways:
1. Wrong way - add the same data-handling code to each component (so that multiple components have the same repeated block of data-handling code)
2. Right way - add the data-handling code to a single *service*, and then call the service from each component

A component should be lean and focused. Its job is to enable the user experience and nothing more. It mediates between the *view* (rendered by the template) and the *application logic* (which often includes some notion of a model). A good component presents properties and methods for data binding. It delegates everything nontrivial to services.

Angular helps you follow these principles by making it easy to factor your application logic into services and make those services available to components through dependency injection.

<br>

**Learning pathway**

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

**In summary...**

As a wrap-up, rely on these course notes to guide your learning path, and refer or link you out to other documentation sets. Following that path will enable you to make better use, in the future, of the supporting documentation introduced in this section. 

<br>

### Adding a service to an app

We can use the Angular CLI to add a service. In the example below, a service named "DataManager" is added to the app:

`ng g s DataManager --module=app --spec false`

As you have seen when creating components, a CamelCase name is transformed into lower case with dash word separators, when it generates the source code files. 

A new source code file is created, named `data-manager.service.ts`. Its contents:

```js
import { Injectable } from '@angular/core';

@Injectable()
export class DataManagerService {

  constructor() { }

}
```

The `@Injectable()` decorator indicates that this service is intended to be "injected" into another component or service at runtime. We'll have more to day about "injection" soon. 

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

Not included in the above is a task that would *materialize* the data. Yes, that is necessary too. In the example, you will see at least two examples; one will create local (in memory) data in the service class constructor, and the other will fetch data from a web service. 

<br>

#### Use a service

A service can be used by *any component*. There are typically about four coding tasks to be done in the component class, and then another in its HTML template. The four tasks are:

Import statement: As you would expect, we must `import` the service, to be able to use its members. 

Constructor parameter: We "inject" the service into the constructor, as a parameter. More about this in the next section. 

Property to hold the data: The main goal of our getting-started work is to work with data. Therefore, a component will need one or more properties to hold the results of a call to a web service resource. 

Get the data: In our examples, we will fetch the data when the component is loaded/initialized. Later (but soon), we'll learn how to fetch data as the result of user interaction. 

Incidentally, the HTML template coding task will require us to add/edit elements to display/render the data that was fetched. 

<br>

### Dependency injection

Above, you were introduced to the `@Injectable` decorator, which indicates that a service is intended to be "injected" into another component or service at runtime. 

The Angular system is has dependency injectio (DI) built in. It includes an "Injector", which is a module that knows about and maintains a container of *service** instances that it has previously created. A service is created when it is accessed for the first time.

The idea behind dependency injection is very simple. You have a component that depends on a service. In the component's code, you do not create that service yourself. Instead, you request one in the constructor (as a parameter), and the framework will provide you one. This leads to more decoupled code, which enables testability, and other great things.

During compilation, Angular looks at constructor types, and "providers", which are declarations. Together, those are the services that the injector maintains.

<br>

### HttpClient and asynchrony

HttpClient is Angular's mechanism for communicating with a remote server over HTTP.

From the official documentation:

> With `HttpClient`, `@angular/common/http` provides a simplified API for HTTP functionality for use with Angular applications, building on top of the `XMLHttpRequest` interface exposed by browsers. Additional benefits of `HttpClient` include testability support, strong typing of request and response objects, request and response interceptor support, and better error handling.

To make HttpClient available everywhere in the app:
1. Open the root AppModule for editing,  
2. Import the HttpClientModule symbol from @angular/common/http,  
3. Add it to the @NgModule.imports array.

<br>

#### Asynchronous by nature

As you have learned in the past, communication between systems over HTTP is asynchronous in nature. When we send a request, we just do not know when - or if - we will receive a response. 

In our apps - in our components - the user interface must remain responsive. A call to a web service must not block or freeze the user interface.

All the parts of our solutions will respect this requirement. In fact, you'll learn that the guidance will result in a flexible yet correct approach to handling interaction with a web service. 

#### The get() function

[HttpClient](https://angular.io/api/common/http/HttpClient) includes a `get()` function. Guess what it does?

This is what we will use in our getting-started examples. In its simplest usage, we do two things:
1. Specify the shape of the data that we're expecting
2. Specify the URL
 
The `get()` function returns an *observable*, to be explained in detail soon. In essence, it is a stream of asynchronous data. The data could be a single object, or a collection. (That's determined by the web service resource.)

For example, you will work with a function, in the service, that looks like the following. It will request a collection of "users" from a web service:

```js
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
  }
```

In the component, the stream of data - a collection of users - will be transformed into a more familiar array object that we can immediately work with. 

<br>

### Observable (from RxJS)

<br>
<br>
<br>
<br>
<br>
<br>

> Hey Pat...  
> I have to pause here at this point.  
> I will have about an hour tomorrow morning to finish these sections off as best I can.  

<br>
<br>
<br>
<br>
<br>
<br>


Already part of an Angular project - we don't have to go fetch it or add it in

Observable is one of the key classes in the RxJS library.

In a later tutorial on HTTP, you'll learn that Angular's HttpClient methods return RxJS Observables. In this tutorial, you'll simulate getting data from the server with the RxJS of() function.

[Learn about Observables](http://reactivex.io/rxjs/manual/overview.html)

Observable.subscribe() is the critical difference.

The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.

That won't work when the HeroService is actually making requests of a remote server.

The new version waits for the Observable to emit the array of heroes which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property.

This asynchronous approach will work when the HeroService requests heroes from the server.

The callback is the parameter in the `subscribe()` function. It's an arrow function.

```js
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```

( more to come )

<br>

### Input directive

> Some from Victor Savkin, The Core Concepts of Angular 2

A component has input and output properties, which can be defined in the component decorator or by using property decorators.

Data flows into a component via input properties. Data flows out of a component via output properties.

Input and output properties are the public API of a component. You use them when you instantiate a component in your application.

? 

You can set input properties using property bindings, through square brackets. You can subscribe to output properties using event bindings, through parenthesis.

( more to come )

<br>

### Data binding in component templates

( more to come )

<br>

### Structural directives, *ngFor and *ngIf 

Now useful, because we have data  

( more to come )

<br>

### Routing parameters

Now useful, because we can see master-detail  

Most web APIs support a get by id request in the form api/hero/:id (such as api/hero/11). Add a HeroService.getHero() method to make that request:

```js
/** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}
```

There are three significant differences from getHeroes().

it constructs a request URL with the desired hero's id.
the server should respond with a single hero rather than an array of heroes.
therefore, getHero returns an Observable<Hero> ("an observable of Hero objects") rather than an observable of hero arrays .

( more to come )

<br>

### Error handling

Now useful, because we can see master-detail, and a specific fetch may fail  
Prepares us for other errors in the future  

( more to come )

<br>

### Summary, and next actions

In past weeks, we have had a good treatment of *components* and *routing*. The scenarios were simple, in that the goal was to package and display an area of the user interface. Multiple components were created and displayed. 

This week, we learned how to add *services* to an app. This feature gets external (and internal) data and services involved in your app. 

<br>

**Next actions**

In our [getting started example](angular-services-example) document, you will learn to enhance last week's routing example, by adding services. 

<br>
