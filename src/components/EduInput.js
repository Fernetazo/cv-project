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
                //value={e.institution}
                type="text"
                index={index}
                onChange={handleInstitutionChange}
              ></input>
              <br></br>

              <label>Title:</label>
              <input
                //value={eduInfo.title}
                type="text"
                index={index}
                onChange={handleTitleChange}
              ></input>
              <br></br>

              <label>Title date:</label>
              <input
                //value={eduInfo.titleDate}
                type="date"
                index={index}
                onChange={handleTitleDateChange}
              ></input>
              <br></br>

              <button onClick={deleteEdu}>Delete this item</button>
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
