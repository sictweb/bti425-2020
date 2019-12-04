---
title: Assignment 2
layout: default
---

## BTI425 Assignment 2

The purpose or objective of the assignment is to create a substantial Angular app.

Read/skim all of this document before you begin work.

While you are doing the work, if a *specific task* is not clear, or it seems to require an unreasonable amount of time to complete, or it seems to require knowledge way beyond the content we've covered in the course, please don't hesistate to contact your professor. 

> You should NOT have to search for or locate resources "out there" in an effort to complete this work.  
> The resources provided in this course - notes, linked content, code examples - provide sufficient coverage. Review them frequently.  
> If you think that you will find "the answer" to this assignment somewhere "out there", you're wrong. Use the course resources as your shortcut. 

<br>

### Due Date

Sunday, March 31, 2019, at 11:00pm ET

Grade value: 25% of your final course grade

*If you wish to submit the assignment before the due date and time, you can do that.*

<br>

### Quick links

This is a long document. Here are links to some sections:

[Screen shots of the professor's example solution](#a-guided-tour-of-the-app) 

[Getting started](#getting-started)

[Web service/API starter tasks](#web-serviceapi-starter-tasks)

[Angular web app starter tasks](#angular-web-app-starter-tasks)

[Save cart task](#save-cart-task-web-api-and-angular-app)

[Clear cart task](#clear-cart-task-web-api-and-angular-app)

[Confirm timetable task](#confirm-timetable-task-web-api-and-angular-app)

[Deploy the web API and Angular app to Heroku](#deploy-the-web-api-and-the-angular-app-to-heroku)

[Submitting your work](#submitting-your-work)

<br>

### Overview and purpose

As noted above, the purpose of objective of the assignment is to create a substantial Angular app that has good coverage of the topics since we started working with this app dev platform. 

The theme of the app is to perform a task that's similar to the *new academic term course enrolment* process. Current students use the student center app to do this task. The professor team thought it would be interesting to implement some of this here. 

The app will be deployed to a public host (a Heroku endpoint), so that you can deliver it to other devices (including, for example, your smartphone).  

Notably, the app will use a *new* web service, also posted to Heroku and Atlas. The web service should be your first work task and completion goal. 

Looking to the future, it is possible that the final Assignment 3 will build upon the work done in this Assignment 2, by adding security-aware capabilities and safe-coding techniques. 

<br>

#### A guided tour of the app

If you wish to interact with the app, the professor-created example solution is publicly available:

[https://pam-2019-a2app.herokuapp.com](https://pam-2019-a2app.herokuapp.com)

Right-click any image below to open it full-size in a new tab or window. 

The landing page of the app enables the user to view a menu of tasks. 

<img class="border1" src="media/a2-start-view.png" alt="">

<br>

A list of all possible courses (for all academic programs) can be viewed. 

<img class="border1" src="media/a2-course-list.png" alt="">

<br>

A list of students can be viewed.

<img class="border1" src="media/a2-student-list.png" alt="">

<br>

Select any student to view details and begin working with the enrolment task. Notice the "Tentative courses" list is empty. It is intended to show a list of selected courses that have not yet been added to the timetable. Also notice the empty "Confirmed courses" list. After viewing, click/tap the "Select courses" button. 

<img class="border1" src="media/a2-student-detail-start.png" alt="">

<br>

The "shopping cart" appears. 

On the top, some task buttons are available. 

On the left, a *customized* list of possible courses for that student is shown. It is built based on the student's prerequisites (from the course history). The add/remove button will add (or remove) a course to/from a "selected courses" list. 

On the right, the selected courses appear in a timetable grid, and in a standard list format. 

> Ready-to-use components for the grid and the list have been posted in the [course code repo in the Week 8 folder](https://github.com/sictweb/bti425/tree/master/Week_08) (alongside the other Assignment 2 content). 

<img class="border1" src="media/a2-cart-start.png" alt="">

<br>

Interact with the list, and add/remove some courses. Notice that the selections appear on the right. 

<img class="border1" src="media/a2-cart-interaction.png" alt="">

<br>

After you're happy with the result, click/tap the "Save for later" button. It will do that, and show you a message. 

<img class="border1" src="media/a2-cart-saved-message-top.png" alt="">

<br>

When you're happy with the result, return to the student detail page, and the selected courses will appear. 

<img class="border1" src="media/a2-student-detail-after.png" alt="">

<br>

> The "confirm" task will be posted soon.

<br>

### Getting started

Getting started includes generating a new project, and configuring your development environment. 

Use `ng new...` to generate a new project, probably named `assign2`. 

> Alternatively, make a copy of the repo's Week 10 `forms-validation-intro` code example, and modify that.

Set up the rest of your dev environment (terminal windows, editor, browsers and tools). 

<br>

### Doing the work, initial 

We work on two code bases:
1. The web service/API 
2. The Angular web app 

Before we do the web service/API work, get familiar with the data. 

During Week 8, your goal should be to start getting comfortable with the assignment's data model. We will have multiple entity collections, with some related data. As a result, it will be more substantial than the single-entity web service that you built in Assignment 1. 

To support this learning, get the `assign-2-data-student-v1.json` data file from the Week 8 folder of the code repository. Study its structure. Notice the following:
* It is a collection of "student" objects 
* Each "student" object has a number of data properties 
* One of its properties is "credits", which is a collection of courses a student has passed (this is a "course history")

Then, edit a component (new or existing) your Angular app to display the data in a simple table. The contents of the JSON data file can be the value of a new class-level property - that's the easiest way to materialize the data without yet having to create a database or a web service. 

After it shows the results you want, you can throw away this "testing" code.

The Week 8 folder also includes courses-related data file, `assign-2-data-courses-available-v2.json`. Study its structure. Notice the following: 
* It is a collection of "available course" objects 
* Each "course" object has a number of data properties 
* Data for both the "2018 Fall" and "2019 Winter" terms are included (although we will use only the "2019 Winter" items)
* One of the properties is "prerequisite", which is a collection of strings that are course codes 

Similar to above, it would be a good idea to work with the courses data. You could either show/display the data in an Angular component, or you could use Node.js. The code repo has a `a2dataquerytests.js` source code file that you can edit and execute at the command line. It will enable you to become familiar with the course data. 

<br>

### Web service/API starter tasks

In this section, the web service/API starter tasks are discussed. 

<br>

#### Import each JSON data file into a MongoDB Atlas collection

As noted above, there are data files for "students" and "available courses". 

Import each JSON data file into a MongoDB Atlas collection. Use the command-line `mongoimport` program to do this task. Get the command text from the MongoDB Atlas console. We suggest that you paste the text into a text editor, so that you can edit and prepare the command before you attempt to execute it. 

> Remember to add the `--jsonArray` option to the command

<br>

#### Write a schema class for each collection

The guidance now is to create a separate source code file for each Mongoose schema class. We suggest a naming convention for the source code files, by using a prefix "msc-" (the initials for Mongoose schema class). That way, you can tell at a glance the purpose of the source code file. For example:
```
msc-student.js
msc-course.js
```

The data members of both schema classes will be strings or numbers mostly. Make sure the properties that have date and time info are stored as strings. 

Notice that the student data has an embedded collection of course history credits. Therefore, create another source code file to define a "credit" class:
```
msc-credit.js
```

In the student schema class, near the top, "require" the credit schema class like this:
```js
// Get the schema for the embedded/referenced document
var Credit = require('./msc-credit');
```

Then, in the student schema class, the property can be defined like this:
```js
credits: [Credit]
```

In the `manager.js` code, when you define a constant for each schema class, you can "require" the student schema class, but you don't need to "require" the credit schema class, because it will be inherited by the above action.

Notice that the course data has an embedded collection of prerequisite (course codes). The property can be defined as an array of type String.

<br>

#### Add functions/methods to `server.js` and `manager.js` 

We suggest that you create functions/methods that will deliver:
* all students
* one specific student, fetched by its unique MongoDB identifier
* all courses
* one specific course, as above 

We also suggest that you create two additional functions/methods:
* all courses in the BSD program in the Winter 2019 term 
* all courses in the CPA program in the Winter 2019 term

Doing this will enable a smaller result set to be delivered to the requestor. How should this be coded?

Recently, you were introduced to the "get some, filtered" Mongoose query. You learned that you can pass a JavaScript object to the `find()` method; the object has name-value pairs that represent the filter criteria. For example, your code will end up looking something like this:
```js
Courses.find({ academicProgram: 'some-string', term: 'some-string' })
  // This will find all that match BOTH criteria
```

Test your work using Postman, before moving on to the Angular app coding. 

Then deploy the web service/API to Heroku. 

> Later, we will add two more functions/methods:  
> * save cart, to save a tentative selection of courses 
> * save timetable, to confirm or commit, and update the enrol totals

<br>

### Angular web app starter tasks

In this section, the Angular web app starter tasks are discussed. 

<br>

#### Consistent layout 

We must have a consistent and functional visual layout. Therefore, the first task is to create a layout, or a structure. You can use the guidance in the [Angular component interaction](https://github.com/sictweb/bti425/tree/master/Week_07) code example (in the repo). Customize the "template" so that your name appears in the header area of the viewport. Make sure that there is a navigation scheme. 

Also, make sure there is a "home" component, and a "not found" component. 

<br>

#### Components to support the app's purpose

As suggested by the guided tour above, a number of components are needed. Create them now. Here's what we suggest:

* Course list - shows all available courses in a table/list 
* Course detail - for one specific course 
* Student list - shows all available students 
* Student detail - for one specific student
* Shopping cart - to enable selection of courses for a student

> Your professors have provided three additional cart-related components.  
> They will enhance the shopping cart experience.  
> More information is provided below.  
> They can be copied from the course repo (Week 8 folder). 

<br>

#### Routing

As suggested by the guidance and topic coverage, configure and test the routing feature. 

Remember to configure a "home" component and route, and a "not found" component and route. 

Make sure you think about then implement some appropriate navigation elements in your app. For example, a "list" view will probably include link elements to "details". And, a "details" view will probably include a link element to "go back" to the "list". This is a general statement, and your app needs may vary. 

The "home page" component, as a landing page for the app, will state the app's purpose. *More importantly*, it will include two standard HTML hyperlinks:
1. One is the URL to your Heroku-hosted (Angular) app 
2. The other is the URL to your Heroku-hosted MongoDB <u>d</u>atabase + <u>E</u>xpress.js + <u>N</u>ode.js (DEN) web service 

Like the professor's publicly-posted example solution, we also suggest that you add two links to the home page. One link points to the student list. The other will be used for a future "login" task (and it can be rendered as a disabled button for now).

> Your professor needs the URL to your hosted Angular app so that it can be tested on a standard computer browser and on a smartphone or tablet.  
> The URL to your hosted web service is needed too, so that your professor can interact with it using Postman.

<br>

### Doing the work, detail

As a follow-up to your recent work (above) with the web service/API, edit the components that will display students and courses, all (in a list) and one (as detail). 

The student detail component should probably show/list the course history credits. It should also have a navigation element that will display the (shopping) "cart". (Look at the professors' example solution for inspiration. Yours does NOT have to look identical, but it should show enough to be informative and useful.) 

<br>

### Cart component, class code

This is the most interesting component, with new features. 

Think of it as a kind of "student detail" page, but with special functionality. 

As you can see in the example solution, it displays data for a specific student, and a list of courses that a student can select. It also offers tasks (save selections, confirm as timetable). 

On the right side of the example solution, a timetable "grid" shows the day-and-time of the selected courses. Below that, a list of selected courses appears. *Both these areas are components, and will be provided by your professors.* 

Here is some guidance that will help you build this component. 

<br>

#### Routing and the component

One decision we must make concerns routing. Assuming that the "student detail" component is located here:
```
/student/detail/:id
```

How should we get to the cart? Should we do the following? We know that it would work (if we did the usual coding tasks):
```
/student/cart/:id
```

As an alternative, we are suggesting that we store the student object in the service, and use it to maintain "interaction state". This was discussed [early in the course](https://bti425.ca/notes/intro-web-services). The benefit is that we would have a simple URL like the following that does not expose any student-specific identifier/data:
```
/cart
```

How does this all work? Well, in point form, this is how we can do it:
* Define a property in the service, to hold a student object 
* When the student detail component loads (`ngOnInit`), it also saves/stores the student object to the property in the service 
* When the cart component loads (`constructor`), it attempts to get the student object from the property in the service 
* If successful, it copies it to a local "student" property 
* Otherwise, it does a programmatic navigation to the student list

> We could do the same task in the "student detail" component too.  
> It's not required for the assignment, but it's something to think about.

<br>

#### Properties in the component 

We suggest creating three array properties. Each will hold a collection of course objects. 

A "courses possible" array is intended to hold the results of a query to the service (and then on to the web API) for all Winter 2019 courses in an academic program. The contents of this array will NOT be displayed/rendered - it is used as in-memory data. 

> This collection starts out empty, and is filled in as a result of a call (to the web API) made in the `ngOnInit` method. 

A "courses matched" array is intended to hold the results of a matching task. Each item in the "courses possible" array will be inspected, and if it is determined that the student will be able to select the course, it is copied (i.e. push) to this "courses matched" array. The contents of this array WILL be rendered in the user interface. 

> This collection starts out empty, and is filled in as a result of a call to a matching function, which we must write. 

A "courses selected" array is intended to hold the results of a user interaction task. In the user interface, a user will select one of the displayed courses (from the "courses matched" collection above), and it will be copied to this "courses selected" array. 

> This collection starts out empty, and is filled in as a result of user interaction. 

A property to hold the current "student" object is also needed, as described in the previous section. 

<br>

#### Initialization 

As described earlier, we need the student object:
* When the cart component loads (`constructor`), it attempts to get the student object from the property in the service 
* If successful, it copies it to a local "student" property 
* Otherwise, it does a programmatic navigation to the student list

We also need the "courses possible" data, so we get this in `ngOnInit`. When the data comes in, we save it in the property. Then, we call a new function (that we must write) to filter the "courses possible" collection into a smaller "courses matched" collection that is customized for the specific student. 

Do you think you need an algorithm to build the "courses matched" collection? If yes, try this:

```js
courseMatch(): void {

  // For each possible course...
    // Continue only if the enrol total is less than 4
      // Do we have a course history credit for this course?
      // If yes, continue
        // Look for a match of ALL prereqs...
        // If we have ALL prereqs in the course history...
          // Add course to the "courses matched" collection

  // Recommended- clean up the time string by removing 
  // the seconds data (e.g. 13:30:00 becomes 13:30)
  // (the professor-provided grid and list components)
  // depend on this cleanup
}
```

A comment about the "Look for match of ALL prereqs": The logic may be a bit easier if we set a boolean "flag" (to "true") before we look at each prerequsite. Then, as we inspect each prerequisite, and we find one that's missing, we can change the "flag" to false. After finishing looking at all the prerequisites, the "flag" is used to determine whether we add the course to the "courses matched" collection.

<br>

#### Task functions/methods

The cart will have some functionality or behaviour. So, we must write some functions/methods. Make a plan to write at least these functions/methods, and we'll fill in the code soon:

courseSelect
* accepts a course object argument, and returns nothing 
* its purpose is to handle each course add/remove button task in the UI
* as a result, it will copy the course object to the "courses selected" collection, or remove it 

taskSaveCart
* accepts no argument, and returns nothing 
* its purpose is to save the "courses selected" collection as the value of a "cartSaved" property in the in-memory student document
* it also sends a request to the web API to save the collection to the value of the "cartSaved" property in the database student document

> Soon, you will learn how to code the "save cart" web API method. 

taskClear
* accepts no argument, and returns nothing
* its purpose is to clear/empty the "courses selected" collection 
* and to clear/empty the value of the "cartSaved" property in the in-memory student document
* it also sends a request to the web API to clear/empty the value of the "cartSaved" property in the database student document (it will use the same "save cart" web API method as above)

> Suggestion - The initial "testing" version of your method can simply clear/empty the "courses selected" collection, without calling the web API.  
> That functionality will enable you to test the basic behaviour. 

taskConfirmTimetable
* accepts no argument, and returns nothing
* its purpose is to save the "courses selected" collection as the value of a "timetableSaved" property in the in-memory student document
* it also sends a request to the web API to do a similar task; in addition, it updates the enrol total for each course selected 
* finally, it clears the value of the "cartSaved" property in both the in-memory and database student documents 

> Soon, you will learn how to code the "save timetable" web API method. 

<br>

#### Cart component, template code

In the professors' [example solution](https://pam-2019-a2app.herokuapp.com), the cart template layout is configured as a Bootstrap row. The left side (list of matching courses for the student) is 7 Bootstrap grid columns wide (`col-md-7`), and the right side area that holds the grid and the list is 5 grid columns wide (`col-md-5`). (Yours does NOT have to look identical, but it should show enough to be informative and useful.)

> The professors' example solution puts the left side list in a scrollable container. How?  
> It's inside a `div`, with the height determined using the new `vh` (viewport height unit), and setting the y-axis overflow to auto. 

The left side list is rendered from the "courses matched" array. 

How did the example solution get the day name?  
By using a series of conditional elements, for example:  
```html  
<span *ngIf="c.classMon == 'Y'">Monday</span>
``` 

The right side area is rendered by adding these elements inside the `div` container:
```html
<app-cart-selected-grid [coursesSelected]="coursesSelected"></app-cart-selected-grid>
<app-cart-selected-list [coursesSelected]="coursesSelected"></app-cart-selected-list>
```

In other words, the grid and list components are *child* components of the cart *parent*. 

<br>

**Add/remove button**

The professor's example solution has some specific behaviour for the "course select" task. How is that done? 

It's possible because - as you know - we can bind a value to an attribute of an element. The Bootstrap button classes include a green `btn-success` class, and a red `btn-danger` class. We want to use one of these, depending upon whether the course is already selected or not. 

The Angular element attribute name that we must use is `ngClass`, and not simply "class". 

The value will be provided by a *new* function/method that we add to the component class. We pass (as a parameter) the current row object to the function/method, which will check whether the current row object is already in the "courses selected" collection. If it is, we should show a red button (to signify stop/remove). If not, we should show a green button (to signify go/add). 

Depending on how you want to code the markup, the function/method could return a boolean or a string (e.g. "btn btn-danger"). In the example markup below, the function/method returns a boolean. Notice the following: 
* it has the familiar "click" event handler binding 
* it composes the element's "class" attribute with a ternary operator

```html
<button [ngClass]="['btn', isCourseSelected(c) ? 'btn-danger' : 'btn-success']" (click)="courseSelect(c)">+ / -</button>
```

<br>

#### Checkpoint - testing your work

At this point in time, before continuing, your app should be able to do the following:
* display a list of all students 
* display one specific selected student
* display a list of all courses 
* display one specific selected course
* enable the getting started "shopping cart" functionality...
  * display matching courses for the selected student 
  * enable a course to be selected (and rendered)
  * enable the "courses selected" collection to be cleared

It would also be nice to ensure that the professor-provided grid and list components work correctly.

It would be a good idea to build and deploy the Angular app to Heroku. If there are problems, it is a better idea to fix them now, instead of waiting for the assignment's due date. 

<br>

#### What now? Finish the cart save, clear, and confirm functionality

In the sections below, the cart *save*, *clear*, and *confirm* functionality is briefly described. 

<br>

### Save cart task, web API and Angular app

Now it's time to enable the saving of the "courses selected" collection in the database, as a student's "tentative courses". 

We need to do the following:
* Add new properties to the (student) Mongoose schema 
* Write PUT-handling functions in `server.js` and `manager.js` 
* In the Angular app, add the new properties to the (student) data model class
* Write an Angular service function/method (for PUT) that calls out to the web API 
* Edit the "taskSave" function/method in the Angular app so that it calls the service function/method 

<br>

#### Mongoose schema work 

To enable saving of courses selected or confirmed, we need more properties in each student document. One of the nice features of a NoSQL document database store like MongoDB is that it allows - without errors - documents that have different shapes. This enables us to start out with the "student" schema you wrote a couple of weeks ago, and then add to that schema when we need to. 

Open the Mongoose schema class for "student".  
Require the "course" schema source code file (perhaps as `var Course...`)  
Add another property to the schema:  
`coursesSaved: [Course]` 

While you're there, we will need one more property, for the "confirm timetable" task that's described in a later section. We suggest:  
`coursesConfirmed: [Course]` 

Test your work, by confirming that your existing students "get all" and "get one" methods work, and deliver the data you expect. You will probably notice that the results will not include any name-value pair for the new "coursesSaved" property, because it's empty. 

<br>

#### Web API functions in `server.js` and `manager.js`

In a [code example in the Week 2 repo](https://github.com/sictweb/bti425/tree/610d5964b03b962625d688c246c80a57a6688331/Week_02/WebAPIv2-OneEntity), and in other code that you have written since, the pattern for all five typical CRUD tasks (get all, get one, add new, edit existing, delete item) is demonstrated. 

For this "save cart" task, we need a PUT handler. We will be updating a "student" document, by setting the value of its just-added "coursesSaved" property to an array (collection) of "courses selected". That array is passed in all the way from the Angular app (the component, then to the service) to the web API (first to the `server.js` function and then to this function). 

Start working with the `manager.js` function. It will handle the "edit existing" use case for a student. Maybe name it "studentCartSave". 

The function needs TWO arguments:
1. The student's identifier (which is the MongoDB long string)  
2. The data for the update task (which is an array of course objects) 

Before calling the Mongoose `findByIdAndUpdate()` method, we MUST package the data for the update task. Why? It is passed in as an *array of course objects*. It's not good enough, because it does not identify the property that we want to update. 

The data passed to the `findByIdAndUpdate()` function must be a (JavaScript) *object*, and NOT an array. The object must have one or more name-value pairs, with properties to be updated (along with their data values). Solution? Wrap the array data as an object, something like this:  

```js
var wrappedItem = { "coursesSaved": passed-in-array };
```

The rest of the logic will be similar to past examples, but we recommend returning a simple string (e.g. "Cart saved") as the `resolve()` argument, and NOT the item. 

Continue by working on the `server.js` function. 

From past examples or your own code, you are familar with the coding of a PUT handler in `server.js`. Therefore, copy/paste/create a new method. We suggest the route will be something like this:

```
/api/students/:id/cart/save
```

The rest of the logic will be similar to past examples, but we recommend returning a JavaScript object that matches the one in the `.catch()` error handler; its message text can be something simple like "Cart saved". In other words, don't return the "data". 

Remember to publish your updated web API to Heroku.

<br>

#### Angular app, add properties to student class

To match what you did above (for the Mongoose schema), open the "student" data model class for editing. Add BOTH new properties that match the names from above. They will be *optional*, e.g.  
```js
coursesSaved?: Course[];
```

<br>

#### Angular app, service function/method

In [code examples in the Week 10 repo](https://github.com/sictweb/bti425/tree/master/Week_10), and in other code that you have written since, the pattern for all five typical CRUD tasks (get all, get one, add new, edit existing, delete item) is demonstrated. 

We need a service function/method that will call the web API function that was just completed above. It will be a PUT handler. It will handle the "edit existing" use case for a student. Maybe name it "studentCartSave". 

The function needs TWO arguments:
1. The student's identifier (which is the MongoDB long string)  
2. The data for the update task (which is an array of course objects) 

It will return - and this is important - an observable of any:  
`Observable<any>`  
The return value will be that simple object that was seen above, e.g.:  
`{ "message": "Cart saved" }`

<br>

#### Angular app, cart component code

This method is fairly simple, and should probably do two things:
1. Set the value of the student's "coursesSaved" property to the "courses selected" array 
2. Call the Angular service method, passing in the student identifier and the "courses selected" array 

What must you "subscribe" to? Well, the web API returns a simple object with one property ("message") with some text. We suggest that you display that in (bind it to) the user interface. 

<br>

### Clear cart task, web API and Angular app

This should be a short section, because the task will use the code written for the "save cart" task. 

The only real difference here is that we want to pass an *empty* array as a parameter to the "save cart" service method. The remaining code in the chain should work correctly. 

The cart component function/method code is fairly simple, and should probably do two things:
1. Set the value of the student's "coursesSaved" property to an empty array 
2. Call the Angular service method, passing in the student identifier and an empty array 

Optionally, if you want to change the "Cart saved" message that appears in the user interface to "Cart cleared" (or something like that), go ahead. 

<br>

### Confirm timetable task, web API and Angular app

Now it's time to enable the saving of the "courses selected" collection in the database, as a student's "confirmed courses". 

> Your professors have provided the code for the web API `manager.js` function.  
> More information is provided below.  
> It can be copied from the course repo (Week 8 folder). 

This task will have the following steps:
* Confirm the readiness of the (student) Mongoose schema 
* Write/add PUT-handling functions in `server.js` and `manager.js` 
* Write an Angular service function/method (for PUT) that calls out to the web API 
* Edit the "taskConfirm" function/method in the Angular app so that it calls the service function/method 

#### Mongoose schema work

Above, you should have added a new property to the (student) Mongoose schema to hold the "coursesConfirmed" data. 

<br>

#### Web API functions in `server.js` and `manager.js` 

As noted above, the course professors have provided code for the Web API `manager.js` function. It is ready-to-use. 

If you want to write the `server.js` function and then comment it out until you get the professors' code, then the function will do a similar task to the "cart save" task. There will probably be a couple of differences: 
* Obviously, the route will be different  
(instead of `...cart/save` it will be `.../cart/confirmed`) 
* The response message will be something like "Timetable confirmed" 

Remember to publish your updated web API to Heroku.

<br>

#### Angular app, service function/method

Similar to above, a new service method is needed. It will be almost the same as the "cart save" code, but will call out to a different web API URL. 

It should also update the values of the in-memory (and perhaps the service property) student object...
* Add the "courses selected" collection as the value of the new coursesConfirmed property 
* Clear the coursesSaved property 

<br>

#### Angular app, cart component code 

This method is fairly simple, and should probably do a few things:
1. Set the value of the student's "coursesSaved" property to an empty array
2. Set the value of the student's "coursesConfirmed" property to the "courses selected" array
2. Call the Angular service method, passing in the student identifier and the "courses selected" array 

<br>

### Testing your work

For this assignment, there is no required external testing capability. Therefore, rely on your browser tools for this step. 

<br>

### Deploy the web API and the Angular app to Heroku

> Note - Above, you have already deployed the web API to Heroku and Atlas.

[Follow the guidance in the course notes](/notes/angular-heroku-deploy), and deploy the Angular app to a new Heroku app. 

> Remember to do as noted above...  
> Update your app's home page component to include two standard HTML hyperlinks:  
> 1. One is the URL to your Heroku-hosted (Angular) app  
> 2. The other is the URL to your Heroku-hosted (DEN) web service 

<br>

### Grading procedure

Your professor will use a checklist during the grading process. The checklist will include items based on the assignment specifications. No, we will not distribute the checklist before the due date. 

Here's some more comments on the grading procedure:
* Part marks can be earned (it's not an all-or-nothing scheme)  
* Some marks will be earned for the presence of the web service 
* Some marks will be earned for a deployed/hosted Angular app
* Each of the five interaction tasks will earn marks
  * Some tasks could be "worth" more than others

Please review (again) the [information about grades](https://bti425.ca/policies#information-about-grades). To repeat one of its points, you will not earn an "A" simply for meeting a set of specifications. High grades are earned with work that is clearly better than expected (by meeting the specs). Better work includes a range of "qualitative" measures, including code quality, app and/or UI appearance, organization, content formatting, building upon foundations, and so on. 

<br>

### Reminder about academic honesty

You must comply with the College's academic honesty policy. Although you may interact and collaborate with others, you must submit your own work.

When you are ready to submit your work, you will copy some of the code in your project to plain text files, so that the My.Seneca/Blackboard "SafeAssign" tool can do its job. The next section will tell you which files to copy.

SafeAssign compares your work with that of other current and past students, and with existing works on the web. It uses techniques that are difficult to defeat. The overall goal is to identify copied work. 

<br> 

### Submitting your work

We need both the Node+Express web service and the Angular web app.  

<mark>We need ALL your project files (and not just the txt files).</mark>

Here's how to submit your work, before the due date and time:

<br>

#### Node+Express web API

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. Also, if it has a `.git` folder, remove that too.

4. Still in that folder, add a new folder named "MyCode". Copy these source code files to the "MyCode" folder:  
**The JavaScript (JS) file that holds the "server" code**  
**The JS file that holds the "manager" code**  
**The JS files (multiple) that hold the "schema" code**  
For each of these files in the MyCode folder, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "assign2webservice.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

<br>

#### Angular web app 

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. Also, if it has a `.git` folder, remove that too.

4. Still in that folder, add a new folder named "MyCode". Copy these source code files to the "MyCode" folder:  
**App.js**  
**The TS file that holds the data model classes**  
**The TS file that holds the data model manager service class**  
**The TS file that holds the "student detail" component code**  
**The TS file that holds the "shopping cart" component code"**  
For each of these files in the MyCode folder, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "assign2app.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

#### Bundle both of them together

Ideally, bundle both of the zip files from above into a single zip file, maybe named something like "assignment2.zip". Then...

Login to My.Seneca.  
Open the course area.  
Click the "Assignments" link on the left-side navigator.  
Follow the link for this assignment.  
Submit/upload your zip file. The page will accept three submissions, so if you upload, then decide to fix something and upload again, you can do so.

<br>
