---
title: Week 6 - extra
layout: default
---

## Routing example continued

Continuation of the notes written on my home office desktop on February 12. I did not push those to the public host, so I have to continue on from there on the morning of Wed Feb 13. 

<br>

### Configuring routing

Open `app-routing.module.ts` for editing. 

To the `routes` constant, add route objects. For example:

```js
{ path: 'home', component: HomeComponent },
```

Notice that the component import statements get auto-added by the editor.

Then, add the root and not found route objects to the end of the delcarations.

```js
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
```

Open your nav menu template for editing. 

Locate the existing `a` elements. For each one, replace the `href` attribute.  
* The new attribute is named `routerLink` 
* Its value is a root-relative path, that matches  

Open `app.component.html` for editing.

Remove, or comment out, the elements that follow `router-outlet`. 

Test. It should work.

<br>

#### Minor sub-section

etc.

<br>
