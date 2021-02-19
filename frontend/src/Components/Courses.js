import React from 'react';
import js from '../images/js.jpg';
import {Link} from 'react-router-dom';


const Courses = (props) => {

    // Temp styles
    const cardStyles = {
        minHeight: "100px"
    }



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
                             {/* Sending activity name to activity page to be able to fetch correct tasks from DB & sending tasks along too*/}
                            <Link to={{
                                pathname: '/activity',
                                activityProps:{
                                    name: item.name,
                                    tasks: props.tasks
                                }
                            }}>
                                <div className="card-image">
                                    <img src={js} alt="javascript logo" />
                                    <span className="card-title">{item.name}</span>
                                </div>
                            </Link>
                            <div style={cardStyles} className="card-content">
                                <p>{item.description}</p>
                            </div>
                            <div className="card-action">
                                <Link to={{
                                    pathname: '/activity',
                                    activityProps:{
                                        name: item.name
                                    }
                                }}>Start Now</Link>
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