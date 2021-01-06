import React, { useContext, useState } from 'react'
import { Input, Button, Image, Form } from 'antd'
import {useHistory} from 'react-router-dom'

import logo from '../../assets/logo.png'
import { GlobalContext } from '../../context/GlobalState'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	
	const history = useHistory();

	const {register} = useContext(GlobalContext)

	const handleSubmit = () => {
		const newuser = {
			email: email,
			displayname: name,
			password: password,
			password2: password2,
		}
		register(newuser);
		//history.push('/dashboard')
	}
	return (
		<div align = "center">
			<Image src = {logo} className = "image" onClick = {() => history.push('/')}/>
			<Form onFinish = {handleSubmit}>
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
						required = {true}
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
						required = {true}
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
						required = {true}
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
						required = {true}
					/>
				</div>
				<div className = 'form-button'>
					<Button htmlType = 'submit' ghost = {true} block = {true} size = 'large'>Register</Button>
				</div>
			</Form>
		
		</div>
	)
}
