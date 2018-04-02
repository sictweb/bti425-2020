---
title: Angular forms guidance and more information
layout: default
---

## Angular template forms guidance and more information

This content is for *template driven forms*. When you read "forms", it means "template driven forms".

<br>

### Form setup

A form is always inside a component. We suggest the following containment structure, which will get you started (and then you can modify it if you wish):

```html
<div class="row">
  <h1>Do something</h1>
  <h4>Enter information, and click the button</h4>
  <div class='col-md-8 col-sm-12'>
    <form (ngSubmit)='onSubmit()' #f='ngForm'>

      <!-- Form elements go here -->

      <a class="btn btn-default" routerLink='/routeurl'>Back to list</a>
      <button class="btn btn-primary" type="submit" [disabled]='!f.form.valid'>Do something</button>

    </form>
  </div>
</div>      
```

A few comments about this containment structure:
* On a wide viewport, the form will be about 2/3 the width
* On a narrow viewport (i.e. a phone), the form will be full width
* The `<form>` tag includes Angular-specific attributes
* It includes a back button
* The `submit` button includes an Angular-specific form validation check

As you can see, there is a `<button type='submit'...` element. Look up at the opening `<form...` tag, at the `(ngSubmit)='onSubmit()'` attribute. That's the combination that will submit the user-entered data to the `onSubmit()` method in the component class. (You must write that method.)

<br>

### Form elements that we can use

Inside a form element, we can use these elements:

```text
label
input
textarea
select - option
```

We can use all of the `input` types ([documented here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)). We should (must) use them, so that we get the right behaviour on all devices (e.g. a numbers-only keyboard on a smartphone when using an `<input type='number'>` element). 

<br>

### Usable HTML attributes

These attributes can be used in most "input" elements:
* autofocus
* class
* disabled
* id (used by the `label` element)
* multiple
* name (used by Angular)
* placeholder
* size (for *select option multiple* list boxes only)
* step
* value

A few cannot be used (yet?) in the `<input type='number'` and `<input type='date'` elements in Angular template driven forms:
* min
* max

However, we can write a *custom validator* to get these behaviours.

<br>

### Available Angular attributes

We often use two-way data binding on an element. Its value is a reference to a property in the component class. For example:

```html
... [(ngModel)]='customerName' ...
```

Also, if we use validators (and we should), we must use a *template reference variable*. For example:

```html
... #name='ngModel' ...
```

<br>

### Available Angular validators

[The API docs](https://angular.io/api/forms/Validators) show this list of available validators which have some use. Many "replace" the standard HTML attributes:
* required
* email
* minLength
* maxLength
* pattern

There is now a `min` and a `max` validator for numbers, but it CANNOT be used in template driven forms. In [the API docs](https://angular.io/api/forms/Validators), each states that it "exists only as a function, not as a directive", which means that we cannot use it in the template markup. 

<br>

### UI and UX hints

Everyone recommends that you use `label` elements in your forms.

If you want the user to enter content that fits on one line, then you can use a standard `input` element. 

For all elements, make sure to implement *safe coding* principles, by constraining the input (length, type). 

If you want the user to enter longer content, then consider using a `textarea` element. 

For numeric input, where the range is reasonably small (e.g. about 20 values maximum), consider using an `<input type='range'>` element, configured by attributes (min, max, step). 

For numeric input, where the range is large, use an `<input type='number'>` element, and custom validators.

To configure a boolean (yes/no, true/false, etc.), consider using an `<input type='checkbox'>` element. 

<br>

#### Item selection

An item-selection element enables a user to select zero or more items from a list. Each item on the list has "text" that is visible in the user interface. For example, a customer name. And, each item has a non-visible "value" that is used as a unique identifier in your component's class code. 

If the user must choose one item from a collection, these are the usable item-selection elements:
* select - option (i.e. a dropdown list)
* select (size > 1) - option (i.e. a list box)
* radio group

When a selection is made, the *value* of the selected item will be assigned to the component class property (that was configured in the two-way data binding attribute). 

If the user must choose more than one item, this is the usable item-selection element:
* select (size > 1, multiple) - option (i.e. a list box)

> Note: You would think that a *checkbox group* would work too. At the time of writing (early April 2018), it appears that this approach is not a straightforward task. This note will be updated if/when a suitable solution is determined. 

When a selection is made, the *value* of *all selected items* will be assigned to the component class property, which must be an array. 

<br>

### Form element containment, with validation

For consistency, all form elements should use the same containment strategy. The validation area is just below the form, and is hidden until a validation error happens.

In general, use the following. It shows how to configure a standard text box to collect a name.

```html
<div class="form-group">

  <!-- Label for the element -->
  <label class="control-label" for="name">Customer Name:</label>

  <!-- The element code goes here -->
  <input class="form-control" id="name" name="name" >
    <!-- Add more attributes as needed -->
    <!-- Two-way binding -->
    <!-- Template reference variable -->
    <!-- HTML attributes that work (e.g. autofocus etc.) -->
    <!-- Angular attributes -->

  <!-- Validation error area -->
  <div *ngIf='name.invalid && (name.dirty || name.touched)' class='alert alert-danger'>
    <!-- The code below is situation-dependent - think before coding -->
    <div *ngIf='name.errors.required'>Customer Name is required, 3 to 100 characters</div>
    <div *ngIf='name.errors.pattern'>Customer Name must be at least 3 characters</div>
  </div>

</div>
```

<br>

#### Styling for validation

We suggest adding a few style rules to visually indicate form elements that are valid and invalid. In the `styles.css` file (in the project root), add these rules:

```css
/* Forms classes */

.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
```

<br>
