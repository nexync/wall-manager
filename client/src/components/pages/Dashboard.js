import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'

import {Header} from '../layout/Header';
import {RouteList} from '../layout/RouteList';
import {Logout} from '../layout/Logout'
import { GlobalContext } from '../../context/GlobalState';

import {Button} from 'antd'

export default function Dashboard() {
	const {currUser} = useContext(GlobalContext)
	const history = useHistory();
	let name;
	if (currUser === null) {
		name = "User"	
		history.push('/')
	}
	else {
		name = currUser.user.displayname;
	}
	return (
		<div>
			<div>
				Hello {name}
				<Logout/>
				{name === 'Setter' ? <Button onClick = {() => history.push('/data')}>Route Data</Button> : null}
			</div>
			<div className = 'header'> 
         <Header setter = {name === 'Setter'}/>
      </div>
      <div className = 'container'>
         <RouteList setter = {name === 'Setter'}/>
      </div>
		</div>
	)
}
