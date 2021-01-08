import React, {useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {Route} from './Route'

import {List, Row, Col} from 'antd'
import { EditRoute } from './EditRoute';
import { DeleteRoute } from './DeleteRoute';

export const RouteList = ({setter}) => {
	const { routes } = useContext(GlobalContext);

  //  function comparator(route1,route2,field) {
	// 	if (route1[field]===undefined) return -1;
	// 	if (route2[field] === undefined) return 1;
	// 	if (field === "grade" || field === "wall") return route1[field] - route2[field];
	// 	else return route1[field].toLowerCase().localeCompare(route2[field].toLowerCase());
  //  }
	//let displayroutes = routes.slice().sort((route1,route2)=>comparator(route1,route2,"name"))

	return (
		<List grid = {{gutter: 10, column: 1}} style = {{padding: 0, margin: 0}} 
			dataSource = {routes} 
			renderItem={route => (
			<List.Item>
				{setter === true ? 
					<Row justify = 'center' align = 'middle'>
						<Col span = {22}> <Route key = {route._id} route={route} /> </Col>
						<Col offset = {1} span={1}><EditRoute route = {route} id={route._id} newState = {'edit'}/> <DeleteRoute route = {route} id={route._id} newState = {'delete'}/></Col>
					</Row> :
					<Route key = {route._id} route={route} />
				}
			</List.Item> 
			)}
		/>
	)
}
