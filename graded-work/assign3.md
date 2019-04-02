---
title: Assignment 3
layout: default
---

## BTI425 Assignment 3

The purpose or objective of the assignment is to add some security features to the work done for the previous assignment.

Read/skim all of this document before you begin work.

While you are doing the work, if a *specific task* is not clear, or it seems to require an unreasonable amount of time to complete, or it seems to require knowledge way beyond the content we've covered in the course, please don't hesistate to contact your professor. 

> You should NOT have to search for or locate resources "out there" in an effort to complete this work.  
> The resources provided in this course - notes, linked content, code examples - provide sufficient coverage. Review them frequently.  
> If you think that you will find "the answer" to this assignment somewhere "out there", you're wrong. Use the course resources as your shortcut. 

<br>

### Due Date

Thursday, April 11, 2019, at 11:00pm ET

Grade value: 10% of your final course grade

*If you wish to submit the assignment before the due date and time, you can do that.*

<br>

### Quick links

> Not sure whether this section will be needed

<br>

### Overview and purpose

As noted above, the purpose of objective of the assignment is to add security features to the work done on the previous assignment. 

Both apps - the web API, and the Angular app - will be modified. 

> Notice:  
> <mark>This document is being edited.</mark>  
> This notice will be removed when the edits are complete.  

<br>

#### A guided tour of the changes

If you wish to interact with the app, the professor-created example solution is publicly available:

> Notice:  
> Your professors have not yet deccided whether this app will continue as is, or be replaced by an "...a3app..."

[https://pam-2019-a2app.herokuapp.com](https://pam-2019-a2app.herokuapp.com)

Right-click any image below to open it full-size in a new tab or window. 

The landing page of the app enables the user to view a menu of tasks. 

> The following image will be replaced.

<img class="border1" src="media/a2-start-view.png" alt="">

<br>

### Getting started

Our suggestion (and recommendation) is that you continue to work with your Assignment 2 code bases. 

Set up the rest of your dev environment (terminal windows, editor, browsers and tools). 

We continue to work on two code bases:
1. The web service/API 
2. The Angular web app 

<br>

### Web API starter tasks

In this section, the web API starter tasks are discussed. 

<br>

#### Import the user accounts JSON data file into a MongoDB Atlas collection

Your professors have provided a JSON data file that has a user account for each student in the Assignment 2 collection. It's in the Week 12 folder of the code example repo. Get it and download it. 

In your browser, login to your MongoDB Atlas console. 
Make sure that you know the following information:
- Database name 
- Credentials for your database

Now, navigate to your cluster, then "Command Line Tools". 

Copy the `mongoimport` command text to a plain text editor (e.g. VS Code, TextEdit on macOS, gedit on Ubuntu). Edit the command text, using your own information:
- Credentials for your database
- DATABASE name
- COLLECTION name (we suggest "useraccounts") 
- FILETYPE is "json"
- FILENAME is "assign-3-data-user-accounts-v1.json"
- Make sure you add the `--jsonArray` option at the end of the command text

In a terminal window, navigate to the folder that holds the user accounts JSON data file. Paste the edited command text from above. Run the command, and if successful, the message/result will be "imported 28 documents". 

Back in the MongoDB Atlas console, look at your "Collections", and verify that you can see the new data.

<br>

#### Ensure that you can fetch and deliver the data

Follow the guidance in the "add security features to a web API document", in the section titled "[Web API work, initial](/notes/security-add-to-server#web-api-work-initial)". 

This will enable you to know that you can fetch and deliver the user account data successfully. 

> Note - When writing the schema class for the professor-provided user account data, the data type of the "claims" property must be an array of strings (i.e. `[String]`). 

<br>

### Web API security tasks 

Follow the guidance in the "add security features to a web API" document, in the section titled "[adding security components](/notes/security-add-to-server#adding-security-components)". 

This will enable you to add the professor provided code modules, and make edits that add the necessary security features. 

Test with Postman. On routes that are protected, the response will be [HTTP 401](https://tools.ietf.org/html/rfc7235#section-3.1). 

<br>

### Angular web app security starter tasks

In this section, the Angular web app starter tasks, for security, are discussed. 

<br>

#### App startup and landing/home page planning 

> More to come

<br>

#### Components to support the app's purpose

As suggested by the guided tour above, a few new components are needed. Create them now. Here's what we suggest:

* User account activate 
* User account creation 
* Login 

Update your landing/home component template with links (as buttons) that navigate to each of these new components.

Maybe...
* User account password change

<br>

#### Routing

Configure and test the routing feature for the new components. 

<br>

### Doing the work, detail

> More to come 

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
> 2. The other is the URL to your Heroku-hosted (MEN) web service 

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
**The JS file that holds the "manager security" code**  
**The JS file that holds the "user account schema" code**  
For each of these files in the MyCode folder, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "assign3webservice.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

<br>

#### Angular web app 

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. Also, if it has a `.git` folder, remove that too.

4. Still in that folder, add a new folder named "MyCode". Copy these source code files to the "MyCode" folder:  
**App.js**  
**The TS file that holds the data model classes**  
**The TS file that holds the data model manager service class**  
**The TS file that holds the "user account activate" component code**  
**The TS file that holds the "user account create" component code"**  
**The TS file that holds the "login" component code"**  
For each of these files in the MyCode folder, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "assign3app.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

<br>

#### Bundle both of them together

Ideally, bundle both of the zip files from above into a single zip file, maybe named something like "assignment3.zip". Then...

Login to My.Seneca.  
Open the course area.  
Click the "Assignments" link on the left-side navigator.  
Follow the link for this assignment.  
Submit/upload your zip file. The page will accept three submissions, so if you upload, then decide to fix something and upload again, you can do so.

<br>
