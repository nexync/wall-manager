import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

import {BreakdownGrade} from '../layout/BreakdownGrade'
import {BreakdownSetter} from '../layout/BreakdownSetter'

import {Button} from 'antd'

export default function Data() {
	const {currUser, routes} = useContext(GlobalContext)
	const history = useHistory();
	if (currUser === null) {
		history.push('/dashboard')
	}
	return (
		<>
			<div align = 'center' className = 'data-label'>Route Data</div>
			<div align = 'center' className = 'route-count'>
				Total Routes on Wall: {routes.length}
			</div>
			
			<div className = 'bar-graph'>
				<BreakdownGrade/>
			</div>
			<div className = 'pie-chart'>
				<BreakdownSetter/>
			</div>
			<div align='center'>
				<Button ghost = {true} onClick = {() => history.push('/dashboard')}>Back</Button>
			</div>
		</>
	)
}
