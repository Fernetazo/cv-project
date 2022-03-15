import React from "react";

const CVDisplay = (props) => {
  const { isEditing, personalInfo, educationArray, experienceArray } = props;

  let className = "rightSide";
  if (isEditing === false) {
    className += " active";
  }

  return (
    <div className={className}>
      <div>
        <h1>{personalInfo.name}</h1>
      </div>
      <div>
        <div>CONTACT</div>
        <h5>{personalInfo.email}</h5>
        <h5>{personalInfo.phone}</h5>
      </div>
      <div>
        <div>WORK EXPERIENCE</div>
        <div>
          {experienceArray.map((e) => {
            return (
              <div key={e.id}>
                <div>{e.company}</div>
                <div>{e.position}</div>
                <div>{e.tasks}</div>
                <div>
                  {e.dateFrom}-{e.dateTo}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div>EDUCATION</div>
        <div>
          {educationArray.map((e) => {
            return (
              <div key={e.id}>
                <div>{e.institution}</div>
                <div>{e.title}</div>
                <div>{e.titleDate}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CVDisplay;
