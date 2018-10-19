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
                            <Link className="link" to="/home">Home</Link>
                            <Link className="link" to="/" onClick={this.onLogout}>Register/Login</Link>
                            <Link className="link" to="/details" onClick={this.onLogout}>User Details</Link>
                            <Link className="link" to="/updateUser" onClick={this.onLogin}>Update User Info</Link>
                        </div>
                    </nav>
                </div>
                <h1>Welcome to NYC Allergy Free Eats!!!!</h1>
                <p>New York's density and diversity pack a lot in and offers something for everyone, making it one of the most food allergy-friendly cities you can visit. These businesses aren't all allergen-free, but they are experienced with food allergies and have an educated staff, which is why they made our list.</p>
                <div>
                    <div>
                        <span role="img">🔍</span>
                        <input type="text" className="search-bar" placeholder="Search" onChange={this.handleChange}></input>
                    </div>
                    <h2>Results</h2>
                    {this.state.searchedRestaurants.map(restaurant => {
                        return (
                            <div>
                                <div className="restSearch">
                                    {restaurant.id}
                                    {restaurant.name}
                                    {restaurant.address}
                                    {restaurant.allergyFriendly}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;


