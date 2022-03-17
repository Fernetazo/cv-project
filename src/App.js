import React, { Component } from "react";
import uniqid from "uniqid";
import CVDisplay from "./components/CVDisplay";
import PersonalInput from "./components/PersonalInput";
import EduInput from "./components/EduInput";
import ExpInput from "./components/ExpInput";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: true,

      personalInfo: { name: "", email: "", phone: "" },

      educationArray: [
        { id: uniqid(), institution: "", title: "", titleDate: "" },
      ],
      experienceArray: [
        {
          id: uniqid(),
          company: "",
          position: "",
          tasks: "",
          dateFrom: "",
          dateTo: "",
        },
      ],
    };
  }

  handlePersonalChange = (e) => {
    let input = e.target.value;
    let key = e.target.name;
    let copyState = this.state.personalInfo;

    copyState = {
      ...copyState,
      [key]: input,
    };
    this.setState({ personalInfo: copyState });
  };

  handleEducationChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let key = e.target.name;
    let copyArray = this.state.educationArray;

    copyArray[i] = {
      ...copyArray[i],
      [key]: input,
    };

    this.setState({ educationArray: copyArray });
  };

  handleExperienceChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = this.state.experienceArray;
    let key = e.target.name;

    copyArray[i] = {
      ...copyArray[i],
      [key]: input,
    };

    this.setState({ experienceArray: copyArray });
  };

  addEdu = () => {
    let newEmpty = {
      id: uniqid(),
      institution: "",
      title: "",
      titleDate: "",
    };

    this.setState({
      educationArray: this.state.educationArray.concat(newEmpty),
    });
  };

  deleteEdu = (e) => {
    let i = parseInt(e.target.getAttribute("index"));

    let filteredArray = this.state.educationArray.filter(
      (e, index) => index !== i
    );
    this.setState({ educationArray: filteredArray });
  };

  addExp = () => {
    let newEmpty = {
      id: uniqid(),
      company: "",
      position: "",
      tasks: "",
      dateFrom: "",
      dateTo: "",
    };

    this.setState({
      experienceArray: this.state.experienceArray.concat(newEmpty),
    });
  };

  deleteExp = (e) => {
    let i = parseInt(e.target.getAttribute("index"));

    let filteredArray = this.state.experienceArray.filter(
      (e, index) => index !== i
    );
    this.setState({ experienceArray: filteredArray });
  };

  loadExample = () => {
    this.setState({
      personalInfo: {
        name: "John Doe",
        email: "jdoe@nobody.com",
        phone: "555-5453",
      },
      educationArray: [
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
      ],
      experienceArray: [
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
      ],
    });
  };

  resetForm = () => {
    this.setState({
      personalInfo: { name: "", email: "", phone: "" },

      educationArray: [
        { id: uniqid(), institution: "", title: "", titleDate: "" },
      ],
      experienceArray: [
        {
          id: uniqid(),
          company: "",
          position: "",
          tasks: "",
          dateFrom: "",
          dateTo: "",
        },
      ],
    });
  };

  onSubmitCV = (e) => {
    e.preventDefault();

    if (this.state.isEditing === true) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
    }
  };

  render() {
    const { isEditing, personalInfo, educationArray, experienceArray } =
      this.state;

    const ToggleCV = () => {
      if (this.state.isEditing === true) {
        return (
          <button className="submitButton" type="submit">
            SUBMIT CV
          </button>
        );
      } else {
        return (
          <button className="submitButton" type="submit">
            EDIT CV
          </button>
        );
      }
    };

    return (
      <div className="main">
        <div className="leftSide">
          <form onSubmit={this.onSubmitCV}>
            <fieldset disabled={!this.state.isEditing}>
              <PersonalInput
                personalInfo={personalInfo}
                handlePersonalChange={this.handlePersonalChange}
              />
              <EduInput
                educationArray={educationArray}
                handleEducationChange={this.handleEducationChange}
                deleteEdu={this.deleteEdu}
                addEdu={this.addEdu}
              />
              <ExpInput
                experienceArray={experienceArray}
                handleExperienceChange={this.handleExperienceChange}
                deleteExp={this.deleteExp}
                addExp={this.addExp}
              />
            </fieldset>

            <ToggleCV />
          </form>
          <div className="bottomButtons">
            <button onClick={this.loadExample}>CV example</button>
            <button onClick={this.resetForm}>Reset form</button>
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
  }
}

export default App;
