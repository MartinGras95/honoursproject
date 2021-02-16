import React from 'react';

function ActivityQuestions(props) {

    // Variable to store correct tasks
    var tasks = [];
    // Activity that the user selected
    var currentActivity = props.taskProps.name;
    
    // extract correct tasks
    props.taskProps.tasks.forEach((task) => {
        if(task.type == 3 && task.activity == currentActivity){
            tasks.push(task);
        }
    });


    return(
        <div className="container">
            {tasks.map((item) => (
                <div key={item._id}>
                    <h4>Task</h4>
                    <blockquote>{item.question}</blockquote>
                    <div className="row" dangerouslySetInnerHTML={{__html: item.sourceCode}}></div>
                </div>
            ))}
        </div>
    )
}

/*
<div className="container">
<h4>Activity Type 3</h4>
<blockquote>Which of these is valid JavaScript code?</blockquote>
<div className="row">
     <div className="col s12 m4">
         <button className="btn btnCorr answerButtonStyles">var x = 5;</button>
     </div>
     <div className="col s12 m4">
         <button className="btn btnWrong answerButtonStyles">var x = 5;;</button>
     </div>
     <div className="col s12 m4">
         <button className="btn btnWrong answerButtonStyles">variable x = 5;</button>
     </div>
</div>
</div>
*/

export default ActivityQuestions;