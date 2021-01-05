import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { Column } from '@ant-design/charts';
export const BreakdownGrade = () => {
   const {routes} = useContext(GlobalContext)
   const grades = ['5.6','5.7','5.8','5.9','5.10','5.11','5.12'];
   const types = ["-","","+"];

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
   for (let ind in routes) {
      if (routes[ind].grade === undefined) continue;
      if (data[grades.indexOf(`5.${routes[ind].grade}`)*3 + types.indexOf(routes[ind].gradea)] === undefined)  continue;
      data[grades.indexOf(`5.${routes[ind].grade}`)*3 + types.indexOf(routes[ind].gradea)] = {
         year: `5.${routes[ind].grade}`,
         type: routes[ind].gradea,
         value: data[grades.indexOf(`5.${routes[ind].grade}`)*3 + types.indexOf(routes[ind].gradea)].value+1
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
   return <Column {...config} />;
}
