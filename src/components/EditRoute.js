import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import {Button} from 'antd';
import { Icon } from '@ant-design/compatible';

const EditRoute = (id) => {
   const {editRoute} = useContext(GlobalContext);

   return (
      <Button onClick={() => editRoute(id)} type="primary" size = "small" icon={<Icon type = "setting"/>}/>
   )
}

export default EditRoute
