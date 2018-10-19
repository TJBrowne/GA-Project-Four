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
                        <Link className="link" to="/" onClick={this.onLogout}>Register | Login</Link>
                        <Link className="link" to="/updateUser" onClick={this.onLogin}>Update User Info</Link>
                        <Link className="link" to="/" onClick={this.onLogout}>Logout</Link>
                    </div>
                </nav>
                <form onSubmit={this.onFormSubmit}>
                <div className="allergies">
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
                    </div>
                    <button type="button" onClick={this.userDelete}>Delete Profile</button>
                </form>
                </div>
            </div>
        );
    }
}

export default Details;