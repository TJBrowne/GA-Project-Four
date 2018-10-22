import React, { Component } from "react";
import "./style.css";
import Home from "../Home";
import Details from "../Details";
import RegistrationPage from "../RegistrationPage";
import SearchBar from "../SearchBar";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UpdateUser from "../UpdateUser";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  onLogout = () => {
    localStorage.clear();

    this.setState({
      isLoggedIn: false,
    })

  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }
  
  render() {
    return (

      <Router>
        <div className="App">
        <div className="title">
          <h1>NYC Allergy Free Eats</h1>
          </div>
          <Route exact path="/" render={(props) => <RegistrationPage {...props} isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} />} />
          <Route exact path="/home" render={(props) => <Home {...props} isLoggedIn={this.state.isLoggedIn} onLogout={this.onLogout} />} />
          <Route path="/search" exact component={SearchBar} />
          <Route path="/details" exact component={Details} />
          <Route path="/updateUser" exact component={UpdateUser} />
        </div>
      </Router>
    );
  }
}

export default App;

