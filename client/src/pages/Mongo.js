import React from 'react'

function Mongo() {
    var answers = ["D", "B", "A", "C","A"];
    var tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
     return score;
}
function returnScore() {
    var a=getScore()
    alert("Your score"+ a)
    
}
function viewkey(){
    alert("D,B,A,C,A")
}
  return (
    <div class="quiz">
      
    <center>
    <form>
        <ul >
            <div>
            <li>
                <h4>1). Which of the following is true about package.json?</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question0" value="A" /><span>A. package.json is present in the root directory of any Node application/module.</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="B" /><span>B. package.json is used to define the properties of a package</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="C" /><span>C. package.json can be used to update dependencies of a Node application</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="D" /><span>D. All of the above</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>

            <div>
            <li>
                <h4>2). Node uses _________ engine in core?</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question1" value="A" /><span>A. Microsoft Chakra</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="B" /><span>B. Chorme V8</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="C" /><span>C. Node En</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="D" /><span>D. Node En</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            
            <div>
            <li>
                <h4>3). Which of the following statement is valid to create an instance of the Node module fs in a Node based application?</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question2" value="A" /><span>A. var fs= require("fs");</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="B" /><span>B. var fs=import("fs");</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="C" /><span>C. var fs=new require("fs");</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="D" /><span>D. import fs</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            <div>
                <li>
                    <h4>4). What is the output of the below snippet?</h4>
                    <p><i>var buf=Buffer.alloc(10);console.log(buf.write("Hello"));</i></p>
                    <ul class="choices">
                        <li>
                            <label>
                                <input type="radio" name="question3" value="A" /><span>A. Hello</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="B" /><span>B. 10</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="C" /><span>C. 5</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="D" /><span>D. None of the above</span>
                            </label>
                        </li>
                    </ul>
                </li>
            </div>

            <div>
                <li>
                    <h4>5). The command to create a new project in react_________</h4>
                    <ul class="choices">
                        <li>
                            <label>
                                <input type="radio" name="question4" value="A" /><span>A. npx create-react-app my-app</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="B" /><span>B. npx create-app my-app</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="C" /><span>C. create-react-app my-app</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="D" /><span>D. create-react-app my-app</span>
                            </label>
                        </li>
                    </ul>
                </li>
            </div>
        </ul>
    </form>
    <button class="view-results" onClick={returnScore}>View Results</button>
   
    <button class="view-keys" onClick={viewkey}>View answers</button>
    
    </center>
    </div>
  )
}

export default Mongo
