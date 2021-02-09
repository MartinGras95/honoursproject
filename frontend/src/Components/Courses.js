import React from 'react';
import js from '../images/js.jpg';
import {Link} from 'react-router-dom';

const Courses = (props) => {
    return(
        <div className="container">
        <div className="row">
            <div className="col s2">
                <h4>JavaScript Basics</h4>
            </div>
        </div>
        <div className="row">
            {props.activities.map((item) => (
            <div key={item._id} className="col s12 m6 l3">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <Link to="/activity">
                                <div className="card-image">
                                    <img src={js} alt="javascript logo" />
                                    <span className="card-title">{item.name}</span>
                                </div>
                            </Link>
                            <div className="card-content">
                                <p>Learn basics of JavaScript in this basic activity!</p>
                            </div>
                            <div className="card-action">
                                <Link to="/activity">Start Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            </div> 
        </div>
    )
}

export default Courses;