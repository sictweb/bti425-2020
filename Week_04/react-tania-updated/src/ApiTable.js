// This will render a table
// Passed-in data is in this.props.persons

import React, { Component } from 'react';

// Function component (Tania), table header
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Birth Date</th>
        <th>Credit Score</th>
        <th>Rating</th>
      </tr>
    </thead>
  );
}

// Function component
// Its purpose is to render the HTML table body element
function TableBody(props) {

// Alternative declaration syntax...
//const TableBody = props => {

  // Using the array of person objects, create a new array of React elements
  let personRows = props.persons.map((person, index) => {
    return (
      <TableRow person={person} key={index} />
    );
  });

  return <tbody>{personRows}</tbody>
}

// Function component
// Its purpose is to render a single HTML table row
function TableRow(props) {

// Alternative declaration syntax...
//const TableRow = props => {

  // For coding convenience (below), create a very short variable name
  const p = props.person;

  // Alternative declaration syntax...
  //const { p } = this.props;

  // Render the row
  return (
    <tr>
      <td>{`${p.firstName} ${p.lastName}`}</td>
      <td>{new Intl.DateTimeFormat('en-CA').format(new Date(p.birthDate))}</td>
      <td>{p.creditScore} {p.creditScore > 600 ? "- good" : ""}</td>
      <td>{p.rating}</td>
    </tr>
  );
}

// Class component
// Its purpose is render a full and complete HTML table element
class ApiTable extends Component {
  render() {
    return (
      <div>
        <p><b>Fetched data from the web service:</b></p>
        <table className='table table-striped'>
          <TableHeader />
          <TableBody persons={this.props.persons} />
        </table>
      </div>
    );
  }
}

export default ApiTable;

// Function component (Tania)
// (not used; was replaced; see below for a better version...)
/*
const TableBodyOriginal = props => {
  const rows = props.persons.map((row, index) => {
    return (
      <tr key={index}>
        <td>{`${row.firstName} ${row.lastName}`}</td>
        <td>{new Intl.DateTimeFormat('en-CA').format(new Date(row.birthDate))}</td>
        <td>{row.creditScore} {row.creditScore > 600 ? "- good" : ""}</td>
        <td>{row.rating}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}
*/
