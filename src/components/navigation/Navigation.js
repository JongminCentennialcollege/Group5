import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";
import { Icon } from '@iconify/react';
import { useState } from "react";

const Navigation = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="../../assets/images/logo.png" alt="logo" />
            </div>

            <Icon icon="ci:hamburger-md"  className="navbar__nav-mobile" onClick={handleClick}/>

            <ul className="navbar__nav">
                <li className="nav__links">
                    <Link to="/">Home</Link>
                </li>

                <li className="nav__links">
                    <Link to="/about" activeClassName="active">About Us</Link>
                </li>

                <li className="nav__links">
                    <Link to="/foodbanks" activeClassName="active">Food Banks</Link>
                </li>

                <li className="nav__links">
                    <Link to="/partners" activeClassName="active">Partners</Link>
                </li>

                <li className="nav__links">
                    <Link to="/contact" activeClassName="active">Contact Us</Link>
                </li>

                <li className="nav__links">
                    <Link to="/donate" activeClassName="active">Donate</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;