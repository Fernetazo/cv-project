import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import CVDisplay from "./components/CVDisplay";
import PersonalInput from "./components/PersonalInput";
import EduInput from "./components/EduInput";
import ExpInput from "./components/ExpInput";

const App = () => {
  const [isEditing, setIsEditing] = useState(true);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationArray, setEducationArray] = useState([
    { id: uniqid(), institution: "", title: "", titleDate: "" },
  ]);

  const [experienceArray, setExperienceArray] = useState([
    {
      id: uniqid(),
      company: "",
      position: "",
      tasks: "",
      dateFrom: "",
      dateTo: "",
    },
  ]);

  const handlePersonalChange = (e) => {
    let input = e.target.value;
    let key = e.target.name;
    let copyState = personalInfo;

    copyState = {
      ...copyState,
      [key]: input,
    };
    setPersonalInfo(copyState);
  };

  const handleEducationChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let key = e.target.name;
    let copyArray = educationArray;

    copyArray[i] = {
      ...copyArray[i],
      [key]: input,
    };

    setEducationArray([...copyArray]);
  };

  const handleExperienceChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = experienceArray;
    let key = e.target.name;

    copyArray[i] = {
      ...copyArray[i],
      [key]: input,
    };

    setExperienceArray([...copyArray]);
  };

  const addEdu = (e) => {
    e.preventDefault();
    let newEmpty = {
      id: uniqid(),
      institution: "",
      title: "",
      titleDate: "",
    };

    setEducationArray(educationArray.concat(newEmpty));
  };

  const deleteEdu = (e) => {
    e.preventDefault();
    let i = parseInt(e.target.getAttribute("index"));

    let filteredArray = educationArray.filter((e, index) => index !== i);
    setEducationArray(filteredArray);
  };

  const addExp = (e) => {
    e.preventDefault();

    let newEmpty = {
      id: uniqid(),
      company: "",
      position: "",
      tasks: "",
      dateFrom: "",
      dateTo: "",
    };

    setExperienceArray(experienceArray.concat(newEmpty));
  };

  const deleteExp = (e) => {
    let i = parseInt(e.target.getAttribute("index"));

    let filteredArray = experienceArray.filter((e, index) => index !== i);
    setExperienceArray(filteredArray);
  };

  const loadExample = () => {
    setPersonalInfo({
      name: "John Doe",
      email: "jdoe@nobody.com",
      phone: "555-5453",
    });
    setEducationArray([
      {
        id: uniqid(),
        institution: "Harvard University",
        title: "Computer Science degree",
        titleDate: "2022",
      },
      {
        id: uniqid(),
        institution: "Royal School of Science",
        title: "Technician computer",
        titleDate: "2006",
      },
    ]);
    setExperienceArray([
      {
        id: uniqid(),
        company: "IBM",
        position: "Fullstack web developer",
        tasks: "Make webpages. Testing",
        dateFrom: "2018",
        dateTo: "2022",
      },
      {
        id: uniqid(),
        company: "ICBC",
        position: "Cyber security",
        tasks: "Overall secirity of the bank's webpage.",
        dateFrom: "2017",
        dateTo: "2014",
      },
      {
        id: uniqid(),
        company: "IBM",
        position: "ATM technician",
        tasks: "Repair and maintenance of ATM machines.",
        dateFrom: "2017",
        dateTo: "2014",
      },
    ]);
  };

  const resetForm = () => {
    setPersonalInfo({ name: "", email: "", phone: "" });

    setEducationArray([
      { id: uniqid(), institution: "", title: "", titleDate: "" },
    ]);
    setExperienceArray([
      {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        dateFrom: "",
        dateTo: "",
      },
    ]);
  };

  const onSubmitCV = (e) => {
    e.preventDefault();
    if (isEditing === true) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const ToggleCV = (e) => {
    return (
      <button className="submitButton" type="submit">
        {isEditing ? "SUBMIT" : "EDIT"} CV
      </button>
    );
  };

  return (
    <div className="main">
      <div className="leftSide">
        <form onSubmit={onSubmitCV}>
          <fieldset disabled={!isEditing}>
            <PersonalInput
              personalInfo={personalInfo}
              handlePersonalChange={handlePersonalChange}
            />
            <EduInput
              educationArray={educationArray}
              handleEducationChange={handleEducationChange}
              deleteEdu={deleteEdu}
              addEdu={addEdu}
            />
            <ExpInput
              experienceArray={experienceArray}
              handleExperienceChange={handleExperienceChange}
              deleteExp={deleteExp}
              addExp={addExp}
            />
          </fieldset>
          <ToggleCV />
        </form>
        <div className="bottomButtons">
          <button onClick={loadExample}>CV example</button>
          <button onClick={resetForm}>Reset form</button>
        </div>
      </div>
      <CVDisplay
        isEditing={isEditing}
        personalInfo={personalInfo}
        educationArray={educationArray}
        experienceArray={experienceArray}
      />
    </div>
  );
};

export default App;
