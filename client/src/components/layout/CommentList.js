import React, {useEffect, useContext} from 'react'
import {Comment} from './Comment'

import { GlobalContext } from '../../context/GlobalState';

import {List} from 'antd'
export const CommentList = ({admin, route_id, del, commentLoad}) => {
	const {comments, getComments} = useContext(GlobalContext)
	useEffect(() => {
		const asyncwrapper = async () => {
			await getComments(route_id)
			await commentLoad.setLoading(false)
		}
		asyncwrapper();
		// eslint-disable-next-line
	}, [route_id])
	
	return (
		commentLoad.loading ? 
			<div align = 'center' style = {{paddingBottom: 10}}> 
				Retrieving Comments 
			</div> : 
			comments.length > 0 ? 
				<List 
					grid = {{gutter: 10, column: 1}} 
					style = {{padding: 0, margin: 0}} 
					dataSource = {comments} 
					renderItem = {comment => (
						<List.Item style = {{marginBottom: 0}}>
							<Comment 
								key = {comment._id} 
								admin = {admin} 
								comment={comment} 
								deleteComment = {del} 
							/>
						</List.Item> 
					)}
				/> : 
				<div align = 'center' style = {{paddingBottom: 10}}> 
					Add the first comment!
				</div>	
	)
}
