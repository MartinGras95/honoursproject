import React from 'react';


import ActivityCodeBlanks from '../Components/ActivityCodeBlanks';
import ActivityCodeEditor from '../Components/ActivityCodeEditor';
import ActivityQuestions from '../Components/ActivityQuestions';
import FeedbackRequestForm from '../Components/FeedbackRequestForm'

const Activity = (props) => {
  const taskInfo = props.location.activityProps;
  console.log(taskInfo.name)
  console.log(props)
      return(
        <div>
          <ActivityCodeBlanks taskProps={taskInfo} />
          <br />

          <ActivityCodeEditor taskProps={taskInfo} />
          <br />

          <ActivityQuestions taskProps={taskInfo} />
          <br />

          <div className="container">
            <button className="btn" style={{minWidth:"100%", backgroundColor:"#8ACB88"}}>Mark Activity Completed</button>
          </div>
          <br />
          

          <FeedbackRequestForm user={taskInfo.user[0]} activity={taskInfo.name} />

        </div>
      )
  }
  
  export default Activity;