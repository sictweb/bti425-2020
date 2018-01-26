---
title: Introduction to Knockout.js
layout: default
---

## Introduction to Knockout.js

> This document is being edited.  
> This notice will be removed when the edits are complete.

[Knockout.js](http://knockoutjs.com/) is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model. Any time you have sections of UI that update dynamically (e.g., changing depending on the user’s actions or when an external data source changes), KO can help you implement it more simply and maintainably.

<br>

### Installation

Since Knockout.js is a **client-side** library, we will include it in the same way that we would include Lodash, Moment.js or jQuery; by downloading it and referencing it in a **`<script>`** element.  We can also reference the library using the popular [CDNJS Content Delivery Network](https://cdnjs.com/).

* The official, full source code can be downloaded [from here](http://knockoutjs.com/downloads/knockout-3.4.2.js)
* The CDN Link for the minified code is: <br>`https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js`

<br>

### Headline features

* **Elegant dependency tracking** - automatically updates the right parts of your UI whenever your data model changes.
* **Declarative bindings** - a simple and obvious way to connect parts of your UI to your data model. You can construct a complex dynamic UIs easily using arbitrarily nested binding contexts.
* **Trivially extensible** - implement custom behaviors as new declarative bindings for easy reuse in just a few lines of code.

<br>

### Data Model? - Enter the "MVVM" Pattern

Knockout.js is an important library for us to examine in this course, because it does an excellent job of introducing the "MVVM" ("Model-View-View Model") design Pattern, as well as introducing us to a more "modern" approach to web app development:

Essentially, MVVM describes how you can keep a potentially sophisticated UI simple by splitting it into three parts:

<br>

#### A model (the first "M" in the initialism): 

Your application’s stored data. This data represents objects and operations in your business domain (e.g., bank accounts that can perform money transfers) and is independent of any UI. When using KO, you will usually make Ajax calls to some server-side code to read and write this stored model data.

<br>

#### A view model (the last "VM"): 

A pure-code representation of the data and operations on a UI. For example, if you’re implementing a list editor, your view model would be an object holding a list of items, and exposing methods to add and remove items.

Note that this is not the UI itself: it doesn’t have any concept of buttons or display styles. It’s not the persisted data model either - it holds the unsaved data the user is working with. When using KO, your view models are pure JavaScript objects that hold no knowledge of HTML. Keeping the view model abstract in this way lets it stay simple, so you can manage more sophisticated behaviors without getting lost.

<br>

#### A view (the middle "V"): 

A visible, interactive UI representing the state of the view model. It displays information from the view model, sends commands to the view model (e.g., when the user clicks buttons), and updates whenever the state of the view model changes.

When using KO, your view is simply your HTML document with declarative bindings to link it to the view model. Alternatively, you can use templates that generate HTML using data from your view model.

<br>

### Creating a View Model

To start working with Knockout and creating View Models, we should first create a new folder with the following (minimal) file/folder structure:

```
index.html
js
    main.js
```

In your index.html file, enter the following boilerplate code (this includes the CDN links to Bootstrap, jQuery and Knockout.js)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <!-- Latest compiled and minified Bootstrap 3.3.7 CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <title>Knockout</title>
    </head>
    <body>

            

        <!-- Latest compiled and minified jQuery 3.2.1 JavaScript -->
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

        <!-- Latest compiled and minified Bootstrap 3.3.7 JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

        <!-- Knockout.js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"></script>

        <!-- custom JS (main) -->
        <script src="js/main.js"></script>    
    </body>
</html>
```

<br>

### Editing main.js and creating a View Model

Fortunately for us, a View Model is defined using a simple object literal, ie:

```js
var myViewModel = {
    personName: 'Bob',
    personAge: 123
};
```

This object's data can be **referenced** in our **view** (index.html) using the following **template**:

```html
The name is <span data-bind="text: personName"></span>            
```

However, if we save both our **main.js** and **index.html** files at this point and run them in the browser, we will find that our HTML isn't updated!  

This is because The **data-bind** attribute isn’t native to HTML, though it is perfectly OK (it’s strictly compliant in HTML 5). But since the browser doesn’t know what it means, you need to activate Knockout to make it take effect:

At the bottom of your **server.js** file, we must add the code to actually apply the "data-bind" properties to our "model"

```js
$(function(){
    ko.applyBindings(myViewModel, $("body")[0]);
});
```

Here, we're telling Knockout (ko) to use the **"myViewModel"** object with all of the bindings (ie: "data-bind") in the **&lt;body&gt;** element. Since we're using jQuery to select the element from the DOM, we are including the "applyBindings" function with a jQuery document.ready callback (ie: `$(function(){ ... });`).  (Quick Note: We use the syntax <a href="https://learn.jquery.com/using-jquery-core/faq/how-do-i-pull-a-native-dom-element-from-a-jquery-object/">$(selector)[0]</a> to fetch the raw DOM element).

Since we have placed our `<span data-bind="text: personName"></span>` code within the &lt;body&gt;, the "text: personName" binding makes sense (it's pulling it from "myViewModel").

Using this syntax actually affords us a lot of flexability, as we can apply different viewModels to different areas of the DOM!, for example, say we have the following two models:

```js
var myPersonModel = {
    personName: 'Bob',
    personAge: 123
};

var myPetModel = {
    petName: 'Fluffy',
    personAge: 6
};
```

We can represent them in separate sections of the DOM:

```html
<div id="person">
    The Person name is <span data-bind="text: personName"></span>  
</div>
<div id="pet">
    The Pet name is <span data-bind="text: petName"></span>    
</div> 
```

And we can apply the "data-bind" properties separately to each &lt;div&gt; container using their respective "id" attributes once again with the **applyBindings()** function:

```js
$(function(){
    ko.applyBindings(myPersonModel, $("#person")[0]);
    ko.applyBindings(myPetModel, $("#pet")[0]);
});
```

**Note:** It is not strictly necessary to provide a selector as a second parameter to the **applyBindings()** method. This is useful if you wish to have your model apply to the whole document, ie: `ko.applyBinds(someViewModel);`

<br>

### Responding to View Model Changes

So far, we've seen how to create a basic view model and how to display one of its properties using a binding. But one of the key benefits of KO is that it updates your UI automatically when the view model changes. How can KO know when parts of your view model change? Answer: you need to declare your model properties as observables, because these are special JavaScript objects that can notify subscribers about changes, and can automatically detect dependencies.

For example, if we rewrite our simple viewmodel object as follows:

```javascript
var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123)
};
```

You don’t have to change the view at all - the same **data-bind** syntax will keep working. The difference is that it’s now capable of detecting changes, and when it does, it will update the view automatically.

<br>

### Reading and writing observables

For compatibility with older browsers, Knockout defines ko.observable objects as functions.  What this means is that if we want to **get** or **set** the value of a **View Model Property**, we will be invoking the property names as functions.

* To read the observable’s current value, just call the observable with no parameters. In this example, **myViewModel.personName()** will return **'Bob'**, and **myViewModel.personAge()** will return **123**.

* To write a new value to the observable, call the observable and pass the new value as a parameter. For example, calling **myViewModel.personName('Mary')** will change the **name** value to **'Mary'**.

* To write values to multiple observable properties on a model object, you can use chaining syntax. For example, **myViewModel.personName('Mary').personAge(50)** will change the **name** value to **'Mary'** and the **age** value to **50**.

To see this in action, why don't we wire up a **timeout** function to change the data (**myViewModel.personName**) after 2 seconds and see what happens to our view.  In the main.js file, add the following timeout code:

```js
window.setTimeout(function(){
    myViewModel.personName("Dave");
},2000);
```

If we refresh our page, we'll see that "Bob" changes to "Dave" after 2 seconds without us having to write any extra DOM modification code!  The change was "observed" by "text" binding.

<br>

### Beyond "text" Binding

Knockout provides many ways of watching the View Model and updating the DOM automatically.  There are even bindings that work with form elements to create **"Two-way"** binding, in which changes to the data presented in the view (ie: form elements) will **automatically update** the correct view model data, keeping them in sync.

It is also important to note that the **binding value** can be a **single value**, **variable**, or **literal** or almost any **valid JavaScript expression**

<br>

### Bindings (Controlling Text & Appearance)

Knockout.js offers the following binding syntax for dealing with text and the appearance of elements (for the full list, see the [documentation](http://knockoutjs.com/documentation/introduction.html)):

Binding Type | Description
--- | --- 
[The "visible" binding](http://knockoutjs.com/documentation/visible-binding.html) | The **visible** binding causes the associated DOM element to become hidden or visible according to the value you pass to the binding.<br><br>`<div data-bind="visible: shouldShowMessage">`
[The "text" binding](http://knockoutjs.com/documentation/text-binding.html) | The **text** binding causes the associated DOM element to display the text value of your parameter.<br><br>Typically this is useful with elements like **&lt;span&gt;** or **&lt;em&gt;** that traditionally display text, but technically you can use it with any element.<br><br>`Today's message is: <span data-bind="text: myMessage"></span>`
[The "html" binding](http://knockoutjs.com/documentation/html-binding.html) | The **html** binding causes the associated DOM element to display the HTML specified by your parameter.<br><br>Typically this is useful when values in your view model are actually strings of HTML markup that you want to render.<br><br>`<div data-bind="html: details"></div>`
[The "css" binding](http://knockoutjs.com/documentation/css-binding.html) | The **css** binding adds or removes one or more named CSS classes to the associated DOM element.<br><br>This is useful, for example, to highlight some value in red if it becomes negative.(Note: If you don’t want to apply a CSS class but instead want to assign a **style** attribute value directly, see the style binding.)<br><br>`<div data-bind="css: { profitWarning: currentProfit() < 0 }">Phase 3: Profit</div>`
[The "attr" binding](http://knockoutjs.com/documentation/attr-binding.html) | The **attr** binding provides a generic way to set the value of any attribute for the associated DOM element.<br><br>This is useful, for example, when you need to set the **title** attribute of an element, the **src** of an **img** tag, or the **href** of a link based on values in your view model, with the attribute value being updated automatically whenever the corresponding model property changes.<br><br>`<a data-bind="attr: { href: url, title: details }">Report</a>`

<br>

### Bindings (Control Flow)

Knockout.js offers the following binding syntax for dealing with "control flow", ie: iterating over elements and/or conditionally hiding or showing data (for the full list, see the [documentation](http://knockoutjs.com/documentation/introduction.html)):

Binding Type | Description
--- | --- 
[The "foreach" binding](http://knockoutjs.com/documentation/foreach-binding.html) | The **foreach** binding duplicates a section of markup for each entry in an array, and binds each copy of that markup to the corresponding array item. This is especially useful for rendering lists or tables.<br><br>Assuming your array is an observable array, whenever you later add, remove, or re-order array entries, the binding will efficiently update the UI to match - inserting or removing more copies of the markup, or re-ordering existing DOM elements, without affecting any other DOM elements. This is far faster than regenerating the entire **foreach** output after each array change.<br><br>Of course, you can arbitrarily nest any number of **foreach** bindings along with other control-flow bindings such as **if** and **with**.
[The "if" binding](http://knockoutjs.com/documentation/if-binding.html) | The **if** binding causes a section of markup to appear in your document (and to have its **data-bind** attributes applied), only if a specified expression evaluates to **true** (or a **true-ish** value such as a **non-null** object or nonempty string).<br><br>**if** plays a similar role to the **visible** binding. The difference is that, with visible, the contained markup always remains in the DOM and always has its **data-bind** attributes applied - the visible binding just uses CSS to toggle the container element’s visiblity. The **if** binding, however, physically adds or removes the contained markup in your DOM, and only applies bindings to descendants if the expression is **true**.<br><br>`<div data-bind="if: displayMessage">Hey!</div>`
[The "with" binding](http://knockoutjs.com/documentation/with-binding.html) | The **with** binding creates a new binding context, so that descendant elements are bound in the context of a specified object.<br><br>Of course, you can arbitrarily nest **with** bindings along with the other control-flow bindings such as **if** and **foreach**.

<br>

### Bindings (Form Fields)

Knockout.js offers the following binding syntax for handling two-way binding between form fields and the View Model, as well as handling events like "click", "checked", "hasFocus", etc. (for the full list, see the [documentation](http://knockoutjs.com/documentation/introduction.html)):

Binding Type | Description
--- | --- 
[The "click" binding](http://knockoutjs.com/documentation/click-binding.html) | The **click** binding adds an event handler so that your chosen JavaScript function will be invoked when the associated DOM element is clicked. This is most commonly used with elements like **button**, **input**, and **a**, but actually works with any visible DOM element.<br><br>`<button data-bind="click: incrementClickCounter">Click me</button>`
[The "event" binding](http://knockoutjs.com/documentation/event-binding.html) | The **event** binding allows you to add an event handler for a specified event so that your chosen JavaScript function will be invoked when that event is triggered for the associated DOM element. This can be used to bind to any event, such as **keypress**, **mouseover** or **mouseout**.
[The "submit" binding](http://knockoutjs.com/documentation/submit-binding.html) | The **submit** binding adds an event handler so that your chosen JavaScript function will be invoked when the associated DOM element is submitted. Typically you will only want to use this on **form** elements.<br><br>When you use the **submit** binding on a form, Knockout will prevent the browser’s default submit action for that form. In other words, the browser will call your handler function but will not submit the form to the server. This is a useful default because when you use the **submit** binding, it’s normally because you’re using the form as an interface to your view model, not as a regular HTML form. If you do want to let the form submit like a normal HTML form, just return **true** from your **submit** handler.<br><br>`<form data-bind="submit: doSomething">`
[The "enable" binding](http://knockoutjs.com/documentation/enable-binding.html) | The **enable** binding causes the associated DOM element to be enabled only when the parameter value is **true**. This is useful with form elements like **input**, **select**, and **textarea**.<br><br>`<input type='text' data-bind="value: cellphoneNumber, enable: hasCellphone" />`
[The "disable" binding](http://knockoutjs.com/documentation/disable-binding.html) | The **disable** binding causes the associated DOM element to be disabled only when the parameter value is **true**. This is useful with form elements like **input**, **select**, and **textarea**.<br><br>This is the mirror image of the enable binding.
[The "value" binding](http://knockoutjs.com/documentation/value-binding.html) | The value binding links the associated DOM element’s **value** with a property on your view model. This is typically useful with form elements such as **input**, **select** and **textarea**.<br><br>When the user edits the value in the associated form control, it updates the value on your view model. Likewise, when you update the value in your view model, this updates the value of the form control on screen.<br><br>Note: If you’re working with checkboxes or radio buttons, use the checked binding to read and write your element’s **checked** state, not the **value** binding.`Login name: <input data-bind="value: userName" />`
[The "checked" binding](http://knockoutjs.com/documentation/checked-binding.html) | The **checked** binding links a checkable form control — i.e., a **checkbox** or a **radio button** — with a property on your view model.<br><br>When the user checks the associated form control, this updates the value on your view model. Likewise, when you update the value in your view model, this checks or unchecks the form control on screen.<br><br>Note: For text boxes, drop-down lists, and all non-checkable form controls, use the **value** binding to read and write the element’s value, not the **checked** binding.<br><br>`Send me spam: <input type="checkbox" data-bind="checked: wantsSpam" />`
[The "options" binding](http://knockoutjs.com/documentation/options-binding.html) | The **options** binding controls what options should appear in a drop-down list (i.e., a **select** element) or **multi-select** list. This binding cannot be used with anything other than **select** elements.<br><br>The value you assign should be an array (or observable array). The **select** element will then display one item for each item in your array.<br><br>Note: For a **multi-select** list, to set which of the options are selected, or to read which of the options are selected, use the **selectedOptions** binding. For a single-select list, you can also read and write the selected option using the **value** binding.<br><br>`<select data-bind="options: availableCountries"></select>`
[The "selectedOptions" binding](http://knockoutjs.com/documentation/selectedOptions-binding.html) | The **selectedOptions** binding controls which elements in a multi-select list are currently selected. This is intended to be used in conjunction with a **select** element and the **options** binding.<br><br>When the user selects or de-selects an item in the multi-select list, this adds or removes the corresponding value to an array on your view model. Likewise, assuming it’s an observable array on your view model, then whenever you add or remove (e.g., via **push** or **splice**) items to this array, the corresponding items in the UI become selected or deselected. It’s a 2-way binding.<br><br>Note: To control which element in a single-select drop-down list is selected, you can use the **value** binding instead.<br><br>`<select data-bind="options: availableCountries, selectedOptions: chosenCountries" size="5" multiple="true"></select>`


<br>

### Explicitly Watching for View Model Changes

Sometimes we wish to execute some *other* code when the View Model data changes (ie, log the data, set a "dirty" flag, update a property, etc).

To accomplish this in Knockout, we can register our own subscriptions to observables using the "subscribe" method, ie:

```javascript
myViewModel.personName.subscribe(function(newValue) {
    console.log("The person's new name is " + newValue);
});
```

<br>

### Using Existing Data (ie: Teams API)

Creating custom objects in the client side is pretty straightforward (Recall: we define View Model properties as "observables".  However, what if we're pulling down some large-scale data from an API? 

This is exactly the case with our Teams API, however fortunately Knockout.js **has the answer!**

<br>

### The Mapping Plugin

Knockout provides a plugin for just this type of scenario.  Using the official "mapping plugin" - [available here](http://knockoutjs.com/documentation/plugins-mapping.html).  Before we can use it however, we must include it on our page using a &lt;script&gt; element, ie:

```html
<script src="lib/knockout.mapping.js"></script>
```

Now that we have included the mapping plugin, converting an existing JSON structure (such as our "Employees" collection from "/employees", for example) into an "observable" view model is easily accomplished.  We simply using the **ko.mapping.fromJS** function.  

For example, assuming we have successfully made a **GET** request for all "/employees" and store the result in a "data" object.  To define an "employeesModel", we can use the following line of code:

```javascript
let employeesModel = ko.mapping.fromJS(data);
```

If we want to convert the observable "employeesModel" back into a regular object collection, we can invoke the **ko.mapping.toJS** function, ie:

```javascript
let plainObjects = ko.mapping.toJS(employeesModel);
```
<br>

### Editing "Employee" Data

To see how we can use Knockout.js to implement a simple interface to edit existing "Employee" objects within our Teams API, open the **knockout-AJAX** Example located in the week3 folder. We will walk through the solution together in class.

<br>

Source: [Knockout.js Official Documentation](http://knockoutjs.com/)

<br>
