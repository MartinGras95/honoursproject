import axios from 'axios';
import React,{useState,useEffect} from 'react';


const ActivityCodeBlanks = () => {

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
                    if(element.type === 1 && element.activity === currentActivity){
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
    

    // Solve the code
    function solveCode(){
        // get y value
        var y = parseInt(document.getElementById("txtY").value);
        
        document.getElementById("yValue").innerText = `${y};`;

        // clear the output area
        document.getElementById("codeBlanksOutput").innerText= " ";

        // Get code from user's input area
        var userCode = document.getElementById("codeBlanksUserCode").innerText;


        // Log the executed code 
        try{
            // Change console to log into the output box
            // create a new text node for every console log
            window.console = {
                log: function(str){
                    var node = document.createElement("div");
                    node.appendChild(document.createTextNode(str));
                    document.getElementById("codeBlanksOutput").appendChild(node);
                }
            }
            eval(userCode);
            // then change console back to normal
            
        // Error handling
        }catch(err){
            console.log(err)
        }
    }
    


    // Run after render of component
    useEffect(() => {
        getTasks();
    },[]);

    // Map out the tasks that were extracted from the props
    // The code for the tasks is stored as HTML in the database
    // It is currently required to create each task as a jsx element, convert to html using online converter 
    // And advised to minify the converted html using a minifying tool online then insert into DB
    return (
        <>
            {foundTasks.map((item) => (
                <div key={item._id}>
                    <h3>Task 1</h3>
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

export default ActivityCodeBlanks;