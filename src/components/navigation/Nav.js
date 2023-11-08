import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <>
            <ul className={props.propsClass}>
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
        </>
    )
}

export default Nav;