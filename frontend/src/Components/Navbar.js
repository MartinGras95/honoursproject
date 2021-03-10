import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const navStyle = {
        display: 'flex'
    };

    // clear user from local storage when logged out
    const logout = () => {
        localStorage.clear();
        localStorage.setItem("loggedIn", false);
        updateNavbar();
    }

    const updateNavbar = () => {
        // code to run after render goes here
        // If user is logged in make navigation links available and vice versa
        if(localStorage.getItem("loggedIn") === "true"){

            document.getElementById("courses-link").className= "visi";
            document.getElementById("account-link").className= "visi";
            document.getElementById("logout-link").className= "visi";
            document.getElementById("home-link").className= "visi";
            document.getElementById("login-link").className= "invis";


            // make dashboard visible if staff is logged in and vice versa
            if(localStorage.getItem("isStaff") === "true"){
                document.getElementById("dashboard-link").className = 'visi';
            }else{
                document.getElementById("dashboard-link").className = 'invis';
            }
        }else{
            document.getElementById("courses-link").className= "invis";
            document.getElementById("account-link").className= "invis";
            document.getElementById("account-link").className= "invis";
            document.getElementById("dashboard-link").className= "invis";
            document.getElementById("login-link").className= "visi";
            document.getElementById("logout-link").className= "invis";
            document.getElementById("home-link").className= "invis";

        }
    }

    // UseEffect is a hook that complies code after the returned component has been rendered
    // Here the code checks if the person logged in is a staff member, if so the dashboard link is made visible
    useEffect(() => {
        updateNavbar();

      });

    
    return(
        <nav>
            <div className="nav-wrapper purple darken-2">
                <div className="brand-logo">CoDaily</div>
                <ul id="nav-mobile" className="right" style={navStyle}>

                    <Link id="home-link" className="invis" to="/home" >
                        <li>Home</li>
                    </Link>
                    <Link id="dashboard-link" className="invis" to="/dashboard" >
                        <li>Dashboard</li>
                    </Link>
                    <Link id="courses-link" className="invis" to="/Courses">
                        <li>Courses</li>
                    </Link>
                    <Link id="account-link" className="invis" to="/account">
                        <li>Account</li>
                    </Link>
                    <Link id="logout-link"className="nav-link invis" to="/" onClick={logout}>
                        <li>Sign Out</li>
                    </Link>
                    <Link id="login-link" className="nav-link" to="/">
                        <li>Sign in</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;