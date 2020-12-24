import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

//Initial State
const initialState = {
   routes: [],
	 error: null,
	 loading: true
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)
	//actions

	async function getRoutes() {
		try {
			const res = await axios.get('/api/v1/routes');
			console.log(res.data.data)
			dispatch({
				type: 'GET_ROUTES',
				payload: res.data.data
			})
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data				
			})
		}
	}

	async function addRoute(route) {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			const res = await axios.post('/api/v1/routes', route,config)
			dispatch({
				type: 'ADD_ROUTE',
				payload: res.data.data,
			})
		} catch(err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data				
			})
		}
	}
	
	async function editRoute({route, id}) {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			if(route.editable)
				await axios.put(`/api/v1/routes/${id}`, route, config)

			dispatch({
				type: 'EDIT_ROUTE',
				payload: id,
		})
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data				
			})
		}
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

	async function deleteRoute({id}) {
		try {
			await axios.delete(`/api/v1/routes/${id}`);
			dispatch({
				type: 'DELETE_ROUTE',
				payload: id,
			})
		} catch (err) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: err.response.data				
			})
		}
	}

	return(<GlobalContext.Provider value = 
		{{
			routes: state.routes,
			error: state.error,
			loading: state.loading,
			getRoutes,
			addRoute,
			editRoute,
			editInfo,
			deleteRoute,
		}}>
		{children}
	</GlobalContext.Provider>);
	}