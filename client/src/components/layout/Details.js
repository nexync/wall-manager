import React, { useContext, useState } from 'react'

import {CommentList} from './CommentList'

import {Button, Input, Row, Col } from 'antd'
import { CloseOutlined, SendOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { GlobalContext } from '../../context/GlobalState';

export const Details = ({guest, admin, close, route, commentLoad}) => {
	const {currUser, getComments, addComment, deleteComment} = useContext(GlobalContext)
	const [comment, setComment] = useState("");
	const [anon, setAnon] = useState(false);
	
	const postComment = async (e) => {
		e.preventDefault()
		if (comment !== "") {
			const newComment = {
				createdBy: currUser.user.id,
				route: route._id,
				text: comment,
				anon: anon
			}
			await addComment(newComment)
			await getComments(route._id)
			setComment("")
		}
	}

	const delComment = async (id) => {
		await deleteComment(id)
		await getComments(route._id)
	}

	if (route === null) {
		return (<></>)
	}
	
	return (
		<div className = 'route-details'>
			<div align = 'right'>
				<Button 
					onClick = {() => close(null)} 
					size = "small" 
					ghost = 'true' 
					style = {{color: '#333333'}} 
					icon = {<CloseOutlined/>}
				/>
			</div>
			<div className = 'title'>
				<div>
					{route.name}
				</div>
				<div>
					{`5.${route.grade}${route.gradea}`}
				</div>
				
			</div>
			<div className = 'comment-label'>
				<Row>
					<Col span = {22}>
						Comments
					</Col>
					<Col span = {2}>
						<div align = 'right'>
							<Button
								size = 'small'
								onClick = {() => { setAnon(!anon);}}
								bordered = 'false'
								icon={<EyeInvisibleOutlined/>}
								style = {anon === true ? {color: 'aliceblue', backgroundColor: 'lightcoral'} : {color: 'aliceblue', backgroundColor: "#1890ff"}}
							/>
						</div>
					</Col>
				</Row>
			</div>
			<div>
				<CommentList 
					admin = {admin}
					route_id = {route._id} 
					del = {delComment} 
					commentLoad = {commentLoad}
				/>
			</div>
			{admin !== true && guest !== true ? 
				<div>
					<form onSubmit = {(e) => postComment(e)}>
						<Input 
							type = 'text'
							placeholder = {'Enter Comment Here'}
							onChange = {(e) => setComment(e.target.value)}
							bordered = {false}
							value = {comment}
						/>
						<Button
							htmlType = 'submit'
							bordered = 'false'
							icon={<SendOutlined/>}
						/>
					</form>
				</div>: 
				<div align = 'center' style = {{padding: 10}}>
					Log in to leave a comment.
				</div>
			}
		</div>
	)
}
