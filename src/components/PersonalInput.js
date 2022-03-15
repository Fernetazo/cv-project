import React from "react";

const PersonalInput = (props) => {
  const { personalInfo, handlePersonalChange } = props;

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        onChange={handlePersonalChange}
        value={personalInfo.name}
      ></input>
      <br></br>
      <label>E-mail:</label>
      <input
        value={personalInfo.email}
        type="email"
        name="email"
        onChange={handlePersonalChange}
      ></input>
      <br></br>
      <label>Phone:</label>
      <input
        value={personalInfo.phone}
        type="string"
        name="phone"
        onChange={handlePersonalChange}
      ></input>
    </div>
  );
};

export default PersonalInput;
