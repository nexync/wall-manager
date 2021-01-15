const AppReducer = (state,action) => {
	let route;
	switch(action.type) {
		case 'GET_ROUTES':
			return {
				...state,
				loading: false,
				routes: action.payload
			}
		case 'ADD_ROUTE':
			return {
				...state,
				routes: [action.payload, ...state.routes]
			}
		case 'EDIT_ROUTE_STATE':
			[route] = state.routes.filter((r) => r._id === action.payload.id);
			const newEditable = action.payload.newState === 'edit' ? Math.abs(route.editable-1) : -(route.editable+1) 
			return {
				...state,
				routes: state.routes.map(route => route._id === action.payload.id ? {...route, editable: newEditable}: route)
			}
		case 'EDIT_INFO':
			[route] = state.routes.filter((r) => r._id === action.payload.id);
			route[action.payload.field] = action.payload.info;
			return {
				...state,
				routes: state.routes.map(r => r._id === action.payload.id ? route : r)
			}
		case 'DELETE_ROUTE':
			return {
				...state,
				routes: state.routes.filter(route => route._id !== action.payload)
			}
		case 'LOGIN_USER':		
			return {
				...state,
				currUser: action.payload,
				error: null
			}
		case 'ERROR':
			console.log(action.payload)
			return {
				...state,
				error: action.payload
			}
		default:
			return state;
	}
}

export default AppReducer