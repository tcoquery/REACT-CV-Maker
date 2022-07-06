import React from "react";

const GeneralInput = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
    <label htmlFor="nameInput">Name</label>
    <input
      onChange={props.handleChange}
      name={props.name}
      type="text"
      id="nameInput"
    />
    <label htmlFor="emailInput">Email</label>
    <input
      onChange={props.handleChange}
      email={props.email}
      type="email"
      id="emailInput"
    />
    <label htmlFor="phoneInput">Phone number</label>
    <input
      onChange={props.handleChange}
      phoneNumber={props.phoneNumber}
      type="number"
      id="phoneInput"
    />
    <button type="submit">Add information</button>
  </form>
  );
};

export default GeneralInput;