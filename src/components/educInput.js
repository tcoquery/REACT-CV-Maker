import React from "react";

const EducInput = (props) => {

  return (
    <div class="w-full">
        <form onSubmit={props.onSubmit} class="flex flex-col align-end">
            <label htmlFor="schoolInput" class="text-l font-bold">School</label>
            <input
                onChange={props.onChange}
                name="school"
                value={props.school}
                type="text"
                id="schoolInput"
                placeholder="Université Paris II"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="startYear" class="text-l font-bold mt-4">Start Year</label>
            <input
                onChange={props.onChange}
                name="startYear"
                value={props.startYear}
                type="number"
                id="startYear"
                min="1900" 
                max="2099"
                step="1"
                placeholder="2019"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="endYear" class="text-l font-bold mt-4">End Year</label>
            <input
                onChange={props.onChange}
                name="endYear"
                value={props.endYear}
                type="number"
                id="endYear"
                min="1900" 
                max="2099"
                step="1"
                placeholder="2022"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="degreeInput" class="text-l font-bold mt-4">Degree</label>
            <input
                onChange={props.onChange}
                name="degree"
                value={props.degree}
                type="text"
                id="degreeInput"
                placeholder="Droit"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="levelInput" class="text-l font-bold mt-4">Level</label>
            <input
                onChange={props.onChange}
                name="level"
                value={props.level}
                type="text"
                id="levelInput"
                placeholder="Licence"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button type="submit" class="w-1/6 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-l py-2 mt-4 self-end">Save</button>
        </form>   
    </div>
  );
};

export default EducInput;