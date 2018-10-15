import React, { Component } from 'react';
import './style.css';

class RegistrationPage extends Component {
    handleChange = event => {
        this.props.handleChange(event);
    }
    onFormSubmit = event => {
        event.preventDefault();
    }

    register = async () => {
        if (this.props.username === "" || this.props.password === "") {
            alert("Please place a valid username or password");
            return;
        };
        const requestBody = JSON.stringify({
            username: this.props.username,
            password: this.props.password,
        });
        const response = await fetch('/api/register', {
            method: 'POST',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseBody = await response.json();
        if (response.status === 409 || responseBody === undefined) {
            alert("User already exists, Choose another username")
            return;
        }
        // this.props.onLogin();
        // localStorage.setItem('user-jwt', responseBody);
        // this.props.history.push("/home");
    }

    logIn = async () => {
        if (this.props.username === "" || this.props.password === "") {
            alert("Please enter a valid username or password");
            return;
        };

        const requestBody = JSON.stringify({
            username: this.props.username,
            password: this.props.password,
        });

        const response = await fetch('/api/login', {
            method: 'POST',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseBody = await response.json();

        if (response.status === 401) {
            this.setState({
                errorMessage: responseBody.message
            });
            return;
        }
        // this.props.onLogin();
        // localStorage.setItem('user-jwt', JSON.stringify(responseBody))
        // this.props.history.push("/home");
    }

    render() {
        return (
            <div className="userInput">
                <h1>User Log In/Registration</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="Email (optional)" onChange={this.handleChange} />
                    <button type="button" onClick={this.register}>Register</button>
                    <button type="button" onClick={this.logIn}>Login</button>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;