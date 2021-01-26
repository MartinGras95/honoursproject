import React from 'react';

function ActivityQuestions() {

    const answerButtonStyles = {
        minWidth: "200px"
    }

    return(
        <div className="container">
           <h4>Activity Type 3</h4>
           <blockquote>Which of these is valid JavaScript code?</blockquote>
           <div className="row">
                <div className="col s12 m4">
                    <button className="btn" style={answerButtonStyles}>var x = 5;</button>
                </div>
                <div className="col s12 m4">
                    <button className="btn" style={answerButtonStyles}>var x = 5;;</button>
                </div>
                <div className="col s12 m4">
                    <button className="btn" style={answerButtonStyles}>variable x = 5;</button>
                </div>
           </div>
        </div>
    )
}

export default ActivityQuestions;