import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

import {Menu,Button,Dropdown} from 'antd';

export const GradeAdjust = ({id}) => {
   const {routes,editInfo} = useContext(GlobalContext)
   const values = ['+','','-']
   const menu = (
      <Menu onClick = {(e) => editInfo(id,values[e.key.slice(-1)],"gradea")}>
         <Menu.Item>
            +
         </Menu.Item>
         <Menu.Item>
            
         </Menu.Item>
         <Menu.Item>
            -
         </Menu.Item>
      </Menu>
      );
   let [route] = routes.filter((r) => r.id === id);
   return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button style = {{width: "25px"}} size = "small"> {route.gradea} </Button>
      </Dropdown>
   )
}
