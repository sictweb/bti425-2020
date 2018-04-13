---
title: Teams API Setup
layout: default
---

## Teams API

The Teams API is a fully-functional web service that can be used during this BTI425 course. 

This course focuses on front-end (client side) development. Often, we will need to interact with a web service. 

The Teams API is that web service. It removes the burden from the BTI425 student of having to create both a *front-end app* and a *back-end web service*. 

You're welcome. 

Enjoy!

<br>

### Get the Teams API

The course's code examples repository is here:

[https://github.com/sictweb/bti425](https://github.com/sictweb/bti425)

You can also get to it by clicking the "Code examples" button on the upper-right area of the page. (Use a modifier key or keys with click to open it in a new tab/window.)

Download a zip of the entire repository.

Study the repository. It has a folder named **Templates_and_solutions**. In that folder, you will find the **teams-api** folder. 

<br>

### Setup the Teams API

In the **teams-api** folder, the README.md has detailed setup (and usage) instructions. 

That will be your important task for today, in this first class session. If you don't get it all done today, then continue it outside of class.

<br>

#### Summary of the setup tasks

##### If your system does not yet have the Node.js app dev ecosystem

1. Install Node.js (which also installs npm)
3. Install MongoDB
5. Install Robo 3T

##### If your system does not have the developer tools

1. Install git
2. Install GitHub Desktop
3. Install more browsers (assume Safari is there; add Chrome, Firefox, Opera)
4. Install Visual Studio Code (aka VS Code)

##### Configure VS Code

(If it was just installed.)  
1. Configure `code .` functionality [as described here](https://code.visualstudio.com/docs/setup/mac)

##### Configure git

(If it was just installed. Replace the placeholders below with YOUR info.)  
1. `git config -g user.email "name@example.com"`
2. `git config -g user.name "Firstname Lastname"`

##### Configure GitHub Desktop

(If it was just installed.)  
1. Run GitHub Desktop, and open Preferences (Cmd+,) 
2. Sign in with your GitHub credentials

##### If your system does not have the React tooling

1. `npm install -g create-react-app` 

##### If your system does not have the Angular tooling

1. `npm install -g @angular/cli`

##### Configuring your Heroku account

1. Create an account
2. Login, and then view and get familiar with the "[dashboard](https://dashboard.heroku.com/apps)"
3. Install the Heroku CLI (via installer or via npm)

##### Creating a minimal server app that can be hosted at Heroku

1. Open Terminal; navigate to the desired location; create a folder to hold the server app's files; then in that folder...
2. `touch server.js` to create a new empty file
3. `npm init` which creates a `package.json` file 
4. `npm install express` to install Express.js
5. `npm install mongoose` to install Mongoose
6. `git init` to initialize git
7. `code .` to begin editing the app in VS Code
8. Enter simple program code into `server.js` 
9. Open the VS Code left sidebar Source Control tool; type a brief message that describes the editing actions; press Cmd+Enter to commit
10. In terminal, run the app locally, `node server.js`
11. Stop the app if you have to, then `heroku login`
12. Then, `heroku create`, which returns (displays) the app's URL
13. Then, `git push heroku master` 
14. In a browser, visit the URL (from #10 above) 

##### Updating your app locally and at Heroku

1. Make the necessary changes
2. In the Source Control tool, commit the changes
3. In Terminal, `git push heroku master` 
4. In a browser, visit the URL

##### Heroku CLI commands
```
# What version is installed?
heroku --version

# Login to Heroku
heroku login

# Create an app (i.e. a listener)
heroku create

# Deploy app (? in current folder) to a Heroku app
git push heroku master
```

##### Run and use MongoDB locally

1. Open Terminal; navigate to the desired location; create a folder to hold a database
2. Start the database engine, `mongod` 
3. Open another Terminal window, `mongo` to interact with the database engine that's running
4. Run the command `show dbs` just to prove it's running
5. Close the new Terminal window, and `Ctrl+C` to stop the database engine that's running

##### Configuring your mLab account

1. Create an account
2. Login, and then view and get familiar with the "dashboard" that shows an empty list of "MongoDB Deployments" and "Environments"

##### Working with mLab

In mLab, a "deployment" is a MongoDB that is listening for requests. Your localhost or Heroku app will be interacting with a specific mLab deployment. 

1. Create a new deployment; Amazon Web Services, US East region, single-node, Standard Line (free)
2. On the dashboard deployments list, select the just-created deployment
3. On the deployment editor, select (show) the Users list, add a database user, and remember (and/or record) the credentials
4. Copy (then paste/save somewhere) the connect strings for both the `mongo` shell and the URL that we can use in our apps

You can use Robo 3T to view and manage your local *and* mLab-hosted databases. 

##### Sending the Teams API data to a new mLab deployment

1. Locate the folder in your locally-saved Teams API project that holds the data (which is "API-data-restore")
2. Locate the shell version of the connection string to the new mLab deployment
2. Open Terminal; navigate to that folder
3. Run the following command...  
`mongorestore -h ds123456.mlab.com:23456 -d deployment-name -u username -p password`

<br>
