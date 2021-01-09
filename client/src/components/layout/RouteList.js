import React, {useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {Route} from './Route'

import {List, Row, Col} from 'antd'
import { EditRoute } from './EditRoute';
import { DeleteRoute } from './DeleteRoute';

export const RouteList = ({setter, disproutes}) => {
	const {routes} = useContext(GlobalContext)
	return (
		<List grid = {{gutter: 10, column: 1}} style = {{padding: 0, margin: 0}} 
			dataSource = {setter === true ? routes : disproutes} 
			renderItem={route => (
			<List.Item>
				{setter === true ? 
					<Row justify = 'center' align = 'middle'>
						<Col span = {22}> <Route key = {route._id} route={route} /> </Col>
						<Col offset = {1} span={1}><EditRoute id={route._id} newState = {'edit'}/> <DeleteRoute id={route._id} newState = {'delete'}/></Col>
					</Row> :
					<Route key = {route._id} route={route}/>
				}
			</List.Item> 
			)}
		/>
	)
}
