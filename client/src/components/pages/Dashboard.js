import React, { useContext, useState } from 'react'
import {useHistory} from 'react-router-dom'

import {Header} from '../layout/Header';
import {RouteList} from '../layout/RouteList';
import {Logout} from '../layout/Logout'
import {Details} from '../layout/Details'
import { GlobalContext } from '../../context/GlobalState';

import comparator from '../comp'

import {Button, Row, Col} from 'antd'

export default function Dashboard() {
	const {currUser, routes} = useContext(GlobalContext)
	const [routeDetail, setRouteDetail] = useState(null);
	const history = useHistory();
	const [displayRoutes, setDisplayRoutes] = useState(routes.slice().sort((route1,route2)=>comparator(route1,route2,"dateu")))

	let name;
	if (currUser === null) {
		name = "User"	
		history.push('/')
	}
	else {
		name = currUser.user.displayname;
	}

	const sortfunc = (field) => {
		setDisplayRoutes(routes.slice().sort((route1,route2)=>comparator(route1,route2,field)));
	}

	const setDetail = (route) => {
		window.scroll({
			top:0,
			left:0,
			behavior: 'smooth'
		})
		setRouteDetail(route);
	}
	
	return (
		<div>
			<div style = {{display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
				<div style = {{width: 100, fontSize: 16, padding: 10}}>Hello {name}</div>
				<div align = 'right' style = {{width: 300, padding: 10}}>
						<Row>
							<Col span = {8}>
								{name === 'Setter' ? <Button ghost = 'true' onClick = {() => history.push('/data')}>Route Data</Button> : null}
							</Col>
							<Col span = {8}>
								{name !== 'Setter' && name !== 'Guest' ?  <Button ghost = 'true' onClick = {() => history.push('/profile')}>Profile</Button> : null}
							</Col>
							<Col span = {8}>
								<Logout/>
							</Col>
						</Row>
				</div>		
			</div>
			<Row className = 'container'>
				<Col offset = {2} span = {8}>
					<div className = 'header'> 
						<Header setter = {name === 'Setter'} sortfunc = {sortfunc}/>
					</div>
					<div >
						<RouteList selectRoute = {setDetail} setter = {name === 'Setter'} disproutes = {displayRoutes}/>
					</div>
				</Col>
				<Col offset = {4} span = {8}><Details guest = {name === 'Guest'} close = {setDetail} route = {routeDetail}/></Col>
			</Row>
		</div>
	)
}
