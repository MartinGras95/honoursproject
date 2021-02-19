import React from 'react';
import {Link} from 'react-router-dom';


// bringing in changeUser as a prop to trigger the correct user when logged in
const Login = ({changeUserToStudent,changeUserToStaff}) => {

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
                    <Link to="/home" >
                        <button  onClick={changeUserToStudent} className="waves-effect waves-light btn-large" style={loginButtonStyles} >Student Login</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <Link to="/home">
                        <button onClick={changeUserToStaff} className="waves-effect waves-light btn-large" style={loginButtonStyles} >Staff Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;