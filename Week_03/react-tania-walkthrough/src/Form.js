import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, job } = this.state;

    return (

      <div className="row">
        <div className="col-md-6">
          <p><b>Add a new character:</b></p>
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="name" className="col-md-2 control-label">Name</label>
              <div className="col-md-10">
                <input className="form-control" name="name" value={name} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="job" className="col-md-2 control-label">Job</label>
              <div className="col-md-10">
                <input className="form-control" name="job" value={job} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-offset-2 col-md-10">
                <input className="btn btn-default" type="button" value="Submit" onClick={this.submitForm} />
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6"></div>
      </div>
    );
  }

}

export default Form;
