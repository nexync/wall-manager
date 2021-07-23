import React, {useContext} from 'react'

import {GlobalContext} from '../../context/GlobalState'

import {Row, Col} from 'antd'
import {Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const Comment = ({admin, comment, deleteComment}) => {
	const {currUser, users} = useContext(GlobalContext)

	let dispName;
	if (!users[comment.createdBy]) {
		dispName = '[Deleted]'
	}
	else {
		dispName = users[comment.createdBy].displayname;
	}

	return (
		<Row style = {currUser.user.displayname === dispName ? {padding: 15, backgroundColor: 'lightyellow'} : {padding: 15}}>
			<Col span = {4}>
				{comment.anon === true ? 'Anon.' : dispName}
			</Col>
			
			{currUser.user.displayname === dispName || admin ? //Either user who made comment or admin can delete comment
				<>
					<Col span = {17} offset = {1}>
						{comment.text}
					</Col>
					<Col span = {2}>
						<Button 
							onClick = {() => deleteComment(comment._id)} 
							ghost = 'true' 
							style = {{color: 'black'}} 
							icon={<CloseOutlined/>} 
							size = 'small' 
							type = "default"
						/>
					</Col>
				</> : 
				<Col span = {19} offset = {1}>
					{comment.text}
				</Col>
			}
		</Row>
	)
}
