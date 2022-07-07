import React from "react";

const EducInformation = (props) => {
const { educations } = props;

  return (
    <div>
        <ul>
            {educations.map((education) => {
                return <li key={education.id}>
                            {education.school}
                            {education.startYear}
                            {education.endYear}
                            {education.degree}
                            {education.level}
                            <button onClick={() => {props.removeItem(education.id)}}>Remove</button>
                        </li>;
                }
            )}
        </ul>
        <button onClick={props.onClick}>Add</button>
    </div>
  );
};

export default EducInformation;