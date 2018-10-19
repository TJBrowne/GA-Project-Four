import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            userId: "",
          currentUsername: "",
          password: "",
          email: "",
          isLoggedIn: true,
        }
      }

    handleDelChange = event => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
    onDelFormSubmit = event => {
        event.preventDefault();
    }

    userDelete = async () => {
        const currentUserResponse = await fetch('/api/user', {
            method: 'DELETE',
            headers: {
                'jwt-token': localStorage.getItem('user-jwt')

            }
        })
        const userInfo = await currentUserResponse.json();
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <div>
                <nav className="navbar">
                    <div className="nav-links">
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/" onClick={this.onLogout}>Register/Login</Link>
                    </div>
                </nav>
                <form onSubmit={this.onFormSubmit}>
                    <button type="button" onClick={this.userDelete}>Delete Profile</button>
                </form>
                </div>
            </div>
        );
    }
}

export default Details;