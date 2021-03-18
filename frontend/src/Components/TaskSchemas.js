
// Activity Type 1 schema
<div>

<div class="row">
    <div class="col s12 m6">
        <h4>Input</h4>
        <div id="codeBlanksUserCode" class="codeAreaStyles scrollBox">
            <p>var x = <em id="xValue">5;</em></p>
            <div class="row valign-wrapper">
                <div class="col s6">var y = <em id="yValue"></em></div>
                <div class="col s6">
                    <input type="number" id="txtY"></input>
                </div>
            </div>
            <p>for(var i=0; i&lt;5; i++){<br>console.log(y)<br>}</p>
        </div>
    </div>
    <div class="col s12 m6">
        <h4>Output</h4>
        <div id="codeBlanksOutput" class="codeAreaStyles">
            <p id="txtOutput"></p>
        </div>
    </div> 
</div>

// activity type 2 schema

<div class="row">
    <div class="col s12 m6">
        <h4>Input</h4>
        <textarea id="txtUserCode" class="codeAreaStyles" placeholder="Start Coding Here!"></textarea>
    </div>
    <div class="col s12 m6">
        <h4>Output</h4>
        <div class="codeAreaStyles" id="txtCodeEditorOutput"></div>
    </div>
</div>

// activity type 3 schema

<div class="row">
    <div class="col s12 m4">
        <button class="btn btnCorr answerButtonStyles">var x = 5;</button>
    </div>
    <div class="col s12 m4">
        <button class="btn btnWrong answerButtonStyles">var x = 5;;</button>
    </div>
    <div class="col s12 m4">
        <button class="btn btnWrong answerButtonStyles">variable x = 5;</button>
    </div>
</div>

</div>