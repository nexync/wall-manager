export default(state,action) => {
   switch(action.type) {
      case 'ADD_ROUTE':
         return {
            ...state,
            routes: [action.payload, ...state.routes]
         }
      default:
         return state;
   }
}