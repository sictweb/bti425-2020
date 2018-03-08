---
title: Angular date pipe
layout: default
---

## Angular date pipe

> This page is being edited.  
> This notice will be removed when the edits are complete.

Early in this course, we used the [Moment.js](https://momentjs.com/) library to work with dates. We can still use that, but we may not have to, for simple tasks like date formatting. 

We could use standard JavaScript and [string formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to build a date string like "2018-03-15" from [Date object methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), but the coding feels like we're working around something rather than trying to do something simple. 

Angular has a *date pipe* that helps with the date formatting task.

<br>

### Using DatePipe

A common use case is to format a date in a view. 

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

( requires just a bit more work )

( more to come )

<br>

### More information

Read more about [Angular pipes](https://angular.io/guide/pipes) in this document. 

Read more about the concept of [pipes](https://en.wikipedia.org/wiki/Pipeline_(computing)) in this brief document. 

<br>
