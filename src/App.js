import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";
import GeneralInput from "./components/generalInput";

class App extends Component {
  constructor() {
    super();  

    this.onEdit = this.onEdit.bind(this);
    this.state = {
      general: {
        name: '',
        email: '',
        phoneNumber:'', 
      },
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
    const general = this.state;

    let formInfo;

    if (showInputs) { 
      formInfo = <GeneralInput onSubmit={this.onSubmit} onChange={this.handleChange} name={general.name} email={general.email} phone={general.phoneNumber}/>;  
    } else {
      formInfo = <GeneralInformation onClick={this.onEdit} name={general.name} email={general.email} phone={general.phoneNumber}/>;    
    }

    return (
      <div>
        {formInfo}
      </div>
    );
  }
}


export default App;
