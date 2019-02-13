---
title: Week 6 hands-on in-class exercise
layout: default
---

## Week 6 hands-on in-class exercise

Goals or objectives: 
* Create an Angular app with a few features 
* Transition some recent React topics to Angular 

<br>

### Overview

Recently, you were introduced to the Angular app platform. In class, we covered some getting-started topics (install, create app), and we also were introduced to components in Angular. 

Today, the goal is to create an Angular app that has multiple components. In addition, the professor will introduce you to the Angular routing infrastructure, to enable replacable areas of the viewport. 

<br>

### Create an app

Create a new Angular app:

```bash
ng new angular-routing --routing -S -g
```

Open it for editing. Then, start/run it:

```bash
ng serve --open
```

Leave it running, and check it as you make changes. If the display goes blank/white, there's an error, so show the browser dev tools, and its console. 

<br>

### Configure the app's appearance

Here, we'll add Boostrap and a page structure. 

Open `src/index.html` for editing. 

Add [the Bootstrap element](https://getbootstrap.com/docs/3.3/getting-started/#download-cdn) to the `head` element. 

Wrap the `app-root` element inside a `div` (and its class is "container"). 

<br>

### Make some components

In this section, you will generate five components. 

Our app will have three views:
1. Home (start, landing)
2. About me
3. Contact me

Remember, creating a component is best done as follows. First, make sure you're in the project folder. Then create three components.

```bash
ng g c xxx-name-of-new-component-xxx --flat -S
```

<br>

> Remember the tip from the notes:  
> If you're creating a component that should have a multi-word name, use Pascal Case. For example:  
> ```ng g c AboutMe --flat -S```

<br>

We also need a simple nav menu. Generate a component for that ("nav", or "navbar", "navmain", "NavBar", "NavMain", etc.). 

Fetch the HTML markup from the repo's "Templates and solutions" folder - the `nav-base` code is good enough for us to work with now - and paste it into the nav menu's HTML template. Then, edit the links so that there's one main link (home), and two others (about me and contact me). 

Finally, we need a "not found" component, so generate one. 

<br>

### Assemble the app, WITHOUT routing for now

Open `src/app/app.component.html` for editing. Remove ALL markup EXCEPT the `router-outlet` element. 

Before `router-outlet`, add the nav element. 

After `router-outlet`, add these in sequence:
* Not found
* Home
* About me
* Contact me

At this point, the app should look like this:

![App](/media/week06-hands-on-1.png)

<br>

#### Update the content of the components

Update the page contents with better info. 

On each page, add a top-level `div` element, with an `id` attribute that matches whatever you wrote for the nav menu's `a` element's `href` attribute. 

The home page can hold some text content. [Generate some *lorem ipsum*](https://www.lipsum.com/) text, and paste it in. 

The about me page can include a large heading with your name, and an image. Link to an image from one of these (or other) services:
* [placeholder.com](https://placeholder.com/)
* [placekitten.com](https://placekitten.com/)
* [lorempixel.com](http://lorempixel.com/)

The contact me page can include some contact info for you.

<br>

### Configure routing

This is a new topic, and your professor will introduce *simple* routing for an Angular app at the beginning of the class/session. (In a future class, we will do a more in-depth treatment of routing.)

Open `app-routing.module.ts` for editing. 

Add route objects to the `routes` constant. For example, each [route object](https://angular.io/api/router/Route) looks like the following; notice the path, and the class name of the component:

```js
{ path: 'home', component: HomeComponent },
```

Notice that the component import statements get auto-added by the editor as you write the route object's code.

Then, add the root and not found route objects to the end of the delcarations.

```js
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
```

Open your nav menu template for editing. 

Locate the existing `a` elements. For each one, replace the `href` attribute.  
* The new attribute is named `routerLink` 
* Its value is a root-relative path, that matches the value of the `path` attribute in the route objects (above). 

Open `app.component.html` for editing.

Remove, or comment out, the elements that follow `router-outlet`. 

Test. It should work. Yay!

<br>
