import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/foodbanks">Food Banks</Link>
                </li>
                <li>
                    <Link to="/partners">Partners</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/donate">Donate</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;