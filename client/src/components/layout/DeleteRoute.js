import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';

import {Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const DeleteRoute = (route, id, newState) => {
	const {editRouteState} = useContext(GlobalContext);
	return (
		<Button onClick={() => editRouteState(route, id, newState)}  type = "primary" icon={<DeleteOutlined/>}/>
	)
}
