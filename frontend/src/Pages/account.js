import React from 'react';

function account() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h4>Personal Information</h4>
            <div className="section">
              <blockquote>Name:</blockquote>
              <span>John Smith</span>
              <blockquote>Programme:</blockquote>
              <span>Computing</span>
              <blockquote>Contact:</blockquote>
              <span>johnsmith@gmail.com</span>
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
  
  export default account;