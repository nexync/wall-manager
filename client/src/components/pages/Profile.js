import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import {Button, Form, Input} from 'antd'

export default function ProfilePage() {
	const {currUser, deleteUser} = useContext(GlobalContext);
  const [name, setName] = useState("");
  const history = useHistory();

	const delUserWrapper = async () => {
		console.log("Deleting User")
		const delRes = await deleteUser(currUser, false);
		console.log(delRes)
		if (delRes) {
			history.push('/');
		}
	}
  return (
		<div className = 'profile-container'>
			{name}
      <Form>
        <Form.Item>
          <Input placeholder = 'Display Name' type = 'text' onChange = {(e) => setName(e.target.value)}/>
        </Form.Item>
      </Form>
			<Button ghost = 'true' onClick = {delUserWrapper}> Delete Profile</Button>
      <p>Under construction sorry :(</p>
      <Button ghost = 'true' onClick = {() => history.push('/dashboard')}>Back</Button>
		</div>
	)
}

