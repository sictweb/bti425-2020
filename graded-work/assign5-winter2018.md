---
title: Assignment 5
layout: default
---

## BTI425 Assignment 5

The purpose or objective of the assignment is to implement interactive forms for an app, and then deploy it to a hosting service.

Read/skim all of this document before you begin work.

While you are doing the work, if a *specific task* is not clear, or it seems to require an unreasonable amount of time to complete, or it seems to require knowledge way beyond the content we've covered in the course, please don't hesistate to contact your professor. 

<br>

### Due Date

Sunday, April 8, 2018, at 6:00pm ET

Grade value: 10% of your final course grade

*If you wish to submit the assignment before the due date and time, you can do that.*

<br>

### Introduction to the problem to be solved

In the previous two assignments, you learned just enough about forms to implement a few use cases. In this assignment, you'll go further, by correctly implementing some Angular *template-driven forms* techniques. We plan to cover a few scenarios (add new, and edit existing), while working with your Teams API. 

Then, you will deploy the app to a public host, so that you can deliver it to other devices (including, for example, your smartphone).  

In summary:
* Interact with Teams API, specifically the Team entity, to do create, read, and update tasks with that entity
* Deploy to Heroku

Here is an example of a typical view from the app, showing the "team detail" view:

![Team detail](../media/a5/team-detail-v3.png)

<br>

**Reminder about how-to instructions and guidance**

As first described in the previous assignment specifications, the how-to instructions in this assignment, and in future assignments, will probably be less detailed, with less guidance.  

<br> 

### Specifications overview and work plan

Here's a brief list of specifications that you must implement:

* For the Team entity (in your Teams API), support create, read, and update tasks, by more correctly using *template-driven forms* 
* Deploy to a public host, and show that it can run correctly on devices (including your smartphone)

More details are provided below, in the section titled **"Doing the work"**.

During the Thursday classes/sessions, your professor will help you *get started* and *make progress* on the assignment. 

<br>

### Getting started

Getting started includes generating a new project, and configuring your development environment. 

<br>

#### Starting work on the assignment

Open a terminal window, and navigate to a suitable file system location. We will use the Angular CLI program to create the folder and its generated code for the project:

```
ng new assignment5 --routing -st -sg
```

**IMPORTANT NOTE:**

The latest version of the Angular CLI confuses the `-st` and `-sg` options with the new `-s` and `-t` options, which indicate that we **do not** wish to have external template (.html) and style (.css) files.  

If you have created an app using the above `ng new assignment5 --routing -st -sg` command and your solution **does not contain app.component.html** then use the following command instead:

```
ng new assignment5 --routing -S
```

This will skip the testing, while still keeping the .html &amp; .css files intact.  Unfortunately, it will still generate a .git directory inside your newly created "assignment5" directory.  Simply remove the .git directory to avoid using git in our solution.

<br>

