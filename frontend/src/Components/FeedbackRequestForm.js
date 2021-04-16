import React, {useState} from 'react';
import axios from 'axios';

const FeedbackRequestForm = ({user,activity}) => {

    // State variables
    const [loggedUser, logUser] = useState({
        _id: localStorage.getItem("_id"),
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
    });
    const [currActivity, changeActivity] = useState(localStorage.getItem("currentActivity"));



    const sendFeedbackRequest = async () =>{
        // Variable to hold necessary data to be sent
        const data ={
            sender: `${loggedUser.firstName} ${loggedUser.lastName}`,
            senderID:`${loggedUser._id}`,
            subject: document.getElementById('subject').value,
            location: currActivity,
            msg: document.getElementById('txtMsg').value,
            sourceCode: document.getElementById('txtCode').value
        }
        try{
            // Send the data to the database
            await axios.post('http://localhost:4000/feedbackRequest',data)
            .then((Response) => {
                console.log(Response.data)
                window.alert("Feedback request sent successfully!")
            })
            .catch((error) => {
                console.log(error)
            })
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <h4>Request Feedback</h4>
            <blockquote>Stuck? Ask your tutor for help! </blockquote>
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input disabled id="location" type="text" className="validate" />
                            <label htmlFor="location">{currActivity}</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input  id="subject" type="text" className="validate" />
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="txtMsg" className="materialize-textarea"></textarea>
                            <label htmlFor="txtMsg">Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="txtCode" className="materialize-textarea"></textarea>
                            <label htmlFor="txtCode">Paste your code here (if relevant to question)</label>
                        </div>
                    </div>
                    <button onClick={sendFeedbackRequest} className="btn waves-effect waves-light" name="action">Submit
                    </button>
                </div>
            </div>
        </>
        
    )

}

export default FeedbackRequestForm;