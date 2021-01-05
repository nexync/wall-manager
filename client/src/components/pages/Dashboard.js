import React from 'react'

import {Header} from '../layout/Header';
import {RouteList} from '../layout/RouteList';
import {BreakdownSetter} from '../layout/BreakdownSetter';
import { BreakdownGrade } from '../layout/BreakdownGrade';


export default function Dashboard() {
	return (
		<div>
			<div className = 'header'> 
         <Header/>
      </div>
      <div className = 'container'>
         <RouteList/>
      </div>
		</div>
	)
}
