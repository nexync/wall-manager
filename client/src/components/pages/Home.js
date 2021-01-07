import React, { useContext, useEffect } from 'react'
import {Button, Image} from 'antd'
import {useHistory} from 'react-router-dom'
import logo from '../../assets/logo.png'
import { GlobalContext } from '../../context/GlobalState'

export default function Home() {
	const {check} = useContext(GlobalContext)
	const history = useHistory();

	useEffect(() => {
		const asyncwrapper = async () => {
			const logincheck = await check()
			if (logincheck)	history.push('/dashboard');
		}
		asyncwrapper();
		// eslint-disable-next-line
	}, [])

	return (
		<div align = 'center'>
			<Image src = {logo} className = "image" onClick = {() => history.push('/')}/>
			<div className = 'button-container'>
				<Button block = {true} ghost = {true} shape = {"round"} size = {"large"} onClick = {() => {history.push('/register')}}>Register</Button>
			</div>
			<div className = 'button-container'>
				<Button block = {true} ghost = {true} shape = {"round"} size = {"large"} onClick = {() => {history.push('/login')}}>Login</Button>
			</div>
			<div className = 'button-container'>
				<Button block = {true} ghost = {true} shape = {"round"} size = {"large"} onClick = {() => {history.push('/dashboard')}}>Guest</Button>
			</div>
			<p>Please don't sue me Duke</p>
		</div>
	)
}
