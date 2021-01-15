import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'

import {Menu,Button,Dropdown} from 'antd';

export const ColorPicker = ({id}) => {
	const {routes,editInfo} = useContext(GlobalContext)
   const values = ['','Red','Orange','Yellow','Green','Lime Green','Pink','Purple','Blue','Black','Grey','Tan']
   const menu = (
      <Menu onClick = {(e) => editInfo(id,values[e.key.split('_')[1]],"color")}>
         <Menu.Item>
            
         </Menu.Item>
         <Menu.Item>
            Red
         </Menu.Item>
				 <Menu.Item>
            Orange
         </Menu.Item>
				 <Menu.Item>
            Yellow
         </Menu.Item>
         <Menu.Item>
            Green
         </Menu.Item>
				 <Menu.Item>
            Lime Green
         </Menu.Item>
				 <Menu.Item>
            Pink
         </Menu.Item>
				 <Menu.Item>
            Purple
         </Menu.Item>
				 <Menu.Item>
            Blue
         </Menu.Item>
				 <Menu.Item>
            Black
         </Menu.Item>
				 <Menu.Item>
            Grey
         </Menu.Item>
				 <Menu.Item>
            Tan
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
