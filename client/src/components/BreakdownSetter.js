import React, { useContext } from 'react';
import { Pie } from '@ant-design/charts';
import { GlobalContext } from '../context/GlobalState'

export const BreakdownSetter = () => {
   const {routes} = useContext(GlobalContext);
   var setters = {}
   var data = []
   routes.forEach((route) => {
      if (route.setter === undefined) return
      if(!setters[route.setter]) {
         setters[route.setter] = 1;
      } else {
         setters[route.setter]++;
      }
   })

   for (var setter in setters) {
      data.push({
         type: setter,
         value: setters[setter]
      })
   }
   
   var config = {
      appendPadding: 10,
      data: data,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.6,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
          formatter: function formatter() {
            return 'Setters';
          },
        },
      },
    };
   return <Pie {...config} />;
}

export default BreakdownSetter;