import React, { useEffect, useState} from 'react';
import axios from 'axios';

function ActivityQuestions() {

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
                  if(element.type == 3 && element.activity == currentActivity){
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

      // Run after render of component
      useEffect(() => {
        getTasks();
    },[]);


    return(
        <>
            {foundTasks.map((item) => (
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