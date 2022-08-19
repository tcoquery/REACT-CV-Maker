import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const GeneralInformation = (props) => {

  return (
    <div class="container mx-auto p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center gap-4 mt-12">
      <div>
        <span class="font-bold text-3xl">{props.firstName}</span> 
        <span class="font-bold text-3xl">{props.lastName}</span> 
      </div>
      <div class="space-x-2">      
        <FontAwesomeIcon icon={faEnvelope}/>
        <span>{props.email}</span>
      </div>
      <div class="space-x-2">      
        <FontAwesomeIcon icon={faPhone} />
        <span>{props.phone}</span>
      </div>
      <button class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center" onClick={props.onClick}>Edit</button>
    </div>
  );
};

export default GeneralInformation;