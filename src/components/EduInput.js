import React from "react";

const EduInput = (props) => {
  const { educationArray, handleEducationChange, deleteEdu, addEdu } = props;

  return (
    <div className="leftSideSection">
      {educationArray.map((e, index) => {
        return (
          <div key={e.id} className="itemInput">
            <div className="leftSideSubSection">
              <button
                className="clearButton"
                index={index}
                onClick={deleteEdu}
                title="Delete this item"
              >
                <div className="material-icons">clear</div>
              </button>
              <label>Institution:</label>
              <input
                type="text"
                index={index}
                value={e.institution}
                name="institution"
                onChange={handleEducationChange}
              ></input>
            </div>
            <div className="leftSideSubSection">
              <label>Title:</label>
              <input
                type="text"
                index={index}
                value={e.title}
                name="title"
                onChange={handleEducationChange}
              ></input>
              <div className="leftSideSubSection">
                <label>Title date:</label>
                <input
                  type="number"
                  index={index}
                  value={e.titleDate}
                  placeholder="In years"
                  name="titleDate"
                  onChange={handleEducationChange}
                ></input>
              </div>
            </div>
          </div>
        );
      })}
      <button className="addItemButton" onClick={addEdu}>
        Add education info
      </button>
    </div>
  );
};

export default EduInput;
