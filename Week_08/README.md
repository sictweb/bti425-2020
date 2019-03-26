## Week 8 code examples

Remember to run this command while in the directory/folder that has the `package.json` file:

```
npm i
```

<br>

### assign-2-grid-and-list-components (version 1)

Professor-provided grid and list components for the cart template.  

How to add to your project:
1. Before copying, check your project to ensure that there will be no filename collisions
2. Copy all source code files to your src/app directory
3. Check the new `.ts` source code files to ensure that the data model class name and file match yours, and edit if necessary
4. Add references to these new components to the `app-module.ts` source code file 

How to use in your project:
1. The grid and list components depend on an incoming collection (array) of selected course objects 
2. It is assumed that your "cart" component will be creating this "courses selected" array, which has name of "coursesSelected" 
3. In your cart template, add the following elements to add the grid and list

```html
<app-cart-selected-grid [coursesSelected]="coursesSelected"></app-cart-selected-grid>
<app-cart-selected-list [coursesSelected]="coursesSelected"></app-cart-selected-list>
```

In the professors' [example solution](https://pam-2019-a2app.herokuapp.com), the cart template layout is configured as a Bootstrap row. The left side (list of matching courses for the student) is 7 Bootstrap grid columns wide (`col-md-7`), and the right side area that holds the grid and the list is 5 grid columns wide (`col-md-5`). 

> <mark>Notice</mark>  
> The professors expect that the components will work as delivered.  
> However, they have not been widely tested.  
> If you have problems getting them to work, contact your professor.  
> Before doing that, make sure you do some elementary debugging (console.log or the debugger) to determine that each component is receiving an array of courses. 

<br>

### assign-2-data-courses-available-v2

Data for the Assignment 2.  
This is the "available courses" entity, *version 2*.  
It shows the courses, sections (time, room, teacher), available in Fall 2018 and Winter 2019 terms.  
It includes prerequisites, which we'll need in the logic.  

<br>

### a2dataquerytests

Use this with Node.js.  
Paste the data from the courses available (above) before running the code.  
Add your own queries to test how to query and filter the data.  

<br>

### assign-2-data-student-v1

Data for the Assignment 2.  
This is the "student" entity, version 1.  

<br>

~ ~ ~ ~ 

Old content that was removed:

### assign-2-data-courses-available-v1

Data for the Assignment 2.  
This is the "available courses" entity, version 1.  
It shows the courses, sections (time, room, teacher), available in Fall 2018 and Winter 2019 terms.  

<br>