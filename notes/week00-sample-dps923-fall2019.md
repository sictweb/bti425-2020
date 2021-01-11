---
title: DPS923 MAP523 Week 10
layout: default
---

## DPS923 MAP523 Week 10 Notes

More work with Core Data this week. And, a brief introduction to location services. 

<br>

### Wednesday plan

Discussions, and demonstrations.  
Three segments:
5:10pm - topics  
5:40pm - 5-minute break  
5:45pm - topics  
6:15pm - 5-minute break  
6:20pm - topics  
6:50pm - done  

During the breaks, please get up and move around. It's important for your health, and for mental performance. 

Plan for this week:
* Multi-entity data model and its usage
* Location services introduction

We will cover these - discuss, show-and-tell, diagram, etc. - in the Wednesday class. While some brief notes are included below, be prepared to [take your own notes](/bti425/standards#taking-notes-in-class). 

<br>

### Topic plan 

Learn via the code examples.

[Multi-entity data model](core-data-multi-entities) notes.

[Table view editing](core-data-tableview-editing) notes. 

[Location services introduction](location-intro)

<br>

### Code examples

The course's GitHub repo has code examples for many topics and techniques. You can download a zip of the code repo, or clone it. 
* W10a1Entities
* W10a2TVEdit
* W10a3Location

<br>

### Friday plan

In the first part of the timeslot, Test 3 will be written. It is worth 14%. It covers all topics covered since the last test. 

Here is more and general information about [the upcoming test](test-success-info). 

Then, in the remaining time, work on the programming assignment, and get help from a classmate or the professor if you need it. 

<br>

### Summary

Here's a list of topics that we learned something about this week:
1. Our first exposure to a multi-entity data model was the `...Canada` code example. It had a `Province` one-to-many relationship with `City`. 
1. We know that the Core Data model editor generates a class for each defined entity. The class includes properties for each attribute, and a method to make a fetch request.
1. The model editor is also used to define relationships among entities. Most typical of our work is one-to-many. Both ends must be carefully configured. 
1. The generated class for a related entity includes methods to add and remove items. 
1. When working with an entity object that has a collection of related objects of another entity, we must be careful to think about the delete handling. Common sense and the app's purpose will inform that configuration task. 
1. In the `...Canada` code example, each "list" view controller had its own fetched results controller (frc). 
1. There is another way of passing on results - just pass on the property value of the collection. 
1. The data type of the collection is `Set`, which is *not* an array. It can, however, easily be transformed into an array. 
1. Which way you choose will depend on your needs and preferences, and the logic at the time. 
1. Returning to the fetched results controller (frc) topic, the frc will "monitor... and report on... changes... [to] update the user interface". Implementing that should be done by using the code in the project template. 
1. Core Location is the technology that enables a developer to use geographic location data in an app. 
1. There are many parts to an that uses location services, but its core or base part is the `CLLocationManager` object. That knows how to use the device's locators, and report the results. 
1. Using location is a privacy-sensitive task, so the developer must ask the user for consent. 
1. The location data gathering task is highly configurable, with regard to frequency, accuracy, and so on. 
1. There is a standard approach to getting location data, which must be used. 
1. In addition, the hosting controller *must* conform to the `CLLocationManagerDelegate`, so that events that arise can be handled. 
1. *Reverse geocoding* is the name given to the task of converting a GPS coordinate into a street address. 
1. You should be able to learn at least five new coding tasks and strategies by studying the code examples. 

<br>
