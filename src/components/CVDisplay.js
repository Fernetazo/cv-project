import React from "react";

const CVDisplay = (props) => {
  const { personalInfo, educationArray, experienceArray } = props;

  return <div>{personalInfo.name}</div>;
};

export default CVDisplay;
