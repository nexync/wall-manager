import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';

import {Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const DeleteRoute = (id) => {
   const {deleteRoute} = useContext(GlobalContext);
   return (
      <Button onClick={() => deleteRoute(id)}  type = "primary" icon={<CloseOutlined/>}/>
   )
}
