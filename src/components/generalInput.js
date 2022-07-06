import React from "react";

const GeneralInput = (props) => {

  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="nameInput">Name</label>
            <input
                onChange={props.handleChange}
                name="name"
                value={props.state.name}
                type="text"
                id="nameInput"
            />
            <label htmlFor="emailInput">Email</label>
            <input
                onChange={props.handleChange}
                name="email"
                value={props.state.email}
                type="email"
                id="emailInput"
            />
            <label htmlFor="phoneInput">Phone number</label>
            <input
                onChange={props.handleChange}
                name="phoneNumber"
                value={props.state.phoneNumber}
                type="number"
                id="phoneInput"
            />
            <button type="submit">Add information</button>
        </form>  
    </div>
  );
};

export default GeneralInput;