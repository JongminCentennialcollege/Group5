import React from "react";
import "./Navigation.css";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className={click ? "Navbar__column" : "Navbar-flex"}>
                <div className= "navbar__logo">
                    <h1>Find Your Food</h1>
                </div>

                <Icon icon="ci:hamburger-md" className="navbar__nav-mobile" onClick={handleClick} />  
            

                <div className={click ? "navbar__navbar" : "navbar__navbar-mobile"}>
                    <ul className={click ? "nav__items-flex" : "nav__items"}>
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
                </div>
            </nav>
        </>
    );
};

export default Navigation;