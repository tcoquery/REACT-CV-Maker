import React from "react";

const JobInput = (props) => {

  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="companyInput">Company</label>
            <input
                onChange={props.onChange}
                name="company"
                value={props.company}
                type="text"
                id="companyInput"
            />
            <label htmlFor="startDate">Start Date</label>
            <input
                onChange={props.onChange}
                name="startDate"
                value={props.startDate}
                type="date"
                id="startDate"
            />
            <label htmlFor="endDate">End Date</label>
            <input
                onChange={props.onChange}
                name="endDate"
                value={props.endDate}
                type="date"
                id="endDate"
            />
            <label htmlFor="titleInput">Title</label>
            <input
                onChange={props.onChange}
                name="title"
                value={props.title}
                type="text"
                id="titleInput"
            />
            <label htmlFor="descriptionInput">Description</label>
            <input
                onChange={props.onChange}
                name="description"
                value={props.description}
                type="text-field"
                id="descriptionInput"
            />
            <button type="submit">Save</button>
        </form>   
    </div>
  );
};

export default JobInput;