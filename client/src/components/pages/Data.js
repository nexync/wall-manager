import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

import {BreakdownGrade} from '../layout/BreakdownGrade'
import {BreakdownSetter} from '../layout/BreakdownSetter'

export default function Data() {
	const {currUser} = useContext(GlobalContext)
	const history = useHistory();
	if (currUser === null) {
		history.push('/dashboard')
	}
	return (
		<>
			<div className = 'bar-graph'>
				<BreakdownGrade/>
			</div>
			<div className = 'pie-chart'>
				<BreakdownSetter/>
			</div>
		</>
	)
}
