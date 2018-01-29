## Week 3 code examples

<br>

### knockout-Ajax




The code example this week is a single application of Knockout.js and how we can use it to work with the "Employee" data of our Teams API. 



This is done by rendering a grid of FirstName / LastName `<input>` fields and watching for changes.  

A "dirty" flag is applied to all changed employees, which is used to identify which employees to update when the "Save" button is clicked.



A new promise technique is introduced (`promise.all()`) to execute Ajax `PUT` requests to our Teams API, for all modified employees. Once complete, each employee's "dirty" flag is removed.





<br>
