export default(state,action) => {
   switch(action.type) {
      case 'ADD_ROUTE':
         return {
            ...state,
            routes: [action.payload, ...state.routes]
         }
      case 'EDIT_ROUTE':
         alert("pressed");
         return {
            ...state,
            routes: state.routes
            //routes: state.routes.map(route => route.id == action.payload ? {...route, editable: true}: route)
         }
      default:
         return state;
   }
}