import React from "react";

const GeneralInput = (props) => {

  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                onChange={props.onChange}
                name="firstName"
                value={props.firstName}
                type="text"
                id="firstName"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                onChange={props.onChange}
                name="lastName"
                value={props.lastName}
                type="text"
                id="lastName"
            />
            <label htmlFor="emailInput">Email</label>
            <input
                onChange={props.onChange}
                name="email"
                value={props.email}
                type="email"
                id="emailInput"
            />
            <label htmlFor="phoneInput">Phone number</label>
            <input
                onChange={props.onChange}
                name="phoneNumber"
                value={props.phone}
                type="number"
                id="phoneInput"
            />
            <button type="submit">Add information</button>
        </form>  
    </div>
  );
};

export default GeneralInput;