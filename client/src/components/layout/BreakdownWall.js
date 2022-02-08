import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { Column } from '@ant-design/charts';
export const BreakdownWall = () => {
	const {routes} = useContext(GlobalContext)
	const disproutes = routes;
	const types = ['5.5','5.6','5.7','5.8','5.9','5.10','5.11','5.12','5.13'];
	const walls = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

	let data = []
	walls.forEach((wall) => {
		types.forEach((type) => {
				data.push({
					wall: wall,
					type: type,
					value: 0
				})
		})
	})
	console.log(disproutes)
	for (let ind in disproutes) {
		if (disproutes[ind].wall === undefined) continue;
		console.log(ind, walls.indexOf(String(disproutes[ind].wall))*9 + disproutes[ind].grade-5)
		if (data[walls.indexOf(String(disproutes[ind].wall))*9 + disproutes[ind].grade-5] === undefined)  continue;
		data[walls.indexOf(String(disproutes[ind].wall))*9 + disproutes[ind].grade-5] = {
				wall: String(disproutes[ind].wall),
				type: `5.${disproutes[ind].grade}`,
				value: data[walls.indexOf(String(disproutes[ind].wall))*9 + disproutes[ind].grade-5].value+1
		}
	}
	console.log(data)
	var config = {
		data: data,
		isStack: true,
		xField: 'wall',
		yField: 'value',
		seriesField: 'type',
		label: {
			position: 'middle',
			layout: [
				{ type: 'interval-adjust-position' },
				{ type: 'interval-hide-overlap' },
				{ type: 'adjust-color' }
			]
		},
		colorField: 'type',
		color: ['#056608','#147917', '#248D27','#33A036','#43B446','#52C755', '#ACB334', '#FAB733', '#FF8E15', '#FF4E11', '#FF0D0D']
	};
	return (
		<Column {...config} />
	)
}
