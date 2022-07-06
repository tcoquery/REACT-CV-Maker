import React, { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();  

    this.state = {
      general: {
        name: '',
        email: '',
        phoneNumber:'', 
        id: uniqid()
      }
    };
  }
  

  handleChange = (e) => {
    this.setState({
      task : {
        name: e.target.value,
        email: e.target.value,
        phoneNumber: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      general: {
        name: '',
        email: '',
        phoneNumber:'', 
        id: uniqid()
      },
    });
  };

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="nameInput">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.general.name}
            type="text"
            id="nameInput"
          />
          <label htmlFor="emailInput">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.general.email}
            type="email"
            id="emailInput"
          />
          <label htmlFor="phoneInput">Phone number</label>
          <input
            onChange={this.handleChange}
            value={this.state.general.phoneNumber}
            type="number"
            id="phoneInput"
          />
          <button type="submit">Add information</button>
        </form>
      </div>
    );
  }
}


export default App;
