import React, { Component } from "react";
import GeneralInformation from "./components/generalInformation";
import GeneralInput from "./components/generalInput";
import EducInformation from "./components/educInformation";
import EducInput from "./components/educInput";
import JobInformation from "./components/jobInformation";
import JobInput from "./components/jobInput";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();  


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
      job: {
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid()
      },
      educations: [],
      jobs: [],
      showInfo: true,
      showEduc: false,
      showJob: false
    };
  }
  
  removeEducItem = (id) => {
    const newEducations = this.state.educations.filter((educ) => educ.id !== id);

    this.setState({
			educations: newEducations
		})
  };

  removeJobItem = (id) => {
    const newJobs = this.state.jobs.filter((job) => job.id !== id);

    this.setState({
			jobs: newJobs
		})
  };

  handleInfoChange = (e) => {
		const {name, value} = e.target
		
		this.setState({
			general: {...this.state.general, [name]: value}
		})
	}

  handleEducChange = (e) => {
		const {name, value} = e.target
		
		this.setState({
			education: {...this.state.education, [name]: value}
		})
	}

  handleJobChange = (e) => {
		const {name, value} = e.target
		
		this.setState({
			job: {...this.state.job, [name]: value}
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
      education: {
        school: '',
        startYear: '',
        endYear: '',
        degree: '',
        level: '',
      },
      showJob: false
    });
  };

  onJobSubmit = (e) => {
    e.preventDefault();
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uniqid()
      },
      showEduc: false
    });
  };

  onInfoEdit = () => {
    this.setState({
      showInfo: true
    });
  };

  onEducSave = () => {
    this.setState({
      showEduc: true
    });
  };

  onJobSave = () => {
    this.setState({
      showJob: true
    });
  };


  render() {

    const showInfo = this.state.showInfo;
    const showEduc = this.state.showEduc;
    const showJob = this.state.showJob;
    const {general, education, educations, job, jobs} = this.state;

    let formInfo;
    let formEduc;
    let formJob

    if (showInfo) { 
      formInfo = <GeneralInput onSubmit={this.onInfoSubmit} onChange={this.handleInfoChange} firstName={general.firstName} lastName={general.lastName} email={general.email} phone={general.phoneNumber}/>;  
    } else {
      formInfo = <GeneralInformation onClick={this.onInfoEdit} firstName={general.firstName} lastName={general.lastName} email={general.email} phone={general.phoneNumber}/>;    
    };

    if (showEduc) {
      formEduc = <EducInput onSubmit={this.onEducSubmit} onChange={this.handleEducChange} school={education.school} startYear={education.startYear} endYear={education.endYear} degree={education.degree} level={education.level}/>;    
    } ;

    if (showJob) {
      formJob = <JobInput onSubmit={this.onJobSubmit} onChange={this.handleJobChange} company={job.company} startDate={job.startDate} endDate={job.endDate} title={job.title} description={job.description}/>;    
    } ;

    return (
      <div>
        {formInfo}
        <p> Education </p>
        <EducInformation onClick={this.onEducSave} removeItem={this.removeEducItem} educations={educations} />
        {formEduc}
        <p> Jobs </p>
        <JobInformation onClick={this.onJobSave} removeItem={this.removeJobItem} jobs={jobs} />
        {formJob}
      </div>
    );
  }
}


export default App;