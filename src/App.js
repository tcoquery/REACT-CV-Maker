import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";
import GeneralInput from "./components/generalInput";
import EducInformation from "./components/educInformation";
import EducInput from "./components/educInput";
import uniqid from "uniqid";

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
      education: {
        school: '',
        startYear: '',
        endYear: '',
        degree: '',
        level: '',
        id: uniqid()
      },
      educations: [],
      showInfo: true,
      showEduc: false
    };
  }
  

  handleInfoChange = (e) => {
		const {name, value} = e.target
		
		this.setState({
			general: {...this.state.general, [name]: value}
		})
	}

  handleEducChange = (e) => {
		const {name, value} = e.target
		
		this.setState({
			education: {...this.state.education, [name]: value, id: this.state.education.id}
		})
	}

  onInfoSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showInfo: false
    });
  };

  onEducSubmit = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      showEduc: false
    });
  };

  onInfoEdit = () => {
    this.setState({
      showInfo: true
    });
  };

  onEducEdit = () => {
    this.setState({
      showEduc: true
    });
  };


  render() {

    const showInfo = this.state.showInfo;
    const showEduc = this.state.showEduc;
    const {general, education, educations} = this.state;

    let formInfo;
    let formEduc;

    if (showInfo) { 
      formInfo = <GeneralInput onSubmit={this.onInfoSubmit} onChange={this.handleInfoChange} firstName={general.firstName} lastName={general.lastName} email={general.email} phone={general.phoneNumber}/>;  
    } else {
      formInfo = <GeneralInformation onClick={this.onInfoEdit} firstName={general.firstName} lastName={general.lastName} email={general.email} phone={general.phoneNumber}/>;    
    };

    if (showEduc) {
      formEduc = <EducInput onSubmit={this.onEducSubmit} onChange={this.handleEducChange} school={education.school} startYear={education.startYear} endYear={education.endYear} degree={education.degree} level={education.level}/>;    
    } ;

    return (
      <div>
        {formInfo}
        <h1> Education </h1>
        <EducInformation onClick={this.onEducEdit} educations={educations} />
        {formEduc}
      </div>
    );
  }
}


export default App;