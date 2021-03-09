import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = (props) => {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();


    // State variables
    // inbox is the feedback requests from the db
    const [inbox, populateInbox] = useState([]);
    // The user whose request is currently being replied to
    const [clickedUser, updateClickedUser] = useState("");

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
            // update clicked person
            updateClickedUser(item.senderID);

            // Populate the message box with the selected feedback request
            document.getElementById("msgFrom").innerText = `From: ${item.sender}` ;
            document.getElementById("msgSubject").innerText = `Subject: ${item.subject}` ;
            document.getElementById("msgLocation").innerText = `Location: ${item.location}` ;
            document.getElementById("msgMsg").innerText = `Message: ${item.msg}` ;
            document.getElementById("msgCode").innerText = `Source Code: ${item.sourceCode}` ;
        }catch (error){
            console.log(error)
        }
    }


    // Delete requests
    const deleteRequest = async(id) => {
        try{
            await axios.delete(`http://localhost:4000/feedbackRequest/delete/${id}`)
            .then(()=> {
                refreshInbox();
                // Clear the message box
                document.getElementById("msgFrom").innerText = `` ;
                document.getElementById("msgSubject").innerText = `` ;
                document.getElementById("msgLocation").innerText = `` ;
                document.getElementById("msgMsg").innerText = `` ;
                document.getElementById("msgCode").innerText = `` ;
            })
            .catch((error) => {
                console.log(error)
            })
        }catch(error){
            console.log(error)
        }
    }

    // Send feedback
    const sendFeedback = async() => {
        // post the reply to the user whose feedback request was clicked on(clickedUser)
        try{
            await axios.post(`http://localhost:4000/user/mail`,{
                id:clickedUser, 
                message: {
                    feedbackID: Math.floor(Math.random() * 1000),
                    sender: "Staff Member",
                    content: document.getElementById("feedbackResponse").value,
                    date: `${cDay}/${cMonth}/${cYear}`

                }
            })
            .then(() => {
                console.log("message sent")
                window.alert("Feedback sent successfully")
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
        refreshInbox();
    },[]);

    
    return(
        <div className="container">
            <div className="row">
                <div className="col m12">
                    <h4>Feedback Requests</h4>
                    <div className="codeAreaStyles scrollBox">
                        <div>
                            {inbox.map((item) => (
                                <div key={item._id} className="row inboxRow">
                                    <div className="col s10">
                                        <div onClick={() => {sendToReply(item)}}>From: {item.sender} ***** Subject: {item.subject} *****</div>  
                                    </div>
                                    <div className="col s2">
                                        <button className="waves-effect waves-light btn-small red" onClick={() => {deleteRequest(item._id)}}>x</button> 
                                    </div>
                                    <div className="divider"></div>
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
                        <p id="msgCode"></p>
                    
                    </div>
                </div>
                <div className="col s12 m6">
                    <h4>Reply</h4>
                    <textarea id="feedbackResponse" className="codeAreaStyles">
                    
                    </textarea>
                    <button className="btn" onClick={sendFeedback}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;