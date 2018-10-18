import React, { Component } from 'react';
import './style.css';

class UpdateUser extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          email: "",
          isLoggedIn: true,
        }
      }

    handleChange = event => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
    onFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>User Update</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                    <input type="text" name="email" placeholder="Email (optional)" onChange={this.handleChange} value={this.state.email}/>
                    <button type="button" onClick={this.register}>Register</button>
                    <button type="button" onClick={this.logIn}>Login</button>
                </form>
            </div>
        )
    }
}

export default UpdateUser;