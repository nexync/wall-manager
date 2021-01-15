import React, {useEffect, useContext} from 'react'

import {Comment} from './Comment'
import { GlobalContext } from '../../context/GlobalState';

import {Button, List} from 'antd'
import { CloseOutlined } from '@ant-design/icons';

export const Details = ({close, route}) => {
	const {comments} = useContext(GlobalContext)

	if (route === null) {
		return (<></>)
	}

	
	return (
		<div className = 'route-details'>
			<div align = 'right'><Button onClick = {() => close(null)} size = "small" ghost = 'true' style = {{color: '#333333'}} icon = {<CloseOutlined/>}/></div>
			<div className = 'title'>
				<div>
					{route.name}
				</div>
				<div>
					{`5.${route.grade}${route.gradea}`}
				</div>
				
			</div>
			<div className = 'comment-label'>
				Comments
			</div>
			<List grid = {{gutter: 10, column: 1}} style = {{padding: 0, margin: 0}} 
			dataSource = {comments} 
			renderItem={comment => (
			<List.Item>
					<Comment key = {comment._id} route={comment} />
			</List.Item> 
			)}
		/>
		</div>
	)
}
