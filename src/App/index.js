import React, { Component } from "react";
import "./style.css";
import Home from "../Home";
import Details from "../Details";
import RegistrationPage from "../RegistrationPage";
import SearchBar from "../SearchBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    }
  }

  componentDidMount = () => {
    const token = localStorage.getItem("user-jwt");
    if (token) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  onLogout = () => {
    localStorage.clear();
    
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    return (
      <div className="App">
      <h1>NYC Allergy Free Eats!!!!</h1>
      <Home />
      <SearchBar />
      <RegistrationPage handleChange={this.handleChange} onLogin={this.onLogin} username={this.state.username} password={this.state.password} />
      <Details />
      </div>

    );
  }
}

export default App;
