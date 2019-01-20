import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import Form from "./Form";
import Api from "./Api";

class App extends Component {

  state = {
    characters: [
      /*
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
      */
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
        <hr />
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <hr/>
        <Api persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
