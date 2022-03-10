import React, { Component } from "react";
import CVDisplay from "./components/CVDisplay";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
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
    this.setState({
      eduInfo: {
        id: this.state.eduInfo.id,
        institution: e.target.value,
        title: this.state.eduInfo.title,
        titleDate: this.state.eduInfo.titleDate,
      },
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      eduInfo: {
        id: this.state.eduInfo.id,
        institution: this.state.eduInfo.institution,
        title: e.target.value,
        titleDate: this.state.eduInfo.titleDate,
      },
    });
  };

  handleTitleDateChange = (e) => {
    this.setState({
      eduInfo: {
        id: this.state.eduInfo.id,
        institution: this.state.eduInfo.institution,
        title: this.state.eduInfo.title,
        titleDate: e.target.value,
      },
    });
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
    this.setState({
      educationArray: this.state.educationArray.concat(this.state.eduInfo),
      eduInfo: {
        id: uniqid(),
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
        </form>
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
