import React from 'react';


import ActivityCodeBlanks from '../Components/ActivityCodeBlanks';
import ActivityCodeEditor from '../Components/ActivityCodeEditor';
import ActivityQuestions from '../Components/ActivityQuestions';
import FeedbackRequestForm from '../Components/FeedbackRequestForm'

const Activity = (props) => {
  const taskInfo = props.location.activityProps;
  console.log(taskInfo.name)
      return(
        <div>
          <ActivityCodeBlanks taskProps={taskInfo} />
          <br />

          <ActivityCodeEditor taskProps={taskInfo} />
          <br />

          <ActivityQuestions taskProps={taskInfo} />
          <br />

          <FeedbackRequestForm user={taskInfo.user[0]} activity={taskInfo.name} />

        </div>
      )
  }
  
  export default Activity;