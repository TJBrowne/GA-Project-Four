import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    }
  }
  render() {
    return <div className="App">Hello World</div>;
  }
}

export default App;
