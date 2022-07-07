import React from "react";

const JobInformation = (props) => {
const { jobs } = props;

  return (
    <div>
        <ul>
            {jobs.map((job) => {
                return <li key={job.id}>
                            {job.company}
                            {job.startDate}
                            {job.endDate}
                            {job.title}
                            {job.description}
                            <button onClick={() => {props.removeItem(job.id)}}>Remove</button>
                        </li>;
                }
            )}
        </ul>
        <button onClick={props.onClick}>Add</button>
    </div>
  );
};

export default JobInformation;