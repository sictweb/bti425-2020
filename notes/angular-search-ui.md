---
title: Angular Search UI
layout: default
---

## Angular app "search" UI and UX

This document has information about how to design and implement a "search" feature in the user interface (UI).

This approach performs searches as the user types each character. The table of results in the UI will be replaced. This supports a good-quality user experience (UX). 

<br>

### Before continuing

The web API must have a resource that will deliver a collection of zero or more results. In other words, a "get some" resource. 

<br>

### Angular app bits

We rely on the following:
* The way `[(ngModel)]` naturally works, supporting two-way binding to-and-from a property in the component code 

We need these bits:
* A data manager service method that calls the web API 
* An input field to get the search text 
* Some UI that indicates that there are no results
* One-way event binding to detect a change in the input field
* A method that handles the change event, and calls the data manager service method

To improve the UI and UX, we should do these tasks: 
* Bootstrap styles on the input control 

Let's look at each task.

<br>

#### Two-way binding

We know how `[(ngModel)]` naturally works, supporting two-way binding to-and-from a property in the component code. We use it in our solution. 

Therefore, create a property in the component code that will hold the search text. 

<br>

#### Data manager service method

Write a method in your data manager service. It will send a request to the web API. The request will include the search text, and the response will be a collection of zero or more results. 

The search text MUST be [encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) BEFORE it is sent with the request. 

<br>

#### Input field

In the UI somewhere, add a standard `input` control. It is NOT necessary to enclose it in a `form` element, so don't do that. 

Here are a few suggestions:
* The input type is "search" 
* Two-way binding to the property

<br>

#### Some UI that indicates that there are no results

It's a good idea, and good UX, to indicate that there are no items to display in the table. This could happen for many reasons, including a search that does not return any results. 

In the table body, we suggest that you add another row, and render it only if there are zero items in the search results property. The `*ngIf` structural directive is ideal for this purpose. 

<br>

#### One-way event binding to detect a change

To support searching as the user types characters, we must add an event binding to the `input` element. You would think that we would add a "change" attribute, but in an Angular app, we actually will use "ngModelChange", as shown in the following example:

```html
<input ... (ngModelChange)="doSearch()" ... >
```

This will detect a change event as the user types characters, and call the "doSearch()" method in the component code. 

<br>

#### Method to handle the change event

Continuing, write a method in the component code that will handle the `input` change event. 

We suggest that the code does the search only if the user enters 3 (or 4) or more characters. There's no hard rule on this, but it's usually good UX to do it. 

Also, we suggest that if the search text is empty, then "reload" all terms. 

Obviously, the search itself just calls the data manager service method above. 

<br>

#### Bootstrap styles

Use "inline form" styling. Please note that you do NOT have to add this to a `form` element. We do NOT need a `form` element to support search - we just need an input control. Where do we add the inline styling class? To the parent container of the `input` element. 

The `input` element still should use the form control class styling. 

Assuming that the app is using Bootstrap, add a few rules to the component CSS to improve the UI and UX:
```css
input[type=search] {
  -webkit-appearance: none;
}
input[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: searchfield-cancel-button;
}
```

<br>
