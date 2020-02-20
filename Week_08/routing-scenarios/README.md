## Angular App "routing-scenarios"

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

It includes Bootstrap 3, the routing feature, a nav menu, and some getting-started components.

We added an in-memory data service, routing with parameters, and components that do data service operations (get, add, edit, delete). 

<br>

### How this app was built

Here's how this app was built:

Duplicate the `routing-scenarios` folder, rename to `routing-scenarios`.  
Search "templatev1" and replace with "routing-scenarios".  
Change the app's title and the home page content to match the app's new purpose.  
Update the visible app name in the app component markup.  
Change the footer with the copyright info.  

Generate source code files for data model classes and a service.  
```bash
ng g class DataClasses
ng g service DataManager --flat
```

Generate a component for vehicle list and vehicle detail.  
Add new route objects for the list component.  
Add new menu item for the list component. (We will edit the browser URL to fetch the detail.)  
Do `npm i` then `ng serve -o`.  

Get the Mockaroo-generated JSON (array) data from the Week 1 "webapiv6" code example.  
Write a new data model class named "Vehicle", with properties to match the data.  
In the data model manager service, import the data model classes.  
Create a new variable "vehicles" set to the value of the copy-pasted JSON data.  

Create methods in the manager to do the CRUD tasks.  
* Get all
* Get one by identifier

Update the list (get all) component template and code files. The list can be simple repeating `p` elements. Test to confirm.

Update the detail (get one by identifier) component template and code. (HARD CODED ID). Test to confirm. 

Now... update the list template. Make it a full table, with buttons for each row, and an "add new" button at the top.  
Now... update the detail template. Add the ability to read the URL.  

Generate components for vehicle create, edit, and delete.  
Add new route objects for these.  
Use the vehicle list to test the button links to these components.  

Created methods in the manager to do the CRUD tasks.  
* Add new
* Edit existing
* Delete item

~ ~ ~ 

The remaining tasks are beyond the current topic coverage, and will be documented in future code examples. 

<br>

<hr>

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
