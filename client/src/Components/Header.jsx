import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src="../Images/logo.png" alt="" />
                    <h3>Weather App</h3>
                </div>
                <ul>
                    <li><Link to="/dashboard">Home</Link></li>
                    {/* <li><Link to="/login">Login</Link></li> */}
                    {/* <li><Link to="/register">Register</Link></li> */}
                    {/* <li><Link to="/">Contact</Link></li> */}
                    {/* <li><Link to="/">Privacy</Link></li> */}
                </ul>
            </div>
        </header>
    );
};

export default Header;
