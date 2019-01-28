import React, { Component } from 'react';
import ApiTable from './ApiTable';

class Api extends Component {

  // Declare a local field/variable, add to the state property
  state = {
    persons: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree
  componentDidMount() {
    const url = "https://pam-coursedbintro.herokuapp.com/api/persons";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          persons: result
        })
      });
  }

  render() {
    return (
      // Render the ApiTable component to show the persons data
      <ApiTable persons={this.state.persons} />
    );
  }
}

export default Api;
