import React from 'react';
import {Link} from 'react-router-dom';

function Login(){

    const loginButtonStyles ={
        width:'65%'
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col s12 center">
                    <h1>Log in to account</h1>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <Link to="/home">
                        <a href="#!" className="waves-effect waves-light btn-large" style={loginButtonStyles}>Student Login</a>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <a href="#!" className="waves-effect waves-light btn-large disabled" style={loginButtonStyles}>Staff Login</a>
                </div>
            </div>
        </div>
    )
}

export default Login;