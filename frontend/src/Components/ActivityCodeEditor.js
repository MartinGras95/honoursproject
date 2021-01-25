import React from 'react';

function ActivityCodeEditor() {

    const codeAreaStyles = {
        border: "1px black solid",
        padding: "1rem",
        minHeight: "200px",
        minWidth: "200px"
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col s6">
                    <h3>Input</h3>
                    <textarea style={codeAreaStyles} placeholder="Start Coding Here!"></textarea>
                </div>
                <div className="col s6">
                    <h3>Output</h3>
                    <div style={codeAreaStyles}>
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button className="btn">Run</button>
                </div>
            </div>
        </div>
    )
}

export default ActivityCodeEditor;