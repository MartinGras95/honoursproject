import React from 'react';

function ActivityCodeEditor(props) {

    // Variable to store correct tasks
    const tasks = [];
    // Activity that the user selected
    const currentActivity = props.taskProps.name;
    
    // extract correct tasks
        props.taskProps.tasks.forEach((task) => {
            if(task.type == 2 && task.activity == currentActivity){
                tasks.push(task);
            }
        });

    // Process user's javascript
    function solveCode(){
        // clear the output area
        document.getElementById("txtCodeEditorOutput").innerText= " ";

        // Get code from user's input area
        var userCode = document.getElementById("txtUserCode").value;

        // Change console to log into the output box
        // create a new text node for every console log
        window.console = {
            log: function(str){
                var node = document.createElement("div");
                node.appendChild(document.createTextNode(str));
                document.getElementById("txtCodeEditorOutput").appendChild(node);
            }
        }

        // Log the executed code 
        // Error handling
        try{
            console.log(eval(userCode));
        }catch(err){
            console.log(err)
        }
 
    }

    return(
        <>
        {tasks.map((item) => (
            <div key={item._id}>
                <h4>Task 2</h4>
                <blockquote>{item.question}</blockquote>
                <div className="row" dangerouslySetInnerHTML={{__html: item.sourceCode}}></div>
                <div className="row">
                    <div className="col s12">
                        <button className="btn" onClick={solveCode}>Run</button>
                    </div>
            </div>
            </div>
        ))}
    </>
    )
}

export default ActivityCodeEditor;