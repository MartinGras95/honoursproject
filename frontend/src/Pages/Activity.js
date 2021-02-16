import React from 'react';


import ActivityCodeBlanks from '../Components/ActivityCodeBlanks';
import ActivityCodeEditor from '../Components/ActivityCodeEditor';
import ActivityQuestions from '../Components/ActivityQuestions';

const Activity = (props) => {
  const taskInfo = props.location.activityProps;
  console.log(taskInfo);
      return(
        <div>
          <ActivityCodeBlanks taskProps={taskInfo} />
          <br />

          <ActivityCodeEditor taskProps={taskInfo} />
          <br />

          <ActivityQuestions taskProps={taskInfo} />

        </div>
      )
  }
  
  export default Activity;