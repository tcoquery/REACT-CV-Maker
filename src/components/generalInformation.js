import React from "react";

const GeneralInformation = (props) => {

  return (
    <div>
        <ul>
            <li>
                {props.firstName}
                {props.lastName}
                {props.email}
                {props.phone}
                <button onClick={props.onClick}>Edit</button>
            </li>
        </ul>
    </div>
  );
};

export default GeneralInformation;