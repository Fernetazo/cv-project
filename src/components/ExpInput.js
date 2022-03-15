import React from "react";

const ExpInput = (props) => {
  const { experienceArray, handleExperienceChange, deleteExp } = props;

  return (
    <div>
      <div>
        {experienceArray.map((e, index) => {
          return (
            <div key={e.id}>
              <label>Company:</label>
              <input
                type="text"
                index={index}
                value={e.company}
                name="company"
                onChange={handleExperienceChange}
              ></input>
              <br></br>

              <label>Position:</label>
              <input
                type="text"
                index={index}
                value={e.position}
                name="position"
                onChange={handleExperienceChange}
              ></input>
              <br></br>

              <label>Tasks:</label>
              <input
                type="text"
                index={index}
                value={e.tasks}
                name="tasks"
                onChange={handleExperienceChange}
              ></input>
              <br></br>

              <label>Date from:</label>
              <input
                type="number"
                index={index}
                value={e.dateFrom}
                placeholder="In years"
                name="dateFrom"
                onChange={handleExperienceChange}
              ></input>
              <br></br>

              <label>Date to:</label>
              <input
                type="number"
                index={index}
                value={e.dateTo}
                placeholder="In years"
                name="dateTo"
                onChange={handleExperienceChange}
              ></input>
              <br></br>

              <button index={index} onClick={deleteExp}>
                Delete this item
              </button>
            </div>
          );
        })}
      </div>
      <br></br>
    </div>
  );
};

export default ExpInput;
