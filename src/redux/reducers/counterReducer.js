const initialState = {
    counter: 0,
    name:'vikash'
  };
const couterReducer = (state =initialState , action) => {
    switch (action.type) {
        case 'INCREMENT':
          return {  
             ...state,         
             counter: state.counter + 1,
             name: 'vikash gupta'
           };
           case 'DECREMENT':
            return {  
               ...state,         
               counter: state.counter - 1
             };
        default:
            return state;    
    }

}

 export default couterReducer;