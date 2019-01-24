// Example/template for a React class component
// Version published on January 24, 2019, at 9:30am

import React, { Component } from 'react';
// Import other assets when needed

// Component class declaration
class Base extends Component {

  // A React class component accepts incoming data, wrapped in an object, "this.props"
  // It has ONE required method, render(), to deliver the React element
  // Other class members are optional

  // Optional constructor
  // Called by the React runtime
  // Always include it when initialization is needed 
  // BEFORE the component is "mounted" into the DOM
  // Initialize state here
  // and bind methods
  constructor(props) {
    // Calling super must be the first statement
    super(props);
    // Can declare local/instance fields in the constructor
    this.name = 'John';
    this.age = 23;
  }

  // "props" is the class instance property (of type object) 
  // that holds passed-in values (defined by the caller)
  // Dereference a passed-in prop with its name, for example "fullName" (as a string)...
  // ... this.props.fullName 
  
  // Can also have/set default props
  // See the docs https://reactjs.org/docs/react-component.html#defaultprops 

  // "state" is the class instance property (of type object) 
  // for values that may change during the component's lifetime;
  // these values are involved in the rendering pipeline (form inputs, values for outputs);
  // value changes will cause render() to be called again 

  // Optional local state (storage)
  // When declared this way (as a class member), no "this" is required,
  // and here we do not have to use "setState" 
  state = {
    // Declare one or more local variables, for example...
    persons: []
  };

  // "state" values can also be initialized in the constructor
  // Use the syntax form "state.fullName = 'Peter';" when in the constructor
  // Elsewhere (outside of the constructor or the class member declaration),
  // call "setState" to update the component's state values and update the UI
  // There are two usage forms
  // See the docs https://reactjs.org/docs/react-component.html#setstate 

  // Optional code that runs after the component is "mounted" into the DOM
  // Called by the React runtime
  componentDidMount() {
    const url = "https://webapihost.example.com/api/persons";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          persons: result
        })
      });
  }

  // Optional code that runs after being mounted, whenever the component is updated
  // Called by the React runtime
  componentDidUpdate(prevProps, prevState, snapshot) {
    // See the docs https://reactjs.org/docs/react-component.html#componentdidupdate 
  }

  // Optional code that runs just before the component is unmounted from the DOM
  // Good place to put clean-up code
  // Called by the React runtime
  componentWillUnmount() {
    // See the docs https://reactjs.org/docs/react-component.html#componentwillunmount 
  }

  // ####################
  // Optional; methods that YOU define can go here
  // Includes event handlers and other service/task methods
  // ####################

  // Required code, defines the appearance of the component's UI
  // Called by the React runtime
  render() {
    return (
      <div>
        {/* One root/container element only, build your desired markup structure inside */}
      </div>
    );
  }
}

export default App;
