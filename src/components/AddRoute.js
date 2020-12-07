import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import {Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const AddRoute = () => {
   const {addRoute} = useContext(GlobalContext);

   const handleClick = () => {
      const newRoute = {
         id: Math.floor(Math.random() * 100000000),
         date: new Date().getMonth() + '/' + new Date().getDate(),
      }
      addRoute(newRoute);
   }
   return (
      <Button onClick={handleClick} className = 'header-button' type="primary" icon={<PlusOutlined/>}/>
   )
}
