import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

//Initial State
const initialState = {
	routes: [],
	error: null,
	loading: true,
	currUser: null,
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)
	//actions

	async function getRoutes() {
		try {
			const res = await axios.get('/api/dashboard');
			dispatch({
				type: 'GET_ROUTES',
				payload: res.data.data
			})
			return true;
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data				
			})
			return false;
		}
	}

	async function addRoute(route) {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			const res = await axios.post('/api/dashboard', route,config)
			dispatch({
				type: 'ADD_ROUTE',
				payload: res.data.data,
			})
		} catch(err) {
			dispatch({
				type: 'ERROR',
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
				await axios.put(`/api/dashboard${id}`, route, config)

			dispatch({
				type: 'EDIT_ROUTE',
				payload: id,
		})
		} catch (err) {
			dispatch({
				type: 'ERROR',
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
			await axios.delete(`/api/dashboard${id}`);
			dispatch({
				type: 'DELETE_ROUTE',
				payload: id,
			})
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data				
			})
		}
	}

	async function register(newuser) {
		try {
			const {email, password} = newuser;
			await axios.post('/api/register', newuser);

			const loginRes = await axios.post('/api/login', {email, password});
			const user = {token: loginRes.data.token, user: loginRes.data.user}
			localStorage.setItem('auth-token', loginRes.data.token);
			console.log('User logged in and registered');
			dispatch({
				type: 'LOGIN_USER',
				payload: user
			})
			return true;
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data.error			
			})
			return false;
		}
	}

	async function login({email, password}) {
		try {
			const loginRes = await axios.post('/api/login', {email, password});
			const user = {token: loginRes.data.token, user: loginRes.data.user}
			localStorage.setItem('auth-token', loginRes.data.token);
			dispatch({
				type: 'LOGIN_USER',
				payload: user
			})
			return true;
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data.error			
			})
			return false;
		}
	}

	async function logout() {
		localStorage.setItem("auth-token", "");
		dispatch({
			type: 'LOGIN_USER',
			payload: null
		})
	}

	async function check() {
		console.log("checking for logged in user")
		try {
			let token = localStorage.getItem("auth-token");
			if(token === null) {
				localStorage.setItem("auth-token", "");
				token = ""
			}

			console.log(token)

			const tokenRes = await axios.post('/api/token', null, {headers: {'x-auth-token': token }})
			if (tokenRes.data) {
				const userRes = await axios.get('/api/', {headers: {'x-auth-token': token}});
				const user = {token: token, user: userRes.data.user}
				dispatch({
					type: 'LOGIN_USER',
					payload: user
				})
				return true
			}
			else	return false
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data.error			
			})
			return false;
		}
		
	}

	return(<GlobalContext.Provider value = 
		{{
			routes: state.routes,
			error: state.error,
			loading: state.loading,
			currUser: state.currUser,
			getRoutes,
			addRoute,
			editRoute,
			editInfo,
			deleteRoute,
			register,
			login,
			logout,
			check,
		}}>
		{children}
	</GlobalContext.Provider>);
	}