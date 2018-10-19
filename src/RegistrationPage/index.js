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
                    <nav className="navbar">
                        <div className="nav-links">
                            <Link className="link" to="/" onClick={this.onLogin}>Login</Link>
                            <Link className="link" to="/" onClick={this.onLogout}>Logout</Link>
                        </div>
                    </nav>
                </div>
                <h1>User Log In/Registration</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
                    <input type="text" name="email" placeholder="Email (optional)" onChange={this.handleChange} value={this.state.email} />
                    <button type="button" onClick={this.register}>Register</button>
                    <button type="button" onClick={this.logIn}>Login</button>

                    {/* <div className="allergies">
                        <h2>Add Allergies</h2>
                        <p>Select from the allergies/ intolerances below and we will only show you restaurants that match.</p>
                    
                        <input type="radio" name="gluten" value="gluten" />Gluten Free
                        <input type="radio" name="soy" value="soy" />Soy Free
                        <input type="radio" name="wheat" value="wheat" />Wheat Free
                        <input type="radio" name="egg" value="egg" />Egg Free
                        <input type="radio" name="peanut" value="peanut" />Peanut Free<br></br>
                        <input type="radio" name="seafood" value="seafood" />Seafood Free
                        <input type="radio" name="sesame" value="sesame" />Sesame Seed Free
                        <input type="radio" name="dairy" value="dairy" />Dairy Free<br></br>
                        <input type="radio" name="treenut" value="treenut" />Treenut Free
                        <input type="radio" name="sulfite" value="sulfite" />Sulfite Free<br></br>
                    </div> */}
                </form>
            </div>
        );
    }
}

export default RegistrationPage;