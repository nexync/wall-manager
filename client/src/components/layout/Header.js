import React from 'react'
import {AddRoute} from './AddRoute'

import { Row, Col, Button, Menu, Dropdown } from 'antd'

export const Header = ({setter, sortfunc}) => {
	const values = ['dateu','dated','grade', 'name', 'wall']
	const menu = (
		<Menu onClick = {(e) => {
				sortfunc(values[e.key.slice(-1)])
			}}>
				<Menu.Item>
					Date (Recent)
				</Menu.Item>
				<Menu.Item>
					Date (Latest)
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
		</Menu>
		);

   return (
		<>
			{setter === true ? 
				<Row>
					<Col span = {23}><label className = 'text'>Route List</label></Col>
					<Col span = {1}><AddRoute/></Col>
				</Row> :
				<Row>
				<Col span = { window.innerWidth > 480 ? 20 : 18}><label className = 'text'>Route List</label></Col>
				<Col span = { window.innerWidth > 480 ? 4 : 6}>
					<Dropdown overlay={menu} placement="bottomCenter">
						<Button ghost = {true} block = {true}>Sort</Button>
					</Dropdown>
				</Col>
			</Row>
			}  
		</>
   )
}
