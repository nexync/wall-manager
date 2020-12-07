const AppReducer = (state,action) => {
   switch(action.type) {
      case 'ADD_ROUTE':
         return {
            ...state,
            routes: [action.payload, ...state.routes]
         }
      case 'EDIT_ROUTE':
         return {
            ...state,
            routes: state.routes.map(route => route.id === action.payload ? {...route, editable: !route.editable}: route)
         }
      case 'EDIT_INFO':
         let [route] = state.routes.filter((r) => r.id === action.payload.id);
         route[action.payload.field] = action.payload.info;
         return {
            ...state,
            routes: state.routes.map(r => r.id === action.payload.id ? route : r)
         }
      default:
         return state;
   }
}

export default AppReducer