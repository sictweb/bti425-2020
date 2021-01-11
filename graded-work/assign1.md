---
title: Assignment 1
layout: default
---

## BTI425 Assignment 1

The purpose or objective of the assignment is to create a React app that interacts with a web API.

Read/skim all of this document before you begin work.

While you are doing the work, if a *specific task* is not clear, or it seems to require an unreasonable amount of time to complete, or it seems to require knowledge way beyond the content we've covered in the course, please don't hesistate to contact your professor. 

> You should NOT have to search for or locate resources "out there" in an effort to complete this work.  
> The resources provided in this course - notes, linked content, code examples - provide sufficient coverage. Review them frequently.  
> If you think that you will find "the answer" to this assignment somewhere "out there", you're wrong. Use the course resources as your shortcut. 

<br>

### Due Date

Tuesday, February 4, 2020, at 11:00pm ET

Grade value: 15% of your final course grade

*If you wish to submit the assignment before the due date and time, you can do that.*

<br>

### Overview and purpose

As noted above, the purpose or objective of the assignment is to create a web API and a React app that has good coverage of the topics in the first five weeks of the course. 

The web API will be posted to Heroku and Atlas, and provides the data for the React app. 

The React app will use components to support the typical range of data service tasks (get, add, edit, delete). It will also be deployed to a public host (Heroku), so that you can deliver it to other devices (including, for example, your smartphone).  

Here's a diagram that shows the relationships among your browser, the deployed React app, and the deployed web API. Right-click and open it in a new tab/window to view it full size. 

<img style="max-width: 300px;" class="border1 img-responsive" alt="Relationships" title="Relationships" src="media/a1-app-hosting.png" />

<br>

### Getting started, web API

Use `npm init` to initialize a new folder, probably named `a1-web-api`. Alternatively, use a code example from the repo as a base for your project work. 

<br>

#### Data and schema 

We will be working with familiar automobile or vehicle data in this Assignment 1. Some of the course's code examples have used a "cars" entity, which is similar to - but different from - what we want. 

Use [Mockaroo](https://mockaroo.com) to generate a data set of at least 150 items. At a minimum, the schema must include the following fields, each configured with an appropriate data type: 
* car make 
* car model
* car year
* VIN (vehicle identification number)
* MSRP (constrain to a reasonable value)
* photo (generated URL)

One of the data service tasks that we will support in both the web API and the React app is the *edit* task. What we'll do is think about the edit as a car purchase procedure. Therefore, when you specify the Mockaroo field list for the vehicle entity, add these additional fields that will be filled in by the *edit* task. Each can use the Mockaroo type "Blank", which will generate a null type and value (that's OK for now):
* purchase date 
* purchaser's name (one field is OK enough for this)
* purchaser's email address 
* price paid

