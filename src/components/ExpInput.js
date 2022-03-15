import React from "react";

const ExpInput = (props) => {
  const {
    experienceArray,
    handleCompanyChange,
    handlePositionChange,
    handleTasksChange,
    handleDateFromChange,
    handleDateToChange,
    deleteExp,
  } = props;

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
                onChange={handleCompanyChange}
              ></input>
              <br></br>

              <label>Position:</label>
              <input
                type="text"
                index={index}
                onChange={handlePositionChange}
              ></input>
              <br></br>

              <label>Tasks:</label>
              <input
                type="text"
                index={index}
                onChange={handleTasksChange}
              ></input>
              <br></br>

              <label>Date from:</label>
              <input
                type="date"
                index={index}
                onChange={handleDateFromChange}
              ></input>
              <br></br>

              <label>Date to:</label>
              <input
                type="date"
                index={index}
                onChange={handleDateToChange}
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

      <br></br>
    </div>
  );
};

export default ExpInput;
