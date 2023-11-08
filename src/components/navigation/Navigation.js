import React from "react";
import "./Navigation.css";
import { Icon } from '@iconify/react';
import { useState } from "react";
import Nav from "./Nav";

const Navigation = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className={click ? "Navbar-none" : "Navbar-flex"} >
                <div className={click ? "second-display-flex" : "second-display-none"}>
                    <div className="navbar__logo">
                        <img src="../../assets/images/logo.png" alt="logo" />
                    </div>

                    <Icon icon="ci:hamburger-md" className="navbar__nav-mobile" onClick={handleClick} />
                </div>
                
                <Nav propsClass = {click ? "navbar__navbar" : "navbar__navbar-mobile" }/>
            </nav>

            {/* <div className={click ? "navbar__navbar" : "navbar__navbar-mobile"}>
                <ul>
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
            </div> */}
        </>
        
    );
};

export default Navigation;