import React from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar" id="navbarComponent">
            <Link className="NavLink" to="/">
                <span className="logo">SafeYatra</span>
            </Link>

            <div className="infoSection">
                {/* <span className="NavLink">Day Time</span>
        <span className="NavLink">Night Time</span> */}
                <Link className="NavLink" to="/form">
                    <button className="infoButton" type="button">
                        Your info
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
