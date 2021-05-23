import React, {useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {Route} from './Route'

import {List, Row, Col, Button} from 'antd'
import { EditRoute } from './EditRoute';
import { DeleteRoute } from './DeleteRoute';

import {CaretUpOutlined} from '@ant-design/icons';


export const RouteList = ({selectRoute, setter, disproutes}) => {
	const {routes, currUser, upvote} = useContext(GlobalContext)
	useEffect(() => {
		console.log('test')
	}, [])
	const upvoteWrapper = async (routeid) => {
		try {
			console.log(currUser.user)
			const up = checkUpvoted(routeid)
			const request = {
				_id: currUser.user.id,
				route: routeid,
				up: up
			}
			const upvoteres = await upvote(request);
			if (upvoteres) {
				console.log(currUser.user)
			}
		} catch (err) {
			
		}
	}

	function checkUpvoted(routeid) {
		console.log(currUser.user.upvoted)
		let uproutes = [];
		if (currUser.user.upvoted !== undefined) {
			uproutes = currUser.user.upvoted
		}
		return uproutes.includes(routeid)
	}

	//MAKE MATCHING HERE MORE EFFICIENT
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
					<Row>

						{/* { checkUpvoted(route._id) ? */ <Col span = {2} style = {{color: 'orange'}}>
							<div>
								<Button onClick = {() => upvoteWrapper(route._id)} style = {{border: 'none', backgroundColor: '#333333', color: 'orange'}} icon = {<CaretUpOutlined/>}/>
							</div>
							<div align = 'center' style = {{fontSize: 20}}>
								{route.rating}
							</div>
						</Col> /* :
						
						<Col span = {2} style = {{color: 'aliceblue'}}>
							<div>
								<Button onClick = {() => upvoteWrapper(route._id)} style = {{border: 'none', backgroundColor: '#333333', color: 'aliceblue'}} icon = {<CaretUpOutlined/>}/>
							</div>
							<div align = 'center' style = {{fontSize: 20}}>
								{route.rating}
							</div>
						</Col>} */}
						<Col span = {22}>
							<Route key = {route._id} route={route} selectRoute = {selectRoute} />
						</Col>
					</Row>
				}
			</List.Item> 
			)}
		/>
	)
}
