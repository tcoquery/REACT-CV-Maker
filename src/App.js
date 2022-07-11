import React, { useState } from "react";
import GeneralInformation from "./components/generalInformation";
import GeneralInput from "./components/generalInput";
import EducInformation from "./components/educInformation";
import EducInput from "./components/educInput";
import JobInformation from "./components/jobInformation";
import JobInput from "./components/jobInput";
import uniqid from "uniqid";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState ({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber:''
    });
  const [educInfo, setEducInfo] = useState ({
      school: '',
      startYear: '',
      endYear: '',
      degree: '',
      level: '',
      id: uniqid()
    });
  const [jobInfo, setJobInfo] = useState ({
      company: '',
      title: '',
      startDate: '',
      endDate: '',
      description: '',
      id: uniqid()
    });
  const [educations, setEducations] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [showInfo, setShowInfo] = useState(true);
  const [showEduc, setShowEduc] = useState(false);
  const [showJob, setShowJob] = useState(false);

  const handleInfoChange = (e) => {
		const {name, value} = e.target
		
		setGeneralInfo({...generalInfo, [name]: value});
	}

  const handleEducChange = (e) => {
		const {name, value} = e.target
		
		setEducInfo({...educInfo, [name]: value})
	}

  const handleJobChange = (e) => {
		const {name, value} = e.target
		
		setJobInfo({...jobInfo, [name]: value})
	}

  const onInfoSubmit = (e) => {
    e.preventDefault();
    setShowInfo(false);
  };

  const onEducSubmit = (e) => {
    e.preventDefault();
    setEducations(educations.concat(educInfo));
    setEducInfo({
      school: '',
      startYear: '',
      endYear: '',
      degree: '',
      level: '',
    });
    setShowEduc(false)
    };

  const onJobSubmit = (e) => {
    e.preventDefault();
    setJobs(jobs.concat(jobInfo));
    setJobInfo({
      company: '',
      title: '',
      startDate: '',
      endDate: '',
      description: '',
      id: uniqid()
      });
      setShowJob(false);
  };

  const onInfoEdit = () => {
    setShowInfo(true);
  };

  const onEducSave = () => {
    setShowEduc(true);
  };

  const onJobSave = () => {
    setShowJob(true);
  };

  const removeEducItem = (id) => {
    const newEducations = educations.filter((educ) => educ.id !== id);

    setEducations(newEducations)
  };

  const removeJobItem = (id) => {
    const newJobs = jobs.filter((job) => job.id !== id);

    setJobs(newJobs)
  };

  let formInfo;
  let formEduc;
  let formJob

  if (showInfo) { 
    formInfo = <GeneralInput onSubmit={onInfoSubmit} onChange={handleInfoChange} firstName={generalInfo.firstName} lastName={generalInfo.lastName} email={generalInfo.email} phone={generalInfo.phoneNumber}/>;  
  } else {
    formInfo = <GeneralInformation onClick={onInfoEdit} firstName={generalInfo.firstName} lastName={generalInfo.lastName} email={generalInfo.email} phone={generalInfo.phoneNumber}/>;    
  };

  if (showEduc) {
    formEduc = <EducInput onSubmit={onEducSubmit} onChange={handleEducChange} school={educInfo.school} startYear={educInfo.startYear} endYear={educInfo.endYear} degree={educInfo.degree} level={educInfo.level}/>;    
  };

  if (showJob) {
    formJob = <JobInput onSubmit={onJobSubmit} onChange={handleJobChange} company={jobInfo.company} startDate={jobInfo.startDate} endDate={jobInfo.endDate} title={jobInfo.title} description={jobInfo.description}/>;    
  };


  return (
    <div>
      {formInfo}
      <p> Education </p>
      <EducInformation onClick={onEducSave} removeItem={removeEducItem} educations={educations} />
      {formEduc}
      <p> Jobs </p>
      <JobInformation onClick={onJobSave} removeItem={removeJobItem} jobs={jobs} />
      {formJob}
    </div>
  );
}

export default App;