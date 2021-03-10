import React,{useState,useEffect} from 'react';
import axios from 'axios';

function ActivityCodeEditor() {

    // Set a state variable for returned task
    const [foundTasks, updateTasks] = useState([]);

    // current activity that userr clicked on
    const currentActivity = localStorage.getItem("currentActivity");

    // Function to get tasks
    const getTasks = async() => {
        try{
            //  axios call to request appropriate activity
            await axios.get(`http://localhost:4000/tasks/${currentActivity}`)
            .then((Response) => {

                // data from the response
                const data = Response.data;
                // temporary array to hold extracted tasks
                let tempArray = [];

                // extract correct tasks
                data.forEach(element => {
                    if(element.type == 2 && element.activity == currentActivity){
                        tempArray.push(element);
                    }else{
                    }
                });

                // update state variable with the extracted tasks
                updateTasks(tempArray);
            })
            .catch((error) => {
                console.log(error)
            })
        }catch(error){
            console.log(error)
        }
       
    }

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

    // Run after render of component
    useEffect(() => {
        getTasks();
    },[]);

    return(
        <>
        {foundTasks.map((item) => (
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