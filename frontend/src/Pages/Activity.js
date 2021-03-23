import axios from 'axios';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';


import ActivityCodeBlanks from '../Components/ActivityCodeBlanks';
import ActivityCodeEditor from '../Components/ActivityCodeEditor';
import ActivityQuestions from '../Components/ActivityQuestions';
import FeedbackRequestForm from '../Components/FeedbackRequestForm'

const Activity = () => {

  // Get activity introduction
  const getActivity = async() => {
    let currentActivity = localStorage.getItem("currentActivity");
    try{
      await axios.get(`http://localhost:4000/activity/${currentActivity}`)
      .then((Response) => {
        document.getElementById("activityIntro").innerText = Response.data.introduction;
      })
      .catch((error) => {
        console.log(error)
      })

    }catch(error){
      console.log(error)
    }
  }

  // Function to complete activity
  const completeActivity = async() => {
    let user = localStorage.getItem("_id");
    let activityName = localStorage.getItem("currentActivity");
    
    // Post activity to users' finished activities
    try {
      await axios.post('http://localhost:4000/user/complete-activity', {id:user,activity:activityName})
      .then(() => {
        // alert user of completing the activity
        window.alert("Well done! you completed this activity. Please move on to the next activities. Good luck!")
      })
      .catch((error) => {
        console.log(error)
      })

    }catch(error){
      console.log(error)
    }
  }

    // Run after render of component
    useEffect(() => {
      getActivity();
  },[]);

  return(
    <div className="container">
      <h2>Activity Page</h2>
      <br />

      <div>
        <h3>Introduction</h3>
        <blockquote id="activityIntro"></blockquote>
      </div>
      <div className="divider"></div>
      <br />


      <ActivityCodeBlanks  />
      <br />

      <div className="divider"></div>

      <ActivityCodeEditor  />
      <br />

      <div className="divider"></div>

      <ActivityQuestions  />
      <br />

      <div className="divider"></div>
      <br />
      <div className="container">
        <button className="btn" onClick={completeActivity} style={{minWidth:"100%",minHeight:"3rem", backgroundColor:"#8ACB88",margin:"1rem"}}>Mark Activity Completed</button>
        <Link to="/courses"><button className="btn orange lighten-1" style={{minWidth:"100%",minHeight:"3rem", color:"white", margin:"1rem"}}>Return to activity list</button></Link>
      </div>
      <br />
      
      <div className="divider"></div>
      <br />

      <FeedbackRequestForm />

    </div>
  )
}

export default Activity;