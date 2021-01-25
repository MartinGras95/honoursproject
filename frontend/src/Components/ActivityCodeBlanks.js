import React from 'react';

function ActivityCodeBlanks() {

    const codeAreaStyles = {
        border: "1px black solid",
        padding: "1rem",
        minHeight: "200px",
        minWidth: "200px"
    }

    const containerStyles = {

    }

    return (
        <div className="container" style={containerStyles}>
            <div className="row">

                <div className="col s6">
                    <h3>Input</h3>
                    <div style={codeAreaStyles}>
                        <p>var x = 5;</p>
                        <p>var y = 5;</p>
                        <p>console.log(x + y);</p>
                    </div>
                </div>
                <div className="col s6">
                    <h3>Output</h3>
                    <div style={codeAreaStyles}>
                        <p>10</p>
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

export default ActivityCodeBlanks;