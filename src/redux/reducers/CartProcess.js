const initialCartItems = {
    qty:0,
    cartitems:[],
    totalamt:0,
    showcartpopup:0
    };

const CartProcess=(state =initialCartItems , action)=>{
    
    switch (action.type) {
        case 'ADD_TO_CART_CLICKED':
           var amt=0;
           action.items.map((itme)=>{
            amt=amt+(itme.qty*itme.price);
           }) ;
           if(action.qty!==null){
            return {
                ...state,         
                cartitems: action.items,
                qty:action.qty,
                totalamt:amt
            }
           }
          return {  
            ...state,         
            cartitems: action.items,
            qty:state.qty+1,
            totalamt:amt
           };
           case 'SHOW_CART_POPUP':
           
             return {
                 ...state,       
                 
                 showcartpopup:1
            }
            case 'HIDE_CART_POPUP':
           
             return {
                 ...state,       
                 
                 showcartpopup:0
            }
        default:
          
            return state;    
    }

}

export default CartProcess;