import React from "react";

const EduInput = (props) => {
  const {
    educationArray,
    handleInstitutionChange,
    handleTitleChange,
    handleTitleDateChange,
    deleteEdu,
  } = props;

  return (
    <div>
      <div>
        {educationArray.map((e, index) => {
          return (
            <div key={e.id}>
              <label>Institution:</label>
              <input
                type="text"
                index={index}
                value={e.institution}
                onChange={handleInstitutionChange}
              ></input>
              <br></br>

              <label>Title:</label>
              <input
                type="text"
                index={index}
                value={e.title}
                onChange={handleTitleChange}
              ></input>
              <br></br>

              <label>Title date:</label>
              <input
                type="date"
                index={index}
                value={e.titleDate}
                onChange={handleTitleDateChange}
              ></input>
              <br></br>

              <button index={index} onClick={deleteEdu}>
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

export default EduInput;
