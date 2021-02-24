import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({isStaff}) => {
    const navStyle = {
        display: 'flex'
    };

    // UseEffect is a hook that complies code after the returned component has been rendered
    // Here the code checks if the person logged in is a staff member, if so the dashboard link is made visible
    useEffect(() => {
        // code to run after render goes here
        if(isStaff === true){
            document.getElementById("dashboard-link").className = 'dashboard-visi';
        }else{
            document.getElementById("dashboard-link").className = 'dashboard-invis';
        }
      });

    
    return(
        <nav>
            <div className="nav-wrapper purple darken-2">
                <a href="/home" className="brand-logo">CoDaily</a>
                <ul id="nav-mobile" className="right" style={navStyle}>

                    <Link id="dashboard-link" className="dashboard-invis" to="/dashboard" >
                        <li>Dashboard</li>
                    </Link>
                    <Link to="/home">
                        <li>Courses</li>
                    </Link>
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