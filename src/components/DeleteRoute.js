import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import {Button} from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';

export const DeleteRoute = () => {
   return (
      <Button onClick={() => console.log("hello")} className = 'header-button' type="primary" icon={<CloseCircleTwoTone/>}/>
   )
}
