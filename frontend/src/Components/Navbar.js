import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const navStyle = {
        display: 'flex'
    };

    return(
        <nav>
            <div className="nav-wrapper purple darken-2">
                <a href="/home" className="brand-logo">CoDaily</a>
                <ul id="nav-mobile" className="right" style={navStyle}>
                    <Link to="/account">
                        <li>Account</li>
                    </Link>
                    <Link to="/">
                        <li>Sign Out</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;