import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Route} from './Route'

import {List} from 'antd'

export const RouteList = () => {
   const {routes} = useContext(GlobalContext);
   function comparator(route1,route2,field) {
      if (route1[field]===undefined) return -1;
      if (route2[field] === undefined) return 1;
      if (field === "grade" || field === "wall") return route1[field] - route2[field];
      else return route1[field].toLowerCase().localeCompare(route2[field].toLowerCase());
   }

   let displayroutes = routes.slice().sort((route1,route2)=>comparator(route1,route2,"name"))
   return (
      <List grid = {{gutter: 10, column: 1}} 
            dataSource = {routes} 
            renderItem={route => (
               <List.Item>
                 <Route key = {route.id} route={route} />
               </List.Item>
            )}
      />
   )
}
