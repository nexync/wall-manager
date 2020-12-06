import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Route} from './Route'

import {List} from 'antd'

export const RouteList = () => {
   const {routes} = useContext(GlobalContext);
   
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
