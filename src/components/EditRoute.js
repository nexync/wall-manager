import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import {Button} from 'antd';
import { Icon } from '@ant-design/compatible';

const EditRoute = () => {

   return (
      <Button type="primary" icon={<Icon type = "SettingOutlined"/>}/>
   )
}

export default EditRoute
