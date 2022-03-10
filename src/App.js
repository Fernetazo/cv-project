import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",

      institution: "",
      title: "",
      titleDate: "",

      company: "",
      position: "",
      tasks: "",
      dateFrom: "",
      dateTo: "",

      educationInfo: [],
      experience: [],
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleInstitutionChange = (e) => {
    this.setState({
      institution: e.target.value,
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleTitleDateChange = (e) => {
    this.setState({
      titleDate: e.target.value,
    });
  };

  handleCompanyChange = (e) => {
    this.setState({
      company: e.target.value,
    });
  };

  handlePositionChange = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  handleTasksChange = (e) => {
    this.setState({
      tasks: e.target.value,
    });
  };

  handleDateFromChange = (e) => {
    this.setState({
      dateFrom: e.target.value,
    });
  };

  handleDateToChange = (e) => {
    this.setState({
      dateTo: e.target.value,
    });
  };

  onSubmitCV = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      name,
      email,
      phone,
      institution,
      title,
      titleDate,
      company,
      position,
      tasks,
      dateFrom,
      dateTo,
      educationInfo,
      experience,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitCV}>
          <div className="sectionOne">
            <label>Name:</label>
            <input
              value={name}
              type="text"
              onChange={this.handleNameChange}
            ></input>
            <br></br>
            <label>E-mail:</label>
            <input
              value={email}
              type="email"
              onChange={this.handleEmailChange}
            ></input>
            <br></br>
            <label>Phone:</label>
            <input
              value={phone}
              type="number"
              onChange={this.handlePhoneChange}
            ></input>
          </div>
          <br></br>

          <div className="sectionTwo">
            <label>Institution:</label>
            <input
              value={institution}
              type="text"
              onChange={this.handleInstitutionChange}
            ></input>
            <br></br>
            <label>Title:</label>
            <input
              value={title}
              type="text"
              onChange={this.handleTitleChange}
            ></input>
            <br></br>
            <label>Title date:</label>
            <input
              value={titleDate}
              type="date"
              onChange={this.handleTitleDateChange}
            ></input>
          </div>
          <br></br>

          <div className="sectionThree">
            <label>Company name:</label>
            <input
              value={company}
              type="text"
              onChange={this.handleCompanyChange}
            ></input>
            <br></br>
            <label>Position title:</label>
            <input
              value={position}
              type="text"
              onChange={this.handlePositionChange}
            ></input>
            <br></br>
            <label>Tasks description:</label>
            <input
              value={tasks}
              type="text"
              onChange={this.handleTasksChange}
            ></input>
            <label>Date from:</label>
            <input
              value={dateFrom}
              type="date"
              onChange={this.handleDateFromChange}
            ></input>
            <label>Date to:</label>
            <input
              value={dateTo}
              type="date"
              onChange={this.handleDateToChange}
            ></input>
          </div>
          <br></br>
          <button type="submit">Submit CV</button>
        </form>
      </div>
    );
  }
}

export default App;
