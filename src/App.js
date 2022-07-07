import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";
import GeneralInput from "./components/generalInput";

class App extends Component {
  constructor() {
    super();  

    this.onInfoEdit = this.onInfoEdit.bind(this);
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'', 
      },
      showInfo: true
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
      showInfo: false
    });
  };

  onInfoEdit = () => {
    this.setState({
      showInfo: true
    });
  };


  render() {

    const showInfo = this.state.showInfo;
    const general = this.state;

    let formInfo;

    if (showInfo) { 
      formInfo = <GeneralInput onSubmit={this.onSubmit} onChange={this.handleChange} firstName={general.firstName} lastName={general.lastName} email={general.email} phone={general.phoneNumber}/>;  
    } else {
      formInfo = <GeneralInformation onClick={this.onInfoEdit} firstName={general.firstName} lastName={general.lastName} email={general.email} phone={general.phoneNumber}/>;    
    }

    return (
      <div>
        {formInfo}
      </div>
    );
  }
}


export default App;