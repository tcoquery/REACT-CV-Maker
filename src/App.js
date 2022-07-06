import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";


class App extends Component {
  constructor() {
    super();  

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      phoneNumber:'', 
      showInputs: true
    };
  }
  

  handleChange = (e) => {
    const inputName = e.target.name

    this.setState({
        [inputName]: e.target.value
      });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showInputs: false
    });


  };

  render() {

    const showInputs = this.state.showInputs;

    let formInfo;

    if (showInputs) { 
      formInfo =   
      <form onSubmit={this.onSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
        onChange={this.handleChange}
        name="name"
        value={this.state.name}
        type="text"
        id="nameInput"
      />
      <label htmlFor="emailInput">Email</label>
      <input
        onChange={this.handleChange}
        name="email"
        value={this.state.email}
        type="email"
        id="emailInput"
      />
      <label htmlFor="phoneInput">Phone number</label>
      <input
        onChange={this.handleChange}
        name="phoneNumber"
        value={this.state.phoneNumber}
        type="number"
        id="phoneInput"
      />
      <button type="submit">Add information</button>
    </form>  
    } else {
      formInfo = <GeneralInformation name={this.state.name} email={this.state.email} phone={this.state.phoneNumber}/>;    
    }

    return (
      <div>
        {formInfo}
      </div>
    );
  }
}


export default App;
