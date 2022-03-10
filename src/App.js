import React, { Component } from "react";
import CVDisplay from "./components/CVDisplay";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: { name: "", email: "", phone: "" },

      eduInfo: { institution: "", title: "", titleDate: "" },

      expInfo: {
        company: "",
        position: "",
        tasks: "",
        dateFrom: "",
        dateTo: "",
      },

      educationArray: [],
      experienceArray: [],
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
        email: e.target.value,
        name: this.state.personalInfo.name,
        phone: this.state.personalInfo.phone,
      },
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      personalInfo: {
        phone: e.target.value,
        name: this.state.personalInfo.name,
        email: this.state.personalInfo.email,
      },
    });
  };

  handleInstitutionChange = (e) => {
    this.setState({
      eduInfo: {
        institution: e.target.value,
        title: this.state.eduInfo.title,
        titleDate: this.state.eduInfo.titleDate,
      },
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      eduInfo: {
        title: e.target.value,
        institution: this.state.eduInfo.institution,
        titleDate: this.state.eduInfo.titleDate,
      },
    });
  };

  handleTitleDateChange = (e) => {
    this.setState({
      eduInfo: {
        titleDate: e.target.value,
        institution: this.state.eduInfo.institution,
        title: this.state.eduInfo.title,
      },
    });
  };

  handleCompanyChange = (e) => {
    this.setState({
      expInfo: {
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
        position: e.target.value,
        company: this.state.expInfo.company,
        tasks: this.state.expInfo.tasks,
        dateFrom: this.state.expInfo.dateFrom,
        dateTo: this.state.expInfo.dateTo,
      },
    });
  };

  handleTasksChange = (e) => {
    this.setState({
      expInfo: {
        tasks: e.target.value,
        company: this.state.expInfo.company,
        position: this.state.expInfo.position,
        dateFrom: this.state.expInfo.dateFrom,
        dateTo: this.state.expInfo.dateTo,
      },
    });
  };

  handleDateFromChange = (e) => {
    this.setState({
      expInfo: {
        dateFrom: e.target.value,
        company: this.state.expInfo.company,
        position: this.state.expInfo.position,
        tasks: this.state.expInfo.tasks,
        dateTo: this.state.expInfo.dateTo,
      },
    });
  };

  handleDateToChange = (e) => {
    this.setState({
      expInfo: {
        dateTo: e.target.value,
        company: this.state.expInfo.company,
        position: this.state.expInfo.position,
        tasks: this.state.expInfo.tasks,
        dateFrom: this.state.expInfo.dateFrom,
      },
    });
  };

  addEdu = () => {
    this.setState({
      educationArray: this.state.educationArray.concat(this.state.eduInfo),
      eduInfo: {
        institution: "",
        title: "",
        titleDate: "",
      },
    });
  };

  addExp = () => {
    this.setState({
      experienceArray: this.state.experienceArray.concat(this.state.expInfo),
      expInfo: {
        company: "",
        position: "",
        tasks: "",
        dateFrom: "",
        dateTo: "",
      },
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
            <label>Institution:</label>
            <input
              value={eduInfo.institution}
              type="text"
              onChange={this.handleInstitutionChange}
            ></input>
            <br></br>
            <label>Title:</label>
            <input
              value={eduInfo.title}
              type="text"
              onChange={this.handleTitleChange}
            ></input>
            <br></br>
            <label>Title date:</label>
            <input
              value={eduInfo.titleDate}
              type="date"
              onChange={this.handleTitleDateChange}
            ></input>
            <br></br>
            <button onClick={this.addEdu}>Add education info</button>
          </div>
          <br></br>

          <div className="section">
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
          </div>
          <br></br>
          <br></br>
          <button type="submit">SUBMIT CV</button>
        </form>
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
