import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

//Initial State
const initialState = {
	routes: [],
	users: {},
	comments: [],
	error: null,
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
		} catch (err) {
			dispatch({
				type: 'ERROR',
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
	
	async function editRouteState(route, id, newState) {
		if (route.editable === 1 && newState === 'delete')	return;
		if (route.editable === -1 && newState === 'edit')	return;
		
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			if(route.editable === 1)
				await axios.put(`/api/dashboard${id}`, route, config)

			dispatch({
				type: 'EDIT_ROUTE_STATE',
				payload: {
					id,
					newState
				},
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

	async function deleteRoute(id) {
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

	async function getUsers() {
		try {
			const users = await axios.get('/api/')
			const userdict = users.data.data.reduce((userdict, user) => ({...userdict, [user._id]: {displayname: user.displayname}}), {})
			dispatch({
				type: 'GET_USERS',
				payload: userdict
			})
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data.error			
			})
		}
	}

	async function register(newuser) {
		try {
			const {email, password} = newuser;
			await axios.post('/api/register', newuser);

			const loginRes = await axios.post('/api/login', {email, password});
			const user = {token: loginRes.data.token, user: loginRes.data.data}
			localStorage.setItem('auth-token', loginRes.data.token);
			console.log('User logged in and registered');
			dispatch({
				type: 'LOGIN_USER',
				payload: {
					register: 1,
					user: user
				}
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

	async function login({email, password, comp_login}) {
		try {
			const loginRes = await axios.post('/api/login', {email, password, comp_login});

			if (!comp_login) {
				const user = {token: loginRes.data.token, user: loginRes.data.data}
				localStorage.setItem('auth-token', loginRes.data.token);
				dispatch({
					type: 'LOGIN_USER',
					payload: {
						register: 0,
						user: user
					}
				})
				return true;
			}

			else {
				const competitor = loginRes.data.data
				dispatch({
					type: 'COMP_LOGIN',
					payload: {
						competitor: competitor
					}
				})
				return true;
			}
			
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
			payload: {
				register: 0,
				user: null
			}
		})
	}

	async function deleteUser(user, admin) {
		try {
			if (admin) {
				const deleteRes = await axios.delete(`/api/profile${user.id}`);
				dispatch({
					type: 'LOGIN_USER',
					payload: {
						register: -2,
						user: user
					}
				})
				if (deleteRes.data.success) {
					return true;
				}
				else {
					return false;
				}
			}
			else {
				localStorage.setItem("auth-token", "");
				const deleteRes = await axios.delete(`/api/profile${user.user.id}`);

				dispatch({
					type: 'LOGIN_USER',
					payload: {
						register: -1,
						user: user
					}
				})
				if (deleteRes.data.success) {
					return true;
				}
				else {
					return false;
				}
			}
			
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data.error			
			})
			return false
		}
	}

	async function check() {
		console.log("Checking for logged in user")
		try {
			let token = localStorage.getItem("auth-token");
			if(token === null) {
				localStorage.setItem("auth-token", "");
				token = ""
			}

			const tokenRes = await axios.post('/api/token', null, {headers: {'x-auth-token': token }})
			if (tokenRes.data) {
				const userRes = await axios.get('/api/profile', {headers: {'x-auth-token': token}});
				const user = {token: token, user: userRes.data.data}
				dispatch({
					type: 'LOGIN_USER',
					payload: {
						register: 0,
						user: user
					}
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

	async function getComments(route_id) {
		try {
			const res = await axios.get('/api/comments');
			const dispcomments = res.data.data.filter(comment => comment.route === route_id)
			dispatch({
				type: 'GET_COMMENTS',
				payload: dispcomments
			})
		} catch (err) {
			console.log(err)
			dispatch({
				type: 'ERROR',
				payload: err			
			})
		}
	}

	async function addComment(comment) {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		try {
			const res = await axios.post('/api/comments', comment, config)
			dispatch({
				type: 'ADD_COMMENT',
				payload: res.data.data,
			})
		} catch(err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data				
			})
		}
	}

	async function deleteComment(id) {
		try {
			await axios.delete(`/api/comments${id}`);
			dispatch({
				type: 'DELETE_COMMENT',
				payload: id,
			})
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data				
			})
		}
	}

	async function upvote(request) {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}
			const res_user = await axios.put(`/api/profile${request.userid}`, request, config);
			const res_route = await axios.put(`/api/dashboard${request.routeid}`, request, config);
			
			dispatch({
				type: 'UPVOTE',
				payload: {
					user: res_user.data.data,
					route: res_route.data.data
				}
			})
		} catch (err) {
			dispatch({
				type: 'ERROR',
				payload: err.response.data				
			})
		}
	}

	return(<GlobalContext.Provider value = 
		{{
			routes: state.routes,
			error: state.error,
			currUser: state.currUser,
			getRoutes,
			addRoute,
			editRouteState,
			editInfo,
			deleteRoute,
			register,
			login,
			logout,
			check,
			comments: state.comments,
			getComments,
			addComment,
			deleteComment,
			users: state.users,
			getUsers,
			upvote,
			deleteUser,
		}}>
		{children}
	</GlobalContext.Provider>);
	}