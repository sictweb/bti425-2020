import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './App.css';

class UserCreate extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = { name: '', job: '' };

  url = "https://reqres.in/api/users";

  handleChange(e) {
    // https://medium.com/@tmkelly28/handling-multiple-form-inputs-in-react-c5eb83755d15
    // Bottom line, new ES6 feature, bracket notation, computed property names
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
    this.setState({ [e.target.name]: e.target.value });
    //console.log(`Name: ${this.state.name}, Job: ${this.state.job}`);

    // Can also do data validation in here
  }

  componentDidMount() {
    this.input.focus();
  }

  handleSubmit(e) {

    // Turn off default form handling
    //e.preventDefault();

    const newUser = { 'name': this.state.name, 'job': this.state.job };

    fetch(this.url, {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(newUser)
    })
      .then(response => {
        if (response.ok) {
          // Parse the response body as JSON
          return response.json();
        } else if (response.status >= 400 && response.status < 500) {
          // Error caused by the requestor
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then(responseData => {
        // "responseData" is an object
        // Study the shape of the data in the reqres.in service
        // Optional...
        console.log(responseData);
        // The identifier "id" can be used to redirect
        this.props.history.push(`/users/detail/${responseData.id}`);
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error)
      });

  }

  render() {
    document.title = 'Add user';

    // Determine the button state
    const isDisabled = this.state.name.length === 0 || this.state.job.length === 0;

    return (
      <div>
        <h4>Add a new user to the reqres.in service</h4>
        {/* <form onSubmit={this.handleSubmit}> */}
        <div className="form-horizontal">
          <p>Enter new user data, and click/tap the Add User button</p>
          <hr />
          <div className="form-group">
            <label htmlFor="name" className='control-label col-md-2'>Name</label>
            <div className="col-md-6">
              <input name="name" className="form-control" ref={(i) => { this.input = i; }} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="job" className='control-label col-md-2'>Job</label>
            <div className="col-md-6">
              <input name="job" className="form-control" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-6">
              <button disabled={isDisabled} onClick={this.handleSubmit} className="btn btn-primary">Add User</button>&nbsp;&nbsp;
              <Link className='btn btn-default' to='/users'>Cancel</Link>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    );
  }
}

export default withRouter(UserCreate);
