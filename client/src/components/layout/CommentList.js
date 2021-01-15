import React, {useEffect, useContext} from 'react'
import {Comment} from './Comment'

import { GlobalContext } from '../../context/GlobalState';

import {List} from 'antd'
export const CommentList = ({route_id}) => {
	const {comments, getComments} = useContext(GlobalContext)
	useEffect(() => {
		const asyncwrapper = async () => {
			await getComments(route_id)
		}
		asyncwrapper();
		// eslint-disable-next-line
	}, [route_id])

	return (
		<List grid = {{gutter: 10, column: 1}} style = {{padding: 0, margin: 0}} 
			dataSource = {comments} 
			renderItem={comment => (
				<List.Item>
						<Comment key = {comment._id} comment={comment} />
				</List.Item> 
			)}
		/>
	)
}
