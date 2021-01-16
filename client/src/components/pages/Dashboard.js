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
			<div>
				Hello {name}
				<Logout/>
				{name === 'Setter' ? <Button onClick = {() => history.push('/data')}>Route Data</Button> : null}
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
