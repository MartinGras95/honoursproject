import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Account({user}) {

  let [loggedUser,updateLoggedUser] = useState({
    _id:"",
    firstName:"",
    lastName:"",
    email:"",
    programme:"",
    inbox:[]
  });


  // Display the selected message fully in the inbox
  const displayMessage = (content) => {
    document.getElementById("msgBox").innerText = content;
  }

  // Delete message
  const deleteMessage = async(msg) => {
    try{
      await axios.post('http://localhost:4000/user/mail/delete',{
        id: loggedUser._id,
        fid:msg
      })
      .then(() => {
        console.log("message deleted")
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
    if(user[0]){
      updateLoggedUser(user[0])
    }else{
      
    }
  },[]);

// temporary Styles
const inboxStyles = {
  border:"1px solid black",
  minHeight:"250px"
}


  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <h4>Personal Information</h4>
          <div className="section">
            <blockquote>Name:</blockquote>
            <span>{loggedUser.firstName} {loggedUser.lastName}</span>
            <blockquote>Programme:</blockquote>
            <span>{loggedUser.programme}</span>
            <blockquote>Contact:</blockquote>
            <span>{loggedUser.email}</span>
          </div>
        </div>
        <div className="col s6 m6">
          <h4>Programme Information</h4>
          <div className="section">
            <blockquote>JavaScript</blockquote>
            <span>Beginner</span>
            <blockquote>HTML:</blockquote>
            <span>Beginner</span>
          </div>
        </div>
      </div>
      <div className="row">
        <h4>Inbox</h4>
        <div className="row" style={inboxStyles}>
          <div className="col s12 m4" style={{borderRight:"1px solid black"}}>
            {loggedUser.inbox.map((item) => (
              <div key={Math.floor(Math.random() * 1000).toString()}>
                <div onClick={() => {displayMessage(item.content)}}>From: {item.sender} on: {item.date}
                  <button onClick={() => {deleteMessage(item.feedbackID)}}>x</button>
                </div>
              </div>
            ))}
            
          </div>
          <div className="col s12 m8">
            <div id="msgBox"></div>
          </div>
        </div>
      
      </div>
    </div>

  );
}
  
  export default Account;