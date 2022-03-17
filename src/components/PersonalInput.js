import React from "react";

const PersonalInput = (props) => {
  const { personalInfo, handlePersonalChange } = props;

  return (
    <div>
      <div className="leftSideSubSection">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handlePersonalChange}
          value={personalInfo.name}
        ></input>
      </div>
      <div className="leftSideSubSection">
        <label>E-mail:</label>
        <input
          value={personalInfo.email}
          type="email"
          name="email"
          onChange={handlePersonalChange}
        ></input>
      </div>
      <div className="leftSideSubSection">
        <label>Phone:</label>
        <input
          value={personalInfo.phone}
          type="string"
          name="phone"
          onChange={handlePersonalChange}
        ></input>
      </div>
    </div>
  );
};

export default PersonalInput;
