import React, { Component } from 'react';
import './style.css';

class RegistrationPage extends Component {
    handleChange = event => {
        this.props.handleChange(event);
    }
    onFormSubmit = event => {
        event.preventDefault();
    }

    


    render() {
        return (
            <div className="userInput">
                <h1>User Log In</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="Email (optional)" onChange={this.handleChange} /><br></br>
                    <button type="button" onClick={this.register}>Register</button>
                    <button type="button" onClick={this.logIn}>Login</button>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;