import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import {Button} from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const EditRoute = (id) => {
   const {editRoute} = useContext(GlobalContext);
   return (
      <Button onClick={() => editRoute(id)} type="primary" size = "small" icon={<SettingOutlined/>}/>
   )
}

