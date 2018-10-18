import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {


    render() {
        return (
            <div>
                <h1>Search</h1>
                <form role={this.onFormSubmit}>
                    <input type="address" name="username" placeholder="Address" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="button" onClick={this.logIn}>Login</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;