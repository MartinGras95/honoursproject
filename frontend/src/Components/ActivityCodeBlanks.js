import React, { Component } from 'react';

const ActivityCodeBlanks = (props) => {

    // Variable to store correct tasks
    var tasks = [];
    // Activity that the user selected
    var currentActivity = props.taskProps.name;
 
    // extract correct tasks
     props.taskProps.tasks.forEach((task) => {
         if(task.type == 1 && task.activity == currentActivity){
             tasks.push(task);
         }
     });


    // Temporary styles for the code areas
    const codeAreaStyles = {
        border: "1px black solid",
        padding: "1rem",
        minHeight: "200px",
        minWidth: "200px"
    }

    // Simple code addition code to show functionality of the activity
    function solveCode(){
        var x = 5;
        // get value of y
        var y = parseInt(document.getElementById("txtY").value);

        var xy = x+y;

        document.getElementById("txtOutput").innerText = xy;
        console.log(xy);
    }

    return (
        <div className="container">
            
            {tasks.map((item) => (
                <div key={item._id}>
                    <h4>Task</h4>
                    <blockquote>{item.question}</blockquote>
                    <div dangerouslySetInnerHTML={{__html: item.sourceCode}}></div>
                </div>
            ))}

            <h4>Task</h4>
            <blockquote></blockquote>
            <div className="row">
                <div className="col s12 m6">
                    <h3>Input</h3>
                    <div style={codeAreaStyles}>
                        <p>var x = 5;</p>
                        <div className="row">
                            <div className="col s2">var y = </div>
                            <div className="col s2"><input type="number" id="txtY"></input></div>
                        </div>
                        
                        <p>console.log(x + y);</p>
                    </div>
                </div>
                <div className="col s12 m6">
                    <h3>Output</h3>
                    <div style={codeAreaStyles}>
                        <p id="txtOutput"></p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button className="btn" onClick={solveCode}>Run</button>
                </div>
            </div>
        </div>
    )
}

export default ActivityCodeBlanks;