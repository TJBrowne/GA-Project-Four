import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class UpdateUser extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          userId: '',
          newUsername: "",
          newEmail: "",
          isLoggedIn: true,
        }
      }

    handleUpdateChange = event => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value,
        });
      }

    onFormSubmit = event => {
        event.preventDefault();
    }

    componentDidMount = async () => {
        const currentUserResponse = await fetch('/api/current-user', {
            method: 'GET',
            headers: {
                'jwt-token': localStorage.getItem('user-jwt')

            }
        })
        const userInfo = await currentUserResponse.json();

        this.setState({
            newUsername: userInfo.username,
            userId: userInfo.id,
        })
    }

    newLogIn = async () => {
        if (this.state.newUsername === "" || this.state.newPassword === "") {
            alert("Please enter a valid username or password");
            return;
        };

        const requestBody = JSON.stringify({
            username: this.state.newUsername,
            // password: this.state.newPassword,
        });

        console.log(requestBody)

        const response = await fetch(`/api/current-user/${this.state.userId}`, {
            method: 'PUT',
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
        // this.newLogIn(); 
        // localStorage.setItem('user-jwt', JSON.stringify(responseBody))
        // this.props.history.push("/home");
    }

    render() {
        return (
            <div>
                <h4>User Update</h4>
                <nav className="navbar">
                        <div className="nav-links">
                            <Link className="link" to="/home">Home</Link>
                            <Link className="link" to="/" onClick={this.onLogout}>Register/Login</Link>
                            <Link className="link" to="/details" onClick={this.onLogout}>User Profile</Link>
                            <Link className="link" to="/" onClick={this.onLogout}>Logout</Link>
                        </div>
                    </nav>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="newUsername" onChange={this.handleUpdateChange} value={this.state.newUsername}/><br></br>
                    <button type="button" onClick={this.newLogIn}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UpdateUser;