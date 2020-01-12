import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Comment out generated code...
//ReactDOM.render(<App />, document.getElementById('root'));

//const name = 'Josh Perez';
//const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  // firstName: 'Tanvir',
  // lastName: 'Alam'
  firstName: 'Peter',
  lastName: 'McIntyre'
};

const element = (
  getGreeting(user)
  // <h1>
  //   Hello, {formatName(user)}!
  // </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
