import React, { useContext, useState } from 'react'
import {useHistory} from 'react-router-dom'

import {Header} from '../layout/Header';
import {RouteList} from '../layout/RouteList';
import {Logout} from '../layout/Logout'
import { GlobalContext } from '../../context/GlobalState';

import comparator from '../comp'

import {Button} from 'antd'

export default function Dashboard() {
	const {currUser, routes} = useContext(GlobalContext)
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
	
	return (
		<div>
			<div>
				Hello {name}
				<Logout/>
				{name === 'Setter' ? <Button onClick = {() => history.push('/data')}>Route Data</Button> : null}
			</div>
			<div className = 'header'> 
         <Header setter = {name === 'Setter'} sortfunc = {sortfunc}/>
      </div>
      <div className = 'container'>
         <RouteList setter = {name === 'Setter'} disproutes = {displayRoutes}/>
      </div>
		</div>
	)
}
