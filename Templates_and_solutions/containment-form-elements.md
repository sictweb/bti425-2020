## Containment - form elements

This document is for Angular apps that use the HTML Forms elements, and the Bootstrap CSS rules.

> This document is being edited.  
> This notice will be removed when the edits are complete.  

To be documented:
* Forms, overall
* Form elements, specific

<br>

### Form element (container)

Briefly explain template variables again  

```html
<form (ngSubmit)='onSubmit()' #f='ngForm'>
    <!-- Form elements -->
    <button class="btn btn-primary" type="submit" [disabled]='!f.form.valid'>Create</button>
</form>
```

Notes about this:
* The form submit action will be processed by the `onSubmit()` method
* `#f` is a *template variable*, and a reference to the form object itself; this enables us to de-reference the form object in child/decendent elements (notice that the button element uses the reference to the form)
* The disabled state of the button is dependent on the validity of all child/decsendent (contained) elements

> Do we need any Bootstrap form classes on the `<form>` element?

> When should we consider passing the "f" template variable as an argument to the onSubmit() method?

What about overall width? Surround the form with suitable containment. For example, a 2/3 width on a wide device, but full width on smaller devices:

```html
<div class='row'>
    <div class='col-md-8 col-sm-12'>
        <!-- Form code -->
    </div>
</div>
```

<br>

### General approach for coding form elements

Add HTML5 attributes that are recognized and used.  
Use `id` to make the `<label>` element happy.  
Use `name` to make Angular happy.  
Add Angular-defined attributes.  
Code the data-binding relationship.  
If you need access to the element and/or its bound data, then create a template variable.  

> Angular-defined attributes are actually directives. 

> Look at whether ALL form elements have a common "value" property; look at whether there's a "base" class for an HTML Forms element; look for commonalities / consistencies.

> Look for the reason why Angular needs/wants the `name` attribute to be used.

<br>

#### General approach to Bootstrap classes  for form elements

Always do the following:
* Contain in a div with the `form-group` class
* Use a label, configured with...
    * Use class `control-label`
    * `for` attribute that points at the `id` of the element that it's associated with 
* The element itself gets a `form-control` class
* And it must have a value for both the `id` and `name` attributes (you typically use the same value)

Then, depending on the situation, consider doing the following:
* Add HTML and Angular attributes
* Add and configure validation error messages

You can see an example of the result in the "Input - text" section just below. 

<br>

### Form elements

A hopefully-complete survey.

<br>

#### Input - text

```html
<div class="form-group">
  <label class="control-label" for="name">Full Name:</label>
  <input class="form-control" [(ngModel)]='driverData.name' id="name" name="name" #name="ngModel" required pattern='.{3,}'
    maxlength="50" autofocus>
  <div *ngIf='name.invalid && (name.dirty || name.touched)' class='alert alert-danger'>
    <div *ngIf='name.errors.required'>Full Name is required, 2 to 50 characters</div>
    <div *ngIf='name.errors.pattern'>Full Name must be at least 3 characters</div>
  </div>
</div>```

The "Form elements, specific" coverage must document:
* Size (width)
* Input field, for various kinds of input data (text, number, email, url, range, password, date)
* Maybe general rules for these (pre-load etc.) (may have to be deferred to the future)
* Role and meaning of label element
* Text area, number of rows
* General rules for item selection elements (data source, value, visible text, existing selections, etc.)
* Select-option, dropdown style (including "select..." handling)
* Select-option, listbox style, single or multi select
* Input-radio group
* Input-checkbox single (for a boolean true/false)
* Input-checkbox group

For the fields, give hints about the placement of validation rules etc. 

Maybe include a summary of the validation attributes and Angular validation helpers.

The sections below provide guidance on how to implement this structure.

<br>

### MAIN CONTENT AREA

TBA 

<br>

#### SUB-MAIN AREA

TBA

<br>
