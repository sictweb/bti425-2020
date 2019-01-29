import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class UserDetail extends Component {

    render() {
        return (
            <p>UserDetail component, for user {this.props.id}</p>
        );
    }
}

export default UserDetail;
