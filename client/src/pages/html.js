import React from 'react'
import './basic.css'
function html() {
    var answers = ["A", "C","A","B","D"];
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
        <ul class="quiz">
            <div>
            <li>
                <h4>1). The CSS selector_____________selects all 'div' elements plus the element with id="log".</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question0" value="A" /><span>A. div #log</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="B" /><span>B. div.#log</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="C" /><span>C. div.#log</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="D" /><span>D. div, #log</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>

            <div>
            <li>
                <h4>2). To draw text on a canvas, which property and method is used.</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question1" value="A" /><span>A. font</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="B" /><span>B. fillText(text,x,y)</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="C" /><span>C. stokeText(text,x,y)</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="D" /><span>D. None of the above</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            
            <div>
            <li>
                <h4>3). What is the correct jQuery code to set the background color of all p elements to red?</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question2" value="A" /><span>A. $("p").layout("background-color","red");</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="B" /><span>B. $("p").manipulate("background-color","red")</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="C" /><span>C. $("p").css("background-color","red");</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="D" /><span>D. $("p").style("background-color","red");</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            <div>
                <li>
                    <h4>4). Which formats are supported by Ajax to send and receive information?</h4>
                    <ul class="choices">
                        <li>
                            <label>
                                <input type="radio" name="question3" value="A" /><span>A. JSON, XML, HTML, SQL, MySQL, and Text Files</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="B" /><span>B. JSON, XML, HTML, and Text Files</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="C" /><span>C. JSON, XML, HTML, NoSQL, and OracleJAVA, JSON, XML, HTML, Oracle, and Text Files</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="D" /><span>D. JAVA, JSON, XML, HTML, Oracle, and Text Files</span>
                            </label>
                        </li>
                    </ul>
                </li>
            </div>

            <div>
                <li>
                    <h4>5). Which of the following is true ?</h4>
                    <p><i>1). AJAX is a platform-independent technology  2).AJAX can work with web application 3). AJAX can only work with ASP.NET  4). AJAX is a platform-dependent technology</i></p>
                    <ul class="choices">
                        <li>
                            <label>
                                <input type="radio" name="question4" value="A" /><span>A. 1, 2</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="B" /><span>B. 1,2,3</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="C" /><span>C. 1,3,4</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="D" /><span>D. None of the above</span>
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

export default html
