---
title: jQuery
layout: default
---

## jQuery

jQuery was introduced with its value proposition as a the "swiss army knife" of the DOM, giving us everything we need to create dynamic HTML (ie: selecting elements, watching for / responding to events & updating the DOM).  We finished off by discussing how we can make Ajax requests using jQuery, for example:

```js
$.ajax({
    url: "http://localhost:8081/employees", 
    type: "GET",
    contentType: "application/json"
})
.done(function (employees) {
    console.log(employees)  
})
.fail(function (err) {
    console.log("error: " + err.statusText);
});
```

Now, we will be rounding out our discussion of jQuery by discussing some of jQuery's **Utility** methods, as well as how to handle **form data** (ie: reading / writing form information). Lastly, we will have a quick discussion on working with **Bootstrap 3 Components** using jQuery:

<br>

## Utility Methods

There are a number of [Utility functions / methods](http://api.jquery.com/category/utilities/) included in jQuery (35\+). We will only discuss some of the ones that we're likely to see in this course. However, all of the methods available are useful and we encourage you to **Bookmark** the full list for future reference.  

<br>

### jQuery.data()

Store arbitrary data associated with the specified element and/or return the value that was set.

See: [http://api.jquery.com/jQuery.data/](http://api.jquery.com/jQuery.data/)

```js
$( "div" ).data( "test", { first: 16, last: "pizza!" } );
console.log( $( "div" ).data( "test" ).first );
console.log( $( "div" ).data( "test" ).last );
```

<br>

### jQuery.removeData()

Remove a previously-stored piece of data.

See: http://api.jquery.com/jQuery.removeData/

```js
$("div").removeData("test");
console.log( $( "div" ).data( "test" ).first ); // => TypeError: Cannot read property 'first' of undefined
```

<br>

### jQuery.contains()

Check to see if a DOM element is a descendant of another DOM element.

See:[http://api.jquery.com/jQuery.contains/](http://api.jquery.com/jQuery.contains/)

```js
$.contains( $("ul")[0], $("li")[0] ); // true
$.contains( $("li")[0], $("ul")[0] ); // false
```

<br>

### jQuery.grep()

Finds the elements of an array which satisfy a filter function. The original array is not affected.

See:[http://api.jquery.com/jQuery.grep/](http://api.jquery.com/jQuery.grep/)

```js
let arr  = $.grep(employees, function( employee ) {
    return employee.Position.PositionName == "Full Stack Developer";
}); // => 35 "employee" objects returned
```

<br>

### jQuery.map()

Translate all items in an array or object to new array of items.

See: [http://api.jquery.com/jQuery.map/](http://api.jquery.com/jQuery.map/)

```js
$.map(employees, function( val, i ) {
    val.LastName = val.LastName + "!";
}); // => transform all last names to end in "!"
```

<br>

### jQuery.parseHTML()

Parses a string into an array of DOM nodes.

See: [http://api.jquery.com/jQuery.parseHTML/](http://api.jquery.com/jQuery.parseHTML/)

```js
let htmlArr = $.parseHTML( "hello, <b>my name is</b> jQuery." ); // => 3 elements: 'hello, ', <b> and ' jQuery.'
```

<br>

## Handling Form Data

jQuery has a very nice interface for handling form values.  The following sections illustrate how we can **get**, **set** and correctly **clear** the values of **text** / **password**, **checkbox**, **radiobutton**, **textarea** and **select (single / multiple)** elements.  

If you're following along with the "Code Samples" the following functionality is located in the **"week2/jQuery-more"** folder

<br>

### text / password elements

```html
<input type="text" class="form-control" id="inputEmail" placeholder="Email">
<input type="password" class="form-control" id="inputPassword" placeholder="Password">
```

***Set***
```js
$("#inputEmail").val("from jQuery"); // set to "from jQuery"
$("#inputPassword").val("abc"); // set to "abc"
```

***Get***
```js
$("#inputEmail").val(); 
$("#inputPassword").val();
```

***Clear***
```js
$("#inputEmail").val(""); 
$("#inputPassword").val("");
```

<br>

### checkbox elements

```html
<input type="checkbox" id="checkbox1"> Checkbox
```

***Set***
```js
$("#checkbox1").prop("checked", true); // set to "checked"
```

***Get***
```js
$("#checkbox1").prop("checked"); // true / false
```

***Clear***
```js
$("#checkbox1").prop("checked", false);
```

<br>

### radio (button) elements

```html
<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"> Option One
<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> Option Two
```

***Set***
```js
$('input[name=optionsRadios][value=' + 'option2' + ']').prop("checked", true ); // set "option 2" to checked
```

***Get***
```js
$('input[name=optionsRadios]:checked').val(); // get the value of the checked "optionsRadio"
```

***Clear***
```js
$('input[name=optionsRadios]').prop("checked", false);
```

<br>

### textarea elements

```html
<textarea class="form-control" rows="3" id="textarea1"></textarea>
```

***Set***
```js
$("#textarea1").val("from jQuery"); // set to "from jQuery"
```

***Get***
```js
$("#textarea1").val();
```

***Clear***
```js
$("#textarea1").val("");
```

<br>

### select (single / multiple) elements

```html
<select class="form-control" id="select1">
    <option value="">Please Select</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</select>
<select multiple="" class="form-control" id="select2">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</select>
```

***Set***
```js
$("#select1").val(3); // set to "Three"
$("#select2").val([4,5]); // set to "Four" and "Five"
```

***Get***
```js
$("#select1").val();
$("#select2").val();
```

***Clear***
```js
$("#select1").val("");
$("#select2").val("");
```

<br>

## jQuery & Bootstrap

The Bootstrap UI framework has become so instrumental in the construction of modern, responsive web apps; largely due to its execellent design patterns, modern tooling and wealth of online resources and templates.  However, we have only really used its CSS (and minimal) JavaScript capabilities.  In order to unlock Bootstrap's full potential as a UI/UX framework, is to familiarize ourselves with the interactive UI components and the jQuery API used to invoke/manipulate them.  

As we have seen, we don't necessairly need to touch any JS code to make use of some of the interactive components.  The bootstrap framework uses jQuery in an unobtrusive way, by utalizing '**data-**' attributes, ie:

```html
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>
```

However, what if we wish to launch a modal window at a different (unknown) time? For example; when an Ajax request completes?  This is where the [Programmatic API](https://getbootstrap.com/docs/3.3/javascript/#js-programmatic-api) comes in to play. It gives us more power and flexability to work with the compoments.

Using the API we can interact with all of Bootstrap's JavaScript components programmatically (from JavaScript).  The following examples illustrate how we can use the API to take advantage of some of Bootstraps most useful components:

<br>

### Modal Window

Arguably one of the most important elements in modern UI/UX design is the "modal" window.  We can use it to display error/success warnings or focus the user's attention on a specific task.

See: [https://getbootstrap.com/docs/3.3/javascript/#modals](https://getbootstrap.com/docs/3.3/javascript/#modals)

```js
$('#myModal').modal({ // show the modal programmatically
    backdrop: 'static', // disable clicking on the backdrop to close
    keyboard: false // disable using the keyboard to close
});
````

<br>

### Button States

Although, technically deprecated, the 'loading' and 'reset' button states are simple way to programmatically enable/disable a button while at the same time, changing its text.  This is useful in cases where clicking the button makes an Ajax request and we wish to disable the button until the request has completed.

The 'toggle' state is not deprecated and provides a quick way to show a button as 'pressed'.   

See: [https://getbootstrap.com/docs/3.3/javascript/#buttons-stateful](https://getbootstrap.com/docs/3.3/javascript/#buttons-stateful) and also: [https://getbootstrap.com/docs/3.3/javascript/#buttons-methods](https://getbootstrap.com/docs/3.3/javascript/#buttons-methods)

```js
$("#loadingDelay").button('loading'); // switch to a disabled 'loading' state
$("#loadingDelay").button('reset'); // reset the button state
$("#loadingDelay").button('toggle'); // toggles 'push' state
```

<br>

### Popovers

Popovers are like a tooltip, however they have their own title bar, and are capable of rendering HTML content.  If we wish to use these components, we must 'opt-in' by using the following "popover" method in JavaScript.  The full list of options provided can be found here: [https://getbootstrap.com/docs/3.3/javascript/#popovers-options](https://getbootstrap.com/docs/3.3/javascript/#popovers-options)

See: [https://getbootstrap.com/docs/3.3/javascript/#popovers-usage](https://getbootstrap.com/docs/3.3/javascript/#popovers-usage)

```js
$("#dynamicPopover").popover({
    template: '<div class="popover" role="tooltip"><div class="arrow"></div>' + 
              '<h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    title: 'Tooltip Title',
    content: 'Lorem ipsum dolor sit amet',
    placement: 'top',
    trigger: 'click'
});
```

<br>

### Alerts

Alerts are small messages that take the form of "**success**", "**information**", "**warning**", or "**danger**".  The template for creating alerts is fairly consistant, ie:

```js
let alertTemplate = '<div class="alert alert-warning alert-dismissible fade in" role="alert">' +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + 
                            '<span aria-hidden="true">×</span>' +
                        '</button>' +
                        '<strong>Warning</strong>' + alertMessage + 
                    '</div>';
```
We can use this to create alert messages on the fly and .append() them to our page whenever we wish to alert the user.  

Unlike the modal window, these small messages don't block the UI and don't demand any action from the user, except to expictly close them.  We can however, get around this limitation by using the .alert('close') method after a certain amount of time:

```js
setTimeout(function(){
    $warningAlert.alert('close'); 
},3000);
```

See: [https://getbootstrap.com/docs/3.3/javascript/#alerts-methods](https://getbootstrap.com/docs/3.3/javascript/#alerts-methods)

<br>
