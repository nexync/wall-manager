import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

import {BreakdownGrade} from '../layout/BreakdownGrade'
import {BreakdownSetter} from '../layout/BreakdownSetter'

import {Row, Col, Button} from 'antd'

export default function Data() {
	const {currUser, routes} = useContext(GlobalContext)
	const [setter, setSetter] = useState("all");
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
			<div align = 'center' style = {{marginTop: 0, marginBottom: 30}}>
				<Button ghost = 'true' onClick = {() => setSetter("all")}>
					Show All Routes
				</Button>
			</div>
			
			<Row style = {{paddingRight: 100, paddingLeft: 100}}>
				<Col span = {12}>
					<div className = 'chart-label'>
						Breakdown by Grade
					</div>
					<div className = 'bar-graph'>
						<BreakdownGrade setter = {setter}/>
					</div>
				</Col>
				<Col span = {12}>
				<div className = 'chart-label'>
						Breakdown by Setter
					</div>
					<div className = 'pie-chart'>
						<BreakdownSetter setSetter = {setSetter}/>
					</div>
				</Col>
			</Row>
			

			<div align='center'>
				<Button ghost = {true} onClick = {() => history.push('/dashboard')}>Back</Button>
			</div>
		</>
	)
}
