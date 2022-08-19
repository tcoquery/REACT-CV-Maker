import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const JobInformation = (props) => {
const { jobs } = props;

  return (
    <div class="w-full flex flex-col">
      {jobs.map((job) => {
        return <div key={job.id} >
          <p class="font-bold text-lg">{job.title}</p>     
          <p>{job.company}</p>
          <span class="text-gray-500">{job.startDate}-{job.endDate}</span>
          <div class="flex justify-between  items-center">                  
            <p>{job.description}</p>
            <FontAwesomeIcon icon={faTrash} onClick={() => {props.removeItem(job.id)}}/>
          </div>               
        </div>;
      })}
      <button onClick={props.onClick} class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-l px-5 py-2 w-20 self-center">Add</button>
    </div>
  );
};

export default JobInformation;