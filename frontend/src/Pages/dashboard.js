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
        }catch (error){
            console.log(error)
        }

    };

    // Reply
    const sendToReply = async(item) => {
        try{
            // Populate the message box with the selected feedback request
            document.getElementById("msgFrom").innerText = `From: ${item.sender}` ;
            document.getElementById("msgSubject").innerText = `Subject: ${item.subject}` ;
            document.getElementById("msgLocation").innerText = `Location: ${item.location}` ;
            document.getElementById("msgMsg").innerText = `Message: ${item.msg}` ;
        }catch (error){
            console.log(error)
        }
    }



    // DELETE TESTS
    // // Delete feedback request from inbox
    // function deleteFeedbackRequest (id){
        
    //     try{
    //         console.log(id)
    //     }catch (error){
    //         console.log(error)
    //     }
    // }

    // axios.post(`http://localhost:4000/feedbackRequest/delete/${id}`)
    // .then(() => {
    //     refreshInbox();
    // })
    // .catch((error) => {
    //     console.log(error)
    // });

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
                                    <div>
                                        <div onClick={() => {sendToReply(item)}}>From: {item.sender} ***** Subject: {item.subject} *****
                                            <button>delete</button> 
                                        </div> 
                                    </div>
                                </div>
                            ))}
                        </div>
                    
                    </div>
                    <button className="btn" onClick={refreshInbox}>Refresh</button>
                </div>
                <div className="col s12 m6">
                    <h4>Message</h4>
                    <div id="msgBox" className="codeAreaStyles scrollBox">
                        <p id="msgFrom"></p>
                        <p id="msgSubject"></p>
                        <p id="msgLocation"></p>
                        <p id="msgMsg"></p>
                    
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