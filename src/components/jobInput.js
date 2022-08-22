import React from "react";

const JobInput = (props) => {

  return (
    <div class="w-full">
        <form onSubmit={props.onSubmit} class="flex flex-col align-end">
            <label htmlFor="companyInput" class="text-l font-bold">Company</label>
            <input
                onChange={props.onChange}
                name="company"
                value={props.company}
                type="text"
                id="companyInput"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="startDate" class="text-l font-bold mt-4">Start Date</label>
            <input
                onChange={props.onChange}
                name="startDate"
                value={props.startDate}
                type="date"
                id="startDate"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="endDate" class="text-l font-bold mt-4">End Date</label>
            <input
                onChange={props.onChange}
                name="endDate"
                value={props.endDate}
                type="date"
                id="endDate"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="titleInput" class="text-l font-bold mt-4">Title</label>
            <input
                onChange={props.onChange}
                name="title"
                value={props.title}
                type="text"
                id="titleInput"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="descriptionInput" class="text-l font-bold mt-4">Description</label>
            <textarea
                onChange={props.onChange}
                name="description"
                value={props.description}
                id="descriptionInput"
                rows="3"
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

export default JobInput;