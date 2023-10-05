import React from 'react';
import {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import './chat.css'
function App() {
	let navigate=useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault(event);
    const response = await fetch('http://127.0.0.1:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
			
		})

    const data = await response.json();
	
	if (data.status ==='ok') {
		
		navigate('../Login')
}
else{
	alert("Already registered with this emailId")
}};

function Change(){
	navigate('../Login')
}
return (
    <div className='pp'>
		<div className='wrapper'>
		<div className='context'>
		<div className='header'>
      <h1>Register</h1>

      <form onSubmit={registerUser} >
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register"/>
				<input type="submit" value="login" onClick={Change}/>
			</form>
    </div>
	</div>
	</div>
	</div>
  );
  }


export default App;
