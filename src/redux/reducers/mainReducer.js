import { combineReducers } from "redux";
import counterReducer  from "./counterReducer";
import AddToCartReducer from "./AddToCartReducer";
import CartProcess from "./CartProcess";
const rootReducer=combineReducers({counter:counterReducer,addtocart:AddToCartReducer,cartitems:CartProcess});

export default rootReducer;