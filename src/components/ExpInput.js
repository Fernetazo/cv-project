import React from "react";

const ExpInput = (props) => {
  const { experienceArray, handleExperienceChange, deleteExp, addExp } = props;

  return (
    <div className="leftSideSection">
      {experienceArray.map((e, index) => {
        return (
          <div key={e.id} className="itemInput">
            <div className="leftSideSubSection">
              <button
                className="clearButton material-icons"
                index={index}
                onClick={deleteExp}
                title="Delete this item"
              >
                clear
              </button>
              <label>Company:</label>
              <input
                type="text"
                index={index}
                value={e.company}
                name="company"
                onChange={handleExperienceChange}
              ></input>
            </div>
            <div className="leftSideSubSection">
              <label>Position:</label>
              <input
                type="text"
                index={index}
                value={e.position}
                name="position"
                onChange={handleExperienceChange}
              ></input>
            </div>
            <div className="leftSideSubSection">
              <label>Tasks:</label>
              <input
                type="text"
                index={index}
                value={e.tasks}
                name="tasks"
                onChange={handleExperienceChange}
              ></input>
            </div>
            <div className="leftSideSubSection">
              {" "}
              <label>Date from:</label>
              <input
                type="number"
                index={index}
                value={e.dateFrom}
                placeholder="In years"
                name="dateFrom"
                onChange={handleExperienceChange}
              ></input>
              <label> to </label>
              <input
                type="number"
                index={index}
                value={e.dateTo}
                placeholder="In years"
                name="dateTo"
                onChange={handleExperienceChange}
              ></input>
            </div>
          </div>
        );
      })}
      <button className="addItemButton" onClick={addExp}>
        Add experience info
      </button>
    </div>
  );
};

export default ExpInput;
