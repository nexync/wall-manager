import React, { useState } from 'react'
import { Input, Button, Image} from 'antd'
import {useHistory} from 'react-router-dom'

import logo from '../../assets/logo.png'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	
	const history = useHistory();

	const register = () => {
		console.log(register);
	}
	return (
		<div align = "center">
			<Image src = {logo} className = "image" onClick = {() => history.push('/')}/>
			<form onSubmit = {register}>
				<div className = "input-label">
					Register For DukeWall
				</div>
				<div className = 'input-container'>
					<Input 
						type = 'text'
						placeholder = "Display Name"
						bordered = {true}
						size = 'large'
						style = {{backgroundColor: '#353839', color: '#ffffff'}}
						onChange = {(e) => setName(e.target.value)}
					/>
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

				<div className = 'input-container'>
					<Input 
						type = 'password'
						placeholder = "Password Confirmation"
						bordered = {true}
						size = 'large'
						style = {{backgroundColor: '#353839', color: '#ffffff'}}
						onChange = {(e) => setPassword2(e.target.value)}
					/>
				</div>
				<div className = 'form-button'>
					<Button type = 'submit' ghost = {true} block = {true} size = 'large'>Login</Button>
				</div>
			</form>
		
		</div>
	)
}
