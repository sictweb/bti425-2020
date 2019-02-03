import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './App.css';

class UserEdit extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Class properties 

  state = { user: {}, name: '', job: '', httpStatusCode: 0, httpStatusOk: false };

  url = `https://reqres.in/api/users/${this.props.id}`;

  handleChange(e) {
    // Same as the "add one" use case
    this.setState({ [e.target.name]: e.target.value });

    // Can also do data validation in here
  }

  componentDidMount() {

    // Get one
    fetch(this.url)
      .then(response => {
        // Optional...
        this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
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
        this.setState({ user: responseData.data });
        // Optional...
        //console.log(responseData.data);
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error)
      });

  }

  handleSubmit(e) {
    // For coding convenience
    const newUser = { 'id': this.props.id, 'name': this.state.name, 'job': this.state.job };

    // Edit existing
    fetch(this.url, {
      method: 'PUT',
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
        this.props.history.push(`/users/detail/${this.props.id}`);
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error)
      });

  }

  render() {
    document.title = `User ${this.props.id} edit`;

    // Determine the button state
    const isDisabled = this.state.name.length === 0 || this.state.job.length === 0;

    // For coding convenience, create a shortcut object
    const u = this.state.user;

    // If "this.input" exists (it will only get rendered if a form exists), set its focus
    if (this.input && this.state.name.length === 0 && this.state.job.length === 0) {
      this.input.focus();
    }

    return (
      <div>
        <h4>Edit user {u.first_name} {u.last_name} from the reqres.in service</h4>

        {this.state.httpStatusOk ? (
          <div className="form-horizontal">
            <p>Edit user data, and click/tap the Save button</p>
            <hr />
            <div className="form-group">
              <label htmlFor="name" className='control-label col-md-2'>Updated first name</label>
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
                <button disabled={isDisabled} onClick={this.handleSubmit} className="btn btn-primary">Save</button>&nbsp;&nbsp;
                                <Link className='btn btn-default' to='/users'>Cancel</Link>
              </div>
            </div>
          </div>

        ) : (
            <div>
              <p>Requested user with identifier {this.props.id} was not found</p>
              <hr />
              <p><Link className='btn btn-default' to='/users'>Show list of users</Link></p>
            </div>
          )}

      </div>
    );
  }
}

export default withRouter(UserEdit);
