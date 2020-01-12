import React, { Component } from 'react';

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

const TableBody = props => {
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

class TableApi extends Component {
  render() {

    const { persons } = this.props;

    return (
      <div>
        <p><b>Fetched data from the web service:</b></p>
        <table className='table table-striped'>
          <TableHeader />
          <TableBody persons={persons} />
        </table>
      </div>
    );
  }
}

export default TableApi;
