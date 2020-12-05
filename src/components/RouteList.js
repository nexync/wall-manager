import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Route} from './Route'

import {List} from 'antd'

export const RouteList = () => {
   const {routes} = useContext(GlobalContext);

   return (
      <>
         {
            routes.map(route => (<Route key = {route.id} route={route} />))
         }
      </>
   )
}
