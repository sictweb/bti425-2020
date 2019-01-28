import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Table from "./Table";
import Api from "./Api";

class App extends Component {

  // We are storing app state in this App class (in an in-memory array)
  state = {
    characters: []
  };

  // Remove an object in the array
  // This handler is attached to each row's delete button
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  // Add an object to the array
  // This is called by the form button handler (in the Form class)
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    return (
      // The viewport will have three stacked components...
      // Form, then
      // Table, then
      // Api (which in turn calls ApiTable)
      <div>
        <Form handleSubmit={this.handleSubmit} />
        <hr />
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <hr/>
        <Api />
      </div>
    );
  }
}

export default App;
