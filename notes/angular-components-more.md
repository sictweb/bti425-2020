---
title: Angular Components Continued
layout: default
---

## Angular Components Continued

Before we move on to more advanced topics in Angular, it's important that we really understand some of the fundamental details about Components.  Since an Angular application is essentially a "tree of Angular components", we will continue to work with Components throughout the remainder of this course.  We will often circle back to some of these core concepts and expand upon them to add new functionality to our applications.

For the next few sections, assume that we would like to create and work with two extremely trivial components: "RedBoxComponent" (`<app-red-box>`) and "BlueBoxComponent" (`<app-blue-box>`).

<br>

### Review: Creating Components Using the Angular CLI

To add one of our components, ie the "RedBox", we typically use the Angular CLI.  In this case, we wish to create a new component called "RedBox", so the command would be:

```
ng g c RedBox --flat
```

This would create the following 4 files in the src/app directory (Note: it will *not* create a new directory for the component - this is because the "flat" flag was used:

* red-box-component.css
* red-box-component.html
* red-box.component.spec.ts
* red-box.component.ts

Our main component is defined in the TypeScript file "red-box.component.ts" while the .html file provides the "template" for our comopnent and the .css file provides the style for our component (scoped to "app-red-box").  At this point we aren't particulairly concerned with "red-box.component.spec.ts" file.  It's created to help us "unit test" the component (using [Jasmine](https://jasmine.github.io/2.4/introduction.html) / [Karma](https://karma-runner.github.io/1.0/index.html)), however at this point we aren't concerned with testing, so this file can effectively be ignored for the time being.

<br>

### Structure of an Angular Component

If we open the red-box.component.ts file we should see the following code:

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-box',
  templateUrl: './red-box.component.html',
  styleUrls: ['./red-box.component.css']
})
export class RedBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

The angular CLI has automatically included some important code:

* The "import" statement to access the ["Component"](https://angular.io/api/core/Component) decorator and the ["OnInit"](https://angular.io/api/core/OnInit) interface from @angular/core.

* Default values for the @Component decorator, including the component "selector" (for element `<app-red-box>`) and the urls for the newly added "template" (.html) and "style" (.css) files. 

* A class definition for our "RedBoxComponent" that implements the "OnInit" Lifecycle method (explained below), as well as provides a skeleton for a "constructor" method (used to initialize the fields of the class - optionally using dependent objects passed into the constructor when it's instantiated (see ["Dependency Injection"](https://angular.io/guide/dependency-injection) - this will be discussed further when we discuss "services").

<br>

### Component Lifecycle Hooks

After creating a component/directive by calling its constructor, Angular calls the lifecycle hook methods at specific moments.  For detailed information, we will refer to:

**[Angular's official documentation on Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)**

<br>

### Component / Template Data Binding

As we have seen, Angular templates are far from "static" - we can use special syntax to coordinate what users see, with actual component data values.  This is known as "data binding".  The Angular documentation does an excellent job of covering the key concepts here: [Binding syntax: An overview](https://angular.io/guide/template-syntax#binding-syntax-an-overview)

This includes topics such as:

* ["Binding Targets"](https://angular.io/guide/template-syntax#binding-targets) - Syntax that we can use in "templates" 
* ["One-way in"](https://angular.io/guide/template-syntax#one-way-in) - Describes how property binding "flows in one direction"
* ["Property binding or interpolation?"](https://angular.io/guide/template-syntax#property-binding-or-interpolation)

<br>

### Component Interaction

Now that we are familiar with the syntax of data binding (specifically property binding), we can look at how to write components that can *read the property values*, effectively allowing communication between parent and child components.

For example, say we used the Angular CLI to create both the "RedBoxComponent" and the "BlueBoxComponent". 

We then decide that "BlueBoxComponent will be a child of the "RedBoxComponent", ie: the "RedBoxComponent" template contains html to render the "BlueBoxComponent", and "BlueBoxComponent" will simply render plain text that is *passed to it* from the parent component - in this case `<app-red-box>`. This will form a parent-child relationship, with the "Red Box" being the parent:

```html
<app-red-box>
  <app-blue-box></app-blue-box>
</app-red-box>
```

To enable communication between "RedBoxComponent" and "BlueBoxComponent", we must add a **property** (let's call it: "message") to "BlueBoxComponent" that accepts a value sent from a parent (ie: "RedBoxComponent").  From our "property binding" above, this would look something like this (**NOTE**: It is important for the "message" property to be in hard brackets - [ ], otherwise "redMessage" will be interpreted as a string, not a value from a property in the parent Component):

```html
<app-blue-box [message]="redMessage"></app-blue-box>
```

If we want to reference the "message" value inside the BlueBoxComponent, we simply add an "@input" decorator to the "message" property.

For example, the blue-box.component.ts file would look like this:

```js
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blue-box',
  templateUrl: './blue-box.component.html',
  styleUrls: ['./blue-box.component.css']
})
export class BlueBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() message: string; // make the "message" property available for binding
}
```

Now the "BlueBoxComponent" can accept a string value as a property. To continue this discussion, we will refer to:

[Angular's official documentation on Component Interaction](https://angular.io/guide/component-interaction)

<br>

#### Passing string literals from one component to another

If the value is static and can be entered in the component template, then we do not need a property in the component class. 

For example, while composing the component template, assume that we already know that the message (from above) is "Hello, world!". We can pass this string literal to another component in any of three ways. The important thing to know is that the right side of the attribute-value pair must be an *expression*. If we enclose a string literal in quote-delimiters, it becomes an expression (magically) (well, not really magically).

```html
<app-blue-box message="Hello, world!"></app-blue-box>
```

```html
<app-blue-box [message]="'Hello, world!'"></app-blue-box>
```

```html
<app-blue-box message="{%raw%}{{ 'Hello, world!' }}{%endraw%}"></app-blue-box>
```

<br>

### Skim the knowledge about Angular directives

Before we move on to our next topic, it's important that we discuss Angular Directives:

* [Attribute Directives / Directives Overview](https://angular.io/guide/attribute-directives#attribute-directives)
* [Structural Directives](https://angular.io/guide/structural-directives#structural-directives)

<br>
