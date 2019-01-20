import React, { Component } from 'react';

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

// Original version...
/*
const TableBody = () => {
  return (
    <tbody>
    </tbody>
  );
}
*/

const TableBody = props => {
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

// Original code for the Table class is below...

/*
class Table extends Component {
  render() {
    return (
      <table class='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
*/

// Original code for the TableBody component is below...

/*
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  );
}
*/
