import React from "react";

const GeneralInformation = (props) => {

  return (
    <div>
        <ul>
         <li >
                {props.name}
                {props.email}
                {props.phone}
            </li>
        </ul>
    </div>
  );
};

export default GeneralInformation;