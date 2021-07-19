import React, {useContext} from 'react'

import {GlobalContext} from '../../context/GlobalState'

import {Row, Col} from 'antd'
import {Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const Comment = ({comment, deleteComment}) => {
	const {currUser, users} = useContext(GlobalContext)
	return (
		<Row style = {currUser.user.displayname === users[comment.createdBy].displayname ? {padding: 15, backgroundColor: 'lightyellow'} : {padding: 15}}>
			<Col span = {4}>
				{comment.anon === true ? 'Anon.' : users[comment.createdBy].displayname}
			</Col>
			
			{currUser.user.displayname === users[comment.createdBy].displayname ?
				<>
					<Col span = {18}>
						{comment.text}
					</Col>
					<Col span = {2}>
						<Button onClick = {() => deleteComment(comment._id)} ghost = 'true' style = {{color: 'black'}} icon={<CloseOutlined/>} size = 'small' type = "default" />
					</Col>
				</> : 
				<Col span = {20}>
					{comment.text}
				</Col>
			}
			
		</Row>
	)
}
