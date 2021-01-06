import React, { useContext } from 'react'

import {Header} from '../layout/Header';
import {Logout} from '../layout/Logout'
import {RouteList} from '../layout/RouteList';
import {BreakdownSetter} from '../layout/BreakdownSetter';
import { BreakdownGrade } from '../layout/BreakdownGrade';
import { GlobalContext } from '../../context/GlobalState';


export default function Dashboard() {
	const {currUser} = useContext(GlobalContext)

	console.log(currUser)
	return (
		<div>
			<div className = 'header'> 
         <Header/>
      </div>
      <div className = 'container'>
         <RouteList/>
      </div>
			<Logout/>
		</div>
	)
}
