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
                    if(element.type == 1 && element.activity == currentActivity){
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
    

    // Simple code addition code to show functionality of the activity
    function solveCode(){
        var x = 5;
        // get value of y
        var y = parseInt(document.getElementById("txtY").value);

        var xy = x+y;

        document.getElementById("txtOutput").innerText = xy;
        console.log(xy);
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
                    <h4>Task 1</h4>
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