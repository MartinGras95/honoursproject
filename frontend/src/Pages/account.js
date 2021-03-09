import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Account() {

  let [loggedUser,updateLoggedUser] = useState({
    id:localStorage.getItem("_id"),
    firstName:localStorage.getItem("firstName"),
    lastName:localStorage.getItem("lastName"),
    email:localStorage.getItem("email"),
    programme:localStorage.getItem("programme")
  });

  let [loggedUserInbox,updateLoggedUserInbox] = useState([]);

  // Get messages from logged user inbox on DB
  const getUserInbox = async() => {
    try{
      await axios.get(`http://localhost:4000/user/mail/get/${loggedUser.id}`)
      .then((Response) => {
        updateLoggedUserInbox(Response.data)
      }).catch((error) => {
        console.log(error)
      })
    }catch(error){
      console.log(error)
    }
  }

  // Display the selected message fully in the inbox
  const displayMessage = (content) => {
    document.getElementById("msgBox").innerText = content;
  }

  // Delete message
  const deleteMessage = async(msg) => {
    try{
      await axios.post('http://localhost:4000/user/mail/delete',{
        id: loggedUser.id,
        fid:msg
      })
      .then(() => {
        console.log("message deleted")
        getUserInbox();
        document.getElementById("msgBox").innerText = "";
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
    getUserInbox();
  },[]);


  return (
    <div className="container">
    <div className="row">
      <div className="col s12">
        <h2>Account Panel</h2>
      </div>
    </div>
      <div className="row">
        <div className="col s12 m6">
          <h3>Personal Information</h3>
          <div className="section">
            <blockquote><h6>Name: <small>{loggedUser.firstName} {loggedUser.lastName}</small></h6></blockquote>
            <blockquote><h6>Programme: <small>{loggedUser.programme}</small></h6></blockquote>
            <blockquote><h6>Contact: <small>{loggedUser.email}</small></h6></blockquote>
          </div>
        </div>

      </div>
      <div className="divider" />
      <div className="row">
        <h3>Inbox</h3>
          <div className="col s12 m6">
            <div className="codeAreaStyles scrollBox">
              {loggedUserInbox.map((item) => (
                <div key={Math.floor(Math.random() * 1000).toString()} className="row inboxRow">
                  <div className="col s10">
                    <div onClick={() => {displayMessage(item.content)}}>From: {item.sender} on: {item.date}</div>
                  </div>
                  <div className="col s2">
                    <button className="waves-effect waves-light btn-small red" onClick={() => {deleteMessage(item.feedbackID)}}>x</button>
                  </div>
                  <div className="divider" />
                </div>
              ))}
            </div>
          </div>
        <div className="col s12 m6">
          <div id="msgBox" className="codeAreaStyles scrollBox"></div>
        </div>
      </div>
      
    </div>

  );
}
  
  export default Account;