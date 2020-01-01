<h3>Project Template</h3>
<p>Features:</p>
<ul>
  <li>Node.js and Express.js</li>
  <li>No database, no data - just string responses from the Express.js methods</li>
</ul>

<br>

### How to get started with this template

Copy and paste the project template *folder*, and rename the new folder as you wish. 

In a new CLI (command line interface), navigate to the project folder.  
Run `npm init` to update the name and any other values you wish to update.  
Run `npm i` to rebuild the packages it needs.  

In a new CLI window, create a new folder to hold the database.  
Locate it at the same level as the project folder, or elsewhere to meet your needs.  
*DO NOT* locate it inside the new project folder.  

Start the database engine, which also initializes the database:  

> Replace `databasename` with the name that you used above. 

```bash
mongod --dbpath ./databasename
```

Return to the project CLI window. 

Import the user account starter data:

> Replace `databasename` with the name that you used above. 

```bash
mongoimport --db databasename --collection useraccounts --file dbdata-useraccounts.json --jsonArray
```

Import the (cars) example starter data:

> Replace `databasename` with the name that you used above. 

```bash
mongoimport --db databasename --collection cars --file dbdata-cars.json --jsonArray
```

Now, open the project in your code editor.  

Update the `databasename` text in `manager.js` (near line 44). 

Generate the value for `jwtOptions.secretOrKey` in `server.js` (near line 54).

Start/run the server.  
Test with Postman.

<br>
