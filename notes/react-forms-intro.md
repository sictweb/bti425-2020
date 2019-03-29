---
title: React and HTML Forms introduction
layout: default
---

## React and HTML Forms introduction

The React documentation is [located here](https://reactjs.org/docs/forms.html).  

Read through it now, before continuing below. 

Yes, really - read the docs. 

Welcome back. 

<br>

### Useful concepts and topics, and their implementation

A big difference, when compared to HTML Forms in "plain" HTML5 apps, is the concept of *binding*. 

With React (and Angular) apps, we typically *bind* a form element to the component for two reasons:
1. Behaviour (event binding) - one or more functions that handle events that happen in the form element (e.g. change, blur)
2. State (data binding) - a property in component state to hold the current value or contents of the form element

Another difference comes out of the first big difference. In summary, we typically do not use a `<form>` element. This kind of element provides a feature that may not be all that useful or important in a React app that uses binding, so we don't have to include it. 

> In case you're curious...  
> The feature is "enter" key handling while the keyboard input focus (i.e. the cursor) is in a text input field. In this scenario, pressing "enter" will "submit" the form. Think about this for a moment, and you will also see how that's probably not all that useful or important.  
> See [this SO note](https://stackoverflow.com/questions/41205384/is-the-use-of-the-form-tag-necessary-in-reactjs-that-have-hoc-input-tags-that), and [this opinion](https://hashnode.com/post/why-do-you-write-eventpreventdefault-in-react-cjdznf1el0atom3wt831c2m9o). 

> If you really want this enter>submit behaviour, your code must change:  
> The opening form tag is `<form onSubmit={this.handleSubmit}>`.  
> Change the "submit" `<button>` to an `<input type='submit'`.  
> Must always call `e.preventDefault()` in the "submit" event handler. 

> General HTML Forms reference info:  
> Review the docs about [HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms) and [native form widgets](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets). 

<br>

### Summary of guidance

Write a `handleChange` function. Write code for each form element (or code that will work for all form elements).

Write a `handleSubmit` function, to handle a "submit" `<button>`. 

In the constructor:
* Create state properties to hold the form element data.
* Bind the two functions (above) to `this`. 

In the markup of each form element, add the `handleChange` handler.

<br>

### Other interesting things

Here are a few other interesting things done while preparing this week's topic coverage. 

<br>

#### Want a document title (for the tab)?

In a component's `render()` method, set the document title:  
```js
document.title ='whatever';
```

<br>

#### How to "redirect"

First, import the React Router `withRouter` component.

```js
import { Link, withRouter } from "react-router-dom";
```

Then, modify the component class export statement.

```js
export default withRouter(ClassComponentName);
```

Finally, use this code to do a redirect.

```js
// Redirect (assuming result.id is a value)
this.props.history.push(`/users/detail/${result.id}`);
```

<br>

#### How to "go back" (navigate back)

Do the first two things above. 

The third thing is one of these statements:

```js
// Redirect 
this.props.history.goBack());
// equivalent to...
this.props.history.go(-1));
```

<br>
