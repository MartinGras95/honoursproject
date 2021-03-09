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
        <>
            {tasks.map((item) => (
                <div key={item._id}>
                    <h4>Task 3</h4>
                    <blockquote>{item.question}</blockquote>
                    <div className="row" dangerouslySetInnerHTML={{__html: item.sourceCode}}></div>
                </div>
            ))}
        </>
    )
}



export default ActivityQuestions;