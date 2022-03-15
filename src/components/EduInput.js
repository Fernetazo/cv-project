import React from "react";

const EduInput = (props) => {
  const { educationArray, handleEducationChange, deleteEdu, addEdu } = props;

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
                name="institution"
                onChange={handleEducationChange}
              ></input>
              <br></br>

              <label>Title:</label>
              <input
                type="text"
                index={index}
                value={e.title}
                name="title"
                onChange={handleEducationChange}
              ></input>
              <br></br>

              <label>Title date:</label>
              <input
                type="number"
                index={index}
                value={e.titleDate}
                placeholder="In years"
                name="titleDate"
                onChange={handleEducationChange}
              ></input>
              <br></br>

              <button index={index} onClick={deleteEdu}>
                Delete this item
              </button>
            </div>
          );
        })}
        <br></br>
        <button onClick={addEdu}>Add education info</button>
      </div>
      <br></br>
    </div>
  );
};

export default EduInput;
