---
title: Angular forms more information
layout: default
---

## Angular template forms more information

The following may or may not get added to the existing notes.

> This content is for *template driven forms*. 

<br>

### Form element validation

It turns off HTML5 validation  
It adds the `novalidate` attribute to the `<form>` element  

<br>

### Available validators

[The API docs](https://angular.io/api/forms/Validators) show this list of available validators which have some use:
* required
* email
* minLength
* maxLength
* pattern

There is now a `min` and a `max` validator for numbers, but it CANNOT be used in template forms. In [the API docs](https://angular.io/api/forms/Validators), each states that it "exists only as a function, not as a directive", which means that we cannot use it in the template markup. 

<br>

#### Email

[ConcretePage example](https://www.concretepage.com/angular-2/angular-2-4-email-validation-example) - use it on an `<input type='text'>` element.

Custom email domain? Use a pattern validator.

> Hmmm... Does not seem to work; allows `foo@bar`, which is obviously not correct

<br>

#### Pattern

[ConcretePage example](https://www.concretepage.com/angular-2/angular-2-4-pattern-validation-example).

<br>

### Min and max

As noted above, we cannot use `min` or `max`. 

However, consider using an `<input type='range'>` element, if the range is reasonably narrow for manipulation in a UI. Use step too, to constrain the selections to integers. On a phone, you could probably support a range of about 15 or so. 

<br>

### Custom validators

I cobbled together a `min` and a `max` custom validator, based on a few examples.

[SO min max validator](https://stackoverflow.com/questions/39847862/min-max-validator-in-angular-2-final)

[ConcretePage example](https://www.concretepage.com/angular-2/angular-4-min-max-validation)

How to, [maybe only for reactive forms](https://hackernoon.com/validating-reactive-forms-with-default-and-custom-form-field-validators-in-angular-5586dc51c4ae).

Google search words:  
angular -angularjs trim textbox  
angular -angularjs blur textbox  
May have to implement our own trim validation...
[SO item](https://stackoverflow.com/questions/37066442/model-values-not-trim-automatically-in-angular-2/37066523#37066523)

<br>

### Other things

[Official subscribe method docs](http://reactivex.io/documentation/operators/subscribe.html) 

[Official subject docs](http://reactivex.io/documentation/subject.html) 

[Use subject or not](http://davesexton.com/blog/post/To-Use-Subject-Or-Not-To-Use-Subject.aspx)

[SO constructor overload](https://stackoverflow.com/questions/12702548/constructor-overload-in-typescript/40976608#40976608) in TypeScript

[JSDoc - documentation generator](http://usejsdoc.org/about-getting-started.html)



<br>
