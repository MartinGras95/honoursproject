import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';


import ActivityCodeBlanks from '../Components/ActivityCodeBlanks';
import ActivityCodeEditor from '../Components/ActivityCodeEditor';
import ActivityQuestions from '../Components/ActivityQuestions';
import FeedbackRequestForm from '../Components/FeedbackRequestForm'

const Activity = (props) => {
  
  const taskInfo = props.location.activityProps;

  // Function to complete activity
  const completeActivity = async() => {
    console.log("activity completed!")
    let user = taskInfo.user[0]._id;
    let activityName = taskInfo.name;
    
    // Post activity to users' finished activities
    try {
      await axios.post('http://localhost:4000/user/complete-activity', {id:user,activity:activityName})
      .then(() => {
        window.alert("Well done! you completed this activity. Please move on to the next activities. Good luck!")
      })
      .catch((error) => {
        console.log(error)
      })

    }catch(error){
      console.log(error)
    }
  }

  return(
    <div className="container">
      <ActivityCodeBlanks taskProps={taskInfo} />
      <br />

      <div className="divider"></div>

      <ActivityCodeEditor taskProps={taskInfo} />
      <br />

      <div className="divider"></div>

      <ActivityQuestions taskProps={taskInfo} />
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

      <FeedbackRequestForm user={taskInfo.user[0]} activity={taskInfo.name} />

    </div>
  )
}

export default Activity;