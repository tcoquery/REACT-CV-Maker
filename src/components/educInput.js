import React from "react";

const EducInput = (props) => {

  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="schoolInput">School</label>
            <input
                onChange={props.onChange}
                name="school"
                value={props.school}
                type="text"
                id="schoolInput"
            />
            <label htmlFor="startYear">Start Year</label>
            <input
                onChange={props.onChange}
                name="start"
                value={props.startYear}
                type="number"
                id="startYear"
            />
            <label htmlFor="endYear">End Year</label>
            <input
                onChange={props.onChange}
                name="end"
                value={props.endYear}
                type="number"
                id="endYear"
            />
            <label htmlFor="degreeInput">Degree</label>
            <input
                onChange={props.onChange}
                name="degree"
                value={props.degree}
                type="text"
                id="degreeInput"
            />
            <label htmlFor="levelInput">Level</label>
            <input
                onChange={props.onChange}
                name="Level"
                value={props.level}
                type="text"
                id="levelInput"
            />
            <button type="submit">Save</button>
        </form>   
    </div>
  );
};

export default EducInput;