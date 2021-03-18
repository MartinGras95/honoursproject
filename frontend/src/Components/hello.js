import React from 'react';
import {Link} from 'react-router-dom'

import helloImg from '../images/hello.webp';

// Image sourced from https://www.vecteezy.com/free-vector/programmer 
// by Vectorbox Studio 

const Hello = () => {

    const imgStyle ={
        height: "100%",
        width: "100%"
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h2>Welcome Back</h2>
                </div>
                <div className="col s12 m6">
                    <img src={helloImg} style={imgStyle} alt="welcome image" />
                </div>
                <div className="col s12 m6">
                    <h5>Lets Get to work!</h5>
                    <p>Head over to your <Link to="/courses">courses</Link> to see where you left off.</p>
                    <p>See you there!</p>
                </div>
            </div>
        </div>
    )
}

export default Hello;