import React, {useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {Route} from './Route'

import comparator from '../comp'

import {List, Row, Col, Button} from 'antd'
import { EditRoute } from './EditRoute';
import { DeleteRoute } from './DeleteRoute';

import {CaretUpOutlined} from '@ant-design/icons';


export const RouteList = ({selectRoute, guest, setter, disproutes, upvoteWrapper, checkUpvoted}) => {
	const {routes} = useContext(GlobalContext)
	const sortedroutes = routes.slice().sort((route1,route2)=>comparator(route1,route2,'date'))
	//MAKE MATCHING HERE MORE EFFICIENT
	return (
		<List grid = {{gutter: 10, column: 1}} style = {{padding: 0, margin: 0}} 
			dataSource = {setter === true ? sortedroutes : disproutes} 
			renderItem={route => (
				<List.Item>
					{setter === true ? 
						<Row justify = 'center' align = 'middle'>
							<Col span = {22}> <Route key = {route._id} route={route} /> </Col>
							<Col offset = {1} span={1}><EditRoute id={route._id} newState = {'edit'}/> <DeleteRoute id={route._id} newState = {'delete'}/></Col>
						</Row> :
						(guest === true ? 
							<Row>
								<Col span = {2} style = {{color: 'aliceblue'}}>
									<div align = 'center'>
										<Button style = {{border: 'none', backgroundColor: '#333333', color: 'aliceblue'}} icon = {<CaretUpOutlined/>}/>
									</div>
									<div align = 'center' style = {{fontSize: 20}}>
										{route.rating}
									</div>
								</Col>
								<Col span = {22}>
									<Route key = {route._id} route={route} selectRoute = {selectRoute} />
								</Col>
							</Row>
							:
							<Row>
								{checkUpvoted(route._id) ?  
								<Col span = {2} style = {{color: 'orange'}}>
									<div align = 'center'>
										<Button onClick = {() => upvoteWrapper(route._id)} style = {{border: 'none', backgroundColor: '#333333', color: 'orange'}} icon = {<CaretUpOutlined/>}/>
									</div>
									<div align = 'center' style = {{fontSize: 20}}>
										{route.rating}
									</div>
								</Col>  :
									
								<Col span = {2} style = {{color: 'aliceblue'}}>
									<div align = 'center'>
										<Button onClick = {() => upvoteWrapper(route._id)} style = {{border: 'none', backgroundColor: '#333333', color: 'aliceblue'}} icon = {<CaretUpOutlined/>}/>
									</div>
									<div align = 'center' style = {{fontSize: 20}}>
										{route.rating}
									</div>
								</Col>}
								<Col span = {22}>
									<Route key = {route._id} route={route} selectRoute = {selectRoute} />
								</Col>
							</Row>
						)
					}
					
				</List.Item> 
			)}
		/>
	)
}
