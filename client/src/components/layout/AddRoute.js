import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';

import {Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const AddRoute = () => {
   const {addRoute} = useContext(GlobalContext);

   const handleClick = () => {
      const newRoute = {
         id: Math.floor(Math.random() * 100000000),
         date: new Date().getMonth()+1 + '/' + new Date().getDate(),
         gradea: "",
      }
      addRoute(newRoute);
   }
   return (
      <Button onClick={handleClick} className = 'add' type="primary" icon={<PlusOutlined/>}/>
   )
}
