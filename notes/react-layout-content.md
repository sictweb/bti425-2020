## React layout guidance - viewport with nav, content area, and footer

This document is for react apps that use the routing feature, and the Bootstrap CSS rules.

Here is a suggested containment structure for a viewport that has these areas:
* navigation 
* main content views 
* footer

The sections below provide guidance on how to implement this structure.

<br>

### Bootstrap container organization overview

In *any* HTML document, the `body` element should have the following container organization structure:

```html
<nav>
  <!-- Navigation menu is here -->
</nav>
<div>
  <!-- Other content is here -->
  <!-- Including the footer -->
</div>
```

In an Angular app, the *content* of the body element is located in the app component template, so that's where we add this code. A separate component manages the navigation task, so the `nav` element will be replaced by a custom element. The `div` element will hold the `router-outlet` element, and a footer element.

> If the footer content is simple, then its markup can be in the app component template.  
> Alternatively, if the footer content has lots of content, or if its content varies as a result of context or user interaction, then create a separate component. 

<br>

### index.html

After a new app is generated, the `body` element contains the `app-root` element. That's OK; leave it as-is. 

In the `head` element, add a link to the Bootstrap CSS style sheet. For those new to Angular, getting Bootstrap by linking to the content delivery network (CDN) is good enough. 

Edit the `title` element. 

Add `<meta>` tags for author and description. For example:

```html
<meta name="author" content="Firstname Lastname">
<meta name="description" content="Brief description of the work">
```

<br>

#### Initial CSS in styles.css

The styles.css is configured by default (in the `.angular-cli.json` source code file) to hold the rules that are valid for all components. Add a rule to improve the app's initial appearance:

```css
/* Set padding to keep content below the nav bar */
body {
  padding-top: 50px;
  padding-bottom: 20px;
}
```

<br>

### Navigation component

The nav component template can be fairly standard across apps. The following will create a starter menu with a few items. 

```html
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
      <div class="navbar-header">
          <!-- This is the hamburger button -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a routerLink='/home' class="navbar-brand">App Name</a>
      </div>
      <!-- Menu items -->
      <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
              <li routerLinkActive='active'>
                  <a routerLink='/about'>About</a>
              </li>
              <li routerLinkActive='active'>
                  <a routerLink='/contact'>Contact</a>
              </li>
              <!-- Add other menu items here -->
          </ul>
      </div>
  </div>
</nav>
```

<br>

### App component template

As noted above, the app component template holds the `body` content. The following will define a basic getting-started structure:

```html
<app-navbar></app-navbar>
<div class="container app-content">
  <router-outlet></router-outlet>
  <footer class="row">
    <hr>
    <p>Copyright &copy; 2018 by Firstname Lastname<br>
    This is my own work, and I have practiced academic honesty.</p>
  </footer>
</div>
```

Notice the location of the `router-outlet` element. Also, as noted above, if the app needs a separate footer component, replace the footer-related code with the footer's custom element. 

<br>

#### Initial CSS in app.component.css

In the app component's CSS, add a rule to improve the initial appearance:

```css
/* Set padding to keep content from hitting the edges */
.app-content {
    padding-left: 15px;
    padding-right: 15px;
}
```

<br>
