import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import UpdateUser from '../UpdateUser';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedRestaurants: [],
            address: [],
            allergyFriendly: [],
            // isLoggedIn: false
        }
    }

    componentDidMount = async () => {
        const response = await fetch('/api/restaurants');
        const searchedRestaurants = await response.json();

        this.setState({
            searchedRestaurants: searchedRestaurants
        });
    }


    render() {
        return (
            <div>
                <div>
                    <nav className="navbar">
                        
                            <div className="nav-links">
                                <Link className="link" to="/details" onClick={this.onLogin}>User Profile</Link>
                                <Link className="link" to="/updateUser" onClick={this.onLogin}>Update User</Link>
                                <Link className="link" to="/" onClick={this.props.onLogout}>Logout</Link>
                            </div>
                        
                        {/* <div className="nav-links">
                            <Link className="link" to="/" onClick={this.onLogout}>Register | Login</Link>
                            <Link className="link" to="/details" onClick={this.onLogin}>User Profile</Link>
                            <Link className="link" to="/updateUser" onClick={this.onLogin}>Update User Info</Link>
                            <Link className="link" to="/" onClick={this.onLogout}>Logout</Link>
                        </div> */}
                    </nav>
                </div>
                <h2>Welcome to NYC Allergy Free Eats</h2>
                <p>New York's density and diversity pack a lot in and offers something for everyone, making it one of the most food allergy-friendly cities you can visit. These businesses aren't all allergen-free, but they are experienced with food allergies and have an educated staff, which is why they made our list.</p>
                <div>
                    <div className="search-bar">
                        {/* <span role="img">🔍</span> */}
                        <input type="text" placeholder="Search" onChange={this.handleChange}></input>
                    </div>
                    <h3>Results</h3>
                    {this.state.searchedRestaurants.map(restaurant => {
                        return (
                            <div>
                                <div className="restSearch">
                                    {/* {restaurant.id} */}
                                    {restaurant.name}
                                    {restaurant.address}
                                    {restaurant.allergyFriendly}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div class="footer">
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
                </div>
                    {/* <div class="copyright">Lorem ipsum dolor</div> */ }
                </div >
        );
    }
}

export default Home;


