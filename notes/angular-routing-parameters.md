---
title: Angular routing parameters
layout: default
---

## Routing and parameters

> This document is being edited.  
> This notice will be removed when the edits are complete.  

Recently, we learned how to define routes to enable navigation among components (views). 

Then, as we learned in Assignment 3 and in BTI325, there are ways to work with variable data within our routes, as a *route parameter*. In this document, we learn more about this technique, and learn another, *query parameter*. 

Some of the following content was based on the excellent [Rangle.io](https://rangle.io/) documentation for: 
* [Route Parameters](https://angular-2-training-book.rangle.io/handout/routing/routeparams.html), and 
* [Query Parameters](https://angular-2-training-book.rangle.io/handout/routing/query_params.html) 

<br>

### Route parameters

A route parameter is a value in the URL. 

For example, consider this URL segment (which has omitted the [scheme and host](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax) information):

```
/product-details/15
```

The ` product-details ` segment would typically identify the component or view that is the navigation target. 

The ` 15 ` segment *is the route parameter*. It is a variable piece of data - a value - that is calculated or determined by user interaction. The *product-details component* will extract that value, and do whatever it needs to (e.g. fetch the data for product 15) to render the view's content. 

<br>

### Declaring routes with parameters

The syntax for a route parameter is familiar to anyone who has configured routes in the server-side Express.js framework. Simply prefix the variable or property name with a colon (` : `). 

For example, look at the route object for ` product-details ` below:

```ts
export const routes: Routes = [
  // other routes may already be here...
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
```

<br>

### Linking to parameterized routes

As you have learned, we use the ` routerLink ` attribute in the ` <a> ` element when using routing. 

In a ProductList component, we could display a list of products. Each product would have a link to the "product-details" route, and pass the product identifier:

```html
<a *ngFor="let product of products"
  [routerLink]="['/product-details', product.id]">
  {% raw %}{{ product.name }}{% endraw %}
</a>
```

Note that the routerLink directive passes an array which specifies the path, and the *value* of the route parameter. Alternatively we could navigate to the route programmatically:

```js
goToProductDetails(id) {
  this.router.navigate(['/product-details', id]);
}
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## ( more to come )

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Reading Route Parameters

The ProductDetails component must read the parameter, then load the product based on the ID given in the parameter.

The ActivatedRoute service provides a params Observable which we can subscribe to to get the route parameters (see Observables).

```js
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-details',
  template: `
    <div>
      Showing product details for product: {{id}}
    </div>
  `,
})
export class LoanDetailsPage implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
```

The reason that the **params** property on **ActivatedRoute** is an Observable is that the router may not recreate the component when navigating to the same component. In this case the parameter may change without the component being recreated.

<br>

#### Passing Optional Parameters

Query parameters allow you to pass optional parameters to a route such as pagination information.
For example, on a route with a paginated list, the URL might look like the following to indicate that we've loaded the second page:

```
localhost:3000/product-list?page=2
```
The key difference between query parameters and route parameters is that route parameters are essential to determining route, whereas query parameters are optional.

##### Passing Query Parameters

Use the **queryParams** directive along with **routerLink** to pass query parameters. For example:

```html
<a [routerLink]="['product-list']" [queryParams]="{ page: 99 }">Go to Page 99</a>
```

Alternatively, we can navigate programmatically using the Router service:

```js
goToPage(pageNum) {
    this.router.navigate(['/product-list'], { queryParams: { page: pageNum } });
}
```

<br>

##### Reading Query Parameters

Similar to reading route parameters, the Router service returns an Observable we can subscribe to to read the query parameters:

```js
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-list',
  template: `<!-- Show product list -->`
})
export default class ProductList {
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 0;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['product-list'], { queryParams: { page: this.page + 1 } });
  }
}
```

<br>

### Summary, and next actions

In past weeks, we have had a good treatment of *components* and *routing*. The scenarios were simple, in that the goal was to package and display an area of the user interface. Multiple components were created and displayed. 

This week, we learned how to add *services* to an app. This feature gets external (and internal) data and services involved in your app. 

<br>

**Next actions**

In our [getting started example](angular-services-example) document, you will learn to enhance last week's routing example, by adding services. 

<br>
