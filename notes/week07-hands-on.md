---
title: Week 7 in-class hands-on exercise
layout: default
---

## Week 7 in-class hands-on exercise

Goals or objectives: 
* To an existing app, add the ability to work with a web service
* Get started with form element interaction

<br>

### Overview

Last week, you completed a hands-on exercise. This week, we build upon that work. Fetch your work from last week, or fetch the solution in the repo's *Templates and solutions* folder. 

Today, the goal is to add the ability to work with a web service (your Assignment 1 web service). In addition, you will get started with form element interaction. 

<br>

### Fetch the app

Fetch your work from last week, or fetch the solution in the repo's *Templates and solutions* folder.

Open it for editing. Then, start/run it:

```bash
ng serve --open
```

Leave it running, and check it as you make changes. If the display goes blank/white, there's an error, so show the browser dev tools, and its console. 

<br>

### Make some components

In this section, you will generate three new components:
1. Person list (for "get all")
2. Person detail (for "get one")
3. Person add (for "add new")

Remember, creating a component is best done as follows. First, make sure you're in the project folder. Then create three components.

```bash
ng g c xxx-name-of-new-component-xxx --flat -S
```

<br>

> Remember the tip from the notes:  
> If you're creating a component that should have a multi-word name, use Pascal Case. For example:  
> ```ng g c AboutMe --flat -S```

<br>

Regarding the existing nav menu, configure the router module, and add choices for the "get all" and "add new" use cases to the nav menu. Test your work. 

<br>

### Overview, work with a web service

Here's an overview of the work we will do in this section:
1. Add support for making HTTP requests
1. Write an interface
2. Write a service
3. Write the component

We write an TypeScript "interface" to describe the shape of the data from the web service. 

We write an Angular "service" to interact with the web service.

We write the component code, which fetches from the Angular service, and renders the results in the UI. 

<br>

#### Add HTTP request bits

We must add, to the app, support for making HTTP requests. While we can use the Fetch API, the Angular team recommends that we use [HttpClient](https://angular.io/guide/http). 

Open `app.module.ts` for editing. Add an import statement, and edit the decorator:

```ts
// Add this after the BrowserModule import
import { HttpClientModule } from '@angular/common/http';

// In the decorator's "imports" array, add it
  imports: [
    BrowserModule,
    HttpClientModule,
    // etc.
  ],
```

<br>

#### Write interface

In an Angular app, we MUST know the shape (i.e. the *type*) of the data we're working with, including data from a web service. 

To implement this requirement, TypeScript offers both a [class](https://www.typescriptlang.org/docs/handbook/classes.html) and an [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html). How to decide?
* Type-checking only? Use an interface
* Type-checking AND implementation/behaviour? Use a class

> Source: [Post by Todd Motto](https://toddmotto.com/classes-vs-interfaces-in-typescript)

In terminal, create a source code file named `dataModelClasses.ts` (in the `src/app` folder obviously). Open and study the shape of the responses from your web service. Open the new file for editing. Carefully write the interface code that describes the shape of one "person" object. It will look something like this:

```ts
export interface Person {
  _id?: string;
  firstName: string;
  lastName: string;
  // other properties go here
}
```

> Note: The question mark that follows the property name indicates that the value is optional. In other words, it can be null. It will be null in the "add new" use case, when we are sending new data, right?

<br>

#### Write service

Use the Angular CLI to generate a service. For example:

```bash
ng g s dataModelManager --flat -S
```

Open it for editing. Add these to the existing import statement(s):

```ts
import { HttpClient } from "@angular/common/http";
import { Person } from "./dataModelClasses";
import { Observable } from 'rxjs';
```

Update the constructor signature, by adding an argument:

```ts
constructor(private http: HttpClient) { }
```

Add a new string property to the class, to hold the URL:

```ts
private url: string = 'https://your-web-api.herokuapp.com/api/persons';
```

Add a new "get all" method to the class:

```ts
personsGetAll(): Observable<Person[]> {
  return this.http.get<Person[]>(this.url);
}
```

What is this code doing?
* It does not need arguments, because it does not have passed-in data 
* Its return type is an "Observable" of type "Person[]" (i.e. a collection of Person objects)

What's an "Observable"? For us, and for now, and our web service interaction, you can think of it as a kind of *Promise* that better serves the needs of Angular apps. [This note](https://angular.io/guide/comparing-observables#observables-compared-to-promises) has more information.

> There is an active proposal to add Observable to the next version of the JavaScript language. 

<br>

#### Write component - class code

Open the person list component - class code - for editing. Add these to the existing import statement(s):

```ts
import { Person } from "./dataModelClasses";
import { DataModelManagerService } from './data-model-manager.service';
```

Declare a property that will hold the collection of Person objects. This propery will be accessible in the (HTML) template code. 

```ts
persons: Person[];
```

Update the constructor signature, by adding an argument:

```ts
constructor(private m: DataModelManagerService) {
```

In React, we added code to a `componentDidMount()` method, which fetched data from a web service. Here, we do someting similar. 

Add the code to the `ngOnInit()` method:

```ts
this.m.personsGetAll().subscribe(p => this.persons = p);
```

What is this code doing?
* It is calling the `subscribe()` method of the `personsGetAll()` function's return value
* This actually executes the "get" (fetch)
* The (callback) function that we pass into the `subscribe()` method tells it how to handle the results (which is a collection of Person objects)

> If you want to see a bit of feedback in the console, replace that single-line statement with the following multi-line statement:
> ```ts  
> this.m.personsGetAll().subscribe(p => {  
>    console.log(p);  
>    this.persons = p;  
> });  
> ```

<br>

#### Write component - template code

Open the person list component - template code - for editing. Add a table structure with enough columns to make you happy. 

Then, dereference the contents of the "persons" collection (in the class code) with the following `*ngFor` directive, which makes a new `tr` element for each "person" object:

```html
<tr *ngFor='let p of persons'>
  <td>{{ p.firstName + ' ' + p.lastName }}</td>
  <td>{{ p.birthDate }}</td>
  <td>{{ p.creditScore }}</td>
  <td>{{ p.rating }}</td>
</tr>
```

<br>

Test. It should work. Yay!

<br>
