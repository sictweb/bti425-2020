import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class UserDelete extends Component {

    render() {
        return (
            <p>UserDelete component, for user {this.props.id}</p>
        );
    }
}

export default UserDelete;
