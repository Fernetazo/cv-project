import React from "react";

const CVDisplay = (props) => {
  const { isEditing, personalInfo, educationArray, experienceArray } = props;

  let className = "rightSideContainer";
  if (isEditing === false) {
    className += " active";
  }

  return (
    <div className={className}>
      <div className="rightSide">
        <div className="headerSector">
          <div>
            <div className="mainName">{personalInfo.name}</div>
          </div>
          <div className="contact">
            <div className="subContact">
              <div className="material-icons contactIcon">email</div>
              <div>{personalInfo.email}</div>
            </div>
            <div className="subContact">
              <div className="material-icons contactIcon">phone</div>{" "}
              <div>{personalInfo.phone}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="subSection">WORK EXPERIENCE</div>
          <div>
            {experienceArray.map((e) => {
              return (
                <div className="item" key={e.id}>
                  <div className="leftSideItem">
                    <div className="title">{e.company}</div>
                    <div className="date">
                      {e.dateFrom}-{e.dateTo}
                    </div>
                  </div>
                  <div className="rightSideItem">
                    <div className="title">{e.position}</div>
                    <div className="tasks">{e.tasks}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="subSection">EDUCATION</div>
          <div>
            {educationArray.map((e) => {
              return (
                <div className="itemEdu" key={e.id}>
                  <div className="title">{e.title}</div>
                  <div className="institution">{e.institution}</div>
                  <div className="date">{e.titleDate}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDisplay;
