---
title: Angular routing parameters
layout: default
---

## Routing and parameters

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

The `product-details` segment would typically identify the component or view that is the navigation target. 

The `15` segment *is the route parameter*. It is a variable piece of data - a value - that is calculated or determined by user interaction. The *product-details component* will extract that value, and do whatever it needs to (e.g. fetch the data for product 15) to render the view's content. 

<br>

#### Declaring routes with parameters

The syntax for a route parameter is familiar to anyone who has configured routes in the server-side Express.js framework. Simply prefix the variable or property name with a colon (`:`). 

For example, look at the route object for `product-details` below:

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

#### Linking to parameterized routes

As you have learned, we use the `routerLink` attribute in the `<a>` element when using routing. 

In a ProductList component, we could display a list of products. Each product would have a link to the "product-details" route, and pass the product identifier:

```html
<a *ngFor="let product of products"
  [routerLink]="['/product-details', product.id]">
  {% raw %}{{ product.name }}{% endraw %}
</a>
```

Note that the routerLink directive passes an array which specifies the path, and the *value* of the route parameter. 

Alternatively we could navigate to the route programmatically:

```js
goToProductDetails(id) {
  this.router.navigate(['/product-details', id]);
}
```

<br>

#### Reading route parameters

In a component class, we can read or get the value(s) of route parameters. 

For example, in a ProductDetails component, we can read the parameter, take an action (fetch and display product details) based on the parameter value.

How? We use the *ActivatedRoute* service, in any component that needs to read route parameters. We do three coding tasks:
1. Import statement
2. Inject it into the constructor
3. Read the parameter(s)

<br>

##### 1. Import statement

Here's the import statement:

```ts
import { ActivatedRoute } from '@angular/router';
```

<br>

##### 2. Inject it into the constructor

In the component's constructor, add it to the list of objects that are injected. For example:

```ts
constructor(
  private route: ActivatedRoute
  // there may be other injected objects here
) {
  // your code goes here
}

```

<br>

##### 3. Read the parameter(s)

Somewhere in your component class, you will have methods that will want to read and use the parameter(s). We must know the parameter name that was used in the section above ([Declaring routes...](#Declaring-routes-with-parameters)). 

Continuing from above, assume that we want to read the parameter named `id`. Here's how:

```ts
// fetch a specific product...
// assume that we have a data manager service named "m"
let id = this.route.snapshot.params['id'];
let p = this.m.getProduct(id);
```

> Note: During the viewing of the component, if it is possible that the app's user will navigate to the same component/view but with a different parameter value, then this task becomes a bit more complicated. See [this note](angular-routing-parameters-more) for a possible solution. 

<br>

### Query parameters

Query parameters allow you to pass *optional* parameters to a route. 

For example, consider a scenario in which we have a component that displays a long list of items (customers, products, whatever). If the component uses `*ngFor` to render the items, it will render *all* the items. So, if there are 1,000 items, it will render all 1,000. That might not deliver a good user experience. A common tactic is to "page" the results, by showing fewer items, and giving the user some controls to enable "paging" through the list if items, a group at a time. This technique is often called *pagination*. 

> Note - We plan to post a code example that shows a typical pagination experience. 

A route with a paginated list may have a URL that looks similar to the following. It suggests that the user is viewing "page 3": 

```
localhost:3000/product-list?page=3
```

In summary, the key difference between query parameters and route parameters is that route parameters are *essential* to determining navigation, whereas query parameters are *optional*.

<br>

#### Linking to routes with query parameters

Use the **queryParams** directive, along with **routerLink**, to pass query parameters. 

In the `<a>` element, both are used as attributes. For example:

```html
<a [routerLink]="['product-list']" [queryParams]="{ page: 5 }">View page 5</a>
```

<br>

> Read/skim the [RouterLink queryParams](https://angular.io/api/router/RouterLink#queryParams) property reference documentation for more info. 

<br>

Alternatively, we can navigate programmatically using the Router service:

```js
goToPage(pageNum) {
  // assume that "pageNum" holds a page number value
  this.router.navigate(['/product-list'], { queryParams: { page: pageNum } });
}
```

<br>

> Read/skim the [navigate()](https://angular.io/api/router/Router#navigate) method reference documentation for more info.

<br>

#### Reading query parameters

Reading query parameters is similar to the technique discused above in the [reading route parameters](#reading-route-parameters) section. 

Assume that we want to read the parameter named `page`. Here's how:

```ts
// fetch a subset of products...
// assume that we have a data manager service named "m"
let pg = this.route.snapshot.queryParams['page'];
let products = this.m.getPageOfProducts(pg);
```

> Note: During the viewing of the component, if it is possible that the app's user will navigate to the same component/view but with a different parameter value, then this task becomes a bit more complicated. See [this note](angular-routing-parameters-more) for a possible solution. 

<br>

### More info about routes

[This document](web-api-route-design) has a summary of guidance about designing suitable routes in your web API and app. 

<br>
