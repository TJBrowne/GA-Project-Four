import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: "",
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

    register = async () => {
        if (this.state.username === "" || this.state.password === "") {
            alert("Please place a valid username or password");
            return;
        };
        const requestBody = JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
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
        localStorage.setItem('user-jwt', responseBody);

        this.props.onLogin();
    }

    logIn = async () => {
        if (this.state.username === "" || this.state.password === "") {
            alert("Please enter a valid username or password");
            return;
        };

        const requestBody = JSON.stringify({
            username: this.state.username,
            password: this.state.password,
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
        
        localStorage.setItem('user-jwt', JSON.stringify(responseBody))

        this.props.onLogin();
    }

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <div className="userInput">
                <div>
                <header>
                    <nav className="navbar">
                        <div className="nav-links">
                            <Link className="link" to="/" onClick={this.onLogin}>Login</Link>
                            <Link className="link" to="/" onClick={this.onLogout}>Logout</Link>
                        </div>
                    </nav>
                </header>
                </div>
                <h1>User Log In/Registration</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                    <input type="text" name="email" placeholder="Email (optional)" onChange={this.handleChange} value={this.state.email} /><br></br>
                    <button type="button" onClick={this.register}>Register</button>
                    <button type="button" onClick={this.logIn}>Login</button>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;