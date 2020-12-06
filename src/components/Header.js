import React from 'react'

import {Button} from 'antd';
import { Icon } from '@ant-design/compatible';

export const Header = () => {
   return (
      <span className = 'header'>
         <label className = 'header-text'>Route List</label>
         <Button className = 'header-button' type="primary" icon={<Icon type = "plus"/>}/>
      </span>
   )
}
