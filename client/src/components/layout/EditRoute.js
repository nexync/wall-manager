import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';

import {Button} from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const EditRoute = ({id, newState}) => {
	const {routes,editRouteState} = useContext(GlobalContext);
	const [route] = routes.filter(r => r._id === id);
	return (
		<Button onClick={() => editRouteState(route, id, newState)} type="primary" icon={<SettingOutlined/>}/>
	)
}

