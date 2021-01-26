import React from 'react';

import ActivityCodeBlanks from '../Components/ActivityCodeBlanks';
import ActivityCodeEditor from '../Components/ActivityCodeEditor';
import ActivityQuestions from '../Components/ActivityQuestions';

function activityPage() {
    return (
      <div>
        <ActivityCodeBlanks />
        <br />

        <ActivityCodeEditor />
        <br />

        <ActivityQuestions />

      </div>
  
    );
  }
  
  export default activityPage;