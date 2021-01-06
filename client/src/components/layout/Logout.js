import React, { useContext } from 'react'
import {Button} from 'antd'
import {useHistory} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

export const Logout = () => {
	const {logout} = useContext(GlobalContext)
	const history = useHistory();
	const handleClick = () => {
		logout();
		history.push('/')
	}
	return (
		<div>
			<Button onClick = {handleClick}>Logout</Button>
		</div>
	)
}
