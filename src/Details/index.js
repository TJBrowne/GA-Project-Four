import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Details extends Component {
    

    render() {
        return (
            <div>
                <h1>User Info</h1>
                <div>
                <nav className="navbar">
                    <div className="nav-links">
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/" onClick={this.onLogout}>Register/Login</Link>
                        <Link className="link" to="/details" onClick={this.onLogout}>User Details</Link>
                    </div>
                </nav>
                </div>
            </div>
        );
    }
}

export default Details;