import React, { Component } from 'react';

// Declare a function component, table header
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
  );
}

// Declare a function component, table body
const TableBody = props => {
  // Using the array of character objects, create a new array of React elements
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

class Table extends Component {
  render() {

    // Get a reference to passed-in values
    const { characterData, removeCharacter } = this.props;

    return (
      <div>
        <p><b>List of characters:</b></p>
        <table className='table table-striped'>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
      </div>
    );
  }
}

export default Table;
