import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import {Button, Form, Input} from 'antd'

export default function ProfilePage() {
	const {currUser, users} = useContext(GlobalContext);
  const [name, setName] = useState("");
  const history = useHistory();

  return (
		<div className = 'profile-container'>
      <Form>
        <Form.Item>
          <Input placeholder = 'Display Name' type = 'text' onchange = {(e) => setName(e.target.value)}/>
        </Form.Item>
      </Form>
      <p>Under construction sorry :(</p>

      <Button ghost = 'true' onClick = {() => history.push('/dashboard')}>Back</Button>
		</div>
	)
}