After the app generation task completes, verify that the app runs. Then prepare the rest of your dev environment:
* Probably use another terminal window (so you can run code-generation commands)
* Probably use one or two Finder windows/tabs (for graphical navigation and Quick Look viewing)
* Code editor 
* Browser, and browser developer tools (at a minimum, you'll probably be using the element inspector, and the JavaScript console)
* Reference notes, including the relevant course notes (current and past), and authoritative resources (e.g. MDN, Angular documentation, etc.)

Include the Bootstrap CSS library in your app. 

Add `<meta>` tags for author and description, similar to what you've done in previous assignments. 

> We have created a document that suggests [how to create the containment structure](https://github.com/sictweb/bti425-2020/blob/master/Templates_and_solutions/containment-nav-content-footer.md) for an app that has nav, content, and footer areas. Just like this app.  
> You may find it useful for this assignment, and for future work (as is or adapted).  

<br>

### Doing the work

Guidance is below. Please refer to past work and course resources. 

<br>

#### Plan your components

As always, we will need some kind of a heading and/or navigation menu. For this app, it's OK to use only a nav menu. We will need a footer for your academic honesty statement (although you can just place that in the app component template if you wish). And a "not found" component.  

For content areas, we will need the following:
* home (landing page)
* teams list
* team view details
* team create
* team edit

Use the Angular CLI to generate components for each of them now. Remember, use Pascal case names if you are using multi-word names for components. 

> Note:  
> Recently, we noticed that the computers in DB3078 may return the following error message when the Angular CLI "generate" program is used:  
> `Cannot read property 'NullLogger' of undefined`  
> If you get that error message, then there may be a work-around. Use the following command to update the Angular CLI version:  
> `npm install --save @angular/cli@latest`  

<br>

Then, as a brief and quick test, add their selectors to the app component's HTML template so that they appear when the app loads. (Obviously, they won't stay there after the test. We just do it now to prove that the components work and they show up in the view.)

At this point in time, it is possible that your work may look like the following. (Ignore the "account-" and "team-delete" items.) As always, right-click any image and open it in its own tab/window to view it full-size.

![TBA](../media/a5/app-comp-with-temp-elements.png)

<br>

##### Refine the structure and appearance

Before continuing, you should spend a few minutes and ensure that the viewport code is structured correctly. And, ensure that the appearance takes advantage of the standard Bootstrap classes (container, row, and so on). 

The "home" component can display a bit of information about you, and a bit about the app. 

If you have started to create a personal-use library of standard code snippets, you can use that code here (where appropriate). The code in your personal-use library can come from many sources, including your own work, course code examples, and other trustworthy sources. Be careful about attribution and academic honesty.  

<br>

#### Configure routing for the app

The app is ready for routing to be configured, because it was generated with the `--routing` flag. 

In the class session on Tuesday, March 13, we completed an exercise to identify the design, planning, and coding tasks that implement routing in an app. Here's the result:
1. Decide which components will participate in routing
2. Design and code your routes
3. Decide which component(s) will hold the `<router-outlet>` element, and edit your code
4. If it makes sense for your app, decide which component will hold the hyperlink elements, and edit your code 
5. In each routed component class, edit the code to enable accessto the routing state
6. Where appropriate, implement imperative (programmatic) navigation

Here's some additional discussion on each of these. 

##### 1. Decide which components will participate in routing

In this app, it's likely that all components (listed above) will participate in routing. 

##### 2. Design and code your routes

Do that now. Ensure that the sequence is correct. And, ensure that you have routes to handle empty and not-found situations. 

##### 3. Decide which component(s) will hold the `<router-outlet>` element, and edit your code

In the [Refine the structure and appearance](#refine-the-structure-and-appearance) section above, you should have already completed that task. (If you did it correctly, it's in the app component template.)

##### 4. If it makes sense for your app, decide which component will hold the hyperlink elements, and edit your code 

Yes, in this app, we have a nav component, so edit that now. 

##### 5. In each routed component class, edit the code to enable access to the routing state

You can do that now, if you wish, by editing each of the routed components (their constructor method). Or, you can do that later. 

##### 6. Where appropriate, implement imperative (programmatic) navigation

You can do that on demand later on (below), as you code the component. 

At this point in time, it is possible that your work may look like the following. (Ignore the text about the security-like feature.) 

![TBA](../media/a5/home-view-v1.png)

<br>

#### Let's prepare to get data involved

As in the previous assignments, we will work with in-memory data, and with data from your Teams API.

<br>

##### Data / schema classes

Generate then write a class that has all the necessary data properties for a team. 

> If you were happy with the data/schema classes that you wrote for the previous assignment, then you can use there here too.

Incidentally, as you will learn, you must also write classes for project, employee, and position. Why? A team object has a collection of projects, an employee object, and a collection of employees. An employee object includes a position. 

> A note about writing data / schema classes: Obviously, it is possible to create a separate source code file to hold each class.  
> Alternatively, it is also possible to create a single source code file to hold the code for *all* classes.  
> The alternative may make it a bit easier, because only one "import" statement would be needed in any component or service class.  
> Is one way better than the other? No, they're just different. 

> Also, remember that for now, the data type of "date" fields is "string".

<br>

##### Data manager service

Generate a service. 

The sequence of design, planning, and coding tasks are suggested by the work you did with previous assignment. Here's the list, with a few new tasks to be done when we're working with a web service:
1. Import the data / schema classes 
2. Optionally, for each entity collection, create a private field or property to hold the collection locally in memory
3. Optionally, code the method that will load each collection
4. Write methods that implement the app's use cases

Please note the following about the result of task #2 above (create a private field): Sometimes (but not all times), it is convenient to locally hold (in memory) all or part of a collection that is delivered by a web service. We have to be careful about this. Most often, the authoritative version of the data is maintained by the web service. So, we don't want to mutate the local version and somehow mistakenly consider it to be authoritative. In general, any data mutation must be done by sending a request to the web service. In other words, don't change the in-memory data, and think that somehow magically it will get updated at the web service - it won't (unless you imperatively make that happen).

Before continuing, you can do tasks #1 and #2 above. 

The coding for tasks #3 and #4 can be done now (if you clearly know what to do), or you can do them incrementally, as part of the component-related tasks described below. 

We will code the activity logging feature later, after we have completed the other components. 

<br>

#### Prepare to use the Teams API

In the [course notes](https://sictweb.github.io/bti425-2020/notes/week09), the recipe for working with a web service was discussed and demonstrated. In summary, here are the key tasks in the recipe:

1. Open the app module for editing. Import the `HttpClientModule` symbol into the app module, and add it to its `@NgModule.imports` array.

2. Open the data manager service for editing. Import the `HttpClient` symbol into the data manager service, and add it to the constructor.

3. Create a private field that holds the URL string to your Teams API web service.

4. For each use case, write a method that calls an HttpClient method on the web service. Almost always, the method will have a return value, an `Observable<T>` (where `T` is a class name; an object or an array). 

5. In each component class, import the data manager service, and inject it (and any other services and features you need, e.g. route status) into the constructor. (Similar to what you did in Assignment 3 project #2.)

> Study the "get one" responses from the Teams API.  
>  
> All successful responses appear to return a collection, with exactly ONE item in the collection.  
> Therefore, a "get one employee" return value will be `Observable<Employee[]>`, same as "get all".  
> An unsuccessful response returns HTTP 500, so we'll have to test for that. Maybe its result will be to force a navigation to the "not found" component. (Why? Think about it...)   
>  
> The response from a POST or PUT is a JSON object, in this format:  
> { "message": "Employee abc123def456ghi789 added successfully" }

<br>

#### Prepare to use Angular template-driven forms

This info is in the weekly class notes, and in the [Angular documentation](https://angular.io/guide/forms#revise-appmodulets). 

Open the app module (`app.module.ts`) for editing. 

Add the forms module to the import statements near the top:

```ts
import { FormsModule } from "@angular/forms";
```

Then, in the `@NgModule` decorator object, in the `imports` array, add the `FormsModule` module. 

Finally, we suggest adding a few style rules to visually indicate form elements that are valid and invalid. In the `styles.css` file (in the project root), add these rules:

```css
/* Forms classes */

.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
```

<br>

#### Team list component

In this section, and in the other component-related sections that follow, we will perform the coding tasks in both the component (class and template) and the data manager service that will fulfill the use case. Sometimes there's no "straight line" approach, and it's necessary to go back-and-forth. 

The "display all teams" task should be well-understood by now, as you have done it at least a few times now. In summary:

In the data manager service, write a method (maybe named teamGetAll) that will fetch ALL teams from the Teams API.

In the teams component class, create a property to hold the data we want.

Call the data manager service method. The call must be in the ngOnInit method block, because we're ultimately working with a web service.

In the teams template, create the markup you want (e.g. an HTML Table) that will render the data.

Most "display all" views will allow the user to select an item on the list, and display its details. Therefore, as you have done before...

Still in the teams template, add an event handler for the "select an item" idea.

Back in the teams class, create a private field to hold a selected team.

Write a method that handles the "select an item" event. Its code will likely just navigate to the "team detail" component.

After completing this section, your "display all teams" view may look similar to the following:

![Team list](../media/a5/team-list-v1.png)

<br>

#### Team detail component

The "display item detail" task should be well-understood by now, as you have done it at least a few times now. In summary:

In the data manager service, write a method (maybe named teamGetAll) that will fetch a specific team from the Teams API.

In the "team detail" component class, create a property to hold the data we want.

Call the data manager service method. The call must be in the ngOnInit method block, because we're ultimately working with a web service.

In the "team detail" template, create the markup you want that will render the data (likely a definition list).

After completing this section, your "display item detail" view may look similar to the following:

![Team detail](../media/a5/team-detail-v1.png)

<br>

##### Preventing console errors during rendering

Assuming that you have followed the guidance above, specifically to create a property to hold the team data that comes back from the seb service, you may notice console errors that indicate undefined data, although the data does appear in the user interface. 

The reason for this is the delay in getting the data. When the view is first rendered, the data is not available. However, it comes within a few seconds or sooner. 

If this bothers you (and it probably should), one way to suppress the error messages is to initialize the property in the constructor. In other words, initialize the team property to a new instance of team. Then, for the reference properties (TeamLead, Employees, Projects), initialize them too. For example:

```ts
// This prevents a data binding error
// Assume that "team" is a property that will hold the data
// that comes back from the call to the web service
this.team = new Team();
this.team.TeamLead = new Employee();
this.team.Projects = [];
this.team.Employees = [];
```

<br>

##### Rendering project and team member names

Notice the "( coming soon )" placeholders for the projects and team members collections. We can fill those out now. 

In the "team detail" template, add an `*ngFor` repeater to render the name of each project. In your professor's sample solution, a `<span>` element was used to repeatedly render the project name, followed by a `<br>`. 

Do the same to render the team member (employee) names. 

After completing this section, your "display item detail" view may look similar to the following:

![Team detail](../media/a5/team-detail-v2.png)

<br>

#### Team create component

This will be a challenge. We suggest that you design, code, and test repeatedly. Make incremental progress.

Here is a suggested design-code-test approach for implementing a "create item" form.
1. Get started in the component class
2. Fetch the data that we need to render the form
3. Get started on the template, and "submit" handler
4. Plan the containment strategy for form elements
5. Text box for the team name
6. Drop-down list to select the team's leader (from the list of employees)
7. List box, multi-select, to select the team's members (from the list of employees)
8. List box, multi-select, to select the team's projects (from the list of projects)
9. Use the web service

Here is what we are attempting to do:

![Team create](../media/a5/team-create-step5.png)

<br>

As you can see, the form has these form fields:
1. A text box for the team name
2. A drop-down list to select the team's leader (from the list of employees)
3. A list box, multi-select, to select (Cmd+click or Ctrl+click) the team's members (from the list of employees)
4. Another list box, multi-select, to select the team's projects (from the list of projects)

<br>

##### 1. Get started in the component class

Like any component class, it needs imports, one or more constructor parameter, and one or more data properties. 

It needs at least these imports:
* Data manager service
* Data / schema classes for all entities

It needs at least this constructor parameter:
* Data manager service

If you want to user `router.navigate()` in this class, then you'll need the router injected. The alternative is to use a `routerLink` attribute in an `<a>` element in the template. 

It needs at least these data properties:

* A property of type Team, which starts empty, but gets filled in (by us) with the data entered by the user (this is the object that gets sent to the web service)

* A property for the selected "team lead"; its data type will be string (because that's the `value` in the form element, in other words, a string which uniquely identifies the rendered item)

* A property to hold an array of all Employee objects

* A property to hold all selected "team members"; this will be an array of *strings* (again, in a `select option` hierarchy in a form, the `value` attribute in the `option` element is a string which uniquely identifies the rendered item)

* A property to hold an array of Project objects

* A property to hold all selected "team projects"; this will be an array of *strings* (same reason as above)

<br>

##### 2. Fetch the data that we need to render the form

As you noticed above, we need the list of employees, and the list of projects, so that the user can complete their task. 

Therefore, in the `onInit()` method, fetch the employees, and assign the result to the employees property. Fetch the projects, and assign the result to the projects property. 

Yes, it would be nice to have the data sorted.

<br>

##### 3. Get started on the template, and "submit" handler

Create the component's containment structure. We suggest this (and then you can modify it if you wish):

```html
<div class="row">
  <h1>Create new team</h1>
  <h4>Enter information, and click the create button</h4>
  <div class='col-md-8 col-sm-12'>
    <form (ngSubmit)='onSubmit()' #f='ngForm'>

      <!-- Form elements go here -->

      <a class="btn btn-default" routerLink='/teams'>Back to list</a>
      <button class="btn btn-primary" type="submit" [disabled]='!f.form.valid'>Create</button>

    </form>
  </div>
</div>      
```

A few comments about this containment structure:
* On a wide viewport, the form will be about 2/3 the width
* On a narrow viewport (i.e. a phone), the form will be full width
* The `<form>` tag includes Angular-specific attributes
* It includes a back button
* The `submit` button includes an Angular-specific form validation check

As you can see, there is a `<button type='submit'...` element. Look up at the opening `<form...` tag, at the `(ngSubmit)='onSubmit()'` attribute. That's the combination that will submit the user-entered data to the `onSubmit()` method in the component class. 

Therefore, return to the component class, and write an `onSubmit()` method. For now, add this statement so that you can monitor your progress and success in the console:

```ts
// Assuming that "this.team" is a reference to the "Team" property
console.log(this.team);
```

<br>

##### 4. Plan the containment strategy for form elements

For consistency, all form elements should use the same containment strategy. In general, use this:

```html
<div class="form-group">

  <!-- Label for the element -->
  <label class="control-label" for="name">Team Name:</label>

  <!-- The element code goes here -->
  <input class="form-control" id="name" name="name" >
    <!-- Add more attributes as needed -->
    <!-- Two-way binding -->
    <!-- Template reference variable -->
    <!-- HTML attributes that work (e.g. autofocus etc.) -->
    <!-- Angular attributes -->

  <!-- Validation error area -->
  <div *ngIf='name.invalid && (name.dirty || name.touched)' class='alert alert-danger'>
    <!-- The code below is situation-dependent - think before coding -->
    <div *ngIf='name.errors.required'>Team Name is required, 3 to 50 characters</div>
    <div *ngIf='name.errors.pattern'>Team Name must be at least 3 characters</div>
  </div>

</div>
```

<br>

##### 5. Text box for the team name

The form needs a text box for the team name. Its features:
* Two-way binding to the team name
* Template reference variable (to benefit the validation error message area)
* Required
* Autofocus
* Placeholder text
* Maximum length that's reasonable (50? 100?)
* Minimum length that's reasonable (5?) (note that you must use the `pattern` attribute with a regex)

After this task, your work may look like this:

![Team create](../media/a5/team-create-step1.png)

<br>

Get the field to display and function correctly. Then you can go back and configure the template reference variable, and make the validation error message(s) appear. 

After this task, your work may look like this:

![Team create](../media/a5/team-create-step2.png)

<br>

##### 6. Drop-down list to select the team's leader (from the list of employees)

The form needs a drop-down list for the team's leader. Its features:
* Two-way binding to the selected team leader (employee)
* Template reference variable (to benefit the validation error message area)
* The `select` element is `required` 
* The `option` elements are generated by `*ngFor` and the collection of employees

It is common to configure a prompt for the user. We do not want the user to select the prompt however. Here's a strategy to show a non-selectable (and disappearing) prompt. Add this element just *before* the other `option` element:

```html
<!-- Assuming that "teamLead" is the name of the template reference variable -->
<option *ngIf='teamLead.invalid && teamLead.pristine' value='' disabled>Select a team leader...</option>
```

Let's test its functionality. Back in the component class, add another `console.log` statement to show the value of the selected team leader (employee). Notice that the value is a string, and it is the employee identifier. 

If this works for you, then you are ready to add it to the team property. Remember, the team property started out empty. It now has (or should have from above) the team name, and it is ready for the team lead. 

In the employees collection, find the matching employee object, and assign it to the team's `TeamLead` property value. 

Again, use `console.log` to confirm your progress.

After this task, your work may look like this (the drop-down list is collapsed):

![Team create](../media/a5/team-create-step3.png)

<br>

##### 7. List box, multi-select, to select the team's members (from the list of employees)

The form needs a list box of employees, so that the user can select team members. Its features:
* Two-way binding to the selected employees array
* Template reference variable (to benefit the validation error message area)
* The `select` element is `required`, and also allows `multiple`
* Also, decide on the number of visible rows, and then add the `size` attribute
* The `option` elements are generated by `*ngFor` and the collection of employees

Similar to above, we can configure a prompt for the user. Here's a strategy to show a non-selectable (and disappearing) prompt. Add this element just *before* the other `option` element:

```html
<!-- Assuming that "teamMembers" is the name of the template reference variable -->
<option *ngIf='teamMembers.invalid && teamMembers.pristine' value='' disabled>Select one or more team members...</option>
```

Let's test its functionality. Back in the component class, add another `console.log` statement to show the value of the selected team members. Notice that the value is an array of strings, and each one is the employee identifier. 

If this works for you, then you are ready to add to the team property. At this point, your team property has (or should have from above) the team name, and the team lead (employee) object. 

The coding strategy requires a bit of thought. At this point in time, we have this situation:

1. The team property has an empty `Employees` array property.

2. We have a collection of one or more string identifiers in the selected employees property.

3. We have a complete collection of all employees in the employees property. 

Essentially, what we need to do is this:

```ts
// For each string identifier in the selected employees property
// Locate its matching employee in the all employees property
// Add it to the team property's "Employees" array
```

Again, use `console.log` to confirm your progress.

After this task, your work may look like this:

![Team create](../media/a5/team-create-step4.png)

<br>

##### 8. List box, multi-select, to select the team's projects (from the list of projects)

This task will be similar to #7 above. The form needs a list box of projects, so that the user can select the team's projects. Its features:
* Two-way binding to the selected projects array
* Template reference variable (to benefit the validation error message area)
* The `select` element is `required`, and also allows `multiple`
* Also, decide on the number of visible rows, and then add the `size` attribute
* The `option` elements are generated by `*ngFor` and the collection of projects

Similar to above, we can configure a prompt for the user. Here's a strategy to show a non-selectable (and disappearing) prompt. Add this element just *before* the other `option` element:

```html
<!-- Assuming that "teamProjects" is the name of the template reference variable -->
<option *ngIf='teamProjects.invalid && teamProjects.pristine' value='' disabled>Select one or more projects...</option>
```

Let's test its functionality. Back in the component class, add another `console.log` statement to show the value of the selected projects. Notice that the value is an array of strings, and each one is the project identifier. 

If this works for you, then you are ready to add to the team property. At this point, your team property has (or should have from above) the team name, the team lead (employee) object, and an array of one or more selected team member (employee) objects. 

Like #7 above, the coding strategy requires a bit of thought. At this point in time, we have this situation:

1. The team property has an empty `Projects` array property.

2. We have a collection of one or more string identifiers in the selected projects property.

3. We have a complete collection of all projects in the projects property. 

Essentially, what we need to do is this:

```ts
// For each string identifier in the selected projects property
// Locate its matching project in the all projects property
// Add it to the team property's "Projects" array
```

Again, use `console.log` to confirm your progress.

After this task, your work may look like this:

![Team create](../media/a5/team-create-step5.png)

<br>

##### 9. Use the web service

If your form is working correctly (as seen in `console.log` output), you're ready to use the web service. 

In the data manager service, add a "team add" method. It accepts a `Team` object as a parameter, and returns an `Observable<any>`. 

The method body will send a POST request to the web service. Its return type can be `<any>`. For now, we will not care about the return value. 

In the component class `onSubmit()` method, call the just-created data manager service method (and pass on the team object). Subscribe to the result as usual. 

How will we know if it works? Look at your console. If no error message, it may have worked.

What should it do after it successfully adds a new team? There are several possible actions. One is to navigate to the list-of-teams view. That's easy to implement. Another is to navigate to the team detail view for the just-added team. This action can be done, but it requires more work. 

Let's decide to navigate to the list-of-teams view. Add a function body to the `subscribe()` method's arrow function to do this, as shown in the following example. 

```ts
this.m.teamAdd(this.team).subscribe(res => {
  // Navigate to the teams list
  this.router.navigate(['/teams']);
  // Notice that we didn't use the "res" local variable
});
```

If you want to navigate to the team detail view, then we need to do a bit of work in the data manager service, and a bit of work in the component class. 

In the data manager class, we will now care about the return value. The web service returns `<any>`. It is actually an object with one key-value pair:

```json
{ "message": "Team abc123def456 added successfully" }
```

So, let's extract the string value, and return it to the caller:

```ts
teamAdd(newItem: Team): Observable<any> {
  return this.teamsApi.post<any>(`${this.url}teams`, newItem)
    .pipe(map(wrapper => wrapper.message));
```

> Remember...  
> When you use an observable operator like "map", it must be imported, for example:  
> `import { map } from 'rxjs/operators'`

Back in the component class, remove the "Team " and " added successfully" substrings, leaving only the team identifier string.

```ts
    this.m.teamAdd(this.team).subscribe(res => {

      // Show the response from the web service
      console.log(res as string);

      // Extract the team identifier
      let teamId = res as string;
      teamId = teamId.replace('Team ', '');
      teamId = teamId.replace(' added successfully', '');
      console.log(teamId);

      // Navigate to the team detail
      this.router.navigate(['/team/detail', teamId]);
    });
```

<br>

#### Team edit component

If you are thinking that this will be as challenging as the "add team" task, we suggest that it is not. It should be easier. 

We will re-use much of the logic and code from the "add team" component class and template. However, there are a few ideas that will be different. First, when the component is loaded, it will fetch the data for the team that it must display. Then, when the form is submitted, we must do an extra task. 

Here's what we are attempting to do:

![Team edit](../media/a5/team-edit-v1.png)

<br>

##### 1. Copy code from the "add team" component class and template

Get started by copying the code from the "add team" component class and template. Don't run or test it yet. 

<br>

##### 2. Prepare the data for the form

Before starting this task, remember that the component is initialized with an empty team object. Then, we must configure it with the data from the team being edited. 

In the component class, in its `onInit()` method, fetch the team object that matches the team identifier value in the URL. (You have done that earlier, in the "team detail" component.) 

Then, here's the rest of the algorithm:

```ts
// Fetch the team
this.m.teamGetById(id).subscribe(o => {

  // Assign "o" (the team data from the web service)
  // to the class' team property

  // Assign the employee identifier (string) from the
  // team's "TeamLead" property to the class'
  // selected employee property

  // Assign the employee identifiers (strings) from the
  // team's "Employees" property to the class'
  // selected employees property
  // The "map()" method enables us to extract the value
  // of one specific property, which is really nice
  // This enables us to write a line of code like this...
  this.selectedEmployees = this.team.Employees.map(e => e._id);
  // ...and "this.selectedEmployees" is filled with data
  // (show the result with console.log if you're curious)

  // Similar to above,
  // assign the project identifiers (strings) from the
  // team's "Projects" property to the class'
  // selected projects property
  // Again, use the "map()" method to extract the identifiers
});

```

Angular forms marks the "selected" values in the user interface when the form loads. Nice work. 

<br>

##### 3. Modify the onSubmit() behaviour

Logically, most of the work is the same as in the "add team" task (configure the team object, call a data manager service method). 

However, before we configure the team's array properties (Employees and Projects), we must empty them. In other words, the NEW selections must replace the old selections. So, just before configuring each array property with the new selections, just clear it out (i.e. set its value to an empty array). 

What should it do after it successfully edits the team? It may make the most sense to navigate to the detail view. There's one difference from the "add team" info above however. We do not have to extract the team identifier from the return result, because we already have that locally in the team object (e.g. `team._id`). So, we have all we need to navigate.

<br>

#### Host deployment

The [deployment document](angular-deployment-intro) covers this topic completely. It also takes you back to the [getting started with Heroku notes](http://zenit.senecac.on.ca/~patrick.crawford/index.php/web322/course-notes/getting-started-with-heroku/) from the previous course, BTI325. While writing this section of the assignment specifications, your professor followed the instructions, with a successful result. 

Here are the distinct instruction steps that were followed. Most are done in the Terminal app:
1. Create a new folder (e.g. a5server)
2. In that folder, create a folder named "public"
3. And, create a file named "server.js"
4. Build the Assignment 5 app for host deployment
5. Copy the *contents* of the Assignment 5 "dist" folder to the new "public" folder
6. Run the "npm init" command
7. Install Express.js (npm install express)
8. Run the "git init" command
9. In VS Code, edit "server.js", paste in the *bottom* version of the server code from the [deployment notes](https://sictweb.github.io/bti425-2020/notes/angular-deployment-intro)
10. Still in VS Code, in the "source control" tool, enter a commit info message, and then commit
11. Back in Terminal, login to Heroku (the "heroku login" command)
12. Run the "heroku create" command
13. Send your app to Heroku with the "git push heroku master" command

Then open your app in a browser. 

If you make changes to your app's code, commit again (in VS Code) and then "git push..." again.

**Important**: Save a screen shot of your app running on a laptop or deskop computer. Also, save a screen shot of your app running on a smartphone. Copy them into your app's "assets" folder before you submit your work for grading. 

<br>

### Testing your work

For this assignment, there is no external testing capability that can be used. 

Therefore, rely on your browser tools for this step. Soon, your professor will help you learn how to use the debugger.

<br>

### Reminder about academic honesty

You must comply with the College's academic honesty policy.

Although you may interact and collaborate with others, you must submit your own work.

<br> 

### Submitting your work

Here's how to submit your work, before the due date and time:

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. 

4. Compress/zip the copied folder. The zip file SHOULD be less than 1MB in size. If it isn't, you haven't followed the instructions properly.

5. Login to My.Seneca. Open the course area. Click the "Assignments" link on the left-side navigator. Follow the link for this assignment. Submit/upload your zip file. The page will accept three submissions, so if you upload, then decide to fix something and upload again, you can do so.

<br>
