import React from "react";

const GeneralInput = (props) => {

  return (
    <div class="container mx-auto p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center gap-4 mt-12">
        <form onSubmit={props.onSubmit} class="flex flex-col align-end w-full">
            <label htmlFor="firstName" class="text-l font-bold">First Name</label>
            <input
                onChange={props.onChange}
                name="firstName"
                value={props.firstName}
                type="text"
                id="firstName"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="lastName" class="text-l font-bold mt-4">Last Name</label>
            <input
                onChange={props.onChange}
                name="lastName"
                value={props.lastName}
                type="text"
                id="lastName"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="emailInput" class="text-l font-bold mt-4">Email</label>
            <input
                onChange={props.onChange}
                name="email"
                value={props.email}
                type="email"
                id="emailInput"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="phoneInput" class="text-l font-bold mt-4">Phone number</label>
            <input
                onChange={props.onChange}
                name="phoneNumber"
                value={props.phone}
                type="number"
                id="phoneInput"
                class="mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button class="w-1/6 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-l py-2 mt-4 self-end" type="submit">Save</button>
        </form>  
    </div>
  );
};

export default GeneralInput;