import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
   routes: [
      { id: 1, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: '0'},
      { id: 2, name: 'Satanic Rituals', setter: 'Kook', grade: 12, color: 'red', wall: '7'}
   ]
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   return(<GlobalContext.Provider value = {{routes: state.routes}}>
      {children}
   </GlobalContext.Provider>);
}