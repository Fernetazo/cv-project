import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
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

  onSubmitCV = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, email, phone } = this.state;
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
          <button type="submit">Submit CV</button>
        </form>
      </div>
    );
  }
}

export default App;
