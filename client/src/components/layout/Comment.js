import React, {useContext} from 'react'

import {GlobalContext} from '../../context/GlobalState'

import {Row, Col} from 'antd'
import {Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const Comment = ({comment}) => {
	const {currUser} = useContext(GlobalContext)

	const {users} = useContext(GlobalContext)
	return (
		<Row style = {currUser.user.displayname === users[comment.createdBy].displayname ? {padding: 15, backgroundColor: 'lightyellow'} : {padding: 15}}>
			<Col span = {4}>
				{users[comment.createdBy].displayname}
			</Col>
			
			{currUser.user.displayname === users[comment.createdBy].displayname ?
				<>
					<Col span = {18}>
						{comment.text}
					</Col>
					<Col span = {2}>
						<Button ghost = 'true' style = {{color: 'black'}} icon={<CloseOutlined/>} size = 'small' type = "default" />
					</Col>
				</> : 
				<Col span = {20}>
					{comment.text}
				</Col>
			}
			
		</Row>
	)
}
