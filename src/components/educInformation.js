import React from "react";

const EducInformation = (props) => {

  return (
    <div>
        <ul>
            <li>
                {props.school}
                {props.startYear}
                {props.endYear}
                {props.degree}
                {props.level}
                <button onClick={props.onClick}>Add</button>
            </li>
        </ul>
    </div>
  );
};

export default EducInformation;