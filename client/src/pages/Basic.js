import React from 'react'
import './basic.css'
function Basic() {
    var answers = ["A", "C", "A","B","D"];
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
    alert(answers)
}
  return (
    <div class="quiz">
       
    <center>
    <form>
        <ul >
            <div>
            <li>
                <h4>1).Which of the following code is used to make second flex-item is three times wider than the first?</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question0" value="A" /><span><pre>&lt;A. div:nth-of-type(2)&lt;</pre></span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="B" /><span><pre>&lt;B. div:nth-of-type(2)&lt;</pre></span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="C" /><span><pre>&lt;c. div:nth-of-type(2)&lt;</pre></span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="D" /><span><pre>&lt;c. div:nth-of-type(2)&lt;</pre></span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>

            <div>
            <li>
                <h4>2).When form data conatins sensitive or personal information then which method is more prefarable?</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question1" value="A" /><span>A. GET method</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="B" /><span>B. PUT method</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="C" /><span>C. POST method</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="D" /><span>D. HOST method</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            
            <div>
            <li>
                <h4>3).What will be the output of the following code snippet?a = [1, 2, 3, 4, 5];  <i>print(a.slice(2, 4));//</i></h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question2" value="A" /><span>A. 3,4</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="B" /><span>B. 2,3</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="C" /><span>C. 2,3,4</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="D" /><span>D. 2,4</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            <div>
                <li>
                    <h4>4).What will be the output of the following JavaScript code?

                        <i>const  Object.seal(object1); obj1.property1 =4; console.log(obj1.property1); delete obj1.property1;</i></h4>
                    <ul class="choices">
                        <li>
                            <label>
                                <input type="radio" name="question3" value="A" /><span>A. 2</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="B" /><span>B. Error</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="C" /><span>C. 4</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="D" /><span>D. Undefined</span>
                            </label>
                        </li>
                    </ul>
                </li>
            </div>

            <div>
                <li>
                    <h4>5).What is the prototype represents in the following JavaScript code snippet?

                        <i>function javascript() {};</i></h4>
                    <ul class="choices">
                        <li>
                            <label>
                                <input type="radio" name="question4" value="A" /><span>A. Not valid</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="B" /><span>B. Prototype of a function</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="C" /><span>C. Function javascript</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="D" /><span>D. A constructor</span>
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

export default Basic
