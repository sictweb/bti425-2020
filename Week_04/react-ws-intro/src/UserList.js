import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class UserList extends Component {

    state = { users: [] };

    componentDidMount() {
        const url = "https://reqres.in/api/users?per_page=10";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                // "result" is an object, with an array named "data"
                // Study the shape of the data in the reqres.in service
                this.setState({ users: result.data });
            });
    }

    render() {
        return (
            <div>
                <p>List of users, from the reqres.in service</p>
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
            <td><Link className='btn btn-default' to={`users/detail/${u.id}`}>Details</Link>&nbsp;&nbsp;
            <Link className='btn btn-warning' to={`users/edit/${u.id}`}>Edit</Link>&nbsp;&nbsp;
            <Link className='btn btn-danger' to={`users/delete/${u.id}`}>Delete</Link></td>
        </tr>
    );
}
