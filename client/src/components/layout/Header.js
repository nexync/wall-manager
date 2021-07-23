import React, {useState} from 'react'
import {AddRoute} from './AddRoute'

import { Row, Col, Button, Menu, Dropdown } from 'antd'
import {UpOutlined, DownOutlined} from '@ant-design/icons';

export const Header = ({setter, sortfunc, reverse}) => {
	const values = ['date','grade', 'name', 'wall', 'rating']
	const [up, setUp] = useState(true);

	const rev = () => {
		reverse()
		setUp(!up)
	}
	const menu = (
		<Menu onClick = {(e) => {
				if (!up)
					sortfunc(values[e.key.slice(-1)], true)
				else {
					sortfunc(values[e.key.slice(-1)], false)
				}
			}}>
				<Menu.Item>
					Date
				</Menu.Item>
				<Menu.Item>
					Grade
				</Menu.Item>
				<Menu.Item>
					Name
				</Menu.Item>
				<Menu.Item>
					Wall
				</Menu.Item>
				<Menu.Item>
					Upvotes
				</Menu.Item>
		</Menu>
		);

   return (
		setter === true ? 
			<Row>
				<Col offfset = {2} span = {21}><label className = 'text'>Route List</label></Col>
				<Col offset = {2} span = {1}><AddRoute/></Col>
			</Row> :
			<Row>
				<Col offset = {2} span = { window.innerWidth > 480 ? 15 : 14}><label className = 'text'>Route List</label></Col>
				<Col span = { window.innerWidth > 480 ? 4 : 6}>
					<Dropdown overlay={menu} placement="bottomCenter">
						<Button ghost = {true} block = {true}>Sort</Button>
					</Dropdown>
				</Col>
				<Col offset = {1} span = { window.innerWidth > 480 ? 2 : 2}>
					<Button ghost = {true} block = {true} icon = {up === false ? <DownOutlined/> : <UpOutlined/>} onClick = {rev}/>
				</Col>
			</Row>
			 
   )
}
