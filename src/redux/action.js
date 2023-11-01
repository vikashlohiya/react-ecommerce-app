// actions.js
export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
  
  export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });

  export const addtoCard = () => ({
    type: 'ADD_TO_CART',
    
  });
  export const addtoCardDone = () => ({
    type: 'ADD_TO_CART_DONE',
    
  });

  export const performCartOperation = (itmesArray,totalQty=null) => ({
    type: 'ADD_TO_CART_CLICKED',
    items:itmesArray,
    qty:totalQty
    
  });

  export const showPopup = () => ({
    type: 'SHOW_CART_POPUP'
    
    
  });

  export const hidePopup = () => ({
    type: 'HIDE_CART_POPUP'
    
    
  });
  
  