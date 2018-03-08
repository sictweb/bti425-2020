---
title: Angular date pipe
layout: default
---

## Angular date pipe

Early in this course, we used the [Moment.js](https://momentjs.com/) library to work with dates. We can still use that, but we may not have to for simple tasks like date formatting. 

We could use standard JavaScript and [string formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to build a date string like "2018-03-15" from [Date object methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), but the coding feels like we're working around something rather than trying to do something simple. 

Alternatively, Angular has a *date pipe* that helps with the date formatting task.

<br>

### Using DatePipe

A common use case is formatting a date in a view. 

In other words, the component template is being edited, and a date string - which might be in an unfriendly ISO 8601 format - must be rendered in a different format. For example, the source string might be:

```
2018-03-15T12:34:56Z
```

...and we want it to look like this...

```
Thursday, March 15, 2018
```

Here's the recipe for this use case.

##### 1. Import the date pipe

In the component class, import the date pipe:

```ts
import { DatePipe } from "@angular/common";
```

##### 2. Decide on the format

Look at the [DatePipe documentation](https://angular.io/api/common/DatePipe). Decide on the format you want to use. 

##### 3. Use the date pipe

In the component template, use the data pipe in the binding expression. For example:

```html
<dt>Birth date</dt>
<dd>{%raw%}{{ c.birthdate | date:'longDate' }}{%endraw%}</dd>
```

<br>

#### Using DatePipe in a component class

In a component template, there are situations where the binding expression (specifically the right side of an expression) will not allow a pipe. For example, when doing two-way binding, you would think that the syntax above would work. No, it does not:

```html
<div class="form-group">
  <dt>Birth date</dt>
  <dd>
    <!-- The following will NOT work -->
    <input type="date" class="form-control" [(ngModel)]="c.birthdate | 'yyyy-MM-dd'" placeholder="In Firefox and Chrome, click here for a date picker">
  </dd>
</div>
```

Instead, we have to do some work in the component class. Here's how:

##### 1. Add the date pipe feature to the whole app 

In the app module (`app.module.ts`), look at the `@NgModule` decorator. One of its properties is the `providers` array. Add "DatePipe" to that array:

```ts
providers: [DataManagerService, DatePipe],
```

##### 2. Import and inject the date pipe into each component class that needs it

As you did above, import the date pipe into each component class that needs it. 

Then, in its constructor, add a private date pipe variable, something like this:

```ts
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private m: DataManagerService,
  private dp: DatePipe
) {
  // Etc.
```

##### 3. Decide on the format

As above, look at the [DatePipe documentation](https://angular.io/api/common/DatePipe). Decide on the format you want to use. 

##### 4. Use the date pipe to "transform" a date string into a nicely-formatted string

Use the data pipe's "transform" method to do the job. For example:

```ts
// Date formatting
this.c.birthdate = this.dp.transform(this.c.birthdate, 'yyyy-MM-dd');
```

It is OK to change/mutate the property value. Alternatively, it is also OK to create a new variable to hold the transformed value (which leaves the original property value unchanged). Your choice. 

Enjoy!

<br>

### More information

Read more about [Angular pipes](https://angular.io/guide/pipes) in this document. 

Read more about the concept of [pipes](https://en.wikipedia.org/wiki/Pipeline_(computing)) in this brief document. 

<br>
