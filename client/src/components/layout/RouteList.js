import React, {useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {Route} from './Route'

import {List, Row, Col} from 'antd'
import { EditRoute } from './EditRoute';
import { DeleteRoute } from './DeleteRoute';

export const RouteList = () => {
	const {routes, getRoutes } = useContext(GlobalContext);

  //  function comparator(route1,route2,field) {
	// 	if (route1[field]===undefined) return -1;
	// 	if (route2[field] === undefined) return 1;
	// 	if (field === "grade" || field === "wall") return route1[field] - route2[field];
	// 	else return route1[field].toLowerCase().localeCompare(route2[field].toLowerCase());
  //  }
	//let displayroutes = routes.slice().sort((route1,route2)=>comparator(route1,route2,"name"))
	useEffect(() => {
		getRoutes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<List grid = {{gutter: 10, column: 1}} 
			dataSource = {routes} 
			renderItem={route => (
				<List.Item>
					<Row>
						<Col span = {20}> <Route key = {route.id} route={route} /> </Col>
            <Col span={2}><EditRoute route = {route} id={route._id}/></Col>
            <Col span = {2}><DeleteRoute id={route._id}/></Col>
					</Row>
				</List.Item>
			)}
		/>
	)
}
