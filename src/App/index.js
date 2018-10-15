import React, { Component } from "react";
import "./style.css";
import Home from "../Home";
import Details from "../Details";
import RegistrationPage from "../RegistrationPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    }
  }

  render() {
    return (
      <div className="App">NYC Allergy Free Eats!!!!
      <Home />
        <Details />
        <RegistrationPage handleChange={this.handleChange} onLogin={this.onLogin} username={this.state.username} password={this.state.password} />
      </div>

    );
  }
}

export default App;
