import React from 'react';
import {Link} from 'react-router-dom';
import loginImage from '../images/login.webp';

// Image sourced from "https://www.vecteezy.com/free-vector/web" 
// by biggorilla298 


// bringing in changeUser as a prop to trigger the correct user when logged in
const Login = ({changeUserToStudent,changeUserToStaff}) => {

    const loginButtonStyles ={
        width:'65%'
    }
    const imgStyle ={
        height: "100%",
        width: "100%"
    }

    return(
        <div className="row valign-wrapper" style={{display:"flex", height:"65vh"}}>
            <div className="col l3 offset-l1 hide-on-med-and-down " style={{borderRight:"1px solid lightGrey",borderBottom:"1px solid lightGrey"}}>
                <div >
                    <div>    
                        <h4><em>Code daily.</em></h4>
                    </div>
                    <img src={loginImage} style={imgStyle} alt="login" />
                </div>
            </div>
            <div className="col s12 l9 pull-l1">
                <div className="container">
                <div className="row">
                    <div className="col s12 center">
                        <h3>Sign in</h3>
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
            
            </div>
            
                
        </div>
    )
}

export default Login;