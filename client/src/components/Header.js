import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/login">
                    <li>Login</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;