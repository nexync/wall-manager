import React, {useContext} from 'react'

import {GlobalContext} from '../../context/GlobalState'

import {Row, Col} from 'antd'

export const Comment = ({comment}) => {
	const {users} = useContext(GlobalContext)
	return (
		<Row style = {{padding: 10}}>
			<Col span = {4}>
				{users[comment.createdBy].displayname}
			</Col>
			<Col span = {20}>
				{comment.text}
			</Col>
			
		</Row>
	)
}
