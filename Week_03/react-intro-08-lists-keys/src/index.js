import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Old original code...
//ReactDOM.render(<App />, document.getElementById('root'));

// New code

// ############################################################
// First part

const numbers = [1, 2, 3, 4, 5];
// Wow, check this out
const listItems = numbers.map((number) =>
  <li>Item number {number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

// ############################################################
// Second part

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      Numéro d'article {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

//const numbers = [1, 2, 3, 4, 5];
// re-use the const from above

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('part2')
);

// ############################################################
// Third part

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value} is the number of the item</li>;
}

function NumberListPart3(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

//const numbers = [1, 2, 3, 4, 5];
// re-use the const from above 

ReactDOM.render(
  <NumberListPart3 numbers={numbers} />,
  document.getElementById('part3')
);

// ############################################################
// Fourth part

function ListItemPart4(props) {
  // Correct! There is no need to specify the key here:
  return <li>Number of item? {props.value}</li>;
}

function NumberListPart4(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => <ListItemPart4 key={number.toString()} value={number} /> )}
    </ul>
  );
}

ReactDOM.render(
  <NumberListPart4 numbers={numbers} />,
  document.getElementById('part4')
);

// ############################################################
// First part



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
