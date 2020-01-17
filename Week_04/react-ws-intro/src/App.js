import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';
import UserCreate from './UserCreate';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navbar className="navbar navbar-default" />
        <hr />

        <Switch>
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path='/users' render={() => (<UserList />)} />
          <Route exact path='/users/create' render={() => (<UserCreate />)} />
          <Route exact path='/users/detail/:id' render={(props) => (<UserDetail id={props.match.params.id} />)} />
          <Route exact path='/users/edit/:id' render={(props) => (<UserEdit id={props.match.params.id} />)} />
          <Route exact path='/users/delete/:id' render={(props) => (<UserDelete id={props.match.params.id} />)} />
          <Route render={() => (<NotFound />)} />
        </Switch>

        <p>&nbsp;</p>
        <hr />
        <footer>
          <p>&copy; 2019, personal or organization name</p>
        </footer>
      </div>
    );
  }
}

export default App;

// Function component for the top-of-view header
const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <h2>App name/title</h2>
        <p>Brief description of the app</p>
      </div>
    </div>
  );
}

// Function component for the navigation bar 
const Navbar = () => {
  return (
    <div className="container-fluid navbar-outline">
      <div className="navbar-header">
        <Link to='/' className='navbar-brand'>Home page</Link>
      </div>

      {/* <!-- All the navigation links are in the following div --> */}
      <div>
        <ul className="nav navbar-nav">
          <li>
            <Link to='/users'>User list</Link>
          </li>
          <li>
            <Link to='/users/create'>Add a user</Link>
          </li>
          <li>
            <Link to='/othercontent'>Other content</Link>
          </li>
        </ul>
      </div>
    </div>

  );
}

// Function component for a content area
const Home = () => {
  return (
    <div>
      <p>This is the home page of the app.</p>
      <p>Click or tap an item on the nav menu.</p>
      <p>&nbsp;</p>
    </div>
  );
}

// Function component for a content area
const NotFound = () => {
  return (
    <div>
      <p>The requested resource was not found.</p>
      <p>&nbsp;</p>
    </div>
  );
}

