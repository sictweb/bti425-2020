---
title: Angular forms introduction
layout: default
---

## Angular forms introduction - cut content

In the `onSubmit()` function, 
If we wish to pass a reference to the specific form to the onSubmit() event handler, we can use 'ngForm' to assign a reference variable to the form itself, and pass it to onSubmit(), ie:

```html
<form #f='ngForm' (ngSubmit)='onSubmit(f)'>
```

(see: [Template Reference Variables](https://angular.io/guide/template-syntax#ref-vars)) 

If we decide to do this, our onSubmit handler function will look like this:

```js
onSubmit(f: NgForm): void { }
```

Notice that "f" is type "NgForm"? For this to function properly, we must:

```js
import { NgForm } from "@angular/forms";
```
By passing a reference to the form into onSubmit, we gain access to the aggregate value (`f.value`) and validity status (`f.valid`) of the form, as well as user interaction properties like dirty (`f.dirty`) and touched (`f.touched`).

<br>

#### Tracking the "state" of elements using CSS classes

If we use the integrated Developer tools in the browser when testing our form, we will notice that there are CSS classes that get added or removed as we edit the data.  The below table (from the [documentation](https://angular.io/guide/forms#track-control-state-and-validity-with-ngmodel)) illustrates the meanings of each class added.

State | Class if true | Class if false
---|---|---
The control has been visited | `ng-touched` | `ng-untouched`
The control's value has changed | `ng-dirty` | `ng-pristine`
The control's value is valid | `ng-valid` | `ng-invalid`

By using CSS to track the "state" we can now *style* the elements that have not yet been visited / changed or are invalid,  to create a richer and more interactive user experience.

<br>

#### "Valid" Form elements

You will notice that there is a notion of "validity" with a form element, but what exactly makes a form element "valid"? - what controls those CSS classes?  Recall way back in WEB222 when we disused [HTML5 attribute / constraint based validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) 

> Angular uses directives to match these attributes with [validator](https://angular.io/api/forms/Validators) functions in the framework.
> 
> Every time the value of a form control changes, Angular runs validation and generates either a list of validation errors, which results in an INVALID status, or null, which results in a VALID status.
> 
> You can then inspect the control's state by exporting ngModel to a local template variable.

In addition to leveraging the native HTML5 validation attributes, we can also create [Custom Validators](https://angular.io/guide/form-validation#custom-validators), however this is beyond the scope of the lecture today. 

Basically, if we wish to display a message for a specific type of error, we make a template reference to the element we want using "ngModel" (same procedure as above), ie:

```html
<input type="text" class="form-control" name="name" [(ngModel)]="driverData.name" required autofocus #name="ngModel">
```
we can then access it's "error" property, ie: **name.error**.  For a quick glimpse at what error properties get applied, we can place the following diagnostic output somewhere near the "name" control:
{% raw %}
```html
{{name.errors | json}}
```
{% endraw %}
This will initially show "null" as the text "Richard Hammond" is currently entered.  However, if we delete the text, we will see 

```js
{ "required": true } 
```

appear in our diagnostic code.  We can then use this to conditionally show a warning the moment the user violates the validation rule, using the code:

```html
<div *ngIf="name.errors && name.errors.required">
  <strong>Warning:</strong> "Full Name:" is required.
</div>
```

<br>

( summary of the big ideas )

When writing a form, *always* declare a template variable on the opening `<form>` tag. 

<br>
