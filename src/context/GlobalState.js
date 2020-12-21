import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
   routes: [
      { id: 1, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 4, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 15, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 16, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 17, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 18, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 19, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 10, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 11, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 12, name: 'Route Name', setter: 'Setter', grade: 11, color: 'green', wall: 0, date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: ''},
      { id: 2, name: 'Satanic Rituals', setter: 'Kook', grade: 12, color: 'red', wall: 7,date: new Date().getMonth()+1 + '/' + new Date().getDate(), editable: false, gradea: '+'}
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

   function editRoute({id}) {
      dispatch({
         type: 'EDIT_ROUTE',
         payload: id,
      })
   }

   function editInfo(id,info,field) {
      dispatch({
         type: 'EDIT_INFO',
         payload: {
            id: id,
            info: info,
            field: field,
         }
      })
   }
   function deleteRoute({id}) {
      dispatch({
         type: 'DELETE_ROUTE',
         payload: id,
      })
   }

   return(<GlobalContext.Provider value = 
      {{
         routes: state.routes,
         addRoute,
         editRoute,
         editInfo,
         deleteRoute,
      }}>
      {children}
   </GlobalContext.Provider>);
}