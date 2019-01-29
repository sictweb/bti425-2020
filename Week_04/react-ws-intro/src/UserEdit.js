import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class UserEdit extends Component {

    render() {
        return (
            <p>UserEdit component, for user {this.props.id}</p>
        );
    }
}

export default UserEdit;
