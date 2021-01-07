import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'

import {Menu,Button,Dropdown} from 'antd';

export const ColorPicker = ({id}) => {
	const {routes,editInfo} = useContext(GlobalContext)
   const values = ['','Red','Green']
   const menu = (
      <Menu onClick = {(e) => editInfo(id,values[e.key.slice(-1)],"color")}>
         <Menu.Item>
            
         </Menu.Item>
         <Menu.Item>
            Red
         </Menu.Item>
         <Menu.Item>
            Green
         </Menu.Item>
      </Menu>
      );
   let [route] = routes.filter((r) => r._id === id);
   return (
      <Dropdown overlay={menu} placement="topCenter">
        <Button style = {{width: "75px"}} size = "small"> {route.color} </Button>
      </Dropdown>
   )
}
