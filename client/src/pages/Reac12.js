import React from 'react'
import './basic.css'

const Reac12 = () => {
    
    var answers = ["B", "B", "C","B","D"];
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
    <div className="quiz">
      
    <center>
    <form>
        <ul >
            <div>
            <li>
                <h4>1). How do you write an inline style specifying the font-size:12px and color:red; in JSX</h4>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question0" value="A" /><span>A.</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="B" /><span>B.</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="C" /><span>C. </span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question0" value="D" /><span>D.</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>

            <div>
            <li>
                <h4>2). To call an event in node.js which of the following options is used?</h4>
                <ul className="choices">
                    <li>
                        <label>
                            <input type="radio" name="question1" value="A" /><span>A. eventEmitter.on</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="B" /><span>B. eventEmitter.emit</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="C" /><span>C. eventEmitter</span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question1" value="D" /><span>D. eventEmitter.off</span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            
            <div>
            <li>
                <h4>3).  What does this React element look like given the following function?</h4>
                <p><i>React.createElement('h1', null, "What's happening?");</i></p>
                <ul class="choices">
                    <li>
                        <label>
                            <input type="radio" name="question2" value="A" /><span>A. <pre>&lt;What's happening?&lt;</pre></span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="B" /><span>B. <pre>&lt;h1 id="component" What's happening?&gt;</pre></span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="C" /><span>C. <pre>&lt;h1 id="component" What's happening?&gt;</pre></span>
                        </label>
                    </li>
    
                    <li>
                        <label>
                            <input type="radio" name="question2" value="D" /><span>D. <pre>&lt;h1 id="element" What's happening?&gt;</pre></span>
                        </label>
                    </li>
                </ul>
            </li>
            </div>
            <div>
                <li>
                    <h4>4). Everything in React is a ____________</h4>
                    <ul className="choices">
                        <li>
                            <label>
                                <input type="radio" name="question3" value="A" /><span>A. Module</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="B" /><span>B. Component</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="C" /><span>C. Package</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question3" value="D" /><span>D. Document</span>
                            </label>
                        </li>
                    </ul>
                </li>
            </div>

            <div>
                <li>
                    <h4>5). props in Reactjs can________</h4>
                    <ul className="choices">
                        <li>
                            <label>
                                <input type="radio" name="question4" value="A" /><span>A. Be changed inside the component</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="B" /><span>B. Be changed in side other component</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="C" /><span>C. Passed to another component</span>
                            </label>
                        </li>
        
                        <li>
                            <label>
                                <input type="radio" name="question4" value="D" /><span>D. Not be changed in the component</span>
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

export default Reac12
