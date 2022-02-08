import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { Column } from '@ant-design/charts';
export const BreakdownGrade = ({setter}) => {
	const {routes} = useContext(GlobalContext)
	const disproutes = setter === "all" ? routes : routes.filter(r => r.setter === setter);
	const grades = ['5.5','5.6','5.7','5.8','5.9','5.10','5.11','5.12','5.13'];
	const types = ["+","","-"];

	let data = []
	grades.forEach((grade) => {
		types.forEach((type) => {
				data.push({
					year: grade,
					type: type,
					value: 0
				})
		})
	})
	for (let ind in disproutes) {
		if (disproutes[ind].grade === undefined) continue;
		if (data[grades.indexOf(`5.${disproutes[ind].grade}`)*3 + types.indexOf(disproutes[ind].gradea)] === undefined)  continue;
		data[grades.indexOf(`5.${disproutes[ind].grade}`)*3 + types.indexOf(disproutes[ind].gradea)] = {
				year: `5.${disproutes[ind].grade}`,
				type: disproutes[ind].gradea,
				value: data[grades.indexOf(`5.${disproutes[ind].grade}`)*3 + types.indexOf(disproutes[ind].gradea)].value+1
		}
	}
	var config = {
		data: data,
		isStack: true,
		xField: 'year',
		yField: 'value',
		seriesField: 'type',
		label: {
			position: 'middle',
			layout: [
				{ type: 'interval-adjust-position' },
				{ type: 'interval-hide-overlap' },
				{ type: 'adjust-color' }
			]
		}
	};
	return (
		<Column {...config} />
	)
}
