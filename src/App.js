import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";


class App extends Component {
  constructor() {
    super();  

    this.onEdit = this.onEdit.bind(this);
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

  onEdit = () => {
    this.setState({
      showInputs: true
    });
  };


  render() {

    const showInputs = this.state.showInputs;
    const info = this.state;

    let formInfo;

    if (showInputs) { 
      formInfo =   
      <form onSubmit={this.onSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
        onChange={this.handleChange}
        name="name"
        value={info.name}
        type="text"
        id="nameInput"
      />
      <label htmlFor="emailInput">Email</label>
      <input
        onChange={this.handleChange}
        name="email"
        value={info.email}
        type="email"
        id="emailInput"
      />
      <label htmlFor="phoneInput">Phone number</label>
      <input
        onChange={this.handleChange}
        name="phoneNumber"
        value={info.phoneNumber}
        type="number"
        id="phoneInput"
      />
      <button type="submit">Add information</button>
    </form>  
    } else {
      formInfo = <GeneralInformation onClick={this.onEdit} name={info.name} email={info.email} phone={info.phoneNumber}/>;    
    }

    return (
      <div>
        {formInfo}
      </div>
    );
  }
}


export default App;
