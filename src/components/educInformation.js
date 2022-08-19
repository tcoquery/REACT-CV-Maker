import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const EducInformation = (props) => {
const { educations } = props;

  return (
    <div class="w-full flex flex-col">
      {educations.map((education) => {
        return <div key={education.id} >
                  <p class="font-bold text-lg">{education.degree}</p>     
                  <p>{education.school}</p>
                  <div class="flex justify-between  items-center">                  
                  <span class="text-gray-500">{education.startYear}-{education.endYear}</span>
                  <FontAwesomeIcon icon={faTrash} onClick={() => {props.removeItem(education.id)}}/></div>               
                </div>;
        })}
      <button onClick={props.onClick} class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-l px-5 py-2 w-20 self-center">Add</button>
    </div>
  );
};

export default EducInformation;