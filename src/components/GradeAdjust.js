import React from 'react'
import {Menu,Button,Dropdown} from 'antd';

export const GradeAdjust = () => {
   const menu = (
      <Menu>
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

   return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button onClick = {() => alert("hi")} style = {{width: "50px"}} size = "small"> a </Button>
      </Dropdown>
   )
}
