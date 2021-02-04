import React from 'react';

function ActivityCodeEditor() {

    const codeAreaStyles = {
        border: "1px black solid",
        padding: "1rem",
        minHeight: "200px",
        minWidth: "200px"
    }

    // Process user's javascript
    function processCode(){
        // clear the output area
        document.getElementById("txtCodeEditorOutput").innerText= " ";

        // Get code from user's input area
        var userCode = document.getElementById("txtUserCode").value;

        // Change console to log into the output box
        // create a new text node for every console log
        window.console = {
            log: function(str){
                var node = document.createElement("div");
                node.appendChild(document.createTextNode(str));
                document.getElementById("txtCodeEditorOutput").appendChild(node);
            }
        }

        // Log the executed code 
        console.log(eval(userCode));
        
    }

    return(
        <div className="container">
            <h4>Activity Type 2</h4>
            <blockquote>Write a program that will log your name to the console!</blockquote>

            <div className="row">
                <div className="col s12 m6">
                    <h3>Input</h3>
                    <textarea id="txtUserCode" style={codeAreaStyles} placeholder="Start Coding Here!"></textarea>
                </div>
                <div className="col s12 m6">
                    <h3>Output</h3>
                    <div style={codeAreaStyles} id="txtCodeEditorOutput">
                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button className="btn" onClick={processCode}>Run</button>
                </div>
            </div>
        </div>
    )
}

export default ActivityCodeEditor;