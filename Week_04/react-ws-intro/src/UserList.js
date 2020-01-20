import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class UserList extends Component {

  // Class properties 

  state = { users: [] };

  url = "https://reqres.in/api/users?per_page=10";

  componentDidMount() {

    // Get all
    fetch(this.url)
      .then(response => {
        // Optional...
        //this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
        if (response.ok) {
          // Parse the response body as JSON
          return response.json();
        } else if (response.status === 404) {
          // Not found 
          throw Error('HTTP 404, Not found');
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then(responseData => {
        // "responseData" is an object; here, we're interested in its "data" property
        // Study the shape of the data in the reqres.in service
        this.setState({ users: responseData.data });
        // Optional...
        //console.log(responseData.data);
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error)
      });

  }

  render() {
    document.title = 'User list';

    return (
      <div>
        <h4>List of users, from the reqres.in service</h4>
        <p><Link className='btn btn-default' to='/users/create'>Add a new user</Link></p>
        <table className='table table-striped'>
          <TableHeader />
          <TableBody users={this.state.users} />
        </table>
      </div>
    );
  }
}

export default UserList;

// ############################################################
// Most of the following was copied from the react-tania-updated code example
// ############################################################

// Function component, table header
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Identifier</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Avatar</th>
        <th></th>
      </tr>
    </thead>
  );
}

// Function component
// Its purpose is to render the HTML table body element
const TableBody = (props) => {

  // Using the array of objects, create a new array of React elements
  let rows = props.users.map((user, index) => {
    return (
      <TableRow user={user} key={index} />
    );
  });

  return <tbody>{rows}</tbody>
}

// Function component
// Its purpose is to render a single HTML table row
const TableRow = props => {

  // For coding convenience (below), create a very short variable name
  const u = props.user;

  // Alternative declaration syntax...
  //const { u } = this.props;

  // Render the row
  return (
    <tr>
      <td>{u.id}</td>
      <td>{u.first_name}</td>
      <td>{u.last_name}</td>
      <td><img src={u.avatar} alt='' className='imgInTable' /></td>
      <td><Link className='btn btn-default' to={`/users/detail/${u.id}`}>Details</Link>&nbsp;&nbsp;
            <Link className='btn btn-warning' to={`/users/edit/${u.id}`}>Edit</Link>&nbsp;&nbsp;
            <Link className='btn btn-danger' to={`/users/delete/${u.id}`}>Delete</Link></td>
    </tr>
  );
}
