import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Image, Input, Button} from 'antd'

import logo from '../../assets/logo.png'

export default function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login = () => {
		console.log('logged in');
	}
	return (
		<div align = "center">
			<Image src = {logo} className = "image" onClick = {() => history.push('/')}/>
			<form onSubmit = {login}>
				<div className = "input-label">
					Log Into DukeWall
				</div>
				<div className = 'input-container'>
					<Input 
						type = 'email'
						placeholder = "Email Address"
						bordered = {true}
						size = 'large'
						style = {{backgroundColor: '#353839', color: '#ffffff'}}
						onChange = {(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className = 'input-container'>
					<Input 
						type = 'password'
						placeholder = "Password"
						bordered = {true}
						size = 'large'
						style = {{backgroundColor: '#353839', color: '#ffffff'}}
						onChange = {(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className = 'form-button'>
					<Button type = 'submit' ghost = {true} block = {true} size = 'large'>Login</Button>
				</div>
			</form>
		
		</div>
	)
}
