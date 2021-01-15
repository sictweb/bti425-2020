---
title: BTI425 Week 10
layout: default
---

## BTI425 Week 10 Notes

This week, we will make progress with *forms* topics.  

<br>

### Topics

Highlights from this week's topics: 

Last week we were introduced to [Angular template-driven forms](angular-forms-intro). It's time to learn more. 

> Remember our previous coverage of  
> [HTML Form patterns](html-form-patterns). 

The course's GitHub repo has a nice [code example](https://github.com/sictweb/bti425-2020/tree/master/Week_10) that covers the typical CRUD tasks. 

Then, we'll learn some techniques to improve the interaction experience users have with forms. And, we'll introduce data validation techniques. These topics are covered in this document:  
[Introduction to Angular template-driven forms validation](angular-forms-validation-intro)

<br>

### Assignment 2 continued

Also this week, continue working on [Assignment 2](/bti425-2020/graded-work/assign2). 

<br>

#### Checklist for today

Sadly, the specs are not yet finished. Use the following to guide you as you do your work.

Get data from the Week 8 folder.  

Make sure that you can work with it in an Angular app (or in JavaScript).  

Import both "students" and "courses" to your MongoDB Atlas database (as new collections).  

Make sure that you can view the data (the documents in the collections) with any of these viewers:  
* the browser-based cloud console/dashboard app that's focused on your cluster 
* MongoDB Compass app 
* MongoDB shell (i.e. the "mongo" command in terminal)  

Make a new web API, or prepare to add on to your Assignment 1 web API.  

Add functionality to your web API that will deliver from the new "students" and "courses" database collections:
* Get all (and sorted)
* Get all CPA
* Get all BSD
* Get one by its MongoDB identifier

> We have recently added a new document:  
> [Mongoose tasks](mongoose-tasks)

Deploy the updated web API to Heroku.

Test all this in Postman BEFORE you do any Angular app work. 

Create an Angular app. If you wish, you can copy-paste the "angular-validation-intro" code example from the repo and change its name, title, and so on. 

Create these components (and add them to the routing feature): 
* Student list
* Student detail
* Available courses list  

Modify the data model manager service. Add methods that will fetch the data needed by these new components.

Modify each component. Your goal is to get the right data to display in each.

<br>
