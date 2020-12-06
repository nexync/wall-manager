import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
   routes: [
      { id: 1, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: '0', date: new Date().getMonth() + '/' + new Date().getDate(), editable: false},
      { id: 2, name: 'Satanic Rituals', setter: 'Kook', grade: 12, color: 'red', wall: '7',date: new Date().getMonth() + '/' + new Date().getDate(), editable: false}
   ]
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   function addRoute(route) {
      dispatch({
         type: 'ADD_ROUTE',
         payload: route,
      })
   }

   return(<GlobalContext.Provider value = 
      {{routes: state.routes,
      addRoute,
   }}>
      {children}
   </GlobalContext.Provider>);
}