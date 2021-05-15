import React, {useContext} from 'react'

import {GlobalContext} from '../../context/GlobalState'

import {Row, Col} from 'antd'

export const Comment = ({comment}) => {
	const {currUser} = useContext(GlobalContext)

	const {users} = useContext(GlobalContext)
	return (
		<Row style = {currUser.user.displayname == users[comment.createdBy].displayname ? {padding: 15, backgroundColor: 'lightyellow'} : {padding: 15}}>
			<Col span = {4}>
				{users[comment.createdBy].displayname}
			</Col>
			<Col span = {18}>
				{comment.text}
			</Col>
			<Col span = {2}>
				Del
			</Col>
			
		</Row>
	)
}
