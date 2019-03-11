---
title: Angular forms introduction
layout: default
---

## Angular forms introduction

In recent weeks, we have had a straight-line topic treatment of components, routing, and services. However, we have mostly avoided the topic of *user interaction*, but now it's time to do that, now that we have a good foundation on which to build. 

As the [official Angular documentation](https://angular.io/guide/forms) states, "Forms are the mainstay of business applications. You use forms to log in, submit a help request, place an order, book a flight, schedule a meeting, and perform countless other data-entry tasks."

<br>

### Topic coverage plan

* First, we describe the three ways to do forms in Angular. We will use only one, *Template-driven Forms*. 

* Next, we refresh our memory by showing a simple and standard HTML Form. 

* Then, we show how to configure an Angular app to use HTML forms.

* Once the Angular app configured properly, we will add some data in a Component to be used with the form.

* Finally, we will show the changes required to the form as well as each of the standard form elements to "bind" our data (using "two-way" binding) and "submit" the form.

Once this is compete, a brief summary of the highlights and dev tips are presented. 

<br>

### Three ways to do forms in Angular

Angular offers *three* ways to do forms:
1. Template-driven (covered in this course)
2. Reactive  
3. Dynamic  

In this course, we will work only with *Template-driven Forms*.

<br>

#### Template-driven Forms

This approach takes advantage of your knowledge of, and skills with an HTML template in a component. 

It builds upon your experience with one-way read-only data binding (using `{%raw%}{{ curly braces syntax }}{%endraw%}`, or its square-bracket form for element attributes, `[value]='expression`), by going further with two-way data binding. 

<br>

#### Reactive Forms

This approach features more programming in the component class, where each element of the form is explicitly declared, configured, and managed. This is done mostly in the (TypeScript) component class source code file. 

We will NOT work with Reactive Forms in this course. After understanding and working with Template-driven Forms, you will be able to learn what you need to, if or when you need to, work with Reactive Forms. 

<br>

#### Dynamic Forms

This approach is interesting, in that metadata on the data model is used to generate forms dynamically. This replaces the cycle of editing in Template-driven Forms, where we go back-and-forth between the component's class code and its HTML template, when developing a form. 

As above, we will NOT work with Dynamic Forms in this course. After understanding and working with Template-driven Forms, you will be able to learn what you need to, if or when you need to, work with Dynamic Forms. 

<br>

### "Standard" HTML Form, *without* Angular

Here's a simple form, in pure HTML5, which features all of the most typical form elements, ie:
* input (type: "text", "checkbox", "radio")
* textarea
* select (single / "multiple")

It also uses the bootstrap "forms" classes, ie "form-group" and "form-control" for formatting:

```html
<form action="/path/to/handler" method="post">

  <div class="form-group">
    <label class="control-label" for="name">Full Name:</label>
    <input type="text" class="form-control" id="name" name="name" required autofocus>
  </div>

  <div class="form-group">
    <label class="control-label" for="description">Description:</label>
    <textarea class="form-control" id="description" name="description" rows="6"></textarea>
  </div>

  <div class="form-group">
    <label class="control-label" for="ownedTransportation">Owned Transportation:</label>
    <select multiple class="form-control" id="ownedTransportation" name="ownedTransportation">
      <option value="C">Car</option>
      <option value="B">Bus</option>
      <option value="M">Motorcycle</option>
      <option value="H">Helicopter</option>
    </select>
  </div>

  <div class="form-group">
    <label class="control-label" for="favouriteTransportation">Favourite Transportation:</label>
    <select class="form-control" id="favouriteTransportation" name="favouriteTransportation">
      <option value="C">Car</option>
      <option value="B">Bus</option>
      <option value="M">Motorcycle</option>
      <option value="H">Helicopter</option>
    </select>
  </div>

  <div class="form-group">
    <label for="" class="control-label">Has a driver's license?</label>
    <div class="checkbox">
      <label class="control-label" for="driverLicence">
        <input type="checkbox" id="driverLicence" name="driverLicence" />Yes, if checked</label>
    </div>
  </div>

  <div class="form-group">
    <label for="" class="control-label">Vehicle usage:</label>
    <div class="radio">
      <label class="control-label" for="vehicleUseBusiness">
        <input type="radio" id="vehicleUseBusiness" name="vehicleUse" value="business" /> Business
      </label>
    </div>
    <div class="radio">
      <label class="control-label" for="vehicleUsePleasure">
        <input type="radio" id="vehicleUsePleasure" name="vehicleUse" value="pleasure" /> Pleasure
      </label>
    </div>
    <div class="radio">
      <label class="control-label" for="vehicleUseOther">
        <input type="radio" id="vehicleUseOther" name="vehicleUse" value="other" /> Other
      </label>
    </div>
  </div>

  <button class="btn btn-primary" type="submit">Create</button>

</form>
```

<br>

It's possible that you have written hundreds of these forms. It's a very well-understood process. 

<br>

### Get the code example

As you work through this document, get the `forms-intro` code example from the repo.

<br>

### Configuring an Angular app to use HTML forms

Before making any changes to the form, we must add the Angular forms-handling bits to the project. In the documentation's [Revise *app.module.ts*](https://angular.io/guide/forms#revise-appmodulets) section, we do a task with two related steps:

1. Import the FormsModule
2. Add FormsModule to the "imports" array

<br>

### Configure a data model for the form

Next, we *always assume* that an Angular form is backed by a data model. For typical scenarios, the data model can be defined in the same source code file as the component class that interacts with the form. The data model's values are *made available to* the form when it is built and rendered, and *updated by* the form during user interaction and submission. 

For example, consider the following component class.  It contains all the data that is required to populate our "standard" HTML form, including some classes that define the "shape" of the data model, as well as some sample data that we can use to "bind" to our form:

```js
import { Component, OnInit } from '@angular/core';

class Driver{
    name: string; 
    password: string;
    description: string; 
    ownedTransportation: string[]; 
    favouriteTransportation: string; 
    driverLicence: boolean; 
    skillLevel: number;
    vehicleUse: string; 
}

class Option{
  value: string;
  text: string;
}

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() { }
 
  // the data that will be used in the form
  driverData: Driver;

  // Define the preset list of "transportation" options
  transportationList: Option[] = [
    {value: "C", text: "Car"},
    {value: "B", text: "Bus"},
    {value: "M", text: "Motorcycle"},
    {value: "H", text: "Helicopter"}
  ];

  ngOnInit() {

    // Populate the "driverData" with some static data (this would normally come from a data manager service)
    this.driverData = {
      name: "Richard Hammond",
      password: "mysecret!",
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: ["C", "M"], 
      favouriteTransportation: "M",
      driverLicence: true, 
      skillLevel: 8,
      vehicleUse: "pleasure"
    };
    
  }
}
```

To briefly explain, we define a "Driver" class that will represent the type of data that we will be "binding" to our form so that it can be modified.  We also define a generic "Option" class, which is simply defining what our "Options" will look like, ie ```{value: "C", text: "Car"}``` - this can be used as an "option" in an `<select>` list, or the value / label used in a radio button.

<br>

### "Binding" the data / Form Events

After coding the component, we can begin to update the original "standard" HTML form to work directly with the data, using "two-way binding" syntax:

> Often, we want to both display a data property and update that property when the user makes changes.  
>  
> On the element side that takes a combination of setting a specific element property and listening for an element change event.  
>  
> Angular offers a special two-way data binding syntax for this purpose, ```[(x)]```. The ```[(x)]``` syntax combines the brackets of property binding, ```[x]```, with the parentheses of event binding, ```(x)```.
>
> ([https://angular.io/guide/template-syntax#two-way-binding---](https://angular.io/guide/template-syntax#two-way-binding---))

<br>

The target of the two-way binding is the **NgModel** directive. Every time we have a form element that we wish to "bind" to our data model, we use the syntax:

```html
[(ngModel)]='componentProperty'
```

For example, let's see how we can update each of our form element types in our "Simple" form using this syntax, paired with the "DriverComponent" data:

<br>

#### input (type="text")

```html
<input type="text" class="form-control" name="name" [(ngModel)]="driverData.name" required autofocus>
```

Here, we simply add the "two-way" binding syntax with ngModel to reference the "driverData.name" property.

<br>

#### input (type="password")

```html
<input type="password" class="form-control" name="password" [(ngModel)]="driverData.password">
```

Similar to above, but with a different input type.

<br>

#### textarea

```html
<textarea class="form-control" name="description" [(ngModel)]="driverData.description"></textarea>
```

This is very similar to the **input** example above, ie: we simply add the two-way data binding to ngModel with the correct Component property.

<br>

#### select / select multiple
{% raw %}
```html
<select multiple class="form-control" name="ownedTransportation" [(ngModel)]="driverData.ownedTransportation">
        <option *ngFor = "let t of transportationList" [value]="t.value">{{ t.text }}</option>
</select>
```
{% endraw %}
{% raw %}
```html
<select class="form-control" name="favouriteTransportation" [(ngModel)]="driverData.favouriteTransportation">
          <option *ngFor = "let t of transportationList" [value]="t.value">{{ t.text }}</option>
</select>
```
{% endraw %}
The above two examples are practically identical, the only differences are the property that they're binding to and the "multiple" attribute.

You will notice that our ```[(ngModel)]``` binding syntax has not changed, however the method for displaying the `<option>` elements is different.  Here, we use the standard `*ngFor` structural directive, but we have added a **value** property that we can and must set.  

Since both the "ownedTransportation" and "favouriteTransportation properties use the "value" of the transportation, we must use "transportation.value" as the "value" for the `<option>` elements, to correctly bind to the lists. 

<br>

#### input (type="checkbox")

```html
<input type="checkbox" name="driverLicence" [(ngModel)]="driverData.driverLicence" />
```

Once again, nothing special here.  We simply bind to ngModel as before.

<br>

#### input (type="range")

```html
<input type="range" min="1" max="10" class="form-control" name="skill" [(ngModel)]="driverData.skillLevel" [value]="driverData.skillLevel">
```

This one is interesting, because it renders a slider in the UI. We set the two-way binding to the `skillLevel` value, and also set the current rendered `value` to the same. 

<br>

#### input (type="radio")

```html
<div class="radio">
  <label class="control-label" for="vehicleUseBusiness">
    <input type="radio" name="vehicleUse" [(ngModel)]="driverData.vehicleUse" value="business" /> Business
  </label>
</div>
<div class="radio">
  <label class="control-label" for="vehicleUsePleasure">
    <input type="radio" name="vehicleUse" [(ngModel)]="driverData.vehicleUse" value="pleasure" /> Pleasure
  </label>
</div>
<div class="radio">
  <label class="control-label" for="vehicleUseOther">
    <input type="radio" name="vehicleUse" [(ngModel)]="driverData.vehicleUse" value="other" /> Other
  </label>
</div>
```

Here, we must place identical ngModel binding on each "radio" button with the same "name" attribute.

As a rule of thumb, whenever you would like to "read from" / "write to" a form using **two-way** binding, always bind to ngModel on a form element that would typically have a "name" property.  

<br />

### "Live" or *real time* data model updates

Above, it was stated that we *always assume* that an Angular form is backed by a data model. 

We write one or more classes in the component class source code file, which describe(s) the shape of the data on the form. 

The data model appears as one or more objects - properties - in the component class. 

The effect of two-way data binding is that data is *always* in sync, between the user interface (template) and the data model (code). 

This realization is *very important*. Subtle, simple-sounding, but very important. 

It means that we do not have to worry about losing data, moving data to-and-from the UI and code, and other similar data move/copy tasks. The binding just works, and we can rely on it. 

It also means that we can perform tasks on the data "live" and in *real time*, as the user interacts with the form. We will do this in the near future. 

From before, all of our data for "Richard Hammond" should be correctly rendered in the form.  As a way to inspect/test that the two-way binding is working, you can add the following line somewhere below the form:
{% raw %}
```js
{{ driverData | json }}
```
{% endraw %}
This will show you how your driverData "data model" is being updated with every change you make in the form!

<br>

### Handling the Form "Submission"

What about a "submit" task? Do we need one? Typically, we do, as it's a way for the user to indicate that they are done with the form. 

To handle a form submission event, we add the event handler "ngSubmit" to our `<form>` element:

```html
<form (ngSubmit)='onSubmit()' #f='ngForm'>
```

The above will enable the `<button type='submit'...` element to execute the method named "onSubmit". We will have to write that method.  

<br>

### Summary of the big ideas

While there are *many* new ideas, some new syntax, plenty of Angular parts (directives, classes, etc.), working with forms at a beginner level is not hard. Use the guidance at the top of this document to quickly build success. 

Here are the important "big ideas":

Enable forms for the entire app by adding an import in the app module. It's a one-time task per app. Doing this enables Angular to do its magic whenever a form is declared and used. 

Always plan on using a data model - often known or referred to as a *view model* - when using a form. 

> If you're thinking that we don't really need a view model when displaying a form for the first time, we would suggest that is wrong.  
> In almost all situations, we want to *push some data* to the form, to make it a better user interaction experience.  
> For example, items in a select list, or default or initial/starter values for some of the form elements. 

Write a function that will handle form submit. It can do anything you want it to do. 

Two-way data-binding is a huge feature. Use it when appropriate. Remember it is still appropriate to use one-way read-only data binding to pull in values (curly braces). And, it is still appropriate to define event handlers on form elements (parentheses) if you need special behaviours. 

<br>

Happy programming! Enjoy!

<br>
