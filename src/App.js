import React, { Component } from "react";
import CVDisplay from "./components/CVDisplay";
import EduInput from "./components/EduInput";
import uniqid from "uniqid";

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
    let eduArray = this.state.educationArray;

    eduArray[i] = {
      ...eduArray[i],
      titleDate: input,
    };

    this.setState({ educationArray: eduArray });
  };

  handleCompanyChange = (e) => {
    this.setState({
      expInfo: {
        id: this.state.expInfo.id,
        company: e.target.value,
        position: this.state.expInfo.position,
        tasks: this.state.expInfo.tasks,
        dateFrom: this.state.expInfo.dateFrom,
        dateTo: this.state.expInfo.dateTo,
      },
    });
  };

  handlePositionChange = (e) => {
    this.setState({
      expInfo: {
        id: this.state.expInfo.id,
        company: this.state.expInfo.company,
        position: e.target.value,
        tasks: this.state.expInfo.tasks,
        dateFrom: this.state.expInfo.dateFrom,
        dateTo: this.state.expInfo.dateTo,
      },
    });
  };

  handleTasksChange = (e) => {
    this.setState({
      expInfo: {
        id: this.state.expInfo.id,
        company: this.state.expInfo.company,
        position: this.state.expInfo.position,
        tasks: e.target.value,
        dateFrom: this.state.expInfo.dateFrom,
        dateTo: this.state.expInfo.dateTo,
      },
    });
  };

  handleDateFromChange = (e) => {
    this.setState({
      expInfo: {
        id: this.state.expInfo.id,
        company: this.state.expInfo.company,
        position: this.state.expInfo.position,
        tasks: this.state.expInfo.tasks,
        dateFrom: e.target.value,
        dateTo: this.state.expInfo.dateTo,
      },
    });
  };

  handleDateToChange = (e) => {
    this.setState({
      expInfo: {
        id: this.state.expInfo.id,
        company: this.state.expInfo.company,
        position: this.state.expInfo.position,
        tasks: this.state.expInfo.tasks,
        dateFrom: this.state.expInfo.dateFrom,
        dateTo: e.target.value,
      },
    });
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
      (ee, index) => index !== i
    );
    this.setState({ educationArray: filteredArray });
  };

  addExp = () => {
    this.setState({
      experienceArray: this.state.experienceArray.concat(this.state.expInfo),
      expInfo: {
        id: uniqid(),
        company: "",
        position: "",
        tasks: "",
        dateFrom: "",
        dateTo: "",
      },
    });
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
    const { personalInfo, eduInfo, expInfo, educationArray, experienceArray } =
      this.state;
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

            {/**<div className="section">
              <label>Company name:</label>
              <input
                value={expInfo.company}
                type="text"
                onChange={this.handleCompanyChange}
              ></input>
              <br></br>
              <label>Position title:</label>
              <input
                value={expInfo.position}
                type="text"
                onChange={this.handlePositionChange}
              ></input>
              <br></br>
              <label>Tasks description:</label>
              <input
                value={expInfo.tasks}
                type="text"
                onChange={this.handleTasksChange}
              ></input>
              <br></br>
              <label>Date from:</label>
              <input
                value={expInfo.dateFrom}
                type="date"
                onChange={this.handleDateFromChange}
              ></input>
              <br></br>
              <label>Date to:</label>
              <input
                value={expInfo.dateTo}
                type="date"
                onChange={this.handleDateToChange}
              ></input>
              <br></br>
              <button onClick={this.addExp}>Add experience info</button>
            </div>*/}
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
