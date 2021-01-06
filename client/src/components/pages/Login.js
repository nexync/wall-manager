import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Image, Input, Button, Form} from 'antd'

import logo from '../../assets/logo.png'
import { GlobalContext } from '../../context/GlobalState';

export default function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const {login, error} = useContext(GlobalContext)

	const handleSubmit = async () => {
		try {
			const loginres = await login({email, password})
			if (loginres)
				history.push('/dashboard')
			else{
				console.log(error.message)
			}
		} catch (err) {
			console.log(err.message)
		}
			
	}
	return (
		<div align = "center">
			<Image src = {logo} className = "image" onClick = {() => history.push('/')}/>
			<Form onFinish = {handleSubmit}>
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
					<Button htmlType = 'submit' ghost = {true} block = {true} size = 'large'>Login</Button>
				</div>
			</Form>
		
		</div>
	)
}
