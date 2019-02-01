---
title: React and HTML Forms introduction
layout: default
---

## React and HTML Forms introduction

The React documentation is [located here](https://reactjs.org/docs/forms.html).  


Write a `handleChange` function. Write code for each field name. 

Write a `handleSubmit` function. 

In the constructor:
* Create a state variable to hold the form contents.
* Bind the two functions (above) to `this`. 

Write the `<form>` opening tag with the `handleSubmit` handler. 

Add the `handleChange` handler to each `input` field.


### Lessons learned

Lessons learned during my journey.

<br>

### Need "form" element?

Must we use, or do we need, the `<form>` element?  
Not really necessary, because of our binding strategy.  
We are NOT relying on browser packaging or assists.  
We have our own "change" and "submit" handlers.  

Benefit(s):
* Press Enter key in any input-text field will "submit" the form  

Downside(s):
* The above
* Must always call `e.preventDefault()`

See [this SO note](https://stackoverflow.com/questions/41205384/is-the-use-of-the-form-tag-necessary-in-reactjs-that-have-hoc-input-tags-that). 

Also [this](https://hashnode.com/post/why-do-you-write-eventpreventdefault-in-react-cjdznf1el0atom3wt831c2m9o). 

Hmmm. 

<br>

#### Document title (for the tab) 

In a component's `render()` method, set the document title:  
`document.title('whatever');`

<br>

#### Redirect

First, import withRouter.

```js
import { Link, withRouter } from "react-router-dom";
```

Then, modify the component class export statement.

```js
export default withRouter(ClassComponentName);
```

Finally, redirect.

```js
// Redirect (assuming result.id is a value)
this.props.history.push(`/users/detail/${result.id}`);
```

<br>

#### Go back (navigate back)

Do the first two things above. 

The third thing is this:

```js
// Redirect (assuming result.id is a value)
this.props.history.goBack());
// equivalent to...
this.props.history.go(-1));
```


