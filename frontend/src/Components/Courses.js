import React, {useEffect} from 'react';
import js from '../images/js.jpg';
import {Link} from 'react-router-dom';


const Courses = (props) => {
    // Temp styles
    const cardStyles = {
        minHeight: "100px"
    }

    // After render check if logged user has completed each activity
    // if completed apply a green border to activity
     const checkActivity = async() => {
        try{
            // finished activities of user
            const fActs = localStorage.getItem("finishedActivities").split(',');

            // activity elements on the page
            const acts = document.getElementsByClassName('card-title');
            // activity names on page -> extracted from the card elements
            const actNames = []
            for (let i = 0; i < acts.length; i++) {
                actNames.push(acts[i].textContent);
            }

            // compare each task with completed tasks from user
            // if activity is finished then change style of that activity element
            for (let i = 0; i < fActs.length; i++) {
                if(actNames.includes(fActs[i]) ){ 
                    
                    // tell document to change border of activity which has same name as finished activity
                    document.getElementById(fActs[i]).style ="border: 3px solid green";
                    // also change start now to completed
                    document.getElementById(fActs[i]).lastElementChild.textContent = "Completed";
                    document.getElementById(fActs[i]).lastElementChild.style = "color: green";

                }else{
                    console.log("no tasks finished")
                }
                
            }

        }catch(error){
            console.log(error)
        }
        

    }

    // Run after render of component
    useEffect(() => {
        checkActivity();
        
    },[]);
    

    return(
        <div className="container">
        <div className="row">
            <div className="col s12">
                <h2>Activities</h2> 
            </div>
        </div>
        <div className="row">
            <div className="col s2">
                <h3>JavaScript Basics</h3>
            </div>
        </div>
        <div className="row">
            {props.activities.map((item) => (
            <div key={item._id} className="col s12 m6 l4">
                <div className="card" id={item.name}>
                        {/* Sending activity name to activity page to be able to fetch correct tasks from DB & sending tasks along too*/}
                    <Link to={{
                        pathname: '/activity',
                        activityProps:{
                            name: item.name,
                            tasks: props.tasks,
                            user: props.user
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
            ))}
            </div> 
        </div>
    )
}

export default Courses;