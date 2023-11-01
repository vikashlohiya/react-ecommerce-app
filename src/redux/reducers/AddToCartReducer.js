const initialCart = {
  border: '1 px solid',
  background: '#f90',
  padding: '1.5rem',
  position: 'fixed',
  fontSize: '1rem',
  overflow:'hidden',
  fontWeight: 'bold',
  right: '0px',
  borderRadius: '10px 0px 0px 10px',
  transform: 'translateX(100%)'
  };
const AddToCartReducer = (state =initialCart , action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          return {  
          
              border: '1 px solid',
    background: '#f90',
    padding: '1.5rem',
    position: 'fixed',
    fontSize: '1rem',     
    fontWeight: 'bold',
    overflow:'hidden',
    right: '0px',
    borderRadius: '10px 0px 0px 10px',
    transform: 'translateX(0%)',
    transition:'transform 1s ease-in-out'
         
           };
          case 'ADD_TO_CART_DONE':
            return initialCart;
          
        default:
          
            return state;    
    }

}

 export default AddToCartReducer;