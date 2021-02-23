import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {

    // State
    const [inbox, populateInbox] = useState([]);

    // Url to feedback requests
    const url = 'http://localhost:4000/feedbackRequest'

    // Fetch all feedback requests from students
    // Then update the state variable inbox 
    const refreshInbox = async() =>{
        try{
            await axios.get(url)
            .then((Response) => {
                populateInbox(Response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }catch (e){
            console.log(e)
        }

    };

    // Run after render of component
    useEffect(() => {
        refreshInbox();
    },[]);

    
    return(
        <div className="container">
            <div className="row">
                <div className="col m12">
                    <h4>Inbox</h4>
                    <div className="codeAreaStyles">
                        <div>
                            {inbox.map((item) => (
                                <div key={item._id}>
                                    <p>From: {item.sender} || Subject: {item.subject}</p>
                                </div>
                            ))}
                        </div>
                    
                    </div>
                    <button className="btn" onClick={refreshInbox}>Refresh</button>
                </div>
                <div className="col s12 m6">
                    <h4>Message</h4>
                    <div className="codeAreaStyles">
                    
                    </div>
                </div>
                <div className="col s12 m6">
                    <h4>Reply</h4>
                    <textarea className="codeAreaStyles">
                    
                    </textarea>
                    <button className="btn">Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;