We suggest that you add another two fields that seem interesting to you and that would be relevant to vehicle data. (Have a look at the data types; there's 143 or more of them, and surely a few of them will interest you.)

Remember to generate the JSON two ways, with and without the "array" checkbox selected. (An array result is good for use in a JavaScript app, and a non-array result is good for importing into MongoDB.)

Before using the generated data, use a text or code editor to change the image URL "http://" scheme prefix to "https://". Mockaroo generates the non-secure URL, but we want to store and use secure URLs. 

When you are working with the MongoDB database engine:
* create a database named `db-a1` (database for Assignment 1)
* in `db-a1`, create a collection named `vehicles` 
* import the generated JSON

<br>

#### Data service tasks 

We'll support all five familiar tasks:
* get all (should the results be sorted? if yes, how?)
* get one
* add new
* edit existing
* delete item

Write the code to make this happen. 

When complete, deploy to MongoDB Atlas. 

<br>

### Getting started, React app

Getting started includes generating a new project, and configuring your development environment. 

Use `create-react-app` to generate a new project, probably named `a1-app`. 

Make sure that your web API has been deployed to Heroku and Atlas, and make sure that you can interact with it correctly with Postman. This is important, because you must have confidence in the hosted app to make progress on the React app. 

Set up the rest of your dev environment (terminal windows, editor, browsers and tools). 

<br>

### Doing the work, initial 

As noted above, the app will support the typical range of data service tasks (get, add, edit, delete). As a result, all the topics covered in weeks 3, 4, and 5 will be implemented in the app:
* Multiple components 
* Routing
* Working with a web API
* Forms 

In the following sub-sections, we suggest that you do the initial coding work that will prepare you to make progress on each of the detailed areas. 

> As suggested above, read/skim all of this document before you begin work. 

<br>

#### Consistent layout 

We must have a consistent and functional visual layout. Therefore, the first task is to create a layout, or a structure. You can use the guidance in the code example found in the repo. 

> To be posted. 

Customize the "template" so that your name appears in the header area of the viewport. Make sure that there is a navigation scheme. 

<br>

#### Components to support the app's purpose

As suggested by the guidance in the [HTML Form patterns](/notes/html-form-patterns) document and the [React web services intro](https://github.com/sictweb/bti425/tree/master/Week_04) code example, create source code files to hold class components for each of the five kinds of interactions. 

On each component, remember to include navigation links and/or buttons that enables the user to effectively use the app. 

<br>

#### Routing

As suggested by the guidance and topic coverage, configure and test the routing feature. Make sure that each of the five (interaction) components participate in routing. The app's navigation menu may have links for only the "list..." and "create..." choices, so test the routing by manually typing in the URLs. 

Remember to configure a "home" component and route, and a "not found" component and route. 

The "home page" component, as a landing page for the app, will simply state the app's purpose. *More importantly*, it will include two standard HTML hyperlinks:
1. One is the URL to your Heroku-hosted (React) app 
2. The other is the URL to your Heroku-hosted MongoDB <u>d</u>atabase + <u>E</u>xpress.js + <u>N</u>ode.js (DEN) web API 

> Your professor needs the URL to your hosted React app so that it can be tested on a standard computer browser and on a smartphone or tablet.  
> The URL to your hosted web API is needed too, so that your professor can interact with it using Postman.

<br>

### Doing the work, detail

In the following sub-sections, guidance will be given to enable you to iteratively and sucessfully complete each of the five interaction components. 

The following guidance assumes that your Heroku + Atlas hosted web API works, fully and completely. 

> If you need some guidance to complete that task, review the [week 1](/notes/week01) and [week 2](/notes/week02) notes and code examples.  

In your functions that make requests to the web API, make sure that you use the Fetch API. 

<br>

#### Get all

This component should use a repeatable content container to display all objects. An HTML table is ideal for that purpose. In each table row, render links for detail (get one), edit, and delete. It would be nice to style the links as buttons. 

Data will be fetched (from the web API) in the `componentDidMount()` function. 

> Here, make sure that you know and understand the *shape* of the data that is coming in from the call to the web API. Match it to the shape of your local storage (state) property. 

Here's what it could look like; this is from the professor's sample solution. 

<mark>(placeholder image; will be replaced when the professor completes the sample solution)</mark>

![Get all](media/a1-example-get-all.png)

<br>

#### Get one

This component displays the data for one specific object. Use an appropriate content container scheme to hold the property names and values. 

Data will be fetched (from the web API) in the `componentDidMount()` function. 

It would be nice to use a *conditional rendering* tactic to nicely handle both the presence and the absence of an object. 

Here's what it could look like; this is from the professor's sample solution.

<mark>(placeholder image; will be replaced when the professor completes the sample solution)</mark>

![Get one](media/a1-example-get-one.png)

<br>

#### Add new

This component displays an HTML Form that enables a user to enter and submit data. Use an appropriate content container scheme to implement this feature. Don't hesitate to review and use the info in the course notes about HTML Forms in React apps. 

The form `<input>` elements must use the proper HTML5 types, so that they will render correctly (and use the right keyboard on mobile devices). 

Data will be sent to the web API, in a "submit" button handler function. After a successful save, redirect to the "detail" (get one) component, so that the user sees the results of their "add new" work.

> Again, make sure that you know and understand the *shape* of the data that the web API is expecting in an "add new" request. Then, send data that matches that shape. 

Here's what it could look like; this is from the professor's sample solution.

<mark>(placeholder image; will be replaced when the professor completes the sample solution)</mark>

![Add new](media/a1-example-add-new.png)

<br>

#### Edit existing

You have learned that the visual part of this component will be similar to the "add new" component. The buttons are different. Also, you can decide which object properties are editable. (Do NOT allow the user to edit the MongoDB object identifier property, `_id`). 

From a behaviour point of view, data for the object-to-be-edited will be fetched (from the web API) in the `componentDidMount()` function. 

There are different strategies for showing/inserting the data-to-be-edited into the form elements. You may, or may not have to, use the `value` attribute. If you want to use that, please remember that its name in React JSX is `defaultValue`. 

Then, data will be sent to the web API, in a "submit" button handler function. After a successful save, redirect to the "detail" (get one) component, so that the user sees the results of their "edit existing" work.

> One more time... make sure that you know and understand the *shape* of the data that the web API is expecting in an "edit existing" request. Then, send data that matches that shape. 

> This *edit* task is simulating a car "purchase" transaction.  
> Therefore, do NOT permit any of the original field values to be edited.  
> Allow/enable editing only on the "purchase"-related fields. 

Here's what it could look like; this is from the professor's sample solution.

<mark>(placeholder image; will be replaced when the professor completes the sample solution)</mark>

![Edit existing](media/a1-example-edit-existing.png)

<br>

#### Delete item

You have learned that the visual part of this component will be similar to the "get one" component. The buttons are different. 

From a behaviour point of view, data for the object-to-be-deleted will be fetched (from the web API) in the `componentDidMount()` function. 

Then, a "delete" request will be sent to the web API, in a "submit" button handler function. Then, redirect to the "list" (get all) component.

Here's what it could look like; this is from the professor's sample solution.

<mark>(placeholder image; will be replaced when the professor completes the sample solution)</mark>

![Delete item](media/a1-example-delete-item.png)

<br>

### Testing your work

For this assignment, there is no required external testing capability. Therefore, rely on your browser tools for this step. 

<br>

### Deploy the React app to Heroku

[Follow the guidance in the course notes](/notes/react-heroku-deploy), and deploy the React app to a new Heroku app. 

> Remember to do as noted above...  
> Update your home page component to include two standard HTML hyperlinks:  
> 1. One is the URL to your Heroku-hosted (React) app  
> 2. The other is the URL to your Heroku-hosted (DEN) web API 

<br>

### Grading procedure

Your professor will use a checklist during the grading process. The checklist will include items based on the assignment specifications. No, we will not distribute the checklist before the due date. 

Here's some more comments on the grading procedure:
* Part marks can be earned (it's not an all-or-nothing scheme)  
* Some marks will be earned for the presence of the web API 
* Some marks will be earned for a deployed/hosted React app
* Each of the five interaction tasks will earn marks
  * Some tasks could be "worth" more than others

Please review (again) the [information about grades](/bti425/policies#information-about-grades). To repeat one of its points, you will not earn an "A" simply for meeting a set of specifications. High grades are earned with work that is clearly better than expected (by meeting the specs). Better work includes a range of "qualitative" measures, including code quality, app and/or UI appearance, organization, content formatting, building upon foundations, and so on. 

<br>

### Reminder about academic honesty

You must comply with the College's academic honesty policy. Although you may interact and collaborate with others, you must submit your own work.

When you are ready to submit your work, you will copy some of the code in your project to plain text files, so that the My.Seneca/Blackboard "SafeAssign" tool can do its job. The next section will tell you which files to copy.

SafeAssign compares your work with that of other current and past students, and with existing works on the web. It uses techniques that are difficult to defeat. The overall goal is to identify copied work. 

<br> 

### Submitting your work

We need both the Node+Express web API and the React web app.  

Here's how to submit your work, before the due date and time:

#### Node+Express web API

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. Also, if it has a `.git` folder, remove that too.

4. Still in that folder, add a new folder named "MyCode". Copy these source code files to the "MyCode" folder:  
**The JavaScript (JS) file that holds the "server" code**  
**The JS file that holds the "manager" code**  
**The JS file that holds the "schema" code**  
For each of these files in the MyCode folder, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "webapi.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

#### React web app 

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. Also, if it has a `.git` folder, remove that too.

4. Still in that folder, add a new folder named "MyCode". Copy these source code files to the "MyCode" folder:  
**App.js**  
**The JS file that holds the "get all" component**  
**The JS file that holds the "get one" component**  
**The JS file that holds the "add new" component**  
**The JS file that holds the "edit existing" component**  
**The JS file that holds the "delete item" component**  
For each of these files in the MyCode folder, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "reactapp.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

#### Bundle both of them together

Ideally, bundle both of the zip files from above into a single zip file, maybe named something like "assignment1.zip". Then...

Login to My.Seneca.  
Open the course area.  
Click the "Assignments" link on the left-side navigator.  
Follow the link for this assignment.  
Submit/upload your zip file. The page will accept three submissions, so if you upload, then decide to fix something and upload again, you can do so.

<br>
