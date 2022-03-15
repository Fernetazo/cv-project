import React, { Component } from "react";
import uniqid from "uniqid";
import CVDisplay from "./components/CVDisplay";
import EduInput from "./components/EduInput";
import ExpInput from "./components/ExpInput";

class App extends Component {
  constructor() {
    super();

    this.state = {
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

  handleNameChange = (e) => {
    this.setState({
      personalInfo: {
        name: e.target.value,
        email: this.state.personalInfo.email,
        phone: this.state.personalInfo.phone,
      },
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      personalInfo: {
        name: this.state.personalInfo.name,
        email: e.target.value,
        phone: this.state.personalInfo.phone,
      },
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      personalInfo: {
        name: this.state.personalInfo.name,
        email: this.state.personalInfo.email,
        phone: e.target.value,
      },
    });
  };

  handleInstitutionChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let eduArray = this.state.educationArray;

    eduArray[i] = {
      ...eduArray[i],
      institution: input,
    };

    this.setState({ educationArray: eduArray });
  };

  handleTitleChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let eduArray = this.state.educationArray;

    eduArray[i] = {
      ...eduArray[i],
      title: input,
    };

    this.setState({ educationArray: eduArray });
  };

  handleTitleDateChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = this.state.educationArray;

    copyArray[i] = {
      ...copyArray[i],
      titleDate: input,
    };

    this.setState({ educationArray: copyArray });
  };

  handleCompanyChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = this.state.experienceArray;

    copyArray[i] = {
      ...copyArray[i],
      company: input,
    };

    this.setState({ experienceArray: copyArray });
  };

  handlePositionChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = this.state.experienceArray;

    copyArray[i] = {
      ...copyArray[i],
      position: input,
    };

    this.setState({ experienceArray: copyArray });
  };

  handleTasksChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = this.state.experienceArray;

    copyArray[i] = {
      ...copyArray[i],
      tasks: input,
    };

    this.setState({ experienceArray: copyArray });
  };

  handleDateFromChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = this.state.experienceArray;

    copyArray[i] = {
      ...copyArray[i],
      dateFrom: input,
    };

    this.setState({ experienceArray: copyArray });
  };

  handleDateToChange = (e) => {
    let i = e.target.getAttribute("index");
    let input = e.target.value;
    let copyArray = this.state.experienceArray;

    copyArray[i] = {
      ...copyArray[i],
      dateTo: input,
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

  loadExample = (e) => {
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

  resetForm = (e) => {
    this.setState({
      personalInfo: { name: "", email: "", phone: "" },

      eduInfo: { id: uniqid(), institution: "", title: "", titleDate: "" },

      expInfo: {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        dateFrom: "",
        dateTo: "",
      },

      educationArray: [],
      experienceArray: [],
    });
  };

  onSubmitCV = (e) => {
    e.preventDefault();
  };

  render() {
    const { personalInfo, educationArray, experienceArray } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmitCV}>
            <div className="section">
              <label>Name:</label>
              <input
                type="text"
                onChange={this.handleNameChange}
                value={personalInfo.name}
              ></input>
              <br></br>
              <label>E-mail:</label>
              <input
                value={personalInfo.email}
                type="email"
                onChange={this.handleEmailChange}
              ></input>
              <br></br>
              <label>Phone:</label>
              <input
                value={personalInfo.phone}
                type="number"
                onChange={this.handlePhoneChange}
              ></input>
            </div>
            <br></br>

            <div className="section">
              <EduInput
                educationArray={educationArray}
                handleInstitutionChange={this.handleInstitutionChange}
                handleTitleChange={this.handleTitleChange}
                handleTitleDateChange={this.handleTitleDateChange}
                deleteEdu={this.deleteEdu}
              />
              <button onClick={this.addEdu}>Add education info</button>
            </div>
            <br></br>

            <div className="section">
              <ExpInput
                experienceArray={experienceArray}
                handleCompanyChange={this.handleCompanyChange}
                handlePositionChange={this.handlePositionChange}
                handleTasksChange={this.handleTasksChange}
                handleDateFromChange={this.handleDateFromChange}
                handleDateToChange={this.handleDateToChange}
                deleteExp={this.deleteExp}
              />
              <button onClick={this.addExp}>Add experience info</button>
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
        <button type="submit">SUBMIT CV</button>
        <button onClick={this.loadExample}>CV example</button>
        <button onClick={this.resetForm}>Reset form</button>
        <CVDisplay
          personalInfo={personalInfo}
          educationArray={educationArray}
          experienceArray={experienceArray}
        />
      </div>
    );
  }
}

export default App;
