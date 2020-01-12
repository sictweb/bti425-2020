import React, { Component } from 'react';
import TableApi from './TableApi';

class Api extends Component {

  state = {
    persons: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = "https://pam-2019-a1webapi.herokuapp.com/api/persons";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          persons: result
        })
      });
  }

  render() {
    const { persons } = this.state;

    console.log(persons);

    return (
      <TableApi persons={persons} />
    );
  }
}

export default Api;
