import React, {useState} from 'react';
import axios from 'axios';

const FeedbackRequestForm = ({user,activity}) => {
    // Function to create a new feedback request to the DB
    // 

    // State
    const [loggedUser, logUser] = useState({user});
    const [currActivity, changeActivity] = useState(activity);



    const sendFeedbackRequest = async () =>{
        const data ={
            sender: `${loggedUser.user.firstName} ${loggedUser.user.lastName}`,
            senderID:`${loggedUser.user._id}`,
            subject: document.getElementById('subject').value,
            location: currActivity,
            msg: document.getElementById('txtMsg').value,
            sourceCode: document.getElementById('txtCode').value
        }
        try{
            await axios.post('http://localhost:4000/feedbackRequest',data)
            .then((Response) => {
                console.log(Response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="container">
            <h4>Request Feedback</h4>
            <blockquote>Ask your tutor for help! </blockquote>
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
        </div>
        
    )

}

export default FeedbackRequestForm;