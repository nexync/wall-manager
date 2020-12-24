import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import {Button} from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const EditRoute = (route, id) => {
   const {editRoute} = useContext(GlobalContext);
   return (
      <Button onClick={() => editRoute(route, id)} type="primary" size = "small" icon={<SettingOutlined/>}/>
   )
}

