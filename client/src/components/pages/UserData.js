import React, {useContext, useState, useEffect} from 'react'
import { useHistory } from 'react-router';

import { GlobalContext } from '../../context/GlobalState'

import {List, Card, Modal, Row, Col, Button} from 'antd'

export default function UserData() {
	const {currUser, users, deleteUser} = useContext(GlobalContext)
	const [userToBeDeleted, setUserToBeDeleted] = useState(null)

	const [isModalVisible, setIsModalVisible] = useState(false);

	const history = useHistory();

	if (currUser === null) {
		history.push('/dashboard')
	}

	let userdata = []

	
	useEffect(() => {
		userdata = []
		for (const user in users) {
			if (users[user].displayname !== 'Admin' && users[user].displayname !== 'Setter' && users[user].displayname !== 'Guest') {
				userdata.push({
					displayname: users[user].displayname,
					id: user
				});
			}
		}
	}, [users])

  const showModal = (deleteUser) => {
		console.log(deleteUser)
		setUserToBeDeleted(deleteUser)
    setIsModalVisible(true);
  };

  const handleOk = async () => {
		console.log("Deleting User")
		const delRes = await deleteUser(userToBeDeleted, true);

		if (delRes) {
			setUserToBeDeleted(null);
    	setIsModalVisible(false);
		}
  };

  const handleCancel = () => {
		setUserToBeDeleted(null);
    setIsModalVisible(false);
  };

	return (
		<>
			<div align = 'center' className = 'data-label'>User Data</div>
			<div align = 'center' className = 'container'>
				<List
					grid={{ gutter: 16, column: 6 }}
					dataSource={userdata}
					renderItem={item => 
						<List.Item>
							<Card onClick = {() => showModal(item)}>{item.displayname}</Card>
						</List.Item>
					}
				/>
			</div>
			<Modal 
				visible={isModalVisible} 
				onOk={handleOk} 
				onCancel={handleCancel}
				closable = {false}
				width = {200}
				footer={
					<div align = 'center'>
						<Row>
							<Col span = {12}>
								<Button type="danger" onClick={handleOk}>
								Delete
							</Button>
							</Col>
							<Col span = {12}>
								<Button onClick={handleCancel}>
								Cancel
							</Button>
							</Col>
						</Row>
					</div>		
				}
			>
					<p align = 'center' style = {{marginBottom: 0, paddingBottom: 0}}>Confirm Deletion of {userToBeDeleted === null ? "User" : userToBeDeleted.displayname}</p>
      </Modal>
		</>
	
	)
}
