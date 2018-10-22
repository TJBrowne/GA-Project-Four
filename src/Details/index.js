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
                {/* <h1>User Profile</h1> */}
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
                        <h3>Add Allergies</h3>
                        <p>Select from the allergies/ intolerances below and we will only show you restaurants that match.</p>
                    
                        <input classname="selections" type="radio" name="gluten" value="gluten" />Gluten Free
                        <input classname="selections" type="radio" name="soy" value="soy" />Soy Free
                        <input classname="selections" type="radio" name="wheat" value="wheat" />Wheat Free
                        <input classname="selections" type="radio" name="egg" value="egg" />Egg Free
                        <input classname="selections" type="radio" name="peanut" value="peanut" />Peanut Free<br></br>
                        <input classname="selections" type="radio" name="seafood" value="seafood" />Seafood Free
                        <input classname="selections" type="radio" name="sesame" value="sesame" />Sesame Seed Free
                        <input classname="selections" type="radio" name="dairy" value="dairy" />Dairy Free<br></br>
                        <input classname="selections" type="radio" name="treenut" value="treenut" />Treenut Free
                        <input classname="selections" type="radio" name="sulfite" value="sulfite" />Sulfite Free<br></br>
                    </div>
                    <div classname="delete">
                    <h6>To Delete User Account</h6>
                    <button type="button" onClick={this.userDelete}>Delete Profile</button>
                    </div>
                </form>
                </div>
                {/* <div class="footer">
                    <div class="social">
                        <a href="[full link to your Twitter]">
                            <img title="Twitter" alt="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/twitter1.png" width="35" height="35" />
                        </a>
                        <a href="[full link to your LinkedIn]">
                            <img title="LinkedIn" alt="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/linkedin1.png" width="35" height="35" />
                        </a>
                        <a href="[full link to your Facebook page]">
                            <img title="Facebook" alt="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/facebook1.png" width="35" height="35" />
                        </a>
                    </div> 
                </div> */}
            </div>
        );
    }
}

export default Details;