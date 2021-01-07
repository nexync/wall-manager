const AppReducer = (state,action) => {
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
				routes: [...state.routes, action.payload]
			}
		case 'EDIT_ROUTE':
			return {
				...state,
				routes: state.routes.map(route => route._id === action.payload ? {...route, editable: !route.editable}: route)
			}
		case 'EDIT_INFO':
			let [route] = state.routes.filter((r) => r._id === action.payload.id);
			route[action.payload.field] = action.payload.info;
			return {
				...state,
				routes: state.routes.map(r => r._id === action.payload._id ? route : r)
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