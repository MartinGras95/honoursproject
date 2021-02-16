import React from 'react';

const ActivityCodeBlanks = (props) => {

    // Variable to store correct tasks
    const tasks = [];
    // Activity that the user selected
    const currentActivity = props.taskProps.name;
 
    // extract correct tasks
     props.taskProps.tasks.forEach((task) => {
         if(task.type == 1 && task.activity == currentActivity){
             tasks.push(task);
         }
     });


    // Simple code addition code to show functionality of the activity
    function solveCode(){
        var x = 5;
        // get value of y
        var y = parseInt(document.getElementById("txtY").value);

        var xy = x+y;

        document.getElementById("txtOutput").innerText = xy;
        console.log(xy);
    }

    // Map out the tasks that were extracted from the props
    // The code for the tasks is stored as HTML in the database
    // It is currently required to create each task as a jsx element, convert to html using online converter 
    // And advised to minify the converted html using a minifying tool online then insert into DB
    return (
        <div className="container">
            {tasks.map((item) => (
                <div key={item._id}>
                    <h4>Task</h4>
                    <blockquote>{item.question}</blockquote>
                    <div className="row" dangerouslySetInnerHTML={{__html: item.sourceCode}}></div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn" onClick={solveCode}>Run</button>
                        </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ActivityCodeBlanks;