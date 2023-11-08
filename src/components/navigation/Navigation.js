import React from "react";
import "./Navigation.css";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className="nav__links">
                            <NavLink to="/partners" activeClassName="active">Partners</NavLink>
                        </li>

                        <li className="nav__links">
                            <NavLink to="/foodbanks" activeClassName="active">Food Banks</NavLink>
                        </li>
                        
                        <li className="nav__links">
                            <NavLink to="/donate" activeClassName="active">Donate</NavLink>
                        </li>

                        <li className="nav__links">
                            <NavLink to="/register" activeClassName="active">
                                <div>
                                    <h1>R</h1>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navigation;