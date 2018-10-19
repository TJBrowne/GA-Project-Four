import React, { Component } from "react";
import "./style.css";
import Home from "../Home";
import Details from "../Details";
import RegistrationPage from "../RegistrationPage";
import SearchBar from "../SearchBar";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UpdateUser from "../UpdateUser";


class App extends Component {

  render() {
    return (

      <Router>
      <div className="App">
      <h1>NYC Allergy Free Eats!!!!</h1>
      <Route path="/" exact component={RegistrationPage} />
      <Route path="/home" exact component={Home} />
      <Route path="/search" exact component={SearchBar} />
      <Route path="/details" exact component={Details} />
      <Route path="/updateUser" exact component={UpdateUser} />
      </div>
      </Router>
    );
  }
}

export default App;

