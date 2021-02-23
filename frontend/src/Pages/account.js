import React from 'react';

function Account({user}) {

// Create empty user
let loggedUser ={
  firstName: "",
  lastName: "",
  programme: "",
  email: ""
}

// If user is logged in
if(user[0]){
  loggedUser = {
    firstName: user[0].firstName,
    lastName: user[0].lastName,
    programme: user[0].programme,
    email: user[0].email
  }
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
    </div>

  );
}
  
  export default Account;